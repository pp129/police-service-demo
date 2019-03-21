<template>
    <div class="product">
        <div class="tip">产品介绍</div>
        <swiper :options="swiperOption" class="container">
            <swiper-slide v-for="item in contents">
                <div class="item_content" :class="item.content">
                    <component :is="item.component"></component>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "product",
    components: {
        contentFirst: () => import("@/components/prod_1"),
        contentSec: () => import("@/components/prod_2"),
        contentThird: () => import("@/components/prod_3"),
        contentForth: () => import("@/components/prod_4"),
        contentFifth: () => import("@/components/prod_5")
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            //顺序：1.可视化勤务2.警卫安保3.警情跟踪4.交警大数据5.执法平台6.海防警务指挥7.海防船舶8.海防治安9.海港边检10.便民服务
            contents: [
                {
                    name: "警情跟踪管理系统",
                    content: "product_1",
                    component: "contentFirst"
                },
                {
                    name: "警卫安保指挥调度平台",
                    content: "product_2",
                    component: "contentSec"
                },
                {
                    name: "可视化勤务指挥作战平台",
                    content: "product_3",
                    component: "contentThird"
                },
                {
                    name: "海港边检智能管理系统",
                    content: "product_4",
                    component: "contentForth"
                },
                {
                    name: "自助报警服务平台",
                    content: "product_5",
                    component: "contentFifth"
                }
            ]
        };
    }
};
</script>
<style scoped lang="less">
@pw: 100/1920;
@ph: 100/960;
.product {
    height: 100%;
    position: relative;
    .tip {
        display: block;
        position: absolute;
        top: 0;
        left: 59px;
        width: 318px;
        height: 68px;
        background: url("../assets/标题.png") no-repeat;
        font-size: 3.4rem;
        color: #fcfdfd;
        font-weight: 500;
        line-height: 68px;
    }
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
                width: calc(~"1412*@{pw}vw");
                /*height: calc(~"711*@{ph}vh");*/
                /*&.product_1 {
                    background: url("../assets/product_1.png") no-repeat;
                    background-size: contain;
                }
                &.product_2 {
                    background: url("../assets/product_2.png") no-repeat;
                    background-size: contain;
                }
                &.product_3 {
                    background: url("../assets/product_3.png") no-repeat;
                    background-size: contain;
                }
                &.product_4 {
                    background: url("../assets/product_4.png") no-repeat;
                    background-size: contain;
                }
                &.product_5 {
                    background: url("../assets/product_5.png") no-repeat;
                    background-size: contain;
                }*/
            }
        }
    }
}
</style>
