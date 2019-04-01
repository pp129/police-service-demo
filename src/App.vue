<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
@font-face {
    font-family: "SourceHanSansCN-Regular";
    src: url("./assets/font/SourceHanSansCN-Regular.otf");
}
html,
body {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
    font-family: "SourceHanSansCN-Regular", Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
}
</style>
