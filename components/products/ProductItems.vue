<template>
  <div
    class="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
  >
    <div v-for="(item, key) in items" :key="key" class="mx-auto my-2">
      <product-item :item="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from '~/components/products/ProductItem'
export default {
  name: 'ProductItems',
  components: { ProductItem },
  data() {
    return {
      items: [
        { message: '1' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.products-container {
  width: 80%;
}
@media (max-width: 576px) {
  .products-container {
    width: 100%;
  }
}
</style>
