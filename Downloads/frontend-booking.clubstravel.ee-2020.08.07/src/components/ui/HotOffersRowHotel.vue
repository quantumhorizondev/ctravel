<template>
    <div class="table-row" >
        <div class="table-cell is-first" data-label="Отель"><a href="/hotel">{{hotel.name}}</a></div>
        <div class="table-cell" data-label="Категория">
            <span class="icon icon-star text-is-18" v-for="i of hotel.category" :key="i"></span>
        </div>
        <div class="table-cell" data-label="Питание">{{hotel.feed}}</div>
        <div class="table-cell" data-label="Состав тура">{{hotel.tour_set}}</div>
        <div class="table-cell" data-label="Цена">
            <p>от <b>{{hotel.price}}€</b>/чел</p>
        </div>
        <div class="table-cell is-last hasnt-label">
            
            <template v-if="hotel.offers.length > 1">
                <div class="btn d-flex is-bordered" @click="showHotelDetail" :class="{ 'is-active': hotelDetailIsOpened }">
                    <span class="text">{{ hotelDetailIsOpened ? 'Скрыть предложения' : 'Открыть предложения' }}</span>
                    <span class="icon icon-drop-down-solid text-is-24 text-is-555"></span>
                </div>
            </template>
            <template v-else>
                <div class="btn d-flex">Выбрать</div>
            </template>

        </div>
        <div class="table-detail hotel-detail" v-if="hotel.offers.length > 1" :class="{ 'is-visible': hotelDetailIsOpened }">
            <div class="table-row" v-for="offer in hotel.offers" :key="offer.id">
                <div class="table-cell is-first" data-label="Отель">➞ {{offer.name}}</div>
                <div class="table-cell" data-label="Категория">
                    <span class="icon icon-star text-is-18" v-for="i of offer.category" :key="i"></span>
                </div>
                <div class="table-cell"  data-label="Питание">{{offer.feed}}</div>
                <div class="table-cell" data-label="Состав тура">{{offer.tour_set}}</div>
                <div class="table-cell" data-label="Цена">
                    <p>от <b>{{offer.price}}€</b>/чел</p>
                </div>
                <div class="table-cell is-last hasnt-label">
                    <div class="btn d-flex">Выбрать</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        hotel: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hotelDetailIsOpened: false,
        }
    },
    methods: {
        showHotelDetail() {
            this.hotelDetailIsOpened = !this.hotelDetailIsOpened   
        },
    }
}
</script>