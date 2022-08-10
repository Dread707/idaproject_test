<template>
  <div
    class="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
  >
    <div v-for="product in products" :key="product.id" class="mx-auto my-2">
      <product-item :product="product" @deleteProduct="handlerEventDelete" />
    </div>
  </div>
</template>

<script>
import ProductItem from '~/components/products/ProductItem'
export default {
  name: 'ProductItems',
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    handlerEventDelete(id) {
      this.$emit('eventDelete', id)
    },
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
