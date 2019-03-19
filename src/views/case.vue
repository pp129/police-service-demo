<template>
    <div class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide
                v-for="item in contents"
                :class="item.content"
            ></swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "case",
    data() {
        return {
            contents: [
                { name: "交警大数据", content: "jiaojing" },
                { name: "可视化", content: "keshihua" },
                { name: "上合青岛", content: "shangheqingdao" },
                { name: "金砖", content: "jinzhuan" }
            ],
            swiperOption: {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: false,
                slidesPerView: "auto",
                loop: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false
                }
            }
        };
    }
};
</script>

<style scoped lang="less">
@pw: 100/1920;
@ph: 100/960;
.swiper-inner {
    width: 1268px;
    height: 630px;
    display: flex;
    align-items: center;
    left: 74px;
    top: 95px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: calc(~"562*@{pw}vw");
    height: calc(~"672*@{ph}vh");
    &.jinzhuan {
        background-image: url("../assets/金砖.png");
    }
    &.keshihua {
        background-image: url("../assets/可视化.png");
    }
    &.shangheqingdao {
        background-image: url("../assets/上合青岛.png");
    }
    &.jiaojing {
        background-image: url("../assets/交警大数据.png");
    }
}
</style>
