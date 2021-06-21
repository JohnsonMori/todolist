<template>
  <div>
    <h1>这是child组件</h1>
    父组件传递过来的数据: {{msg}}
    <button @click="send">传值给父组件</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'Child',
  // 接收父组件传递过来的参数
  // props接收的数据也不能直接改
  props: {
      msg: {
          // 数据类型校验
          type: String,
          // 是否必传 默认是false
        //   required: true
        // 设置默认值
        //   default: '默认值'
      }
  },
  setup(props, ctx) {
      let childMsg = ref('我是子组件的数据')
      let childNum = ref(10)
      console.log(props.msg)
      let send = () => {
          // 而是通过ctx.emit分发事件
          // emit第一个参数是事件名称 第二个是传递的数据
          ctx.emit('send', childMsg.value)
      }
      onMounted(() => {
        //   ctx.emit('send', [childMsg.value, childNum.value])
          ctx.emit('send', {
              msg: childMsg.value,
              num: childNum.value
          })
      })
      return {
          childMsg,
          send
      }
  }
})
</script>
