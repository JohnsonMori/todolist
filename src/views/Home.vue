<template>
  <div>
    <nav-header @add='add'></nav-header>
    <nav-main :list='list'></nav-main>
    <nav-footer :list='list'></nav-footer>
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
    let add = (val) => {
      value.value = val
      console.log(val)
    }
    return {
      add,
      value,
      list
    }
  }
})
</script>

<style scoped lang="scss">

</style>