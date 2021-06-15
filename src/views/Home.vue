<template>
  <!-- <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div> -->

  <div>
    {{num}}
  </div>
  <div>
    {{name}}
  </div>
  <div>
    {{arr}}
  </div>
  <div>
    {{obj.age}}
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let num = ref(10)
    let name = ref('johnson')
    let arr = ref(['a', 'b', 'c', 'd'])
    let obj = ref({
      age: 20
    })
    return {
      num,
      name,
      arr,
      obj
    }
  }
})
</script>

<style scoped lang="scss">

</style>