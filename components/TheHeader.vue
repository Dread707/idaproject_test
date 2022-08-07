<template>
  <div class="px-2 flex justify-between">
    <h1>Добавление товара</h1>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
$font-color: #3f3f3f;

h1 {
  color: $font-color;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}

// ЗАГЛУШКА
span {
  width: 120px;
  height: 36px;
  display: block;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
