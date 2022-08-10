<template>
  <a class="delete-button-container p-2" @click="$emit('clickDeleteButton')">
    <img :src="require(`~/assets/icons/delete-icon.svg`)" alt="delete" />
  </a>
</template>

<script>
export default {
  name: 'DeleteButtonComponent',
}
</script>

<style lang="scss" scoped>
.delete-button-container {
  top: -15px;
  left: 95%;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #ff8484;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 2;
  transition: 0.5s;

  & img {
    width: 16px;
    height: 16px;
    color: white;
  }

  &:hover {
    background: #c76666;
    transition: 0.5s;
  }

  &:active {
    transform: translateY(3px);
  }
}
</style>
