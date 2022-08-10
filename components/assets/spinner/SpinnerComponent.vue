<template>
  <div class="spinner">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerComponent',
}
</script>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.spinner div {
  position: absolute;
  border: 4px solid #59e3e5;
  opacity: 1;
  border-radius: 50%;
  animation: spinner-animation 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.spinner div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes spinner-animation {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
