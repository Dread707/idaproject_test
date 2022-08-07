<template>
  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      <div class="select-box__value">
        <input
          id="0"
          class="select-box__input"
          type="radio"
          value="1"
          checked="checked"
        />
        <p class="select-box__input-text py-3 px-5">По умолчанию</p>
      </div>
      <div class="select-box__value">
        <input id="1" class="select-box__input" type="radio" value="2" />
        <p class="select-box__input-text py-3 px-5">По возрастанию</p>
      </div>
      <div class="select-box__value">
        <input id="2" class="select-box__input" type="radio" value="3" />
        <p class="select-box__input-text py-3 px-5">По убыванию</p>
      </div>
      <span class="select-box__icon" aria-hidden="true" />
    </div>
    <ul class="select-box__list">
      <li><label class="select-box__option" for="1">По возрастанию</label></li>
      <li><label class="select-box__option" for="2">По убыванию</label></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  data() {
    return {
      selected: 'По умолчанию',
    }
  },
}
</script>

<style lang="scss" scoped>
$select-label-color: #b4b4b4;

.select-box {
  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 7vw;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: $select-label-color;

  &__current {
    position: relative;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:focus {
      & + .select-box__list {
        opacity: 1;
        animation-name: none;

        .select-box__option {
          cursor: pointer;
        }
      }

      .select-box__icon {
        transform: rotate(-45deg);
      }
    }
  }

  &__icon {
    position: absolute;
    box-sizing: border-box;
    top: 40%;
    right: 20px;
    width: 6px;
    height: 6px;
    transform: rotate(135deg);
    border-top: 1px solid $select-label-color;
    border-right: 1px solid $select-label-color;
  }

  &__value {
    display: flex;
  }

  &__input {
    display: none;

    &:checked + .select-box__input-text {
      display: block;
    }
  }

  &__input-text {
    display: none;
    width: 100%;
    margin: 0;
    background-color: #fff;
  }

  &__list {
    position: absolute;
    width: auto;
    padding: 0;
    list-style: none;
    opacity: 0;
    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
  }

  &__option {
    display: block;
    padding: 15px;
    background-color: #fff;

    &:hover,
    &:focus {
      color: #546c84;
      background-color: #fbfbfb;
    }
  }
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>
