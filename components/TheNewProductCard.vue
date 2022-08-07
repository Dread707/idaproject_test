<template>
  <div class="new-product-container mr-3">
    <div class="product-form p-5">
      <form>
        <div class="mb-5">
          <label for="name" class="mb-3 block form-label-text">
            Наименование товара<span class="required-input ml-1"></span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Введите наименование товара"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
          />
        </div>
        <div class="mb-5">
          <label for="info" class="mb-3 block form-label-text">
            Описание товара
          </label>
          <textarea
            id="info"
            rows="4"
            placeholder="Введите описание товара"
            class="w-full form-input-text form-input resize-none rounded-md py-3 px-6"
          ></textarea>
        </div>
        <div class="mb-5">
          <label for="image" class="mb-3 block form-label-text">
            Ссылка на изображение товара<span
              class="required-input ml-1"
            ></span>
          </label>
          <input
            id="image"
            type="text"
            placeholder="Введите ссылку"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
          />
        </div>
        <div class="mb-5">
          <label for="price" class="mb-3 block form-label-text">
            Цена товара<span class="required-input ml-1"></span>
          </label>
          <input
            id="price"
            type="text"
            placeholder="Введите цену"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
          />
        </div>
      </form>
      <button-component />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/assets/buttons/ButtonComponent'
export default {
  name: 'TheNewProductCard',
  components: { ButtonComponent },
}
</script>

<style lang="scss" scoped>
$label-text-color: #49485e;
$input-text-color: #b4b4b4;

.new-product-container {
  width: 20%;
}

@media (max-width: 576px) {
  .new-product-container {
    width: 100%;
  }
}

.product-form {
  background-color: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.form-label-text {
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: $label-text-color;
}

.form-input-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: $input-text-color;
}
.form-input {
  background-color: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.required-input {
  width: 4px;
  height: 4px;
  position: absolute;
  background: #ff8484;
  border-radius: 4px;
}
</style>
