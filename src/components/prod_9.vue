<template>
    <div class="prod_9 prod_common">
        <div class="title">
            <p>
                海港边检智能管理系统
            </p>
            <hr />
        </div>
        <div class="_main">
            <div class="lf">
                <div class="text">
                    集成视频监控、北斗定位、通信终端、海防雷达、
                    船舶AIS等前端感知系统，为海港边检放提供感知预警
                    服务和统一支撑平台。
                </div>
                <div class="btns"></div>
            </div>
            <div class="rt">
                <div class="preview"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_9"
};
</script>

<style scoped lang="less">
@import "../style/prod-common";
.prod_9 {
    ._main {
        width: 1511px;
        .lf {
            float: left;
            width: calc(~"1511px - 730px");
            .text {
                color: #e8f3f9;
                font-size: 3.2rem;
                text-indent: 6.4rem;
                text-align: left;
                margin-bottom: 64px;
            }
            .btns {
                width: 696px;
                height: 181px;
                background: url("../assets/海港边检/海港边检.png");
            }
        }
        .rt {
            float: right;
            width: 730px;
            .preview {
                width: 719px;
                height: 416px;
                background: url("../assets/海港边检/海港边检1.png");
            }
        }
    }
}
</style>
