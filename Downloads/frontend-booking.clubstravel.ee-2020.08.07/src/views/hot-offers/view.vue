<template>
  <div id="app">
        <ct-header />

        <section class="cover-slider">
            <div class="cover-slider-items">
                <img src="assets/cover.jpg" alt="" class="cover-slider-item">
            </div>
            <div class="cover-slider-bottom-decoration">
                <img src="assets/cover-decoration-1.svg" alt="">
            </div>
        </section>

        <ct-search />

        <ct-hot-offers-table :data="data" class="hot-offers-table"/>

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
import ctHotOffersTable from '../../components/ui/HotOffersTable'
import ctHotOffersRow from '../../components/ui/HotOffersRow'

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
    ctHotOffersTable,
    ctHotOffersRow,
  },
  data() {
            return {
                data: [
                    {
                        id: 1,
                        date: '25 июня 2020',
                        from: 'Хельсинки',
                        to: 'Hania, Kreeta',
                        duration: 14,
                        price: 450,
                        hotels: [
                            {
                                id: 2,
                                name: 'Марилиана, Платанья',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 450,
                                offers: [
                                    {
                                        id: 3,
                                        name: 'Марилиана, Платанья',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 450,
                                    },
                                    {
                                        id: 4,
                                        name: 'Марилиана, Платанья',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 450,
                                    }
                                ]
                            },
                            {
                                id: 5,
                                name: 'Creta Palm, Kato Stalos',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 489,
                                offers: [
                                    {
                                        id: 6,
                                        name: 'Creta Palm, Kato Stalos',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 489,
                                    },
                                    {
                                        id: 7,
                                        name: 'Creta Palm, Kato Stalos',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 930,
                                    },
                                    {
                                        id: 8,
                                        name: 'Creta Palm, Kato Stalos',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 672,
                                    },
                                    {
                                        id: 9,
                                        name: 'Creta Palm, Kato Stalos',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 510,
                                    }
                                ]
                            },
                            {
                                id: 10,
                                name: 'Maleme Imperial, Maleme',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 450,
                                offers: [
                                    {
                                        id: 11,
                                        name: 'Maleme Imperial, Maleme',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 450,
                                    },
                                    {
                                        id: 12,
                                        name: 'Maleme Imperial, Maleme',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 466,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        date: '25 июня 2020',
                        from: 'Хельсинки',
                        to: 'Brac',
                        duration: 21,
                        price: 400,
                        hotels: [
                            {
                                id: 14,
                                name: 'Evropi, Platanias',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 400,
                                offers: [
                                    {
                                        id: 15,
                                        name: 'Evropi, Platanias',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 400,
                                    },
                                    {
                                        id: 16,
                                        name: 'Evropi, Platanias',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 600,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 17,
                        date: '25 июня 2020',
                        from: 'Хельсинки',
                        to: 'Rethymnon, Kreeta',
                        duration: 14,
                        price: 200,
                        hotels: [
                            {
                                id: 18,
                                name: 'Alexia, Agia Marina',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 210,
                                offers: [
                                    {
                                        id: 19,
                                        name: 'Alexia, Agia Marina',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 210,
                                    },
                                ]
                            },
                            {
                                id: 20,
                                name: 'Cretan Dream Royal',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 200,
                                offers: [
                                    {
                                        id: 21,
                                        name: 'Cretan Dream Royal',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 200,
                                    },
                                    {
                                        id: 22,
                                        name: 'Cretan Dream Royal',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 450,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 23,
                        date: '25 июня 2020',
                        from: 'Хельсинки',
                        to: 'Torremolinos',
                        duration: 30,
                        price: 900,
                        hotels: [
                            {
                                id: 24,
                                name: 'Марилиана, Платанья',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 900,
                                offers: [
                                    {
                                        id: 25,
                                        name: 'Марилиана, Платанья',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 900,
                                    },
                                    {
                                        id: 26,
                                        name: 'Марилиана, Платанья',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 1050,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 27,
                        date: '25 июня 2020',
                        from: 'Хельсинки',
                        to: 'Mlini',
                        duration: 7,
                        price: 420,
                        hotels: [
                            {
                                id: 28,
                                name: 'Марилиана, Платанья',
                                category: 3,
                                feed: 'Завтраки',
                                tour_set: 'Только перелет',
                                price: 420,
                                offers: [
                                    {
                                        id: 29,
                                        name: 'Марилиана, Платанья',
                                        category: 3,
                                        feed: 'Завтраки',
                                        tour_set: 'Только перелет',
                                        price: 420,
                                    },
                                ]
                            },
                        ]
                    }
                ],
            }
        },

}
</script>

<style lang="sass">

</style>
