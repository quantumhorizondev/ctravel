<template>
  <div id="app">
        <ct-header />

        <section class="cover-slider">
        <div class="cover-slider-items">
            <img src="assets/cover.jpg" alt="" class="cover-slider-item">
        </div>
        <div class="cover-slider-bottom-decoration">
            <img src="assets/cover-decoration-2.svg" alt="">
        </div>
    </section>

        <div class="container">

            <div class="hotel-header d-flex flex-column justify-content-center align-content-start pl-16 pr-16 pt-12 pb-12">
                <div class="d-flex">
                    <h1 class="mr-12 hotel-header-title">AMBASSADOR</h1>
                    <div class="hotel-category d-inline-flex">
                        <span class="icon icon-star text-is-18"></span>
                        <span class="icon icon-star text-is-18"></span>
                        <span class="icon icon-star text-is-18"></span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="icon icon-point is-green mr-8 text-is-18"></span>
                    <span class="text-is-14">Болгария, Золотые Пески</span>
                </div>
            </div>

            <div class="sidebar-layout d-flex flex-column-reverse flex-lg-row">




                <div class="content text-is-14">

                    <div class="hotel-slider mt-40" ref="hotelSlider">
                        <div class="swiper-container gallery-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="assets/hotel/1.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/2.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/3.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/4.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/5.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="hotel-slider-thumbs mt-16">
                            <div class="swiper-container gallery-thumbs ">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="assets/hotel/1.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/2.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/3.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/4.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="assets/hotel/5.jpg" alt="">
                                </div>
                            </div>

                            

                        </div>
                            <div class="swiper-button-prev slider-arrow" @click="thumbsSlider.slidePrev()">
                                <span class="icon icon-drop-down text-is-20"></span>
                            </div>
                            <div class="swiper-button-next slider-arrow is-right" @click="thumbsSlider.slideNext()">
                                <span class="icon icon-drop-down text-is-20"></span>
                            </div>
                        </div>
                        
                    </div>

                    <div class="hotel-content text-is-555 mt-40">
                        <h2>Рекомендуем для семейного и молодёжного отдыха.</h2>
                        <p>Гости города Золотые пески, приехавшие в город по делам бизнеса или для отдыха, могут остановиться в гостинце Ambassador (Амбассадор). Отель прекрасно сочетает в себе как современный комфорт, так и высокий уровень обслуживания. Каждый номер оснащен всем необходимым для комфортного отдыха (кондиционер, телевизор, письменный стол, сейф и утренняя газета). Вы сможете воспользоваться услугами массажиста, баром, лифтом, спа, сауной, рестораном, отдохнуть у бассейна, посетить фитнес зал и прогуляться по саду. Ваш отдых в отеле Ambassador (Амбассадор) будет ярким и запоминающимся, вас не оставят равнодушными первоклассный сервис и великолепное обслуживание. Отель находится в 27 км от Международного аэропорта Варна (Varna International Airport), в 900 метрах от центра курорта Золотые пески и в 150 метрах от пляжа. Отель принимает отдыхающих круглый год и является прекрасным местом для отдыха, спорта и развлечений. В бальнеологическом центре «Амбассадор» предлагаются свыше 100 видов услуг: таласотерапия, ванные, массаж, электротерапия, грязелечение, водолечение, акупунктура, медицинская косметика, сауна, открытый и крытый бассейны, фитнес зал, солярий и много других.</p>
                    
                        <div class="row mt-48">
                            <div class="col-12 col-md-6">

                                <div class="hotel-content-list">
                                    <h2>Месторасположение</h2>
                                    <p>Гостиница находится в южной части курортного комплекса «Золотые пески» в нескольких минутах ходьбы от моря.</p>
                                </div>
        
                                <div class="hotel-content-list">
                                    <h2>Пляж</h2>
                                    <ul class="hasnt-list-style">
                                        <li>Расстояние до пляжа (60 м.)</li>
                                        <li>Зонтики (платно)</li>
                                        <li>Шезлонги (платно)</li>
                                    </ul>
                                </div>
        
                                <div class="hotel-content-list">
                                    <h2>Для детей</h2>
                                    <ul class="hasnt-list-style">
                                        <li>детская площадка</li>
                                        <li>детский бассейн</li>
                                    </ul>
                                </div>
        
                                <div class="hotel-content-list">
                                    <h2>Номера</h2>
                                    <ul class="hasnt-list-style">
                                        <li>181 номеров</li>
                                        <li>душ</li>
                                        <li>туалет</li>
                                        <li>умывальник</li>
                                        <li>балкон</li>
                                        <li>ТВ спутниковое</li>
                                        <li>кондиционер</li>
                                        <li>телефон</li>
                                        <li>холодильник</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <div class="hotel-content-list">
                                    <h2>Рестораны и бары</h2>
                                    <ul class="hasnt-list-style">
                                        <li>бары</li>
                                        <li>кафе</li>
                                        <li>рестораны</li>
                                    </ul>
                                </div>
                                
                                <div class="hotel-content-list">
                                    <h2>Развлечения и спорт</h2>
                                    <ul class="hasnt-list-style">
                                        <li>бассейн крытый</li>
                                        <li>бассейн открытый</li>
                                        <li>массаж</li>
                                        <li>салон красоты</li>
                                        <li>сауна</li>
                                        <li>фитнес центр</li>
                                        <li>велосипеды</li>
                                        <li>прокат</li>
                                        <li>теннис настольный</li>
                                    </ul>
                                </div>
                                
                                
                                
                                <div class="hotel-content-list">
                                    <h2>Сервис</h2>
                                    <ul class="hasnt-list-style">
                                        <li>парковка</li>
                                        <li>прокат автомобилей</li>
                                        <li>обмен валют</li>
                                        <li>сейф</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                </div>

                <div class="sidebar has-margin-top">

                    <div class="box p-24 hotel-info">
                        <div class="d-flex justify-content-between align-items-center mb-24">
                            <span class="text-is-20">Выбранный тур</span>
                            <span class="text-is-14 text-is-primary op-05">изменить</span>
                        </div>

                        <ul>
                            <li class="d-flex align-items-center mb-16"><span class="icon icon-calendar text-is-20 is-green mr-12"></span>18 июня 2020 г. | 7 ночей</li>
                            <li class="d-flex align-items-center mb-16"><span class="icon icon-airplane text-is-20 is-green mr-12"></span>Вылет из Таллинна</li>
                            <li class="d-flex align-items-center mb-16"><span class="icon icon-food text-is-20 is-green mr-12"></span>Завтраки</li>
                            <li class="d-flex align-items-center"><span class="icon icon-house text-is-20 is-green mr-12"></span>Стандарт</li>
                        </ul>

                        <div class="text-is-24 mt-24"><b>429€</b>/чел</div>
                        <p class="text-is-12 text-is-888 mt-8">
                            <b>Цена на одного человека</b> действительна при размещении в двухместном номере. Цена зависит от количества мест и может измениться.
                        </p>

                        <div class="mb-8 mt-24 text-is-555">Количество отдыхающих</div>
                        <div @click="openGuestsDropdown">
                                <b-dropdown append-to-body aria-role="menu" ref="guestsDropdown" :can-close="false" :close-on-click="false" class="not-w100">

                                    <b-field slot="trigger">
                                        <b-input :value="peoples | peoplesFormat" readonly icon-right="icon-drop-down text-is-24"></b-input>
                                    </b-field>

                                    <b-dropdown-item
                                            aria-role="menu-item"
                                            custom
                                            paddingless>
                                        <ct-guests :peoples="peoples" />
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>

                        <div class="active-filters-group d-flex align-items-center flex-wrap">
                            <span class="filter-tag ml-8 mt-8">Взрослый x{{peoples.adult}}</span>
                            <span class="filter-tag ml-8 mt-8" v-for="people of peoples.child"  >{{people.type}} x{{people.count}}</span>
                        </div>

                        <div class="mt-24">
                            Общая стоимость тура: <span class="text-is-24 text-is-green"><b>1 429€</b></span>
                        </div>

                        <a href="" class="btn mt-16 is-full-width">Бронировать</a>

                        <div class="d-flex align-items-start mt-16">
                            <span class="icon icon-lock text-is-18 text-is-blue mr-8 op-05"></span>
                            <span class="text-is-12 text-is-888">Ваши данные надежно защищены и обрабатываются согласно с <span class="text-is-555">условиями обработки личных данных</span></span>
                        </div>

                    </div>


                    <div class="banner mt-60 mt-on-d-48 p-24 d-none d-lg-block">
                        <h3 class="banner-title mb-24">Почему бронировать тур у нас?</h3>
                        <ul class="banner-items">

                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Только отобранные отели</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Все туроператоры на одном сайте</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Прозрачно и безопасно</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Без наценок</li>
                        </ul>
                    </div>

                    <div class="operator-banner box mt-60 mt-on-d-48 p-24 d-none d-lg-block">
                        <div class="operator">
                            <h3 class="operator-banner-title mb-18 text-is-18">Есть вопросы по отелю<br>или <b>хотите подобрать тур?</b></h3>
                            <p>Вам поможет наш консультант</p>
                            <p class="text-is-18 mb-16"><b>Марина Каасик</b></p>

                            <img src="assets/marina.jpg" alt="" class="operator-image mb-16">

                            <ul class="operator-links">
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-phone text-is-24 is-green mr-12"></span>
                                        +372 <b>6 130 633</b></a>
                                </li>
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-mail text-is-24 is-green mr-12"></span>
                                        contact@email.ee</a>
                                </li>
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-messanger text-is-24 is-green mr-12"></span>
                                        Написать в Messenger</a>
                                </li>
                                <li>
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-messanger text-is-24 is-green mr-12"></span>
                                        Пн - Пт <b>10.00 - 18.00</b></a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>


            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="banner mt-60 mt-on-d-48 p-24 d-lg-none">
                        <h3 class="banner-title mb-24">Почему бронировать тур у нас?</h3>
                        <ul class="banner-items">

                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Только отобранные отели</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Все туроператоры на одном сайте</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Прозрачно и безопасно</li>
                            <li>
                                <span class="icon icon-check text-is-18"></span>
                                Без наценок</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="operator-banner box mt-60 mt-on-d-48 p-24 d-lg-none">
                        <div class="operator">
                            <h3 class="operator-banner-title mb-18 text-is-18">Есть вопросы по отелю<br>или <b>хотите подобрать тур?</b></h3>
                            <p>Вам поможет наш консультант</p>
                            <p class="text-is-18 mb-16"><b>Марина Каасик</b></p>

                            <img src="assets/marina.jpg" alt="" class="operator-image mb-16">

                            <ul class="operator-links">
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-phone text-is-24 is-green mr-12"></span>
                                        +372 <b>6 130 633</b></a>
                                </li>
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-mail text-is-24 is-green mr-12"></span>
                                        contact@email.ee</a>
                                </li>
                                <li class="mb-16">
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-messanger text-is-24 is-green mr-12"></span>
                                        Написать в Messenger</a>
                                </li>
                                <li>
                                    <a href="" class="d-flex align-items-center"><span class="icon icon-messanger text-is-24 is-green mr-12"></span>
                                        Пн - Пт <b>10.00 - 18.00</b></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>






        </div>

        <div class="section has-margin-top">

            <div class="section-header">
                <div class="container">
                    <h1 class="section-title">
                        Похожие отели
                    </h1>
                </div>
            </div>


            <ct-slider :options="mainSliderOps">

                <ct-slide v-for="i of 5" :key="i">
                    <ct-offer-card label="от <b>509€</b>" :tags="[ {icon: 'clock', text: '25 июня 2020'}, {icon: 'point', text: 'Болгария, Золотые пески'} ]">
                                Бархатный сезон в Греции!
                            </ct-offer-card>
                </ct-slide>

            </ct-slider>
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
import ctGuests from '../../components/ui/Guests'
import Swiper from 'swiper'
import moment from "moment";

