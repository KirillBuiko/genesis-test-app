<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  options: string[],
  selected: number
}>(), {
  options: () => ["Нет опций"]
});

const items = computed(() => {
  return props.options.map((e, ind) => ({title: e, value: ind}));
})

const emits = defineEmits<{
  (e: "update:selected", idx: number): void
}>();
</script>

<template>
  <v-select class="select-component"
            :items="items"
            :model-value="selected"
            hide-details
            @update:model-value="(e) => emits('update:selected', e)"/>
</template>

<style scoped lang="scss">
.select-component {
  width: 100%;
}
</style>