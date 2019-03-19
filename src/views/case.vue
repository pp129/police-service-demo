<template>
    <div class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
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
                slidesPerView: 4,
                loop: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
            }
        };
    }
};
</script>

<style scoped lang="less">
.swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}
</style>
