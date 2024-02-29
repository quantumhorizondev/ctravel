<template>
    <div class="table">

        <div class="d-sm-flex d-md-none justify-content-sm-between align-items-center mt-16 mt-xl-0 p-8">
            <span class="text-is-555 text-is-14 mr-12 d-block mb-8 mb-sm-0">Сортировать</span>
            <div class="d-flex">
                <b-dropdown aria-role="list" scrollable v-model="sortBy">
                    <b-input slot="trigger" readonly :value="columns.find(col => col.field === sortBy).label" icon-right="icon-drop-down text-is-24"></b-input>
                    <b-dropdown-item aria-role="listitem" v-for="column of columns" :key="column.field" :value="column.field">{{column.label}}</b-dropdown-item>
                </b-dropdown>
                <b-dropdown aria-role="list" scrollable v-model="sortDirection">
                    <b-input slot="trigger" readonly :value="sortNames[sortDirection]" icon-right="icon-drop-down text-is-24"></b-input>
                    <b-dropdown-item aria-role="listitem" value="ASC">По возрастанию</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" value="DESC">По убыванию</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div class="table-row table-header">

            <div
                class="table-cell text-is-14 text-is-555 text-is-bold"
                v-for="column of columns"
                :key="column.field"
                @click="setSort(column)"
            >
                {{column.label}}

                <span v-if="sortBy === column.field" class="icon icon-drop-down-solid text-is-primary" :class="{'is-asc': sortDirection === 'ASC'}"></span>

            </div>

            <div class="table-cell text-is-14 text-is-555 text-is-bold"></div>

        </div>

        


        <div class="table-row" v-for="item of sortedData" :key="item.id">

            <div
                class="table-cell"
                :data-label="column.label"
                v-for="column of columns"
                :key="column.field"
                v-html="column.formatter(item[column.field])"
            ></div>

            <div class="table-cell hasnt-label">
                    <div class="btn">Выбрать</div>
                </div>

        </div>
    </div>
</template>




<script>

let sortTypes = ['DESC', 'ASC']

let sortNames = {
    DESC: 'По убыванию',
    ASC: 'По возрастанию'
}

export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },
    created() {
        console.log(Object.keys(this.data[0])[0])
    },
    data() {
        return {
            sortNames,
            sortBy: Object.keys(this.data[0])[0],
            sortDirection: 'ASC'
        }
    },
    computed: {
        sortedData() {
            return this.data.sort((a,b) => {
                if (this.sortDirection === 'DESC') {
                    if (a[this.sortBy] > b[this.sortBy]) return -1;
                    if (a[this.sortBy] < b[this.sortBy]) return 1;
                    return 0;
                }
                if (this.sortDirection === 'ASC') {
                    if (a[this.sortBy] < b[this.sortBy]) return -1;
                    if (a[this.sortBy] > b[this.sortBy]) return 1;
                    return 0;
                }
            })
        }
    },
    methods: {
        setSort(column) {
            if (!column.sortable) return;
            if (this.sortBy === column.field) {
                this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC'
            } else {
                this.sortBy = column.field
            }
        }
    }
}
</script>


<style lang="sass">
.table-header
    .table-cell
        cursor: pointer
        user-select: none
        .icon.is-asc
            transform: rotate(180deg)
</style>