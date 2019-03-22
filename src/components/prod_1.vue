<template>
    <div class="prod_1 prod_common">
        <div class="title">
            <p>可视化勤务指挥作战平台</p>
            <hr />
        </div>
        <div class="main">
            <div class="text">
                平台将警员的勤务、执勤报备情况、执勤警务区、人员考核情况
                整合在一起统筹安排，结合PGIS、GPS车载及单兵定位系统进而为指
                挥中心实现扁平化指挥，为快速警力调度提供有力保障。
            </div>
            <div class="pic"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_content"
};
</script>

<style scoped lang="less">
@import "../style/prod-common";
.prod_1 {
    .text {
        width: 1014px;
    }
    .pic {
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -533.5px;
        width: 1067px;
        height: 360px;
        background: url("../assets/可视化勤务.png") no-repeat;
    }
}
</style>
