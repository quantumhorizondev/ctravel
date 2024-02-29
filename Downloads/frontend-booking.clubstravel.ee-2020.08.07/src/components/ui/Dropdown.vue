<template>
    <div
            class="has-dropdown"
            tabindex="0"
            :class="{
      'is-opened': isOpened,
      'has-align-right': alignRight
    }"
            v-bind="$attrs"
            @click="toggleDropdownMenu"
            @focusout="closeDropdownMenu"
    >
        <slot name="header"></slot>
        <span
                v-if="icon"
                class="dropdown-icon is-small"
                :class="icon ? 'icon-' + icon : ''"
        ></span>
        <div class="dropdown-menu">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        props: {
            isHovered: {
                type: Boolean,
                default: false
            },
            alignRight: {
                type: Boolean,
                default: false
            },
            icon: {
                type: [String],
                default: null
            }
        },
        data() {
            return {
                isOpened: false
            };
        },
        methods: {
            toggleDropdownMenu() {
                console.log('blur')
                this.isOpened = !this.isOpened;
            },
            closeDropdownMenu() {
                this.isOpened = false;
            }
        }
    };
</script>

<style lang="sass">
    .has-dropdown
        position: relative
        cursor: pointer
        display: inline-flex
        align-items: center
        &:focus
            outline: none
        &.has-align-right
            .dropdown-menu
                right: 0
                left: auto
        .dropdown-icon
            margin-left: 48px / 8
            transition: .2s ease
        .dropdown-menu
            z-index: 1000
            position: absolute
            background: #111
            top: 100%
            left: 0
            border-radius: 0 0 6px 6px
            overflow: hidden
            display: none
            .item
                line-height: 1.2
                padding: .75rem 1rem
                display: block
                min-width: 160px
                color: #f9f9f9
                text-decoration: none
                &:hover
                    background: #0d0d0d

        &.is-opened, &.is-hovered:hover
            .dropdown-icon
                transform: rotate(180deg)
            .dropdown-menu
                display: block
                animation: profile-menu-is-opened .2s ease
</style>
