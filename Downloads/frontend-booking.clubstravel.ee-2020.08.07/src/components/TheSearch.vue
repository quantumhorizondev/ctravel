<template>
    <div class="main-search">
        <div class="main-search-header">
            <h1 class="text-is-18">Найти тур</h1>
        </div>
        <div class="main-search-form">

            <div class="main-search-inputs">

                

                <b-dropdown aria-role="list" scrollable v-model="filters.activeDirection">
                    <b-field label="Направление"  slot="trigger">
                        <b-input :value="filters.activeDirection" readonly icon-right="icon-drop-down text-is-24"></b-input>
                    </b-field>

                    <b-dropdown-item aria-role="listitem"
                        v-for="item of filters.directions"
                        :key="item"
                        :value="item">{{item}}
                    </b-dropdown-item>
                </b-dropdown>


                


                <b-dropdown aria-role="menu">

                    <b-field label="Длительность тура"  slot="trigger">
                            <b-input :value="filters.duration[0] + ' - ' + filters.duration[1] + ' дней'" readonly icon-right="icon-drop-down text-is-24"></b-input>
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


                <b-dropdown aria-role="menu" class="not-w100 is-calendar" trap-focus>

                    <b-field label="Дата вылета"  slot="trigger">
                            <b-input :value="filters.dates | dateFormat" readonly icon-right="icon-calendar text-is-24"></b-input>
                        </b-field>

                    <b-dropdown-item
                        aria-role="menu-item"
                        custom
                        paddingless>
                        <b-datepicker v-model="filters.dates"  size="is-small"
                                inline range
                                      :unselectable-dates="unselectableDates">
                            </b-datepicker>
                    </b-dropdown-item>
                </b-dropdown>

                <div @click="openGuestsDropdown">
                    <b-dropdown append-to-body aria-role="menu" ref="guestsDropdown" :can-close="false" :close-on-click="false" class="not-w100">

                        <b-field label="Гости" slot="trigger">
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


                <button class="btn main-search-btn">
                    <span class="icon icon-search"></span>
                    Найти
                </button>
            </div>

        </div>

        <div class="main-search-filters" :class="{'pb-32': !availableActiveFilters && filters.isOpened }">
            <div class="filters-btn text-is-14 text-is-primary d-flex align-items-center justify-content-center justify-content-lg-between"
            :class="{ 'is-active': filters.isOpened }" @click="filters.isOpened = !filters.isOpened">
                <div class="filters-btn-main-label d-flex align-items-center">
                    <span class="icon icon-zoom"></span>
                    Расширенный поиск
                </div>

                <div class="line"></div>

                <div class="filters-btn-close-label d-flex align-items-center">
                    <span class="icon icon-minus-circle"></span>
                    Закрыть
                </div>
            </div>


            <div class="filters" :class="{ 'is-active': filters.isOpened }">


                <div class="row">

                    <div class="col-12 col-lg-6">


                        <div class="row">
                            <div class="col-12 col-lg-6">

                                <div class="filters-group mt-32">
                                    <div class="filters-group-name">Категория размещения</div>
                                    <ul class="hasnt-list-style">
                                        <li v-for="category of categoriesList" :key="category">
                                            <label class="filters-prop">
                                                <input type="checkbox" v-model="activeCategories" :value="category" />
                                                <span class="icon">
                                                        <span class="icon icon-star" v-for="i of category" :key="i*10"></span>
                                                    </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="filters-prop">
                                                <input type="checkbox" v-model="apartments" />
                                                <span class="icon icon-house"></span>
                                                Апартаменты
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                                <div class="filters-group mt-32">
                                    <div class="filters-group-name">{{filters.nutrition.name}}</div>

                                    <ul class="hasnt-list-style">
                                        <li v-for="item of filters.nutrition.items" :key="item">
                                            <label class="filters-prop">
                                                <input type="checkbox" :value="item" v-model="filters.active.nutrition"/>
                                                <span class="icon icon-check-circle"></span>
                                                {{item}}
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-12 col-lg-6">


                                <div class="filters-group mt-32">
                                    <div class="filters-group-name">{{filters.tourSet.name}}</div>

                                    <ul class="hasnt-list-style">
                                        <li v-for="item of filters.tourSet.items" :key="item">
                                            <label class="filters-prop" >
                                                <input type="checkbox" :value="item" v-model="filters.active.tourSet"/>
                                                <span class="icon icon-check-circle"></span>
                                                {{item}}
                                            </label>
                                        </li>
                                    </ul>
                                
                                </div>
                                <div class="filters-group mt-32">
                                    <div class="filters-group-name">{{filters.departure.name}}</div>
                                    
                                    <ul class="hasnt-list-style">
                                        <li v-for="item of filters.departure.items" :key="item">
                                            <label class="filters-prop" >
                                                <input type="checkbox" :value="item" v-model="filters.active.departure"/>
                                                <span class="icon icon-check-circle"></span>
                                                {{item}}
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                                <div class="filters-group mt-32">

                                    <div class="filters-group-name mb-32">Цена на одного человека</div>

                                    <vue-slider
                                        class="ui-slider"
                                        v-model="filters.priceRange"
                                        :enableCross="false"
                                        :min="filters.minPrice"
                                        :max="filters.maxPrice"
                                        :interval="1"
                                        tooltip='always'
                                        :dotSize="21"
                                        :height="3"
                                    :contained="true">
                                        <template v-slot:tooltip="{ value }">
                                            <div class="ui-slider-tooltip">{{ value * 10 }}€</div>
                                        </template>
                                    </vue-slider>
                                    <div class="ui-slider-minmax-range d-flex align-items-center justify-content-between text-is-14 text-is-888">
                                        <span>
                                            {{filters.minPrice === 0 ? filters.minPrice : filters.minPrice * 10}}€
                                        </span>
                                        <span>
                                            {{filters.maxPrice * 10}}€
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-lg-6">

                        <div class="filters-group mt-32">
                            <div class="filters-group-name">{{filters.regions.name}}</div>
                            
                                    
                                    <ul class="hasnt-list-style">
                                        <li v-for="item of filters.regions.items" :key="item">
                                            <label class="filters-prop" >
                                                <input type="checkbox" :value="item" v-model="filters.active.regions"/>
                                                <span class="icon icon-check-circle"></span>
                                                {{item}}
                                            </label>
                                        </li>
                                    </ul>            
                            
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-7">
                                <div class="filters-group mt-32">
                                    <div class="filters-group-name">Отель</div>
                                    <b-taginput
                                            :allow-new="false"
                                            v-model="hotels"
                                            ellipsis
                                            autocomplete
                                            :data="filteredHotels"
                                            placeholder="Например, Villa Var Village Villas"
                                            @typing="getSortedHotels"
                                            :allow-duplicates="false">
                                        <template slot="empty">Совпадений не найдено</template>
                                    </b-taginput>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="active-filters pt-16 mt-16 pt-lg-0" v-if="availableActiveFilters">
                <div class="text-is-14 mb-16 mb-lg-0 mt-lg-16 text-is-888 mr-lg-24">Активные фильтры:</div>

                <div v-if="activeCategories.length || apartments">
                    <div class="active-filters-group d-flex align-items-center flex-wrap mb-16 mb-lg-0 mr-lg-24 mt-lg-8">
                        <span class="text-is-555 text-is-14 ml-8 mt-8">Категория размещения</span>
                        <span class="filter-tag ml-8 mt-8" v-for="item of activeCategories" :key="item">{{item | categoryFormat}}</span>
                        <span class="filter-tag ml-8 mt-8" v-if="apartments">Апартаменты</span>
                    </div>
                </div>

                <div v-for="filter of Object.entries(filters.active)" :key="filter[0]">
                    <div v-if="filter[1].length" class="active-filters-group d-flex align-items-center flex-wrap mb-16 mb-lg-0 mr-lg-24 mt-lg-8">
                        <span class="text-is-555 text-is-14 ml-8 mt-8">{{filters[filter[0]].name}}</span>
                        <span class="filter-tag ml-8 mt-8"
                        v-for="item of filter[1]" :key="item">{{item}}</span>
                    </div>
                </div>


                <div v-if="changedPriceRange">
                    <div class="active-filters-group d-flex align-items-center flex-wrap mb-16 mb-lg-0 mr-lg-24 mt-lg-8">
                        <span class="text-is-555 text-is-14 ml-8 mt-8">Цена</span>
                        <span class="filter-tag ml-8 mt-8">
                            {{filters.priceRange[0] === 0 ? filters.priceRange[0] : filters.priceRange[0] * 10}}€ - {{filters.priceRange[1] * 10}}€
                        </span>
                    </div>
                </div>

                <div v-if="hotels.length">
                    <div class="active-filters-group d-flex align-items-center flex-wrap mb-16 mb-lg-0 mr-lg-24 mt-lg-8">
                        <span class="text-is-555 text-is-14 ml-8 mt-8">Отель</span>
                        <span class="filter-tag ml-8 mt-8" v-for="hotel of hotels" :key="hotel">
                            {{hotel}}
                        </span>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>


