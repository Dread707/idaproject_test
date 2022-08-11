<template>
  <the-main />
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss">
$background: rgba(255, 254, 251, 0.8);

html {
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
}

body {
  background-color: $background;
}

/* Скроллбар для хрома */

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
}

/* Скроллбар для хрома */

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

/* Скролл для Мозилы */

html {
  scrollbar-width: thin;
}
</style>
