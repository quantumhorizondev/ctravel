import Vue from 'vue'
import App from './view.vue'
import '../../sass/buefy.scss'
import '../../sass/main.sass'

Vue.config.productionTip = false

import Buefy from 'buefy'

Vue.use(Buefy, {
    defaultIconPack: 'icon',
    defaultMonthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    defaultDayNames: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
})
new Vue({
  render: h => h(App),
}).$mount('#app')
