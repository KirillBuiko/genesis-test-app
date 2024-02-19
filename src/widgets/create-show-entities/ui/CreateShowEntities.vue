<script setup lang="ts">
import {EntitiesList} from "@/features/entities-list";
import {CreateEntityBlock} from "@/features/create-entity-block";
</script>

<template>
  <div class="create-show-entities-wrapper">
    <CreateEntityBlock/>
    <EntitiesList class="entities-list"/>
  </div>
</template>

<style scoped lang="scss">
.create-show-entities-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  padding: 20px;
  gap: 10px;
  box-shadow: 0 10px 20px 5px rgb(227, 226, 226);
  animation: show-up 0.5s ease-out;

  .entities-list {
    flex: 1 0;
  }
}

@keyframes show-up {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>