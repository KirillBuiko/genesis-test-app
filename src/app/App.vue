<script setup lang="ts">
import {CreateShowEntities} from "@/widgets/create-show-entities";
</script>

<template>
  <div class="app-wrapper">
    <CreateShowEntities/>
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
  animation: show-up 0.5s ease-out;
}
</style>
