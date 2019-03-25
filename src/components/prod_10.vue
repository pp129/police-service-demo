<template>
    <div class="prod_10 prod_common">
        <div class="title">
            <p>
                自助报警服务平台
            </p>
            <hr />
        </div>
        <div class="main">
            <div class="text">
                通过移动互联网技术向公众提供短信、微信、语音自助报警的服
                务方式，后台可进行报警处理跟踪，更好的保障群众安全，维护社会
                安定，为平安城市提供有力保障。
            </div>
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
    .text {
        width: 1007px;
        padding-top: 60px;
    }
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
