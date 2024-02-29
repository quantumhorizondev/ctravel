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


    <section class="section has-margin-top directions-page">

        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3">
    
                    <h1 class="mb-16 mb-md-32 text-is-222">Направления</h1>
    
                    <ul class="hasnt-list-style">

                        <li class="mb-8">
                            <label class="input-checkbox d-flex justify-content-between flex-row-reverse d-md-inline-flex flex-md-row justify-content-md-start">
                                <input type="checkbox" v-model="allRegions" />
                                <span class="icon icon-check"></span>
                                Все страны
                            </label>
                        </li>

                        <li class="mb-8" v-for="item of ['Египет','ОАЭ','Тайланд','Болгария','Тенерифе','Бали','Грузия','Греция','Турция','Кипр']" :key="item">
                            <label class="input-checkbox d-flex justify-content-between flex-row-reverse d-md-inline-flex flex-md-row justify-content-md-start">
                                <input type="checkbox" :checked="allRegions" />
                                <span class="icon icon-check"></span>
                                {{ item }}
                            </label>
                        </li>

                    </ul>
    
                </div>
                <div class="col">

                    <div class="row">

                        <div class="col-12 col-sm-6 col-lg-4" v-for="i of 9" :key="i">
                            <ct-offer-card class="is-direction mb-24">
                                <div class="d-flex justify-content-between">
                                        <h3 class="text-is-16"><b>Алания</b></h3>
                                        <span>от <b>319,00€</b>/чел</span>
                                    </div>
                                    <div class="d-flex justify-content-between text-is-14 text-is-888">
                                        <span>Турция</span>
                                        <span>214 предложения</span>
                                    </div>
                                    <div class="d-flex offer-card-dates justify-content-between align-items-center mt-16 mb-24">
                                        <ul class="hasnt-list-style text-is-12">
                                            <li>19 июня 2020 - 30 сентября 2020</li>
                                            <li>08 июля 2020 - 05 апреля 2021</li>
                                        </ul>
                                        <span class="icon icon-calendar text-is-24"></span>
                                    </div>

                                    <a href="" class="btn is-full-width">Выбрать тур</a>
                            </ct-offer-card>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    </section>

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
          allRegions: true,
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
