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
    <div class="entity-info">
      <div class="name">{{ entitiesLabels[props.entity.type] }}</div>
      <div class="id">{{props.entity.id}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entity-card-wrapper{
  display: flex;
  flex-direction: row;

  .entity-icon {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .entity-info {
    display: flex;
    flex-direction: column;
  }
}
</style>