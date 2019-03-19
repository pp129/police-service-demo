<template>
    <div class="main_button">
        <div class="body" @click="turnTo">
            <i class="main_button_icon" :class="icon"></i>
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "mainButton",
    props: ["name", "link", "icon"],
    data() {
        return {
            isBodyActive: false,
            bodyActiveClass: ""
        };
    },
    computed: {},
    methods: {
        turnTo() {
            this.$emit("callback", this.link);
        }
    }
};
</script>

<style scoped lang="less">
//1px = 100 / window.innerHeight + ‘vh’
@pw: 100/1920;
@ph: 100/960;
.main_button {
    cursor: pointer;
    .body {
        width: 22.55208333vw;
        height: 10.52083333vh;
        display: flex;
        align-items: center;
        background: url("../assets/main_button.png") no-repeat;
        background-size: contain;
        .main_button_icon {
            width: 90px;
            height: 90px;
            display: inline-block;
            margin-left: 13px;
            &.icon_business {
                background: url("../assets/icon_bussiness.png") no-repeat;
            }
            &.icon_product {
                background: url("../assets/icon_product.png") no-repeat;
            }
            &.icon_case {
                background: url("../assets/icon_case.png") no-repeat;
            }
            &.icon_honor {
                background: url("../assets/icon_honor.png") no-repeat;
            }
        }
        span {
            font-size: 3rem;
            color: #e7f3f8;
            font-weight: bold;
            margin-left: calc(~"14*@{pw}vw");
        }
    }
    &.bodyActive {
        background: url("../assets/main_button_selected.png") no-repeat;
        background-size: contain;
        span {
            color: #06e0fc;
        }
        .body {
            .icon_business {
                background: url("../assets/icon_bussiness_selected.png")
                    no-repeat;
            }
            .icon_product {
                background: url("../assets/icon_product_selected.png") no-repeat;
            }
            .icon_case {
                background: url("../assets/icon_case_selected.png") no-repeat;
            }
            .icon_honor {
                background: url("../assets/icon_honor_selected.png") no-repeat;
            }
        }
    }
}
</style>
