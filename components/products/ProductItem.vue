<template>
  <div class="flex flex-col product-container">
    <img
      class="aspect-video object-cover object-center"
      src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/white-polaroid-onestep-2-instant-camera-featured-image-cropped.jpg"
      alt=""
    />
    <div class="p-4">
      <h1 class="mb-4 product-item-name">Наименование товара</h1>
      <p class="mb-5 product-item-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <span class="mb-2 product-item-price">10 000 руб.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
}
</script>

<style lang="scss" scoped>
$text-color: #3f3f3f;

.product-container {
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.product-item-name {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: $text-color;
}

.product-item-description {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: $text-color;
}
.product-item-price {
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: $text-color;
}
</style>
