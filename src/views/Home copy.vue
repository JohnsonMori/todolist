<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <div>
      {{list}}
    </div> -->
    <!-- <div>
      {{num1}} --- {{num2}}
      两个数的和: {{addNum}}
    </div>
    <div>
      <button @click="add">add</button>
    </div> -->
    <!-- <button @click="goto">跳转路由</button> -->
    {{num}} --- {{name}} --- {{obj}}
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import { defineComponent, ref, reactive, toRefs, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    // router是全局路由对象
    let router = useRouter()
    // route是当前路由对象
    let route = useRoute()
    let num = ref(null)
    let name = ref('')
    let obj = ref({})
    // query传递过来的参数都是字符串的类型
    // console.log(route.params)
    onMounted(() => {
      num.value = route.params.num * 1
      name.value = route.params.name
      obj.value = JSON.parse(route.params.obj)
    })
    let goto = () => {
      // 跳转路由
      // push函数里面可以传入跳转的路径
      // back: 回退到上一页
      // forward: 去到下一页
      // go(整数) 正数代表前进 负数代表后退
      router.push({
        path: '/about'
      })
    }
    // let store = useStore()
    // let list = computed(() => {
    //   return store.state.list
    // })
    // console.log(store)
    // let num1 = ref(10)
    // let num2 = ref(20)
    // let addNum = computed(() => {
    //   // 必须返回一个值
    //   // 逻辑代码
    //   // 购物车总价
    //   return num1.value + num2.value
    // })
    // let add = () => {
    //   num1.value ++
    //   num2.value ++
    // }
    return {
      // num1,
      // num2,
      // addNum,
      // add
      // list
      // goto
      num,
      name,
      obj
    }
  }
})
</script>

<style scoped lang="scss">

</style>