<template>
    <div class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in contents" :key="item.content">
                <img :src="item.src" alt="" />
                <p :class="'content_' + (index + 1)">{{ item.content }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "case",
    data() {
        return {
            contents: [
                {
                    content: "厦门交警大数据分析应用平台",
                    src: require("../assets/厦门交警大数据分析应用平台.png")
                },
                {
                    content: "厦门市公安局可视化勤务指挥支撑平台",
                    src: require("../assets/厦门市公安局可视化勤务指挥支撑平台.png")
                },
                {
                    content: "上合青岛峰会警卫安保指挥调度平台",
                    src: require("../assets/上合青岛峰会警卫安保指挥调度平台.png")
                },
                {
                    content: "金砖厦门会晤警卫安保指挥调度平台",
                    src: require("../assets/金砖厦门会晤警卫安保指挥调度平台.png")
                }
            ],
            swiperOption: {
                autoplay: {
                    delay: 8000
                },
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: false,
                slidesPerView: "auto",
                // loop: true,
                coverflowEffect: {
                    rotate: 40,
                    stretch: 150,
                    depth: 800,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    }
};
</script>

<style scoped lang="less">
.swiper-inner {
    width: calc(~"1301*@{pw}vw");
    height: calc(~"630*@{ph}vh");
    display: flex;
    align-items: center;
    left: calc(~"74*@{pw}vw");
    top: calc(~"95*@{ph}vh");
}
.swiper-slide {
    background-size: 100% 100%;
    width: calc(~"749*@{pw}vw");
    height: calc(~"543*@{ph}vh");
    background: url("../assets/案例边框.png") no-repeat center;
    position: relative;
    img {
        width: 555px;
        height: 506px;
        position: absolute;
        top: 18px;
        left: 98px;
    }
    p {
        position: absolute;
        width: 514px;
        text-align: center;
        left: 50%;
        margin-left: -257px;
        font-size: 38px;
        color: #47bcff;
        bottom: -155px;
        &.content_1 {
            bottom: -100px;
        }
    }
    &.swiper-slide-active {
        width: calc(~"868*@{pw}vw");
        height: calc(~"683*@{ph}vh");
        background: url("../assets/案例大框.png") no-repeat center;
        img {
            top: 25px;
            left: 174px;
        }
        p {
            bottom: 0;
            color: #fff;
            &.content_1 {
                bottom: 15px;
            }
            &.content_2 {
                bottom: -36px;
            }
            &.content_3 {
                bottom: -36px;
            }
        }
    }
}
</style>
