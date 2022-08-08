import Vue from "vue";

Vue.directive("price", {
  bind(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      const x = this.value.replace(/\D/g, "").match(/\B(?=(\d{3})+(?!\d))/g);
      console.log(x);
    };
  }
});

// onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
