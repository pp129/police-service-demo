<template>
    <div class="prod_8 prod_common">
        <div class="title">
            <p>
                海防治安大数据分析应用
            </p>
            <hr />
        </div>
        <div class="_main">
            <div class="lf"></div>
            <div class="rt swiper-inner">
                <swiper :options="swiperOption">
                    <swiper-slide
                        v-for="item in contents"
                        :key="item.name"
                        :class="item.content"
                    >
                        <img :src="item.src" alt="" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_8",
    data() {
        return {
            contents: [
                {
                    name: "图1",
                    content: "pic1",
                    src: require("../assets/海防治安图1.png")
                },
                {
                    name: "图2",
                    content: "pic2",
                    src: require("../assets/海防治安图2.png")
                }
            ],
            swiperOption: {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: false,
                slidesPerView: 2,
                loop: false,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 120,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    }
};
</script>

<style scoped lang="less" type="text/less">
@import "../style/prod-common";
@pw: 100/1920;
@ph: 100/960;
.prod_8 {
    ._main {
        width: 1426px;
        .lf {
            width: 342px;
            height: 413px;
            float: left;
            margin-top: 14px;
            background: url("../assets/海防治安.png");
        }
        .rt {
            width: calc(~"1426px - 342px");
            float: right;
            &.swiper-inner {
                width: 987px;
                height: calc(~"610*@{ph}vh");
                .swiper-slide {
                    .img {
                        width: calc(~"778*@{pw}vw");
                        height: calc(~"418*@{ph}vh");
                    }
                }
            }
        }
    }
}
</style>
