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
            v-model="newProductForm.name.value"
            type="text"
            placeholder="Введите наименование товара"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
            :class="
              newProductForm.name.isDisabled && !newProductForm.name.isValid
                ? 'invalid-input'
                : ''
            "
          />
          <span
            v-if="
              newProductForm.name.isDisabled && !newProductForm.name.isValid
            "
            class="invalid-text"
            >Поле является обязательным</span
          >
        </div>
        <div class="mb-5">
          <label for="info" class="mb-3 block form-label-text">
            Описание товара
          </label>
          <textarea
            id="info"
            v-model="newProductForm.info.value"
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
            v-model="newProductForm.image.value"
            type="text"
            placeholder="Введите ссылку"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
            :class="
              newProductForm.image.isDisabled && !newProductForm.image.isValid
                ? 'invalid-input'
                : ''
            "
          />
          <span
            v-if="
              newProductForm.image.isDisabled && !newProductForm.image.isValid
            "
            class="invalid-text"
            >Поле является обязательным</span
          >
        </div>
        <div class="mb-5">
          <label for="price" class="mb-3 block form-label-text">
            Цена товара<span class="required-input ml-1"></span>
          </label>
          <input
            id="price"
            v-model="newProductForm.price.value"
            type="text"
            placeholder="Введите цену"
            class="form-input-text form-input w-full rounded-md bg-white py-3 px-6"
            :class="
              newProductForm.price.isDisabled && !newProductForm.price.isValid
                ? 'invalid-input'
                : ''
            "
          />
          <span
            v-if="
              newProductForm.price.isDisabled && !newProductForm.price.isValid
            "
            class="invalid-text"
            >Поле является обязательным</span
          >
        </div>
      </form>
      <button-component :is-disabled="isDisabled" @event="submit" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/assets/buttons/ButtonComponent'

export default {
  name: 'TheNewProductCard',
  components: { ButtonComponent },
  data() {
    return {
      newProductForm: {
        name: { value: '', isDisabled: true, isValid: true },
        info: { value: '' },
        image: { value: '', isDisabled: true, isValid: true },
        price: { value: '', isDisabled: true, isValid: true },
      },
      isDisabled: true,
    }
  },
  watch: {
    'newProductForm.name': {
      handler() {
        this.newProductForm.name.isDisabled = !this.newProductForm.name.value
        this.newProductForm.name.isValid = !!this.newProductForm.name.value
      },
      deep: true,
    },
    'newProductForm.image': {
      handler() {
        this.newProductForm.image.isDisabled = !this.newProductForm.image.value
        this.newProductForm.image.isValid = !!this.newProductForm.image.value
      },
      deep: true,
    },
    'newProductForm.price': {
      handler() {
        this.newProductForm.price.isDisabled = !this.newProductForm.price.value
        this.newProductForm.price.isValid = !!this.newProductForm.price.value
      },
      deep: true,
    },
    newProductForm: {
      handler() {
        this.isDisabled = !(
          !this.newProductForm.name.isDisabled &&
          !this.newProductForm.image.isDisabled &&
          !this.newProductForm.price.isDisabled
        )
      },
      deep: true,
    },
  },
  methods: {
    submit() {
      for (const prop in this.newProductForm) {
        if (!this.newProductForm[prop].value && prop !== 'info') {
          this.newProductForm[prop].isVaild = false
          this.isDisabled = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$label_text_color: #49485e;
$input_text_color_placeholder: #b4b4b4;
$input_text_color: #3f3f3f;
$warning_color: #ff8484;

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

  & .form-label-text {
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $label_text_color;
  }

  & .form-input-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $input_text_color;
  }

  & .form-input-text::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: $input_text_color_placeholder;
  }

  & .form-input {
    background-color: #fffefb;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  & .required-input {
    width: 4px;
    height: 4px;
    position: absolute;
    background: $warning_color;
    border-radius: 4px;
  }

  & .invalid-text {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: $warning_color;
  }

  & .invalid-input {
    border: 1px solid $warning_color;
  }
}
</style>
