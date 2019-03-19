<template>
    <div class="product">
        <swiper :options="swiperOption" class="container">
            <swiper-slide v-for="item in contents">
                <div class="item_content" :class="item.content"></div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            contents: [
                { name: "警情跟踪管理系统", content: "product_1" },
                { name: "警卫安保指挥调度平台", content: "product_2" },
                { name: "可视化勤务指挥作战平台", content: "product_3" },
                { name: "海港边检智能管理系统", content: "product_4" },
                { name: "自助报警服务平台", content: "product_5" }
            ]
        };
    }
};
</script>
<style scoped lang="less">
.product {
    height: 100%;
    .container {
        .swiper-button-prev {
            z-index: 2;
            width: 60px;
            height: 70px;
            background: url("../assets/arrow_right.png") no-repeat;
            transform: rotate(180deg);
            cursor: pointer;
            &:hover {
                background: url("../assets/arrow_left_selected.png") no-repeat;
                transform: rotate(0deg);
            }
        }
        .swiper-button-next {
            z-index: 2;
            width: 60px;
            height: 70px;
            background: url("../assets/arrow_right.png") no-repeat;
            transform: rotate(0deg);
            cursor: pointer;
            &:hover {
                background: url("../assets/arrow_left_selected.png") no-repeat;
                transform: rotate(180deg);
            }
        }
        .swiper-slide {
            display: flex;
            justify-content: center;
            .item_content {
                width: 1412px;
                height: 711px;
                &.product_1 {
                    background: url("../assets/product_1.png") no-repeat;
                }
                &.product_2 {
                    background: url("../assets/product_2.png") no-repeat;
                }
                &.product_3 {
                    background: url("../assets/product_3.png") no-repeat;
                }
                &.product_4 {
                    background: url("../assets/product_4.png") no-repeat;
                }
                &.product_5 {
                    background: url("../assets/product_5.png") no-repeat;
                }
            }
        }
    }
}
</style>
