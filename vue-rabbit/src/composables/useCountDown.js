import { ref, onUnmounted, computed } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (currentTime) => {
    time.value = currentTime
    // 每隔一秒减一
    const interval = null
    interval = setInterval(() => {
      time.value--
    }, 1000)
  }
  onUnmounted(() => {
    interval && clearInterval(interval)
  })
  return {
    formatTime,
    start,
  }
}
