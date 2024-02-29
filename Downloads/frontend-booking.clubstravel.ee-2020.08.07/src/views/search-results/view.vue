<template>
  <div id="app">
        <ct-header />

        <section class="cover-slider is-large">
            <div class="cover-slider-items">
                <img src="assets/cover.jpg" alt="" class="cover-slider-item">
            </div>
            <div class="cover-slider-bottom-decoration">
                <img src="assets/cover-decoration-1.svg" alt="">
            </div>
        </section>

        <ct-search />

      <div class="search-results">

        <div class="container">




                <div class="search-results-topbar mt-16 mt-lg-40 mb-48 d-md-flex align-items-center" v-if="!calendarView">


                    <div class="row">
                        <div class="col-12 col-xl-5 d-flex align-items-center">
                            <p class="text-is-20 text-is-24">Найдено 64 предложения в 24 отелях</p>
                        </div>
                        <div class="col-12 col-md-5 col-xl-3">
                            <div class="btn is-bordered is-full-width mt-16 mt-xl-0 text-is-primary" @click="changeView">
                                <span class="icon-calendar-euro text-is-24 mr-12"></span>
                                Цены по датам
                            </div>
                        </div>

                        <div class="col-12 col-md-7 col-xl-4">
                            <div class="d-sm-flex justify-content-sm-between align-items-center mt-16 mt-xl-0">
                                <span class="text-is-555 text-is-14 mr-12 d-block mb-8 mb-sm-0">Сортировать</span>
                                <div class="d-flex">
                                    <b-dropdown aria-role="list" scrollable>
                                        <b-input readonly slot="trigger" value="Цена" icon-right="icon-drop-down text-is-24"></b-input>

                                        <b-dropdown-item aria-role="listitem">Цена</b-dropdown-item>
                                        <b-dropdown-item aria-role="listitem">Кол-во предложений</b-dropdown-item>
                                        <b-dropdown-item aria-role="listitem">Дата</b-dropdown-item>
                                    </b-dropdown>
                                    <b-dropdown aria-role="list" scrollable>
                                        <b-input slot="trigger" value="Возрастание" readonly icon-right="icon-drop-down text-is-24"></b-input>

                                        <b-dropdown-item aria-role="listitem">Возрастание</b-dropdown-item>
                                        <b-dropdown-item aria-role="listitem">Убывание</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="mt-16 mt-lg-40 mb-24 d-flex justify-content-between align-items-center flex-wrap" v-else>
                        <div class="d-flex flex-wrap">
                            <p class="text-is-20 text-is-24 mr-md-24">Найдено 64 предложения в 24 отелях</p>
                            <div class="d-none d-md-flex justify-content-start align-items-center">
                                <span class="icon icon-calendar-euro is-green text-is-24 mr-12"></span>
                                <span class="text-is-24">Сравнение цен по датам</span>
                            </div>
                        </div>
                        
                        <div class="btn is-bordered mt-16 mt-xl-0 text-is-primary" @click="changeView">
                            <span class="icon-list text-is-24 mr-12"></span>
                            Список отелей
                        </div>
                    </div>

            </div>




      <ct-slider :options="calendarSliderOps" class="mb-48" v-if="calendarView">
          <ct-slide>
              <div>
                  <ct-offers-calendar :active="true"/>
              </div>
          </ct-slide>
          <ct-slide v-for="i of 8" :key="i">
              <div>
                  <ct-offers-calendar />
              </div>
          </ct-slide>
      </ct-slider>



      <div class="container">
          <div class="date-offers-title pb-8 mb-40" v-if="calendarView">
              <h2 class="text-is-24">Предложения на <b>21.06.2020</b> от <b>455€</b></h2>
          </div>
          <ct-hotel-card v-for="i of 5" :key="i" />

      </div>




      </div>








        <!-- <%= require('html-loader!./views/feedback.html') %> -->

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
import ctHotelCard from '../../components/ui/HotelCard'
import ctOffersCalendar from '../../components/ui/OffersCalendar'

export default {
  name: 'App',
  components: {
    ctHeader,
    ctFooter,
    ctSearch,
    ctOfferCard,
    ctSlider,
    ctSlide,
    ctHotelCard,
      ctOffersCalendar
  },
  mounted() {

  },
  data() {
      return {
          calendarView: false,
          calendarSliderOps: {
              slidesPerView: 'auto',
              spaceBetween: 24,
              // centeredSlides: true,
              // centeredSlidesBounds: true,

              breakpoints: {
                  320: {
                      slidesPerView: 1,
                  },
                  620: {
                      slidesPerView: 2,
                  },
                  890: {
                      slidesPerView: 3,
                  },
                  1150: {
                      slidesPerView: 4,
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
        }
      }
  },
  methods: {
      changeView() {
          this.calendarView = !this.calendarView
      }
  }
}
</script>

<style lang="sass">
</style>
