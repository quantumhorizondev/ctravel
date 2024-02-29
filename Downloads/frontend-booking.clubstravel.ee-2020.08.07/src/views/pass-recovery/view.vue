<template>
  <div id="app">
        <ct-header />
        <ct-mobile-menu />

        <section class="section has-blue-bg footer-without-margin" style="background-image: url('assets/feedback.jpg')">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="auth">
                <div class="auth-box box">
                    
                    <div class="text-is-center text-is-14 mb-32 text-is-555">
                        Мы отправим специальную ссылку на указанный электронный адрес, перейдя по которой вы сможете задать новый пароль.
                    </div>

                    <form action="">
                        
                        <b-field label="E-mail">
                            <b-input/>
                        </b-field>

                        <div class="auth-controls mt-32">
                            <button class="btn">Отправить</button>
                        </div>

                    </form>
                    
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
