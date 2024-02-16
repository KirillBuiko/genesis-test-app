<script setup lang="ts">

import {CreateEntityBlock} from "@/features/create-entity-block";
import {EntitiesList} from "@/widgets/entities-list";
</script>

<template>
  <div class="app-wrapper">
    <div class="entities-block">
      <CreateEntityBlock/>
      <EntitiesList class="entities-list"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  .entities-block {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;
    box-shadow: 0 10px 20px 5px rgb(227, 226, 226);

    .entities-list {
      flex: 1 0;
    }
  }
}
</style>
