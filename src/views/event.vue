<template>
  <div class="view event-detail-view">
    <h1>This is a detail view for event {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
};
</script>
