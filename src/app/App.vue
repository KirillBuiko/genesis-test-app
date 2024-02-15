<script setup lang="ts">

import {CreateEntityBlock} from "@/features/create-entity-block";
import {EntitiesList} from "@/widgets/entities-list";
</script>

<template>
  <div class="app-wrapper">
    <CreateEntityBlock/>
    <EntitiesList/>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
