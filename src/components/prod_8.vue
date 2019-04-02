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
                centeredSlides: true,
                slidesPerView: "auto",
                // loop: true,
                autoplay: true,
                coverflowEffect: {
                    rotate: 10,
                    stretch: 110,
                    depth: 200,
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
                /*width: 987px;*/
                height: calc(~"610*@{ph}vh");
                .swiper-slide {
                    width: 802px;
                    height: 490px;
                    background: url("../assets/海防治安边框2.png") no-repeat
                        center;
                    background-size: 100% 100%;
                    position: relative;
                    overflow: hidden;
                    img {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        width: calc(~"778*@{pw}vw");
                        height: calc(~"464*@{ph}vh");
                    }
                    &.swiper-slide-active {
                        width: calc(~"988*@{pw}vw");
                        height: calc(~"618*@{ph}vh");
                        background: url("../assets/海防治安边框1+.png")
                            no-repeat center;
                        left: -50px;
                        img {
                            top: 20px;
                            left: 98px;
                            width: calc(~"778*@{pw}vw");
                            height: calc(~"416*@{ph}vh");
                        }
                    }
                }
            }
        }
    }
}
</style>
