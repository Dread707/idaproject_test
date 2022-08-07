<template>
  <div class="m-5">
    <the-header />
    <div class="md:flex sm:flex-row mt-4 px-2">
      <the-new-product-card />
      <products-product-items />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMain',
}
</script>

<style lang="scss" scoped></style>
