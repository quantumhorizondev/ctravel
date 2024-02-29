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
        <div class="sidebar-layout">

            <div class="content">

                <div class="content-divider">
                    <span class="content-divider-text" data-text="или"></span>
                </div>

                <div class="row">
                    <div class="col-xl-9">
                        <h2 class="text-is-36 mb-16 is-big mt-40 mt-lg-24"><b>Нет времени искать тур?</b></h2>
                        <p class="mb-32">Просто скажите нам как должен выглядеть отдых вашей мечты и мы найдём лучший тур для вас!</p>
                        <h2 class="mb-16 text-is-18">Оставьте свой номер телефона и мы вам перезвоним</h2>
                        <div class="tour-request-form mb-32 d-md-flex align-items-md-center">
                            <b-input placeholder="Ваш номер телефона"></b-input>
                            <button class="btn pl-32 pr-32 mt-16 mt-md-0">Перезвонить</button>
                        </div>
                        <a href="#tour-request-form" class="btn is-bordered mt-24 mb-24 is-full-width d-lg-none">заполнить форму</a>
                        
                        <p class="text-is-18 mb-16">Связаться с нашим консультантом</p>

                        

                    </div>
                    <div class="col-12">
                        <div class="operator d-flex flex-wrap mb-40 mb-lg-0">
                            <img src="assets/marina.jpg" alt="" class="operator-image mr-sm-32 mb-16">

                            
                            <div class="operator-info">
                                <div class="operator-header">
                                    <h2 class="operator-header-title">Марина Каасик</h2>
                                    <p class="operator-header-subtitle text-is-14">Специалист по подбору туров</p>
                                </div>
                                <ul class="operator-links">
                                    <li class="mb-16">
                                        <a href="" class="d-flex align-items-center"><span class="icon icon-phone text-is-24 is-green mr-12"></span>
                                            +372 6 130 633</a>
                                    </li>
                                    <li class="mb-16">
                                        <a href="" class="d-flex align-items-center"><span class="icon icon-mail text-is-24 is-green mr-12"></span>
                                            contact@email.ee</a>
                                    </li>
                                    <li>
                                        <a href="" class="d-flex align-items-center"><span class="icon icon-messanger text-is-24 is-green mr-12"></span>
                                            Пн - Пт 10.00 - 18.00</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="sidebar has-margin-top-40">

                <div class="box">

                    <ct-tabs :active-tab="activeFormTab" @tab-change="setActiveTab($event)" id="tour-request-form">
                        <ct-tab name="Основное">
                            <b-dropdown aria-role="list" scrollable v-model="filters.activeDirection" class="d-block">
                                <b-field label="Направление"  slot="trigger">
                                    <b-input :value="filters.activeDirection" readonly icon-right="icon-drop-down text-is-24"></b-input>
                                </b-field>

                                <b-dropdown-item aria-role="listitem"
                                                 v-for="item of filters.directions"
                                                 :key="item"
                                                 :value="item">{{item}}
                                </b-dropdown-item>
                            </b-dropdown>

                            <b-dropdown aria-role="menu" class="not-w100 d-block mt-16 is-calendar" trap-focus>

                                <b-field label="Дата вылета"  slot="trigger">
                                    <b-input :value="filters.date | dateFormat" readonly icon-right="icon-calendar text-is-24"></b-input>
                                </b-field>

                                <b-dropdown-item
                                        aria-role="menu-item"
                                        custom
                                        paddingless>
                                    <b-datepicker v-model="filters.date"  size="is-small"
                                                  inline >
                                    </b-datepicker>
                                </b-dropdown-item>
                            </b-dropdown>

                            <div @click="openGuestsDropdown">
                                <b-dropdown
                                        aria-role="menu"
                                        ref="guestsDropdown"
                                        :can-close="false"
                                        :close-on-click="false"
                                            class="d-block not-w100 mt-16">

                                    <b-field label="Гости"  slot="trigger">
                                        <b-input :value="peoples | peoplesFormat" readonly icon-right="icon-drop-down text-is-24"></b-input>
                                    </b-field>

                                    <b-dropdown-item
                                            aria-role="menu-item"
                                            :focusable="false"
                                            custom
                                            paddingless>
                                        <ct-guests :peoples="peoples"/>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="active-filters-group d-flex align-items-center flex-wrap">
                                <span class="filter-tag ml-8 mt-8">Взрослый x{{peoples.adult}}</span>
                                <span class="filter-tag ml-8 mt-8" v-for="people of peoples.child">{{people.type}} x{{people.count}}</span>
                            </div>

                            <b-dropdown aria-role="menu" class="mt-16 d-block">

                                <b-field label="Длительность тура"  slot="trigger">
                                    <b-input :value="filters.duration[0] + ' - ' + filters.duration[1] + ' дней'" readonly icon-right="icon-drop-down text-is-24" expanded></b-input>
                                </b-field>

                                <b-dropdown-item
                                        aria-role="menuitem"
                                        :focusable="false"
                                        custom
                                        paddingless>
                                    
                                                                <vue-slider
                                    class="ui-slider mt-16"
                                    v-model="filters.duration"
                                    :enableCross="false"
                                    :min="1"
                                    :max="30"
                                    :interval="1"
                                    tooltip='always'
                                    :dotSize="21"
                                    :height="3"
                                    :contained="true">
                                <template v-slot:tooltip="{ value }">
                                    <div class="ui-slider-tooltip">{{ value}}</div>
                                </template>
                            </vue-slider>

                            <div class="ui-slider-minmax-range d-flex align-items-center justify-content-between text-is-14 text-is-888"><span> От </span><span> До </span></div>


                                </b-dropdown-item>
                            </b-dropdown>

                            <button class="btn is-full-width mt-32 is-bordered" @click="setActiveTab(1)">Дальше</button>

                        </ct-tab>
                        <ct-tab name="Предпочтения">

                            <b-field label="Желаемая цена на одного человека (€)">
                                <b-input value="12" expanded></b-input>
                            </b-field>

                            <b-dropdown aria-role="list" scrollable v-model="filters.feed" class="d-block">
                                <b-field label="Питание"  slot="trigger">
                                    <b-input  :value="filters.feed" readonly icon-right="icon-drop-down text-is-24"></b-input>
                                </b-field>

                                <b-dropdown-item aria-role="listitem"
                                                 v-for="item of filters.feedList"
                                                 :key="item"
                                                 :value="item">{{item}}
                                </b-dropdown-item>
                            </b-dropdown>

                            <button class="btn is-full-width mt-32 is-bordered" @click="setActiveTab(2)">Дальше</button>
                            <div class="mt-16 d-sm-none text-is-14 text-is-center text-is-888" @click="setActiveTab(0)">Назад к предыдущему этапу</div>
                        </ct-tab>
                        <ct-tab name="Контакты">

                            <b-field label="Имя">
                                <b-input expanded></b-input>
                            </b-field>

                            <b-field label="Телефон">
                                <b-input expanded></b-input>
                            </b-field>

                            <b-field label="Эл. почта">
                                <b-input expanded></b-input>
                            </b-field>

                            <button class="btn is-full-width mt-32">Отправить</button>
                            <div class="mt-16 d-sm-none text-is-14 text-is-center text-is-888" @click="setActiveTab(1)">Назад к предыдущему этапу</div>
                        </ct-tab>
                    </ct-tabs>

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
import ctGuests from '../../components/ui/Guests'
import ctTabs from '../../components/ui/Tabs'
import ctTab from '../../components/ui/Tab'
import moment from 'moment'
import VueSlider from 'vue-slider-component'

