<template>
    <div class="ct-tab" :class="{ 'is-active': isActive }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            name: String
        },
        data() {
            return {
                isActive: false
            };
        },
        methods: {},
        created() {
            if (!this.$parent.$data._isTabs) {
                this.$destroy();
                throw new Error("You should wrap Tab on a Tabs");
            }
            this.$parent.tabItems.push(this);
        }
    };
</script>