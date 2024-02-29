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

        <div class="section has-margin-top">

            <div class="section-header">
                <div class="container">
                    <div class="section-title d-md-flex justify-content-md-center align-items-md-center">
                        <span class="icon icon-offer text-is-red mr-md-8"></span>
                        <h1><span class="text-is-red">Кампании</span> и новости</h1>
                    </div>
                </div>
            </div>


             <ct-slider :options="mainSliderOps">

                <ct-slide v-for="i of 5" :key="i">
                    <ct-offer-card label="от <b>509€</b>" :tags="[ {icon: 'clock', text: '25 июня 2020'} ]">
                                Бархатный сезон в Греции!
                            </ct-offer-card>
                </ct-slide>

            </ct-slider>

            <div class="text-is-center">
                <a href="#" class="view-all-link">
                    Все кампании и новости
                    <span class="icon icon-arrow-right"></span>
                </a>
            </div>
        </div>


        <div class="section has-margin-top">

            <div class="section-header">
                <div class="container">
                    <div class="section-title d-md-flex justify-content-md-center align-items-md-center">
                        <span class="icon icon-fast-time text-is-red mr-md-8"></span>
                        <h1 class="text-is-red">Горящие предложения</h1>
                    </div>
                    <p class="section-subtitle">
                        Кто действует быстро - получает самые вкусные цены
                    </p>
                </div>
            </div>

            <ct-slider :options="mainSliderOps">

                <ct-slide v-for="i of 5" :key="i">
                    <ct-offer-card label="от <b>509€</b>" :tags="[ {icon: 'clock', text: '25 июня 2020'}, {icon: 'point', text: 'Болгария, Золотые пески'} ]">
                        Бархатный сезон в Греции!
                    </ct-offer-card>
                </ct-slide>

            </ct-slider>

            <div class="text-is-center">
                <a href="#" class="view-all-link">
                    Все горящие предложения
                    <span class="icon icon-arrow-right"></span>
                </a>
            </div>
        </div>



        <div class="section has-margin-top">

            <div class="section-header">
                <div class="container">
                    <h1 class="section-title">
                        Зимние туры
                    </h1>
                    <p class="section-subtitle">
                        Зима 2019-2020
                    </p>
                </div>
            </div>


             <ct-slider :options="seasonSliderOps">

                <ct-slide v-for="i of 5" :key="i">
                    <ct-offer-card :tags="[ {icon: 'clock', text: '25 июня 2020'} ]">
                        <div class="d-flex justify-content-between align-content-center mb-16">
                                <h3 class="text-is-16 d-inline-flex align-content-center">
                                    <span class="icon icon-point is-green text-is-24 mr-8"></span>
                                    Египет
                                </h3>
                                <span>
                                    от <b>509€</b>/чел
                                </span>
                            </div>
                            <a href="" class="btn d-flex">
                                Выбрать тур
                            </a>
                    </ct-offer-card>
                </ct-slide>

            </ct-slider>

            <div class="text-is-center">
                <a href="#" class="view-all-link">
                    Все зимние туры
                    <span class="icon icon-arrow-right"></span>
                </a>
            </div>
        </div>

        <div class="section has-margin-top">

            <div class="section-header">
                <div class="container">
                    <h1 class="section-title">
                        Летние туры
                    </h1>
                    <p class="section-subtitle">
                        Лето 2019-2020
                    </p>
                </div>
            </div>

            <ct-slider :options="seasonSliderOps">

                <ct-slide v-for="i of 5" :key="i">
                    <ct-offer-card :tags="[ {icon: 'clock', text: '25 июня 2020'} ]">
                        <div class="d-flex justify-content-between align-content-center mb-16">
                                <h3 class="text-is-16 d-inline-flex align-content-center">
                                    <span class="icon icon-point is-green text-is-24 mr-8"></span>
                                    Египет
                                </h3>
                                <span>
                                    от <b>509€</b>/чел
                                </span>
                            </div>
                            <a href="" class="btn d-flex">
                                Выбрать тур
                            </a>
                    </ct-offer-card>
                </ct-slide>

            </ct-slider>

            <div class="text-is-center">
                <a href="#" class="view-all-link">
                    Все летние туры
                    <span class="icon icon-arrow-right"></span>
                </a>
            </div>
        </div>


        <ctFeedback />

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
import ctFeedback from '../../components/ui/Feedback'

export default {
  name: 'App',
  components: {
    ctHeader,
    ctFooter,
    ctSearch,
    ctOfferCard,
    ctSlider,
    ctSlide,
    ctFeedback
  },
  mounted() {

  },
  data() {
      return {
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
        }
      }
  }
}
</script>

<style lang="sass">
</style>
