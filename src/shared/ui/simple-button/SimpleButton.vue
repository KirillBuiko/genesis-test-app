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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  height: min-content;
  border-radius: 3px;
  background: var(--blue-color);
  color: white;
  font-weight: 700;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
}
</style>