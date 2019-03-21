<template>
    <div class="prod_2 prod_common">
        <div class="title">
            <p>警卫安保指挥调度平台</p>
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
    name: "prod_2"
};
</script>

<style scoped lang="less">
@import "../style/prod-common";
.prod_2 {
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
