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
                <div class="row">
                    <div class="col-xl-7">
                        <h1 class="mb-16 text-is-36 is-big mt-40 mt-lg-24">Контакты</h1>
                        <h2 class="mb-16 text-is-18">Напишите нам</h2>
                        <p class="mb-32 text-is-888">Оставьте свой номер телефона или электронную почту и мы свяжемся с вами</p>
                        <p><b>Clubs Travel OÜ</b></p>
                        <ul>
                            <li class="d-flex align-items-center mt-24">
                                <span class="icon icon-mail is-green text-is-24 mr-12"></span>
                                <a href="">info@clubstravel.ee</a>
                            </li>
                            <li class="d-flex align-items-center mt-24">
                                <span class="icon icon-phone is-green text-is-24 mr-12"></span>
                                <span><a href="">+372 555 60 310</a> | <a href="">+372 61 30 633</a></span>
                            </li>
                            <li class="d-flex align-items-center mt-24">
                                <span class="icon icon-clock is-green text-is-24 mr-12"></span>
                                Пн-Пт 9:30-18:00, Сб 11:00-15:00
                            </li>
                            <li class="d-flex align-items-center mt-24">
                                <span class="icon icon-point is-green text-is-24 mr-12"></span>
                                Narva mnt 7D, Tallinn (корпус B) 4 этаж
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="sidebar has-margin-top-40">

                <div class="box p-24 mt-32 mt-lg-0">
                    
                    <form action="">

                        <b-field label="Имя (необязательно)">
                            <b-input></b-input>
                        </b-field>

                        <b-field label="Номер телефона">
                            <b-input></b-input>
                        </b-field>

                        <b-field label="E-mail">
                            <b-input></b-input>
                        </b-field>

                        <b-field label="Сообщение (необязательно)">
                            <b-input type="textarea" rows="2"></b-input>
                        </b-field>

                        <button class="btn is-full-width mt-32">Отправить</button>
                    </form>

                </div>

            </div>

        </div>

        <iframe class="map-frame mt-60" src="https://maps.google.com/maps?q=Clubs Travel&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" aria-label="Clubs Travel"></iframe>

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
