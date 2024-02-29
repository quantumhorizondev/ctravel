<template>



    <div class="ct-tabs tour-request-main-form">

        <div class="ct-tabs-header">
            <div
                    class="ct-tab-title"
                    @click="setActiveTab(i)"
                    :class="{ 'is-active': t.isActive }"
                    v-for="(t, i) in tabItems"
                    :key="i"
            >
                {{ t.name }}
            </div>
        </div>

        <div class="ct-tabs-content p-24">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            activeTab: {
                type: Number,
                required: false,
                default: 0,
            }
        },
        name: "Tabs",
        data() {
            return {
                tabItems: [],
                _isTabs: true
            };
        },
        watch: {
            activeTab() {
                this.setActiveTab(this.activeTab);
            }
        },
        methods: {
            setActiveTab(num) {
                this.$emit('tab-change', num)
                for (const t of this.tabItems) {
                    t.isActive = false;
                }
                this.tabItems[num].isActive = true;
            }
        },
        mounted() {
            if (this.tabItems.length) {
                this.tabItems[0].isActive = true;
            }
        }
    };
</script>