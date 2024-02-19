<script setup lang="ts">
import {useEntitiesStore} from "@/entities/user-entity";
import EntityCard from "@/entities/user-entity/ui/EntityCard.vue";
import {ref, watch} from "vue";

const entities = useEntitiesStore().entities;
const listRef = ref<HTMLElement>();

watch(entities, () => {
  listRef.value?.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
</script>

<template>
  <div class="entities-list-wrapper" ref="listRef">
    <EntityCard :entity="item" v-for="(item, ind) in entities.slice().reverse()" :key="ind"/>
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