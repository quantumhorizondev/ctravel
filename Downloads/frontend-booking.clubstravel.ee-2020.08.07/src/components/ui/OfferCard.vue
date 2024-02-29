<template>
    <div class="offer-card box">
        <a href="/hotel.html" class="offer-card-img d-block">
            <img :src="`assets/hotel-card-imgs/img (${Math.floor(Math.random() * 22)}).jpg`" alt="">
            <ul class="tags hasnt-list-style" v-if="tags.length">
                <li v-for="(tag, i) of tags" :key="i">
                    <div class="tag">
                        <span class="icon" :class="'icon-' + tag.icon"></span> {{tag.text}}
                    </div>
                </li>
            </ul>
        </a>
        <div class="offer-card-content">
            <div class="offer-card-label is-fixed" v-if="label">
                    <svg class="offer-card-label-zigzag" viewBox="0 0 3 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3.09998L3 0L3 6.19998L0 3.09998Z" fill="#F68521"/>
                        <path d="M0 15.5L3 12.4V18.6L0 15.5Z" fill="#F68521"/>
                        <path d="M0 21.7L3 18.6V24.8L0 21.7Z" fill="#F68521"/>
                        <path d="M0 9.29998L3 6.19998V12.4L0 9.29998Z" fill="#F68521"/>
                        <path d="M0 27.9L3 24.8V31L0 27.9Z" fill="#F68521"/>
                    </svg>                                                       
                    <span class="offer-card-label-text" v-html="label"></span>
                </div>
            
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: [String, Boolean],
            default: false
        },
        tags: {
            type: Array,
            default: () => []
        }
    }
}
</script>