<template>
  <div>
    <!-- <App1></App1> -->
    <!-- <App2></App2> -->
    <App3></App3>
  </div>
  
</template>
<script>
import App1 from './components/App1.vue'
import App2 from './components/App2.vue'
import App3 from './components/App3.vue'
export default ({
  components:{
    // eslint-disable-next-line vue/no-unused-components
    App1,
    // eslint-disable-next-line vue/no-unused-components
    App2,
    App3
    }
})
</script>
