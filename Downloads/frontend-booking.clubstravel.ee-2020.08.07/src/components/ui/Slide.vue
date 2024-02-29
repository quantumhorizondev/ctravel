<template>
    <div class="swiper-slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
  data() {
    return {

    };
  },
  methods: {},
  created() {
    if (!this.$parent.$data._isSlider) {
      this.$destroy();
      throw new Error("You should wrap Slider on a Slides");
    }
    this.$parent.slideItems.push(this);
  }
};
</script>