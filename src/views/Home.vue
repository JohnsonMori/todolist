<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->
    <div>
      {{num1}} --- {{num2}}
      两个数的和: {{addNum}}
    </div>
    <div>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let num1 = ref(10)
    let num2 = ref(20)
    let addNum = computed(() => {
      // 必须返回一个值
      // 逻辑代码
      // 购物车总价
      return num1.value + num2.value
    })
    let add = () => {
      num1.value ++
      num2.value ++
    }
    return {
      num1,
      num2,
      addNum,
      add
    }
  }
})
</script>

<style scoped lang="scss">

</style>