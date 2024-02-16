<script setup lang="ts">
import {useEntitiesStore} from "@/entities/user-entity";
import EntityCard from "@/entities/user-entity/ui/EntityCard.vue";

const entities = useEntitiesStore().entities;
</script>

<template>
  <div class="entities-list-wrapper">
    <EntityCard :entity="item" v-for="item in entities" :key="item"/>
  </div>
</template>

<style scoped lang="scss">
.entities-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
}
</style>