import Vue from 'vue'

Vue.directive('price', {
  bind(el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }

      const x = this.value
        .replace(/\D/g, '')
        .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
      if (!!Number(x[0]) === false) {
        this.value = 0
      } else {
        this.value = !x[1] ? x[0] : x[0] + ' ' + x[1] + (x[2] ? ' ' + x[2] : '')
      }
      el.dispatchEvent(new Event('input'))
    }
  },
})
