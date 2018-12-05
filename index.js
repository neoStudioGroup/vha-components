import vhaInstall from './src/vhaInstall';
import vhaRouter from './src/vhaRouter';
import vhaMixin from './src/vhaMixin';

const vha = {
  install(Vue, options) {
    Vue.use(vhaInstall)
    Vue.use(vhaRouter)
    Vue.use(vhaMixin)
  }
}
export default vha