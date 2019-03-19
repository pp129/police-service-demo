<template>
    <div class="business">
        <div class="text">
            以大数据为核心，全方位、多角度透彻感知人、车、船、地、物、案或
            事件等要素动态，汇聚各类数据资源，利用大数据挖掘、融合、分析技术，
            形成“广泛采集、辅助决策、研判分析、信息融合”的工作格局，打造“全
            新警务工作模式”，全面实现警务工作智能化。
        </div>
        <div class="pic"></div>
    </div>
</template>

<script>
export default {
    name: "business"
};
</script>

<style scoped lang="less">
@pw: 100/1920;
@ph: 100/960;
.business {
    background: url("../assets/content_business.png") no-repeat;
    background-size: contain;
    height: calc(~"695*@{ph}vh");
    width: calc(~"1031*@{pw}vw");
    .text {
        text-indent: 5.6rem;
        text-align: left;
        color: #e7f3f9;
        font-size: 2.8rem;
    }
}
</style>
