<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.name
          open = false
          $emit('input', option)
        "
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
}
</script>

<style lang="scss" scoped>
$select_label_color: #b4b4b4;
$select_background_color: #fffefb;
$select_hover_color: #1862bb;

.custom-select {
  background: $select_background_color;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 8vw;
  color: $select_label_color;
  .selected {
    background-color: $select_background_color;
    border-radius: 6px;
    color: $select_label_color;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 1em 2em;
    width: auto;
    cursor: pointer;
    user-select: none;
    position: relative;
    &:after.open {
      transform: rotate(-45deg);
      border-top: 1px solid $select_hover_color;
      border-right: 1px solid $select_hover_color;
    }
    &:after {
      position: absolute;
      color: $select_label_color;
      width: 6px;
      height: 6px;
      content: '';
      top: 40%;
      right: 20px;
      transform: rotate(135deg);
      border-top: 1px solid $select-label-color;
      border-right: 1px solid $select-label-color;
    }
    &:hover {
      &:after {
        border-top: 1px solid $select_hover_color;
        border-right: 1px solid $select_hover_color;
      }
    }
  }
  .selected.open {
    border-radius: 4px 4px 0 0;
    transition: 500ms;
  }
  .items {
    width: 8vw;
    margin-top: 5px;
    color: $select_label_color;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    position: absolute;
    background-color: $select_background_color;
    z-index: 1000;
    div {
      color: $select_label_color;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      padding: 1em;
      cursor: pointer;
      user-select: none;
      &:hover {
        color: $select_hover_color;
        background-color: $select_background_color;
      }
    }
  }
}
.selectHide {
  display: none;
}
</style>
