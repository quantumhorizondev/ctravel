<template>
  <div id="app">
        <ct-header />

        <section class="section has-blue-bg footer-without-margin" style="background-image: url('assets/feedback.jpg')">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="auth">
                <div class="auth-box box">
                    
                    <div class="text-is-center mb-32 text-is-14 text-is-555">
                        Войдите используя соц. сети
                    </div>

                    <div class="auth-btn btn facebook mb-16 is-full-width">
                        <img src="assets/facebook.svg" alt="" class="auth-btn-icon">
                        Войти с помощью Facebook
                    </div>

                    <div class="auth-btn btn is-full-width">
                        <img src="assets/google.svg" alt="" class="auth-btn-icon">
                        Войти с помощью Google
                    </div>

                    <form action="">

                        <div class="divider mt-32 mb-32">
                            <span class="divider-text" data-text="или"></span>
                        </div>

                        <b-field label="E-mail">
                            <b-input/>
                        </b-field>

                        <b-field label="Пароль">
                            <template slot="label">
                                <div class="d-flex justify-content-between mr-16">
                                    Пароль
                                    <a href="/pass-recovery.html">Забыли пароль?</a>
                                </div>
                            </template>
                            <b-input type="password"/>
                        </b-field>

                        <div class="auth-controls mt-32">
                            <a href="/account.html" class="btn">Вход</a>
                            <a href="/registration.html" class="btn is-bordered mt-24 mt-lg-0">Регистрация</a>
                        </div>

                    </form>
                    
                </div>

                <ul class="auth-links mt-16 text-ix-14">
                    <li><a href="">Политика конфиденциальности</a></li>
                    <li><a href="">Политика использования</a></li>
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
