<template>
    <div class="honor">
        <div class="swiper-container">
            <swiper :options="swiperOption">
                <swiper-slide
                    v-for="item in contents"
                    class="content"
                    :class="item.content"
                ></swiper-slide>
            </swiper>
        </div>
        <div class="list-container">
            <ul>
                <li v-for="(items, index) in list">
                    <span>{{ items.item }}</span>
                    <ul v-if="items.children" :class="'items_' + (index + 1)">
                        <li v-for="child in items.children">
                            <span> {{ child.item }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "honor",
    data() {
        return {
            contents: [
                { name: "交警大数据", content: "content1" },
                { name: "可视化", content: "content2" },
                { name: "上合青岛", content: "content3" },
                { name: "金砖", content: "content4" },
                { name: "金砖", content: "content5" }
            ],
            list: [
                { item: "全国大数据优秀产品、服务和应用解决方案案例" },
                { item: "厦门市大数据行业企业十强" },
                { item: "智慧警务大数据及AI应用研究室" },
                {
                    item: "信息化项目专项资金：",
                    children: [{ item: "海上执法管理智指挥通信系统" }]
                },
                {
                    item: "科技成果：",
                    children: [
                        { item: "交通经纬指挥平台V1.0" },
                        { item: "大数据应用分析平台V1.0" }
                    ]
                },
                {
                    item: "软件著作：",
                    children: [
                        { item: "公安警务动态管理系统V1.3" },
                        { item: "重大活动安保指挥系统V1.0" },
                        { item: "交通警卫指挥平台V1.0" },
                        { item: "交通综合行政执法信息管理子系统V1.0" },
                        { item: "移动执法信息管理系统V1.0" }
                    ]
                }
            ],
            swiperOption: {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: false,
                slidesPerView: 3,
                loop: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 50,
                    depth: 150,
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
.honor {
    display: flex;
    flex-direction: row;
    height: 83.125vh;
    .swiper-container {
        width: calc(~"1268*@{pw}vw");
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
            &.content {
                background: white;
                &.content1 {
                }
            }
        }
    }

    .list-container {
        text-align: left;
        ul,
        li {
            list-style: disc;
            color: blue;
            span {
                color: white;
            }
            .items_6 {
                padding-inline-start: 60px;
                li {
                    list-style: none;
                }
            }
        }
    }
}
</style>
