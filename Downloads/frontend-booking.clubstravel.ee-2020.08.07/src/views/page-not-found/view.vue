<template>
  <div id="app">
        <ct-header />
        <section class="section has-blue-bg footer-without-margin" style="background-image: url('assets/feedback.jpg')">
            <div class="bg-overlay"></div>
            <div class="container">
                
                <div class="page-not-found text-is-center">
                    <div class="page-not-found-title">Ой!</div>
                    <h1 class="text-is-24 mb-48 page-not-found-subtitle">Ошибка 404. Похоже, страницы не существует.</h1>
                    <p class="text-is-14 mb-16">Вот несколько полезных ссылок:</p>
                    <ul>
                        <li><a href="" class="d-inline-block mb-8">Поиск тура</a></li>
                        <li><a href="" class="d-inline-block mb-8">Направления</a></li>
                        <li><a href="" class="d-inline-block mb-8">Кампании</a></li>
                        <li><a href="" class="d-inline-block mb-8">Горящие предложения</a></li>
                        <li><a href="" class="d-inline-block mb-8">Запрос тура</a></li>
                        <li><a href="" class="d-inline-block ">Контакты</a></li>
                    </ul>
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
