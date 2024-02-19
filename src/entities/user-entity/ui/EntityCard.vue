<script setup lang="ts">
import type {IStoreEntityType} from "../model";
import {entitiesLabels, iconPaths} from "../configs";

const props = defineProps<{
  entity: IStoreEntityType
}>()


</script>

<template>
  <div class="entity-card-wrapper">
    <div class="entity-icon" :style="{'backgroundImage': `url('${iconPaths[props.entity.type]}')`}"></div>
    <div class="delimiter"/>
    <div class="entity-info">
      <div class="name">{{ entitiesLabels[props.entity.type] }}</div>
      <div class="id">Идентификатор: {{ props.entity.id }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$card-height: 80px;

.entity-card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: rgba(169, 169, 169, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128);
  padding: 10px;
  height: $card-height;

  .entity-icon {
    width: min(70px, $card-height*0.7);
    aspect-ratio: 1/1;
    border-radius: 9999px;
    background-repeat: no-repeat;
    background-size: 60%;
    border: 1px solid rgba(128, 128, 128);
    background-position: center;
  }

  .entity-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 7px;

    .name {
      font-weight: 700;
      font-size: 18px;
    }
  }
  
  .delimiter {
    width: 1px;
    height: 100%;
    background: #000;
  }
}
</style>