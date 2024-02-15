<script setup lang="ts">
withDefaults(defineProps<{
  enabled: boolean,
  loading: boolean
}>(), {
  enabled: true,
  loading: false
});
</script>

<template>
  <div class="simple-button-wrapper">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.simple-button-wrapper {
  -webkit-user-select: none;
  cursor: pointer;
  padding: 5px 10px;
  background: skyblue;
  border-radius: 5px;
}
</style>