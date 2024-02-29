<template>
    <div class="input-number">
    <span class="icon icon-minus-circle text-is-14 text-is-primary input-number-control"></span>
        <b-numberinput :controls="false"></b-numberinput>
    <span class="icon icon-plus-circle text-is-14 text-is-primary input-number-control"></span>
    </div>
</template>

<style lang="sass" scoped>
.b-numberinput
    min-width: 90px
    min-height: 42px
    input
        // border: none
        // display: block
        // width: 100%
        // border-radius: 6px
        // padding: 12px 16px
        // height: 42px
        // font-size: 1rem
</style>