<script setup lang="ts">
const props = withDefaults(defineProps<{
  options: string[],
  selected: number
}>(), {
  options: () => ["Нет опций"]
});

const emits = defineEmits<{
  (e: "update:selected", idx: number): void
}>();
</script>

<template>
  <div class="select-wrapper">
    <select :value="props.selected"
            @change="(e) => emits('update:selected', (e.target as HTMLSelectElement).selectedIndex)">
      <option :value="ind" v-for="(i, ind) in options" :key="i">{{i}}</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {

}
</style>