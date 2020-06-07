<template>
  <div>
    <button class="button" @click="reduce">-</button>
    <span class="count">{{ count }}</span>
    <button class="button" @click="add">+</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data() {
      return {
        count: this.$store.state.counter.count
      }
    },
    watch: {
      '$store.state.counter.count'(val) {
        this.count = val
      }
    },
    methods: {
      add() {
        this.$store.dispatch('counter/add')
      },
      reduce() {
        this.$store.dispatch('counter/reduce')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 40px;
    font-size: 32px;
  }

  .count {
    font-size: 32px;
    padding: 0 16px;
  }
</style>
