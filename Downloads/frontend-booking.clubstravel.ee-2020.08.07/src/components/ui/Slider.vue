<template>
    <div class="slider" ref="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">


                <slot>
                </slot>
                    

            </div>
        </div>

        <div class="swiper-button-prev slider-arrow" @click="slider.slidePrev()">
            <span class="icon icon-drop-down"></span>
        </div>
        <div class="swiper-button-next slider-arrow is-right" @click="slider.slideNext()">
            <span class="icon icon-drop-down"></span>
        </div>

    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            slideItems: [],
            _isSlider: true,
            slider: null,
        };
    },
    methods: {
    },
    mounted() {

        this.slider = new Swiper(this.$refs.slider.querySelector('.swiper-container'),  this.options)

    }
};
</script>