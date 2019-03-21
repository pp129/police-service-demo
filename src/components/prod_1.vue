<template>
    <div class="prod_content_1 prod_common">
        <div class="title">
            可视化勤务指挥作战平台
            <hr />
        </div>
        <div class="main">
            <div class="text"></div>
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
.prod_content_1 {
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
