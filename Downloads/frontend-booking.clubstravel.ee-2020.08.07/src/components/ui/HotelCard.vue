<template>
    <div class="hotel-card">
        
        <div class="hotel-card-main d-lg-flex justify-content-lg-between">

            <div class="hotel-card-slider mb-12 mb-lg-0 mr-lg-32 mr-xl-40">

                <ct-slider :options="sliderOptions">

                    <ct-slide v-for="i of 3" :key="i">
                        <div>
                            <img :src="`assets/hotel-card-imgs/img (${Math.floor(Math.random() * 22)}).jpg`" alt="">
                        </div>
                    </ct-slide>

                </ct-slider>

            </div>

            <h2 class="hotel-card-name text-is-18 mb-12 d-lg-none"><b>Название отеля здесь</b></h2>

            <div class="hotel-card-info d-lg-flex flex-lg-row-reverse justify-content-lg-end">
                <div class="hotel-card-props mr-lg-24">
                    <div class="d-flex justify-content-start align-items-center mb-1">
                        <span class="icon icon-star text-is-18"></span>
                        <span class="icon icon-star text-is-18"></span>
                        <span class="icon icon-star text-is-18"></span>
                    </div>
                    <div class="hotel-card-props-list d-flex justify-content-start align-items-start flex-wrap flex-lg-column">
                        <div class="d-flex justify-content-start align-items-center mt-12 mt-lg-24 mr-md-24">
                            <span class="icon icon-clock is-green mr-16"></span>
                            <span class="text-is-14">7 ночей</span> 
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-12 mt-lg-24 mr-md-24">
                            <span class="icon icon-food is-green mr-16"></span>
                            <span class="text-is-14">Завтрак</span> 
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-12 mt-lg-24 mr-md-24">
                            <span class="icon icon-house is-green mr-16"></span>
                            <span class="text-is-14">Standard</span> 
                        </div>
                        <div class="d-flex justify-content-start align-items-center mt-12 mt-lg-24 mr-md-24">
                            <span class="icon icon-sun is-green mr-16"></span>
                            <span class="text-is-14">Пляж: песок</span> 
                        </div>
                    </div>
                </div>
                <div class="mr-lg-24 mr-xl-40 hotel-card-desc">
                    <div>
                        <h2 class="d-none d-lg-inline-flex text-is-18 mb-12"><b>Название отеля здесь</b></h2>
                        <div class="tags">
                            <div class="tag">
                                <span class="icon icon-point"></span> Болгария, Золотые Пески
                            </div>
                        </div>
                        <p class="hotel-card-desc-text text-is-14 text-is-555 mt-16">
                            Краткое описание отеля. Рекомендуем для семейного и молодёжного отдыха. Отель прекрасно сочетает в себе как современный комфорт, так и высокий уровень обслуживания...
                        </p>
                    </div>
                    <a href="/hotel.html" class="view-all-link d-none d-lg-inline-flex">
                        Подробнее об отеле
                        <span class="icon icon-arrow-right"></span>
                    </a>
                </div>

            </div>
            <div class="hotel-card-offers box p-12 text-is-center mt-16 mt-lg-0" :class="{ 'is-clicked': offersIsOpened }">
                <div class="text mb-12">2 предложения <span class="new-line">от <span class="price"><b>460€</b>/чел</span></span></div>
                <div class="btn" @click="openOffers" :class="{ 'is-bordered': offersIsOpened }"> {{ offersIsOpened ? 'Закрыть' : 'Открыть' }} </div>
            </div>

        </div>



        <ct-custom-table :data="data" :columns="columns" class="hotel-card-table table mt-lg-24" :class="{ 'is-visible': offersIsOpened }"/>


        <!-- <div class="hotel-card-table table mt-lg-24" :class="{ 'is-visible': offersIsOpened }">

            <div class="table-row table-header" >
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(0)">Дата</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(1)">Период</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(2)">Питание</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(3)">Тип номера</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(4)">Мест в самолёте</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold" @click="sortBy(5)">Стоимость</div>
                <div class="table-cell text-is-14 text-is-555 text-is-bold"></div>
            </div>

            <div class="table-row" v-for="(h, i) of sortedHotels" :key="i" >
                <div class="table-cell" :data-label="h[0].label">{{h[0].value | dateFormat}}</div>
                <div class="table-cell" :data-label="h[1].label">{{h[1].value | dayFormat}}</div>
                <div class="table-cell" :data-label="h[2].label">{{h[2].value}}</div>
                <div class="table-cell" :data-label="h[3].label">{{h[3].value}}</div>
                <div class="table-cell" :data-label="h[4].label">{{h[4].value}}+</div>
                <div class="table-cell" :data-label="h[5].label"><b>{{h[5].value}}€</b>/чел</div>
                <div class="table-cell hasnt-label">
                    <div class="btn">Выбрать</div>
                </div>
            </div>

        </div> -->

    </div>

            
