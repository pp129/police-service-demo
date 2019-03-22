<template>
    <div class="prod_3 prod_common">
        <div class="title">
            <p>警情跟踪管理系统</p>
            <hr />
        </div>
        <div class="main">
            <div class="text">
                对警情、处警、跟踪、派送、处理、监督等全过程管理，实现对
                接处警各个环节的监督和评价。
            </div>
            <div class="pic"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_3"
};
</script>

<style scoped lang="less">
@import "../style/prod-common";
.prod_3 {
    .text {
        width: 1008px;
        padding-top: 74px;
    }
    .pic {
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -513.5px;
        width: 1027px;
        height: 415px;
        background: url("../assets/系统功能.png") no-repeat;
    }
}
</style>
