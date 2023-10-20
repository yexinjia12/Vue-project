// 将component中的组件进行一个全局注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('Sku', Sku)
  },
}
