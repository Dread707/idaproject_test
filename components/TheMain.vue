<template>
  <div>
    <transition>
      <div v-if="isLoading" class="loader-container">
        <spinner-component />
      </div>
    </transition>
    <div class="m-5">
      <the-header @handlerSelect="sortProducts" />
      <div class="md:flex sm:flex-row mt-4 px-2">
        <the-new-product-card
          :duplicate-product="duplicateProduct"
          @createNewProduct="createNewProduct"
        />
        <products-product-items
          :products="products"
          @eventDelete="deleteProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComponent from '@/components/assets/spinner/SpinnerComponent'

export default {
  name: 'TheMain',
  components: { SpinnerComponent },
  data() {
    return {
      duplicateProduct: false,
      isLoading: true,
      products: [
        {
          id: 1,
          srcImage:
            'https://msreview.net/uploads/posts/2021-05/1622130984_real_c6d9c9b3-5e97-46cd-bc49-f034732688a7.jpeg',
          name: 'Ноутбук',
          price: 7000,
        },
        {
          id: 2,
          srcImage:
            'https://www.watson.ch/imgdb/5b7c/Qx,E,0,0,4022,2667,1676,1263,670,505/4002687997320227',
          name: 'Планшет Apple',
          price: 16000,
        },
        {
          id: 3,
          srcImage:
            'https://img.global.news.samsung.com/ua/wp-content/uploads/2020/08/Galaxy-Tab-S7-In-depth_main_3.jpg',
          name: 'Планшет Samsung',
          price: 21000,
        },
        {
          id: 4,
          srcImage:
            'https://www.ixbt.com/img/x780/n1/news/2020/8/2/Product%20image%2013_large.jpg',
          name: 'Телефон Samsung Z Fold',
          price: 13000,
        },
        {
          id: 5,
          srcImage:
            'https://cyberstate.kz/wp-content/uploads/2021/12/iphone12-14-utechki-2048x1366.jpg',
          name: 'Телефон Apple',
          price: 5000,
        },
        {
          id: 6,
          srcImage:
            'https://fs.npstatic.com/userfiles/7695213/image/Xiaomi-Redmi-Note-11-02-NextPit-w782.jpg',
          name: 'Телефон Xiaomi',
          price: 18000,
        },
        {
          id: 7,
          srcImage:
            'https://www.iphones.ru/wp-content/uploads/2021/09/IMG_0145_1.jpg',
          name: 'Консоль PlayStation 5',
          price: 34000,
        },
        {
          id: 8,
          srcImage:
            'https://br.atsit.in/ru/wp-content/uploads/2021/08/xbox-series-x-d0bfd0bed0bbd183d187d0b0d0b5d182-d0bfd0bed182d180d18fd181d0b0d18ed189d0b8d0b9-d0bdd0bed187d0bdd0bed0b9-d180d0b5d0b6d0b8d0bc.jpg',
          name: 'Консоль Xbox Series X',
          price: 25000,
        },
        {
          id: 9,
          srcImage:
            'https://stroy-podskazka.ru/images/article/orig/2020/01/televizory-samsung-4k-osobennosti-obzor-modelej-nastrojka-i-podklyuchenie-6.jpg',
          name: 'Телевизор Samsung',
          price: 17000,
        },
        {
          id: 10,
          srcImage:
            'https://droider.ru/wp-content/uploads/2021/12/promo_3-waves-2048x1550.png',
          name: 'Колонка Алиса',
          price: 9000,
        },
        {
          id: 11,
          srcImage:
            'https://mobidevices.ru/images/2021/09/Marshall-Minor-III.webp',
          name: 'Наушники',
          price: 10000,
        },
        {
          id: 12,
          srcImage:
            'https://primeclass.io/journal/ru/content/images/size/w692/2021/03/DSCF4055hd.jpg',
          name: 'Фотоаппарат Canon',
          price: 2000,
        },
        {
          id: 13,
          srcImage:
            'https://xpcom.ru/wp-content/uploads/2022/01/theregisti-HSXIp58yPyI-unsplash-1024x683.jpg',
          name: 'Фотоаппарат Sony',
          price: 9000,
        },
        {
          id: 14,
          srcImage:
            'https://ixbt.online/live/images/original/00/94/02/2021/12/10/ed47747bec.jpg?w=877',
          name: 'Смарт часы',
          price: 20000,
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
    if (localStorage.getItem('products')) {
      this.products = JSON.parse(localStorage.getItem('products'))
    }
  },
  methods: {
    createNewProduct(product) {
      // Доделать проверку на уже существующий товар
      if (product.id) {
        this.products.unshift(product)
        localStorage.setItem('products', JSON.stringify(this.products))
        setTimeout(() => {
          document.getElementsByClassName('product-container')[
            product.id
          ].className = 'flex flex-col product-container fadeInLeft'
        }, 1)
      } else this.duplicateProduct = true
    },
    deleteProduct(id) {
      const index = this.products.findIndex((n) => n.id === id)
      if (index !== -1) {
        document.getElementById('product-' + id).className =
          'flex flex-col product-container fadeOutLeft'
        setTimeout(() => {
          this.products.splice(index, 1)
          localStorage.setItem('products', JSON.stringify(this.products))
        }, 1000)
      }
    },
    sortProducts(v) {
      switch (v.id) {
        case 1:
          this.products.sort((a, b) => b.price - a.price)
          break
        case 2:
          this.products.sort((a, b) => a.price - b.price)
          break
        case 3:
          this.products.sort(this.sortNames)
          break
      }
    },
    sortNames(a, b) {
      const collator = new Intl.Collator('ru')
      return collator.compare(a.name, b.name)
    },
  },
}
</script>
о
<style lang="scss" scoped>
.loader-container {
  background: rgb(133, 133, 133);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