</template>

<script>
import ctSlider from './Slider'
import ctSlide from './Slide'

import ctCustomTable from './CustomTable'

import moment from 'moment'

export default {
    components: {
        ctSlider,
        ctSlide,
        ctCustomTable
    },
    data() {
        return {
            data: [
                {
                    category:"Standart",
                    date: moment(new Date()).format("DD MMMM YYYY").toString(),
                    duration:2,
                    feed:"Завтрак, обед, ужин",
                    id:4214,
                    plain:3,
                    price:164,
                },
                {
                    category:"Standart",
                    date: moment(new Date()).format("DD MMMM YYYY").toString(),
                    duration:0,
                    feed:"Завтрак, обед, ужин",
                    id:4215,
                    plain:1,
                    price:167,
                },
                {
                    category:"Standart",
                    date: moment(new Date()).format("DD MMMM YYYY").toString(),
                    duration:1,
                    feed:"Завтраки",
                    id:4216,
                    plain:5,
                    price:102,
                },
                {
                    category:"Standart",
                    date: moment(new Date()).format("DD MMMM YYYY").toString(),
                    duration:3,
                    feed:"Завтраки",
                    id:4217,
                    plain:2,
                    price:110,
                },
                {
                    category:"Standart",
                    date: moment(new Date()).format("DD MMMM YYYY").toString(),
                    duration:1,
                    feed:"Завтраки",
                    id:4218,
                    plain:8,
                    price:220,
                }
            ],
                columns: [
                    {
                        label: 'Дата',
                        field: 'date',
                        sortable: true,
                        formatter(value) {
                            return value
                        }
                    },
                    {
                        label: 'Период',
                        field: 'duration',
                        sortable: true,
                        formatter(value) {

                            let words = ['день', 'дня', 'дней']
                            return value +' ' + words[(value % 100 > 4 && value % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(value % 10 < 5) ? value % 10 : 5]];

                            // return value
                        }
                    },
                    {
                        label: 'Питание',
                        field: 'feed',
                        sortable: true,
                        formatter(value) {
                            return value
                        }
                    },
                    {
                        label: 'Тип номера',
                        field: 'category',
                        sortable: true,
                        formatter(value) {
                            return value
                        }
                    },
                    {
                        label: 'Мест в самолёте',
                        field: 'plain',
                        sortable: true,
                        formatter(value) {
                            return value + '+'
                        }
                    },
                    {
                        label: 'Стоимость',
                        field: 'price',
                        sortable: true,
                        formatter(value) {
                            return `<b>${value}€</b>/чел`
                        }
                    },
                ],
            sliderOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    },
                    610: {
                        slidesPerView: 2
                    },
                    880: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 1
                    }
                }
            },
            offersIsOpened: false
        }
    },
    computed: {

    },
    methods: {
        openOffers() {
            this.offersIsOpened = !this.offersIsOpened
        },
    },
    filters: {
        dateFormat(date) {
            return moment(date).format("DD MMMM YYYY").toString()
        },
        dayFormat(day) {

            // function declOfNum(n, text_forms) {
            //     n = Math.abs(n) % 100; var n1 = n % 10;
            //     if (n > 10 && n < 20) { return text_forms[2]; }
            //     if (n1 > 1 && n1 < 5) { return text_forms[1]; }
            //     if (n1 == 1) { return text_forms[0]; }
            //     return text_forms[2];
            // }

            let words = ['день', 'дня', 'дней']
            return day +' ' + words[(day % 100 > 4 && day % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(day % 10 < 5) ? day % 10 : 5]];
        },
    }
}
</script>