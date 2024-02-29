<template>
    <div class="table mt-60">
        <div class="table-row table-header">
            <div class="table-cell text-is-14 is-first">Дата</div>
            <div class="table-cell text-is-14">Откуда</div>
            <div class="table-cell text-is-14">Куда</div>
            <div class="table-cell text-is-14">Длительность</div>
            <div class="table-cell text-is-14">Цена</div>
            <div class="table-cell is-last"></div>
        </div>

        <ct-hot-offers-row :rowData="row" @detail-open="onDetailOpen($event)" v-for="row in data" :key="row.id" />

    </div>
</template>

<script>
import ctHotOffersRow from './HotOffersRow'

export default {
    components: {
        ctHotOffersRow
    },
    props: {
        data: {
            openedRowId: null,
            type: Array,
            required: true
        }
    },
    data() {
        return {
            rowItems: [],
            _isHotOffersTable: true,
        };
    },
    methods: {
        onDetailOpen(rowData) {
            this.rowItems.forEach(row => {
                if (row.rowData.id != rowData.id) {
                    row.rowDetailIsOpened = false
                }
            })
        }
    }
}
</script>