<script>
import ctGuests from './ui/Guests'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import moment from 'moment'
import 'moment/locale/ru';

moment.locale('ru');

function disabledDate(num) {
    return new Date(moment().add(num,'days'))
}

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
let hotelsList = [
                "Villa Var Village Villas",
                "The Suite Apart Hotel",
                "Limak Arcadia Golf & Sport Resort",
                "Maxx Royal Belek Golf Resort",
                "Lara Barut Collection",
                "Limak Lara De Luxe Hotel & Resort",
                "Commodore Elite Suites & Spa",
                "Gloria Verde Resort",
            ]

export default {
    components: {
        ctGuests,
        VueSlider
    },
    methods: {
        getSortedHotels(text) {
            console.log(text)
            this.filteredHotels = hotelsList.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(text.toLowerCase()) >= 0
                })
        },
        openGuestsDropdown() {
            setTimeout( () => {
                if (this.$refs.guestsDropdown.isActive) {
                    hideOnClickOutside(this.$refs.guestsDropdown.$refs.dropdownMenu, () => {
                        this.$refs.guestsDropdown.isActive = false
                    })
                }
            }, 10)
        },
        hotelInputBlur() {
            // if (!this.hotelsList.includes(this.hotel)) {
            //     this.hotel = ''
            // }
        }
    },
    data() {
        return {
            hotels: [],
            filteredHotels: hotelsList,
            unselectableDates: [
                disabledDate(1),
                disabledDate(2),
                disabledDate(-2),
                disabledDate(-3),
                disabledDate(-4),
                disabledDate(-5),
                disabledDate(-7),
                disabledDate(-9),
            ],
            activeCategories: [],
            apartments: false,
            categoriesList: [2,3,4,5],
            peoples: {
                adult: 1,
                child: []
            },
            filters: {
                minPrice: 0,
                maxPrice: 300,
                priceRange: [0, 300],
                isOpened: false,
                active: {
                    nutrition: [],
                    tourSet: [],
                    departure: [],
                    regions: [],
                },
                activeDirection: 'Все направления',
                dates: [new Date(), new Date()],
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
                    items: ['Албена','Банско', 'Бургас', 'Дюны', 'Елините', 'Золотые пески', 'Кранево', 'Несебр', 'Обзор', 'Помирие', 'Равда', 'Ривьера', 'Сарафово']
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
    computed: {
        availableActiveFilters() {
            if (this.activeCategories.length || this.apartments || this.changedPriceRange) {
                return true
            }
            for (let filter in this.filters.active) {
                if (this.filters.active[filter].length) {
                    return true
                }
            }
            return this.hotels.length > 0
        },
        changedPriceRange() {
            return Boolean(this.filters.priceRange[0] != this.filters.minPrice || this.filters.priceRange[1] != this.filters.maxPrice)
        }
    },
    filters: {
        categoryFormat(value) {

            let words = ['звезда', 'звезды', 'звезд']
            return value +' ' + words[(value % 100 > 4 && value % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(value % 10 < 5) ? value % 10 : 5]];
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
        dateFormat(dates) {
            return moment(dates[0]).format("DD MMMM YYYY").toString() + ' - ' + moment(dates[1]).format("DD MMMM YYYY").toString()
        },
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