<template>
    <div class="honor">
        <div class="title">荣誉资质</div>
        <div class="main">
            <div class="pic"></div>
            <div class="list-container">
                <ul>
                    <li v-for="(items, index) in list" :key="items.item">
                        <span>{{ items.item }}</span>
                        <ul
                            v-if="items.children"
                            :class="'items_' + (index + 1)"
                        >
                            <li v-for="child in items.children" :key="child.item">
                                <span> {{ child.item }}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
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
            ]
            /*swiperOption: {
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
            }*/
        };
    }
};
</script>

<style scoped lang="less">
.honor {
    display: flex;
    flex-direction: column;
    height: 83.125vh;
    .title {
        justify-self: center;
        font-size: 38px;
        font-weight: bold;
        color: rgba(229, 240, 246, 1);
        margin-top: 40px;
        background: linear-gradient(0deg, rgba(6, 217, 252, 1) 0%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .main {
        display: flex;
        flex-direction: row;
        .pic {
            width: 988px;
            height: 574px;
            background: url("../assets/荣誉.png");
            margin-top: 98px;
        }
        .list-container {
            text-align: left;
            ul,
            li {
                list-style: disc;
                color: #0ff3f7;
                font-size: 28px;
                width: 100%;
                span {
                    font-size: 28px;
                    font-weight: 500;
                    color: rgba(232, 243, 249, 1);
                    line-height: 45px;
                }
                .items_6 {
                    padding-inline-start: 6rem;
                    li {
                        list-style: none;
                    }
                }
            }
        }
    }
}
</style>
