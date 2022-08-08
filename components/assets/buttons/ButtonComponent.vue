<template>
  <div>
    <button
      :disabled="isDisabled"
      :class="!isDisabled ? 'active-button' : ''"
      class="w-full button rounded-md py-3 px-8 outline-none"
      @click="$emit('event')"
    >
      Добавить товар
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    isDisabled: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$disabled_text_color: #b4b4b4;
$disabled_background_color: #eeeeee;
$active_text_color: #ffffff;
$active_background_color: #7bae73;

.button {
  background: $disabled_background_color;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: $disabled_text_color;
}

.active-button {
  background: $active_background_color;
  color: $active_text_color;
}
</style>
