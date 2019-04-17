<template>
    <div class="navv">
        <img class="logo" alt="Vue logo" src="../../assets/img/logo.png">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

            <el-menu-item index="1">本月工时</el-menu-item>
            <!--<el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>-->
            <el-menu-item index="2">
                <a href="https://www.ele.me" target="_blank">剩余调休</a>
            </el-menu-item>
            <el-menu-item class="logout"> Logout </el-menu-item>
            <el-menu-item class="user"> User:{{message}} </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "navigation",
        data() {
            return {
                // userInit: 'User'
                activeIndex: '1',
                // activeIndex2: '1'
            };
        },
        props: ['message'],
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    };
</script>

<style scoped>
    .navv{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-menu-demo{
        flex-grow: 1;
        padding: 5px 20px 0;
    }
    .el-menu-item{
        cursor: pointer;
    }
    .logo{
        width: 40px;
        height: 40px;
        float: left;
    }
    .logout, .user{
        float: right !important;
    }
</style>