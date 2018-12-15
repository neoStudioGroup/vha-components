// #!/usr/bin/env node
'use strict';

//将.md文件按照模板布局转换成.vue文件
const fs = require("fs");
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const marked = require('marked');

let config = {
  mdpath: __dirname,
  outpath: path.resolve(__dirname, '..') + '\\src\\pages\\index'
};

let Markdown = {
  HTML: '',
  title: '',
  name: '',
  time: '',
  anchor: [{
    subText: '',
    subNote: '',
    noteClass: '',
    href: '',
    select: false
  }]
};

let template = () => {
return `<template>
  <div class="index_PG-${Markdown.name}">
${Markdown.HTML}
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-components/blob/master/_docs/_data/${Markdown.name}.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：${Markdown.time}</span>
    </section>
  </div>
</template>`
};

(async function run () {
  try {
    // 读取md目录内md文件路径
    let paths = await getMdPath()
    console.log(paths)
    
    // 读取md目录内md文件内容
    for (const element of paths) {
      // 读取文件内容
      let Content = await readFile(config.mdpath + '\\' + element, 'utf-8')
      // console.log('读取文件内容', element)
      
      // 获取到配置信息
      let temp_config = JSON.parse(getStrMid(Content, '---', '---'))
      Markdown.title = temp_config.title
      Markdown.name = temp_config.name
      Markdown.time = temp_config.time
      // console.log('读取文件配置信息', element)
      
      // 去掉配置信息字符串
      Content = Content.replace(new RegExp('---' + getStrMid(Content, '---', '---') + '---'), '')
      // console.log('去掉配置信息字符串', element)
      
      // md转换HTML
      marked.setOptions({
        headerIds: false
      })
      let htmlStr = await marked(Content)
      Markdown.HTML = htmlStr
      // console.log('md转换HTML', element)
      
      // 输出到.vue文件
      await writeFile(config.outpath + '\\' + element.replace(/.md/, '.vue'), template())
    }
  } catch (error) {
    console.log('error: ' + error)
  }
})();

//ANCHOR 读取md目录内md文件路径"
function getMdPath () {
  return new Promise (async function (resolve, reject) {
    try {
      let data = await readdir(config.mdpath)
      let temp_paths = []
      for (const element of data) {
        if (element.indexOf('.md') != -1) {
          temp_paths.push(element)
        }
      }
      resolve(temp_paths)
      return
    } catch (error) {
      console.log(error + '\n错误：读取md目录')
      return
    }
  })
}

//ANCHOR 取字符串中间内容"
function getStrMid (str, starStr, endStr) {
  let temp_for = str.indexOf(starStr) + starStr.length
  let temp_back = str.indexOf(endStr, temp_for)
  return str.substring(temp_for, temp_back)
}



// - 编译生成md
// 根据文件名生成菜单信息
// 生成路由
// - 根据ID自动生成锚点
// 生成map地图数据搜索