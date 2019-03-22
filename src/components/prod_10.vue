<template>
    <div class="prod_10 prod_common">
        <div class="title">
            <p>
                自助报警服务平台
            </p>
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
    name: "prod_10"
};
</script>

<style scoped lang="less" type="text/less">
@import "../style/prod-common";
.prod_10 {
    .pic {
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -410.5px;
        width: 821px;
        height: 399px;
        background: url("../assets/自助报警.png") no-repeat;
    }
}
</style>
