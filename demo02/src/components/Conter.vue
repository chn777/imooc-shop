<template>
    <div>
      <button @click="handleAddClick"> + </button>
      <br/>
      <span>kid:{{num}}</span>
    </div>
</template>

<script>
export default {
  name: 'Conter',
  props: ['num'],
  methods: {
    handleAddClick () {
      this.$emit('add', this.num)
    }
  }

}
</script>

<style scoped>

</style>
