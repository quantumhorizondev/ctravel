<template>
  <div id="app">
        <ct-header />

        <section class="cover-slider">
        <div class="cover-slider-items">
            <img src="assets/cover.jpg" alt="" class="cover-slider-item">
        </div>
        <div class="cover-slider-bottom-decoration">
            <img src="assets/cover-decoration-3.svg" alt="">
        </div>
    </section>
    
    <section class="section mt-60">

        <div class="section-header mb-40">
            <div class="container text-is-center">
                <h1 class="section-title d-inline-flex flex-wrap align-items-center">
                    <span class="icon icon-offer text-is-red mr-8"></span>
                    <span><span class="text-is-red">Кампании</span> и новости</span>
                </h1>
            </div>
        </div>

        <div class="container">


            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4 mb-24" v-for="i of 9" :key="i">


                    <ct-offer-card label="от <b>509€</b>" :tags="[ {icon: 'clock', text: '25 июня 2020'} ]" >
                    Бархатный сезон в Греции!
                </ct-offer-card>


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
