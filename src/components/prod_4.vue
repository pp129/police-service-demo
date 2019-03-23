<template>
    <div class="prod_4 prod_common">
        <div class="title">
            <p>
                交警大数据分析应用平台
            </p>
            <hr />
        </div>
        <div class="_main">
            <div class="lf">
                <div class="text">
                    整合各交通相关部门的交通信息资源，利用大数据
                    技术，进行数据挖掘与可视化处理，统一发布分析结果
                    供各部门使用，达到集约化建设的效果。
                </div>
                <div class="docks">
                    <div class="docks_item" v-for="dock in docks">
                        <div class="dock_pic"></div>
                        <div class="dock_text">{{ dock }}</div>
                    </div>
                    <div class="dock_pic"></div>
                </div>
            </div>
            <div class="rt">
                <div class="preview"></div>
                <div class="balls">
                    <div class="ball_1"></div>
                    <div class="ball_2"></div>
                    <div class="ball_3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prod_4",
    data() {
        return {
            docks: [
                "综合路况判断与发布",
                "交通事故分级与预警",
                "交通OD分析",
                "信号控制优化",
                "车辆稽查",
                "勤务联动"
            ]
        };
    }
};
</script>

<style scoped lang="less" type="text/less">
@import "../style/prod-common";
.prod_4 {
    ._main {
        width: 1521px;
        .lf {
            float: left;
            width: calc(~"1521px - 719px");
            .text {
                color: #e8f3f9;
                font-size: 3.2rem;
                text-indent: 6.4rem;
                text-align: left;
                margin-bottom: 64px;
            }
            .docks {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .docks_item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .dock_pic {
                    align-self: center;
                    width: 418px;
                    height: 27px;
                    margin-top: -16px;
                    background: url("../assets/交警大数据/dock.png");
                }
                .dock_text {
                    font-size: 2.6rem;
                    color: #32daff;
                    padding-top: 17px;
                }
            }
        }
        .rt {
            float: right;
            width: 719px;
            .preview {
                width: 719px;
                height: 416px;
                background: url("../assets/交警大数据/交通大数据2.png");
            }
            .balls {
                margin-top: 37px;
                width: 719px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .ball_1 {
                    width: 118px;
                    height: 135px;
                    background: url("../assets/交警大数据/速度提升.png");
                }
                .ball_2 {
                    width: 119px;
                    height: 134px;
                    background: url("../assets/交警大数据/事故减少.png");
                }
                .ball_3 {
                    width: 180px;
                    height: 135px;
                    background: url("../assets/交警大数据/高峰拥堵.png");
                }
            }
        }
    }
}
</style>
