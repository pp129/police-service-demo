<template>
<div class="home">
    <div class="title">
        <div class="logo_content">
            <img src :class="logo" alt>
            <span>{{ title }}</span>
        </div>
    </div>
    <div class="btn_home">
        <div class="icon_home" @click="returnHome()">
            <i></i>
        </div>
        <div class="icon_refresh" v-if="onlyMain" @click="changeMain('business')">
            <i></i>
        </div>
    </div>
    <div class="only_main" v-if="onlyMain">
        <router-view></router-view>
    </div>
    <div class="main" v-if="!onlyMain">
        <div class="main_body">
            <router-view class="main_body_content"></router-view>
        </div>
        <div class="main_buttons">
            <main-button ref="mainButton" class="button_item" v-for="(item, index) in mainButtons" :key="item.link" :class="[
                        'button_item_' + (index + 1),
                        item.selected ? 'bodyActive' : ''
                    ]" :name="item.name" :link="item.link" :icon="item.icon" @callback="changeMain"></main-button>
        </div>
    </div>
    <div class="company"></div>
</div>
</template>

<script>
export default {
    name: "home",
    mounted() {
        this.init();
    },
    components: {
        mainButton: () => import("@/components/mainButton")
    },
    data() {
        return {
            logo: "logo",
            title: "北斗智慧警务云平台", //标题文字
            onlyMain: false, //是否只显示内容主体 --- 产品介绍
            mainButtons: [{
                    name: "业务介绍",
                    link: "/business",
                    icon: "icon_business",
                    selected: true
                },
                {
                    name: "产品介绍",
                    link: "/product",
                    icon: "icon_product",
                    selected: false
                },
                {
                    name: "成功案例",
                    link: "/case",
                    icon: "icon_case",
                    selected: false
                },
                {
                    name: "荣誉资质",
                    link: "/honor",
                    icon: "icon_honor",
                    selected: false
                }
            ],
            playIndex: 0,
            delay: 8000,
            timer: null
        };
    },
    methods: {
        init() {
            this.playIndex = _.findIndex(this.mainButtons, r => {
                return r.link === this.$route.path;
            });
            for(let i of this.mainButtons){
                i.selected = false;
                if(i.link===this.$route.path){
                     i.selected = true;
                }
            }
            if (this.$route.path.indexOf("product") > 0) {
                this.onlyMain = true;
            }
            this.autoPlay();
        },
        changeMain(link) {
            this.$router.push(link);
            // console.log(this.$route.path,this.mainButtons);
            this.playIndex = _.findIndex(this.mainButtons, r => {
                return r.link === this.$route.path;
            });
            if (this.playIndex === 1) {
                this.resetInterval(80000);
            } else if (this.playIndex === 2) {
                this.resetInterval(36000);
            } else {
                this.resetInterval(8000);
            }
            this.onlyMain = link === "/product" || link === "/honor";
            for (let i of this.mainButtons) {
                i.selected = link === i.link;
            }
        },
        returnHome() {
            this.onlyMain = false;
            for (let i of this.mainButtons) {
                i.selected = i.link === "/business";
            }
            if (this.$route.path === "/business") {
                let target = this.homeUrl;
                window.location.href = target; //http是必要的
            } else {
                this.$router.push("/business");
            }
            this.playIndex = 0;
            this.resetInterval(8000);
        },
        autoPlay() {
            this.timer = setInterval(() => {
                if (this.playIndex < this.mainButtons.length - 1) {
                    this.playIndex++;
                } else {
                    this.playIndex = 0;
                }
                // console.log(this.playIndex);
                let link = this.mainButtons[this.playIndex].link;
                this.changeMain(link);
            }, this.delay);
        },
        resetInterval(delay) {
            clearInterval(this.timer);
            this.delay = delay;
            this.autoPlay();
        }
    },
    destroyed() {
        clearInterval(this.timer);
    }
};
</script>

<style lang="less" scoped>
@pw: 100/1920;
@ph: 100/1080;

.home {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    background: url("../assets/bg.png") no-repeat;
    background-size: cover;

    .title {
        height: 16.875vh;

        .logo_content {
            height: calc(~"60*@{ph}vh");
            margin-top: calc(~"28*@{ph}vh");
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                display: inline-block;
                width: 7.8rem;
                height: 6rem;

                &.logo {
                    background: url("../assets/logo.png") no-repeat;
                }
            }

            span {
                font-size: 5.6rem;
                font-weight: 500;
                color: rgba(254, 254, 245, 1);
            }
        }
    }

    .btn_home {
        position: absolute;
        top: calc(~"45*@{ph}vh");
        right: calc(~"69*@{pw}vw");
        display: flex;
        flex-direction: row;

        .icon_refresh {
            width: calc(~"72*@{pw}vw");
            height: calc(~"72*@{ph}vh");
            background-size: cover;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                display: block;
                width: calc(~"41*@{pw}vw");
                height: calc(~"42*@{ph}vh");
                background: url("../assets/icon_back.png") no-repeat;
            }

            // &:hover {
            //     i {}
            // }
        }

        .icon_home {
            width: calc(~"72*@{pw}vw");
            height: calc(~"72*@{ph}vh");
            background-size: cover;
            cursor: pointer;

            i {
                display: block;
                width: calc(~"72*@{pw}vw");
                height: calc(~"72*@{ph}vh");
                background: url("../assets/icon_home.png") no-repeat;
            }

            &:hover {
                i {
                    background: url("../assets/icon_home_selected.png") no-repeat;
                    background-size: cover;
                }
            }
        }
    }

    .only_main {
        height: 83.125vh;
    }

    .main {
        display: flex;
        flex-direction: row;
        height: 83.125vh;

        .main_body {
            width: (1418/1920) * 100%;
            position: relative;

            .main_body_content {
                position: absolute;

                &.business {
                    left: calc(~"215*@{pw}vw");
                    //bottom: (100/960) * 100%;
                }
            }
        }

        .main_buttons {
            width: ((1920-1418)/1920) * 100%;

            .button_item {
                margin-bottom: calc(~"76*@{ph}vh"); //76px

                &.button_item_1,
                &.button_item_4 {
                    margin-left: 3.9rem;
                }
            }
        }
    }

    .company {
        position: absolute;
        right: (80/1920) * 100%;
        bottom: (55/960) * 100%;
        width: calc(~"422*@{pw}vw");
        height: calc(~"50*@{ph}vh");
        background: url("../assets/company.png") no-repeat;
        background-size: contain;
    }
}
</style>
