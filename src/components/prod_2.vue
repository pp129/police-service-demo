<template>
    <div class="prod_2 prod_common">
        <div class="title">
            <p>警卫安保指挥调度平台</p>
            <hr />
        </div>
        <div class="main">
            <div class="text">
                平台利用全国领先的视频跟随、灯态控制、时空预警等技术，
                按照“事前规划、事中跟踪、事后研判”的思路，汇聚公安特勤资
                源，实现警卫安保全过程的可视化预案制定、推演、跟踪、研判和
                归档。
            </div>
            <div class="pic"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_2"
};
</script>

<style scoped lang="less" type="text/less">
@import "../style/prod-common";
.prod_2 {
    .text {
        width: 971px;
        padding-top: 60px;
    }
    .pic {
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -361px;
        width: 1067px;
        height: 360px;
        background: url("../assets/警卫安保.png") no-repeat;
    }
}
</style>
