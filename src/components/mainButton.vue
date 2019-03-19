<template>
    <div class="main_button">
        <div
            class="body"
            :class="{ bodyActive: isBodyActive }"
            @mouseenter="isBodyActive = true"
            @mouseleave="isBodyActive = false"
            @click="turnTo"
        >
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
        }
        span {
            font-size: 3rem;
            color: #e7f3f8;
            font-weight: bold;
            margin-left: calc(~"104*@{pw}vw");
        }
        &.bodyActive {
            background: url("../assets/main_button_select.png") no-repeat;
            background-size: contain;
            span {
                color: #06e0fc;
            }
        }
    }
}
</style>
