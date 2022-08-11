<template>
  <div class="px-2 flex justify-between">
    <h1>Добавление товара</h1>
    <select-component
      :options="options"
      :default="'По умолчанию'"
      class="select"
      @input="$emit('handlerSelect', $event)"
    />
  </div>
</template>

<script>
import SelectComponent from '~/components/assets/select/SelectComponent'
export default {
  name: 'TheHeader',
  components: { SelectComponent },
  data() {
    return {
      options: [
        { id: 1, name: 'По убыванию' },
        { id: 2, name: 'По возрастанию' },
        { id: 3, name: 'По наименованию' },
      ],
    }
  },
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
</style>
