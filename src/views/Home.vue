<template>
  <div>
    <nav-header @add='add'></nav-header>
    <nav-main :list='list' @del='del'></nav-main>
    <nav-footer :list='list' @clear='clear'></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import { defineComponent, ref, computed } from 'vue'
import { useStore  } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    // 添加任务
    let add = (val) => {
      value.value = val
      // 先判断有没有存在的任务 如果任务存在 不能重复添加
      let flag = true
      list.value.map(item => {
        if(item.title === value.value) {
          // 有重复的任务
          flag = false
          alert('任务已存在')
        }
      })
      // 没有重复的
      if(flag) {
        // 调用mutation
        store.commit('addTodo', {
          title: value.value,
          complete: false
        })
      }
      console.log(val)
    }
    // 删除任务
    let del = (val) => {
      // 调用删除的mutation
      store.commit('delTodo', val)
      console.log(val)
    }
    // 清除已完成
    let clear = (val) => {
      store.commit('clear', val )
    }
    return {
      add,
      value,
      list,
      del,
      clear
    }
  }
})
</script>

<style scoped lang="scss">

</style>