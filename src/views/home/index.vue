<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../../assets/logo.png">
    <hello-world/>
    <counter/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/hello-world'
  import Counter from '@/views/home/components/counter'

  export default {
    name: 'HomeIndex',
    components: { Counter, HelloWorld }
  }
</script>

<style lang="scss" scoped>
  .logo {
    margin-top: 32px;
  }

  .home {
    text-align: center;
  }
</style>
