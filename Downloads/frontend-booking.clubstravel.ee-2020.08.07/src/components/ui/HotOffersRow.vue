<template>
    <div class="table-row" :class="{ 'is-opened': rowDetailIsOpened }">

            <div class="table-cell is-first" @click="showRowDetail()" data-label="Дата">{{rowData.date}}</div>

            <div class="table-cell" @click="showRowDetail()" data-label="Откуда">{{rowData.from}}</div>

            <div class="table-cell" @click="showRowDetail()" data-label="Куда">{{rowData.to}}</div>

            <div class="table-cell" @click="showRowDetail()" data-label="Длительность">{{rowData.duration | dayFormat}}</div>

            <div class="table-cell" @click="showRowDetail()" data-label="Цена">
                <p>от <b>{{rowData.price}}€</b>/чел</p>
            </div>

            <div class="table-cell is-last hasnt-label">
                <div @click="showRowDetail()" class="open-btn" :class="{ 'text-is-222': rowDetailIsOpened }">
                    {{ rowDetailIsOpened ? 'Закрыть' : 'Открыть' }}
                </div>
            </div>

            <div class="table-detail" :class="{ 'is-visible': rowDetailIsOpened }">
                <div class="table-row table-header">
                    <div class="table-cell is-first">Отель</div>
                    <div class="table-cell">Категория</div>
                    <div class="table-cell">Питание</div>
                    <div class="table-cell">Состав тура</div>
                    <div class="table-cell">Цена</div>
                    <div class="table-cell is-last"></div>
                </div>

                <ctHotOffersRowHotel :hotel="hotel" v-for="hotel in rowData.hotels" :key="hotel.id" />
                
            </div>
        </div>
</template>


<script>
import ctHotOffersRowHotel from './HotOffersRowHotel'

export default {
    components: {
        ctHotOffersRowHotel
    },
    props: {
        rowData: {
            type: Object,
            required: true
        }
    },
    created() {
        if (!this.$parent.$data._isHotOffersTable) {
        this.$destroy();
            throw new Error("You should wrap HotOffersRow on a HotOffersTable");
        }
        this.$parent.rowItems.push(this);
    },
    data() {
        return {
            rowDetailIsOpened: false,
        }
    },
    methods: {
        showRowDetail() {
            if (!this.rowDetailIsOpened) {
                this.$emit('detail-open', this.rowData)
            }
            this.rowDetailIsOpened = !this.rowDetailIsOpened
        },
    },
    filters: {
        dayFormat(day) {

            // function declOfNum(n, text_forms) {
            //     n = Math.abs(n) % 100; var n1 = n % 10;
            //     if (n > 10 && n < 20) { return text_forms[2]; }
            //     if (n1 > 1 && n1 < 5) { return text_forms[1]; }
            //     if (n1 == 1) { return text_forms[0]; }
            //     return text_forms[2];
            // }

            let words = ['день', 'дня', 'дней']
            return day +' ' + words[(day % 100 > 4 && day % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(day % 10 < 5) ? day % 10 : 5]];
        },
    }

}
</script>