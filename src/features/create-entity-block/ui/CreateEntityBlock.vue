<script setup lang="ts">
import {SelectComponent} from "@/shared/ui/select-component";
import {ref} from "vue";
import {SimpleButton} from "@/shared/ui/simple-button";
import {entitiesLabels, useEntitiesStore} from "@/entities/user-entity";
import type {EntityName} from "@/entities/user-entity/model/entity-types";

const selectedItem = ref(0);
const options: string[] = ["Не выбрано", ...Object.keys(entitiesLabels).map(e => entitiesLabels[e as EntityName])];
const isLoading = ref(false);

async function onClick() {
  console.log(selectedItem.value);
  if (selectedItem.value === 0) return;
  isLoading.value = true;
  const key = Object.keys(entitiesLabels)[selectedItem.value-1] as EntityName;
  await useEntitiesStore().createEntity(key, {});
  isLoading.value = false;
}
</script>

<template>
  <div class="create-entity-wrapper">
    <SelectComponent v-model:selected="selectedItem" :options="options"/>
    <SimpleButton @click="onClick">Создать</SimpleButton>
  </div>
</template>

<style scoped lang="scss">
.create-entity-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>