function hideOnClickOutside(element, callback) {

    const outsideClickListener = event => {
        if (event.target.classList.contains('js-add-btn') || event.target.classList.contains('js-remove-btn') || event.target.classList.contains('js-dropdown-item')) return
        if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
            callback()
            removeClickListener()
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)
    }

    document.addEventListener('click', outsideClickListener)

}

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )

export default {
  name: 'App',
  components: {
    ctHeader,
    ctFooter,
    ctSearch,
    ctOfferCard,
    ctSlider,
    ctSlide,
    ctGuests
  },
  mounted() {
      var galleryThumbs = new Swiper(this.$refs.hotelSlider.querySelector('.gallery-thumbs'), {
        spaceBetween: 16,
        slidesPerView: 4,
        // loop: true,
        // freeMode: true,
        // watchSlidesVisibility: true,
        // watchSlidesProgress: true,
    });

    this.thumbsSlider = galleryThumbs

        var galleryTop = new Swiper(this.$refs.hotelSlider.querySelector('.gallery-top'), {
            spaceBetween: 16,
            // loop: true,
            // loopedSlides: 5, //looped slides should be the same
            // thumbs: {
            //     swiper: galleryThumbs,
            // },
        });

    galleryThumbs.on('click', function (e) {
        console.log(galleryThumbs.clickedIndex)
        if (typeof galleryThumbs.clickedIndex != 'undefined') {
            galleryTop.slideTo(galleryThumbs.clickedIndex, 1000);
        }
    });

  },
  methods: {
      openGuestsDropdown() {
            setTimeout( () => {
                if (this.$refs.guestsDropdown.isActive) {
                    hideOnClickOutside(this.$refs.guestsDropdown.$refs.dropdownMenu, () => {
                        this.$refs.guestsDropdown.isActive = false
                    })
                }
            }, 10)
        },
  },
  data() {
      return {
          thumbsSlider: null,
          peoples: {
                adult: 1,
                child: []
            },
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
      }
  },
    filters: {
        peoplesFormat(value) {
            let res = {
                adult: 0,
                child: 0
            }

            for (let child of value.child) {
                res.child += child.count
            }

            return `Взрослых: ${value.adult}; детей: ${res.child}`
        }
    },
}
</script>

<style lang="sass">
</style>
