<template>
    <div class="prod_5 prod_common">
        <div class="title">
            <p>交警综合行政执法信息平台</p>
            <hr />
        </div>
        <div class="main">
            <div class="text">
                基于北斗/GPS、大数据和人工智能等技术，以数据整合汇聚为基础，立足交通综合行政执法职能，以信息服务为导向，结合车载云台、执法终端等设备，为执法部门在执法检查、阳光执法、精准执法、应急指挥、案件处理、执法监察和信息研判等方面提供软硬件一体化的智慧执法体系。
            </div>
            <div class="pic"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_5"
};
</script>

<style scoped lang="less" type="text/less">
@import "../style/prod-common";
.prod_5 {
    .main {
        top: -60px;
        .pic {
            width: 1037px;
            height: 328px;
            background: url("../assets/执法平台.png");
            position: absolute;
            left: 50%;
            bottom: -58px;
            margin-left: -518.5px;
        }
        .text {
            width: 1078px;
            padding-top: 60px;
        }
    }
}
</style>
