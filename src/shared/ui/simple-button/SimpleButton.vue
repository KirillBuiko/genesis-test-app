<script setup lang="ts">
const props = withDefaults(defineProps<{
  enabled?: boolean
}>(), {
  enabled: true
});
</script>

<template>
  <div class="simple-button-wrapper" :class="{disabled: !props.enabled}">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.simple-button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  height: min-content;
  border-radius: 3px;
  background: var(--blue-color);
  color: white;
  font-weight: 700;
  font-size: 14px;
  user-select: none;
  cursor: pointer;

  &.disabled {
    background: white;
    color: black;
    border: 1px solid black;
    cursor: unset;
  }
}
</style>