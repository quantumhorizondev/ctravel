<template>
    <div class="offers-calendar box">
        <div class="offers-calendar-header">
            <div class="pt-16 pb-16 d-block text-is-center">Май 2020</div>
            <div class="offers-calendar-days">
                <div class="text-is-14 mb-16">пн</div>
                <div class="text-is-14 mb-16">вт</div>
                <div class="text-is-14 mb-16">ср</div>
                <div class="text-is-14 mb-16">чт</div>
                <div class="text-is-14 mb-16">пт</div>
                <div class="text-is-14 mb-16">сб</div>
                <div class="text-is-14 mb-16">вс</div>
            </div>
        </div>
        <table class="offers-calendar-body text-is-14">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="hasnt-offers">1</td>
                <td class="hasnt-offers">2</td>
                <td class="hasnt-offers">3</td>
            </tr>
            <tr>
                <td class="hasnt-offers">4</td>
                <td class="hasnt-offers">5</td>
                <td class="hasnt-offers">6</td>
                <td class="hasnt-offers">7</td>
                <td class="hasnt-offers">8</td>
                <td class="hasnt-offers">9</td>
                <td class="hasnt-offers">10</td>
            </tr>
            <tr>
                <td class="hasnt-offers">11</td>
                <td class="hasnt-offers">12</td>
                <td class="hasnt-offers">13</td>
                <td class="hasnt-offers">14</td>
                <td class="hasnt-offers">15</td>
                <td class="hasnt-offers">16</td>
                <td class="hasnt-offers">17</td>
            </tr>
            <tr>
                <td class="hasnt-offers">18</td>
                <td class="hasnt-offers">19</td>
                <td class="hasnt-offers">20</td>
                <td class="has-offers" :class="{ 'is-active': active }">21 <div class="price text-is-12 mt-6">455€</div></td>
                <td class="has-offers">22 <div class="price text-is-12 mt-6">455€</div></td>
                <td class="hasnt-offers">23</td>
                <td class="hasnt-offers">24</td>
            </tr>
            <tr>
                <td class="has-offers">25 <div class="price text-is-12 mt-6">455€</div></td>
                <td class="has-offers">26 <div class="price text-is-12 mt-6">455€</div></td>
                <td class="has-offers">27 <div class="price text-is-12 mt-6">455€</div></td>
                <td class="hasnt-offers">28</td>
                <td class="hasnt-offers">29</td>
                <td class="hasnt-offers">30</td>
                <td class="hasnt-offers">31</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        props: ['active']
    }
</script>