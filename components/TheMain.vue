<template>
  <div class="m-5">
    <the-header />
    <div class="md:flex sm:flex-row mt-4 px-2">
      <the-new-product-card
        :duplicate-product="duplicateProduct"
        @createNewProduct="createNewProduct"
      />
      <products-product-items
        :products="products"
        @deleteProduct="deleteProduct"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMain',
  data() {
    return {
      duplicateProduct: false,
      products: [
        {
          id: 1,
          srcImage:
            'https://msreview.net/uploads/posts/2021-05/1622130984_real_c6d9c9b3-5e97-46cd-bc49-f034732688a7.jpeg',
          name: 'Товар 1',
          price: 7000,
        },
        {
          id: 2,
          srcImage:
            'https://www.watson.ch/imgdb/5b7c/Qx,E,0,0,4022,2667,1676,1263,670,505/4002687997320227',
          name: 'Товар 2',
          price: 16000,
        },
        {
          id: 3,
          srcImage:
            'https://img.global.news.samsung.com/ua/wp-content/uploads/2020/08/Galaxy-Tab-S7-In-depth_main_3.jpg',
          name: 'Товар 3',
          price: 21000,
        },
        {
          id: 4,
          srcImage:
            'https://www.ixbt.com/img/x780/n1/news/2020/8/2/Product%20image%2013_large.jpg',
          name: 'Товар 4',
          price: 13000,
        },
        {
          id: 5,
          srcImage:
            'https://cyberstate.kz/wp-content/uploads/2021/12/iphone12-14-utechki-2048x1366.jpg',
          name: 'Товар 5',
          price: 5000,
        },
        {
          id: 6,
          srcImage:
            'https://fs.npstatic.com/userfiles/7695213/image/Xiaomi-Redmi-Note-11-02-NextPit-w782.jpg',
          name: 'Товар 6',
          price: 18000,
        },
        {
          id: 7,
          srcImage:
            'https://www.iphones.ru/wp-content/uploads/2021/09/IMG_0145_1.jpg',
          name: 'Товар 7',
          price: 34000,
        },
        {
          id: 8,
          srcImage:
            'https://br.atsit.in/ru/wp-content/uploads/2021/08/xbox-series-x-d0bfd0bed0bbd183d187d0b0d0b5d182-d0bfd0bed182d180d18fd181d0b0d18ed189d0b8d0b9-d0bdd0bed187d0bdd0bed0b9-d180d0b5d0b6d0b8d0bc.jpg',
          name: 'Товар 8',
          price: 25000,
        },
        {
          id: 9,
          srcImage:
            'https://stroy-podskazka.ru/images/article/orig/2020/01/televizory-samsung-4k-osobennosti-obzor-modelej-nastrojka-i-podklyuchenie-6.jpg',
          name: 'Товар 9',
          price: 17000,
        },
        {
          id: 10,
          srcImage:
            'https://droider.ru/wp-content/uploads/2021/12/promo_3-waves-2048x1550.png',
          name: 'Товар 10',
          price: 9000,
        },
        {
          id: 11,
          srcImage:
            'https://mobidevices.ru/images/2021/09/Marshall-Minor-III.webp',
          name: 'Товар 11',
          price: 10000,
        },
        {
          id: 12,
          srcImage:
            'https://primeclass.io/journal/ru/content/images/size/w692/2021/03/DSCF4055hd.jpg',
          name: 'Товар 12',
          price: 2000,
        },
        {
          id: 13,
          srcImage:
            'https://xpcom.ru/wp-content/uploads/2022/01/theregisti-HSXIp58yPyI-unsplash-1024x683.jpg',
          name: 'Товар 13',
          price: 9000,
        },
        {
          id: 14,
          srcImage:
            'https://ixbt.online/live/images/original/00/94/02/2021/12/10/ed47747bec.jpg?w=877',
          name: 'Товар 14',
          price: 20000,
        },
      ],
    }
  },
  methods: {
    createNewProduct(product) {
      // Доделать проверку на уже существующий товар
      if (product.id) {
        this.products.unshift(product)
        setTimeout(() => {
          document.getElementsByClassName('product-container')[
            product.id
          ].className = 'flex flex-col product-container fadeInLeft'
        }, 1)
      } else this.duplicateProduct = true
    },
    deleteProduct(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
