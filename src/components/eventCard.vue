<template>
  <div class="wrapper">
    <h3>{{ data.title }} - {{ data.category }}</h3>
    <p>{{ data.date }} - {{ data.time }}</p>
    <p>{{ data.location }}</p>
  </div>
</template>

<script>
export default {
  name: "eventCard",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: solid 1px lightgray;
  padding: 1rem 0.5rem;
}
</style>
