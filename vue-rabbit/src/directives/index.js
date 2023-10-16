import { useIntersectionObserver } from '@vueuse/core'

// 全局图片懒加载自定义指令
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      },
    })
  },
}
