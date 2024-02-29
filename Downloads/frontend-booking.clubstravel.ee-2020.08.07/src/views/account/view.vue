<template>
  <div id="app">
        <ct-header />

        <section class="cover-slider">
            <div class="cover-slider-items">
                <img src="assets/cover.jpg" alt="" class="cover-slider-item">
            </div>
            <div class="cover-slider-bottom-decoration">
                <img src="assets/cover-decoration-4.svg" alt="">
            </div>
        </section>

        <div class="container">
            <div class="sidebar-layout profile-layout sidebar-layout-reverse d-flex flex-column-reverse flex-lg-row-reverse">

                <div class="content mt-40  mt-lg-0">
                    <h2 class="text-is-26 mb-24 mt-24">Заказы</h2>

                    <div class="table user-table">
                        <div class="table-row table-header">
                            <div class="table-cell">Номер заказа</div>
                            <div class="table-cell justify-content-center">Сумма</div>
                            <div class="table-cell justify-content-center">E-mail</div>
                            <div class="table-cell justify-content-center">Cтатус</div>
                            <div class="table-cell justify-content-center">Дата</div>
                        </div>





                        <div class="table-row" v-for="order of itemsOfPage[page - 1]" :key="order.id">
                            <div class="table-cell is-first" data-label="Номер заказа">
                                {{order.id}}
                            </div>

                            <div class="table-cell justify-content-md-center" data-label="Сумма">
                                {{order.price.toFixed(2)}}
                            </div>

                            <div class="table-cell justify-content-md-center" data-label="E-mail">
                                {{order.mail}}
                            </div>

                            <div class="table-cell justify-content-md-center" data-label="Cтатус">
                                <span class="table-tag is-success" v-if="order.status === 'confirm'">
                                    Оплачено
                                </span>
                                <span class="table-tag is-warning" v-if="order.status === 'process'">
                                    В обработке
                                </span>
                            </div>

                            <div class="table-cell justify-content-md-center" data-label="Дата">
                                {{order.date | dateFormat}}
                            </div>
                        </div>



                        <div class="table-pagination d-sm-flex justify-content-between align-items-center">
                            <span class="text-is-555 text-is-center d-block mb-24 mb-sm-0">Показано {{itemsOfPage[page - 1].length}} из {{ordersdata.length}}</span>
                            <div class="d-flex align-items-center justify-content-center">
                                <button class="btn is-small mr-16 mr-sm-0":disabled="page <= 1" @click="prevPage">Назад</button>
                                <div class="d-none d-sm-flex align-items-center table-pagination-pages">
                                    Страница <input type="number" class="table-pagination-input" min="1" :max="totalPages" v-model.number="page"> из {{totalPages}}
                                </div>
                                <button class="btn is-small" :disabled="page >= totalPages" @click="nextPage">Вперед</button>
                            </div>
                        </div>


                    </div>


                </div>

                <div class="sidebar has-margin-top">

                    <div class="box profile-menu pt-24 pb-24">
                        <div class="profile-img">
                            <img src="assets/profile-img.png" alt="">
                        </div>
                        <h2 class="text-is-26 text-is-center mb-24">Елена Колонаева</h2>
                        <ul class="hasnt-list-style profile-menu-nav">
                            <li>
                                <a class="d-flex justify-content-start align-items-center is-active">
                                    <span class="text-is-primary text-is-24 icon icon-ticket mr-16"></span>
                                    <span class="text-is-18">Мои заказы</span>
                                </a>
                            </li>
                            <li>
                                <a class="d-flex justify-content-start align-items-center">
                                    <span class="text-is-primary text-is-24 icon icon-payment-card mr-16"></span>
                                    <span class="text-is-18">История платежей</span>
                                </a>
                            </li>
                            <li>
                                <a class="d-flex justify-content-start align-items-center">
                                    <span class="text-is-primary text-is-24 icon icon-settings mr-16"></span>
                                    <span class="text-is-18">Настройки</span>
                                </a>
                            </li>
                        </ul>
                        <hr class="mt-16 mb-16">
                        <a class="d-flex justify-content-start align-items-center ml-24 mr-24">
                            <span class="icon text-is-888 text-is-24 icon-exit mr-16"></span>
                            <span class="text-is-14 text-is-888">Выход</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <ct-footer/>
  </div>
</template>

<script>
import ctHeader from '../../components/TheHeader'
import ctFooter from '../../components/TheFooter'
import ctSearch from '../../components/TheSearch'
import ctOfferCard from '../../components/ui/OfferCard'
import ctSlider from '../../components/ui/Slider'
import ctSlide from '../../components/ui/Slide'
import moment from "moment";

let id = 1588665993

let orderObj = {
    mail: 'admin@admin.ru',
    date: new Date(),
}

let ordersdata = []

for (let i = 0; i < 25; ++i) {
    let status = Math.floor(Math.random() * 2)
    ordersdata.push({
        id,
        ...orderObj,
        status: status === 0 ? 'confirm' : 'process',
        price: 100 + Math.floor(Math.random() * 200)
    })
    id++
}

export default {
  name: 'App',
  components: {
    ctHeader,
    ctFooter,
    ctSearch,
    ctOfferCard,
    ctSlider,
    ctSlide
  },
  mounted() {

  },
  data() {
      return {
          page: 1,
          itemsPerPage: 10,
          mainSliderOps: {
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                680: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                930: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        },
          seasonSliderOps: {
            breakpoints: {
                320: {
                slidesPerView: 1,
                spaceBetween: 15
                },
                680: {
                slidesPerView: 3,
                spaceBetween: 16
                },
                930: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        },
          ordersdata: ordersdata
      }
  },
    computed: {
        totalPages() {
            return Math.ceil(this.ordersdata.length / this.itemsPerPage)
        },
        itemsOfPage() {

            let array = this.ordersdata //массив, можно использовать массив объектов
            let size = this.itemsPerPage; //размер подмассива
            let subarray = []; //массив в который будет выведен результат.
            for (let i = 0; i <Math.ceil(array.length/size); i++){
                subarray[i] = array.slice((i*size), (i*size) + size);
            }

            return subarray
        }
    },
    filters: {
        dateFormat(date) {
            return moment(date).format("DD MMMM YYYY HH:mm").toString()
        },
    },
    methods: {
      nextPage() {
          this.page = this.page >= this.totalPages ? this.totalPages : this.page + 1
      },
        prevPage() {
          this.page = this.page <= 1 ? 1 : this.page - 1
        }
    },
}
</script>


<style lang="sass">

    .table-tag
        font-size: 12px
        padding: 5px 12px
        border-radius: 6px
        &.is-success
            color: #3E7739
            background: rgba(#3E7739, .2)
        &.is-warning
            color: #F68521
            background: rgba(#F68521, .2)
    .user-table
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161)
        .table-header
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1)
    .table-pagination
        padding: 20px 16px
        &-pages
            margin: 0 20px
        &-input
            font-size: 14px
            text-align: center
            margin: 0 8px
            min-height: 26px
            font-size: 12px
            max-width: 36px
            width: auto
            padding: 3px 9px !important
            background: rgba(#c4c4c4, .5)
            border-radius: 4px
            /* Chrome, Safari, Edge, Opera */
            &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
                -webkit-appearance: none
                margin: 0

            /* Firefox */
            -moz-appearance: textfield


</style>
