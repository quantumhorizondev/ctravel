<template>
    <div>
        <p class="text-is-14 text-is-888 mb-16">
            Добавьте необходимое кол-во гостей и укажите возраст
        </p>

        <table class="guests-table">
            <tr>
                <td class="pt-12">
                    <b-input slot="trigger" readonly value="Взрослый"></b-input>
                </td>
                <td class="pt-12">
                    <div class="d-flex justify-content-start align-items-center">
                        <b-numberinput :min="1" expanded v-model="peoples.adult"></b-numberinput>
                    </div>

                </td>
            </tr>

            <tr v-for="people of peoples.child" :key="people.id">
                <td class="pt-12">
                    <b-dropdown aria-role="list" :close-on-click="false" scrollable v-model="people.type">
                        <b-input slot="trigger" readonly :value="people.type" icon-right="icon-drop-down text-is-24" ></b-input>
                        <b-dropdown-item aria-role="listitem" class="js-dropdown-item text-is-888" value="Ребёнок" disabled>Ребёнок</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem" class="js-dropdown-item pl-24" v-for="item of availableTypes" :key="item" :value="item">{{item}}</b-dropdown-item>
                    </b-dropdown>
                </td>
                <td class="pt-12">
                    <div class="d-flex justify-content-start align-items-center">
                        <b-numberinput :min="1" expanded v-model="people.count"></b-numberinput>
                        <span class="icon js-remove-btn icon-close text-is-red text-is-24" @click="removePeople(people.id)"></span>
                    </div>
                </td>
            </tr>
        </table>

        <div class="btn js-add-btn d-flex mt-12 is-bordered" @click="addPeople()" v-if="peoples.child.length < maxPeoplesLength">
            Добавить
        </div>
    </div>

</template>

<script>
import ctNumberInput from './NumberInput'
const { v4: uuidv4 } = require('uuid');

const defaultPeople = {
    id: 0,
    type: 'Взрослый',
    count: 1
}


export default {
    components: {
        ctNumberInput
    },
    props: {
        peoples: {
            type: Object,
        }
    },
    data() {
        return {
            adult: {
                id: 99,
                type: 'Взрослый',
                count: 1
            },
            maxPeoplesLength: 5,
            childTypes: [
                '< 1 года',
                '1 год',
                '2 года',
                '3 года',
                '4 года',
                '5 лет',
                '6 лет',
                '7 лет',
                '8 лет',
                '9 лет',
                '10 лет',
                '11 лет',
                '12 лет',
                '13 лет',
                '14 лет',
                '15 лет',
                '16 лет',
                '17 лет',
            ]
        }
    },
    computed: {
      availableTypes() {
          return this.childTypes.filter(childType => !this.peoples.child.find(people => people.type === childType))
      },
    },
    methods: {
        isDisabled(type) {
            return false
           return Boolean(this.peoples.child.find(people => people.type === type))
        },
        addPeople(e) {
            this.peoples.child.push({
                id: uuidv4(),
                type: this.availableTypes[0],
                count: 1
            })
        },
        removePeople(id) {
            let findIndex = this.peoples.child.findIndex(people => people.id === id)
            this.peoples.child.splice(findIndex, 1)
        }
    },
    
}
</script>