import 'moment/locale/ru';

moment.locale('ru');

function hideOnClickOutside(element, callback) {

    const outsideClickListener = event => {
        console.log(event.target.classList)
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
    ctGuests,
    ctTabs,
    ctTab,
    VueSlider
  },
  mounted() {

  },
  data() {
      return {
          peoples: {
              adult: 1,
              child: []
          },
          activeFormTab: 0,
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
          filters: {
              feed: 'Завтрак',
              feedList: ['Без питания', 'Завтрак', 'Затрак и ужин', 'Завтрак, обед, ужин', 'Всё включено', 'Ультра: всё включено'],
              priceRange: [40, 200],
              isOpened: false,
              active: {
                  nutrition: [],
                  tourSet: [],
                  departure: [],
                  regions: [],
              },
              activeDirection: 'Все направления',
              date: new Date(),
              directions: ['Все направления', 'Египет', 'АОЭ', 'Тайланд', 'Болгария', 'Тенерифе', 'Бали', 'Грузия', 'Греция', 'Турция', 'Кипр'],
              duration: [1, 7],
              nutrition: {
                  name: "Питание",
                  items: [
                      'Без питания',
                      'Завтрак',
                      'Завтрак и ужин',
                      'Завтрак, обед, ужин',
                      'Все включено',
                      'Ультра: все включено'
                  ]
              },
              tourSet: {
                  name: "Состав тура",
                  items: [
                      'Туристический пакет',
                      'Только перелет'
                  ]
              },
              regions: {
                  name: "Регион",
                  items: ['Таллин','Рига', 'Вильнюс', 'Таллин2']
              },
              departure: {
                  name: "Вылет из",
                  items: [
                      'Таллин',
                      'Рига',
                      'Вильнюс'
                  ]
              }
          }
      }
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
      setActiveTab(num) {
          this.activeFormTab = num
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
        dateFormat(date) {
            return moment(date).format("DD MMMM YYYY").toString()
        },
    }
}
</script>

<style lang="sass">
</style>
