<template>
  <div class="preloader-icon-wrapper">
    <div class="preloader-image"/>
  </div>
</template>

<style scoped lang="scss">
.preloader-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--blue-color);
  border-radius: 5px;
  aspect-ratio: 1/1;

  .preloader-image {
    width: 80%;
    height: 80%;
    background-image: url('/src/shared/ui/assets/preloader.png');
    background-size: contain;
    background-repeat: no-repeat;
    animation: spin-preloader linear infinite 1s;
  }

  @keyframes spin-preloader {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>