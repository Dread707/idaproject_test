<template>
  <div :id="'product-' + product.id" class="flex flex-col product-container">
    <delete-button-component
      @clickDeleteButton="$emit('deleteProduct', product.id)"
    />
    <div class="img-container">
      <img
        class="aspect-video object-cover object-center"
        :src="
          product.srcImage.startsWith('http')
            ? product.srcImage
            : 'https://lasd.lv/public/assets/no-image.png'
        "
        alt=""
      />
    </div>
    <div class="p-4">
      <h1 class="mb-4 product-item-name">{{ product.name }}</h1>
      <p class="mb-5 product-item-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <span class="mb-2 product-item-price">{{ product.price }}</span>
    </div>
  </div>
</template>

<script>
import DeleteButtonComponent from '@/components/assets/buttons/DeleteButtonComponent'
export default {
  name: 'ProductItem',
  components: { DeleteButtonComponent },
  props: {
    product: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$text-color: #3f3f3f;

.product-container {
  position: relative;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.1s linear;

  & .product-item-name {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: $text-color;
  }

  & .product-item-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $text-color;
  }

  & .product-item-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: $text-color;
  }

  & .img-container {
    position: relative;
    overflow: hidden;
    z-index: 1;

    & img {
      transition: 0.5s ease all;
      width: 100%;
      object-fit: cover;
    }
  }

  & .img-container:hover img {
    transform: scale(1.1, 1.1);
  }
}

.fadeOutLeft {
  animation-name: fadeOutLeft;
  animation-duration: 1s;
}

.fadeInLeft {
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
