<template>
    <div class="product">
        <div class="tip">产品介绍</div>
        <swiper :options="swiperOption" class="container">
            <swiper-slide
                v-for="item in contents"
                :key="item.name"
                class="swiper-no-swiping"
            >
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
        contentFifth: () => import("@/components/prod_5"),
        contentSixth: () => import("@/components/prod_6"),
        contentSeventh: () => import("@/components/prod_7"),
        contentEighth: () => import("@/components/prod_8"),
        contentNinth: () => import("@/components/prod_9"),
        contentTenth: () => import("@/components/prod_10")
    },
    data() {
        return {
            swiperOption: {
                noSwiping: true,
                autoplay: {
                    delay: 8000
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            //顺序：1.可视化勤务2.警卫安保3.警情跟踪4.交警大数据5.执法平台6.海防警务指挥7.海防船舶8.海防治安9.海港边检10.便民服务
            contents: [
                {
                    name: "可视化勤务",
                    content: "product_1",
                    component: "contentFirst"
                },
                {
                    name: "警卫安保",
                    content: "product_2",
                    component: "contentSec"
                },
                {
                    name: "警情跟踪",
                    content: "product_3",
                    component: "contentThird"
                },
                {
                    name: "交警大数据",
                    content: "product_4",
                    component: "contentForth"
                },
                {
                    name: "执法平台",
                    content: "product_5",
                    component: "contentFifth"
                },
                {
                    name: "海防警务指挥",
                    content: "product_6",
                    component: "contentSixth"
                },
                {
                    name: "海防船舶",
                    content: "product_7",
                    component: "contentSeventh"
                },
                {
                    name: "海防治安",
                    content: "product_8",
                    component: "contentEighth"
                },
                {
                    name: "海港边检",
                    content: "product_9",
                    component: "contentNinth"
                },
                {
                    name: "便民服务",
                    content: "product_10",
                    component: "contentTenth"
                }
            ]
        };
    }
};
</script>
<style scoped lang="less" type="text/less">
@pw: 100/1920;
@ph: 100/1080;
.product {
    height: 100%;
    position: relative;
    .tip {
        display: block;
        position: absolute;
        top: 0;
        left: 59px;
        width: 309px;
        height: 66px;
        background: url("../assets/标题2.png") no-repeat;
        font-size: 3rem;
        color: #fcfdfd;
        font-weight: 500;
        line-height: 66px;
        text-align: left;
        text-indent: 70px;
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
