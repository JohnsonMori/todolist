<template>
    <!-- 开始页 -->
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Start',
  setup() {
    let router = useRouter()
    let start = () => {
        router.push({
            path: '/home'
        })
    }
    return {
        start
    }
  }
})
</script>