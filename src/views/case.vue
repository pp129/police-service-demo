<template>
    <div class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "case",
    data() {
        return {
            swiperOption: {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: false,
                slidesPerView: "auto",
                loop: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 190,
                    modifier: 1,
                    slideShadows: true
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
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: calc(~"555*@{pw}vw");
    height: calc(~"475*@{ph}vh");
    background-image: url("../assets/swiper_slide.png");
}
</style>
