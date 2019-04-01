<template>
    <div id="login" class="loginBg">
        <div class="login">
            <h3 class="loginTitle">LitSoft</h3>
            <el-form ref="form" :model="form" >
                <el-form-item label="用户">
                    <el-input v-model="form.username"></el-input>
<!--                    <p>{{form.username}}</p>-->
                </el-form-item>
                <el-form-item label="密码">
                    <el-input  v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
<!--            <el-form>-->
<!--                <el-form-item label="密码">-->
<!--                    <el-input ></el-input>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
            <!--                <a @click="toForgetPage()">忘记密码</a>-->
<!--            <router-link to="/login">登录</router-link>-->

            <router-link to="/forget-password" class="forget">忘记密码</router-link>
<!--            <router-link to="/home" class="loginBtn" @click="login()">登录</router-link>-->
            <a @click="login()" class="loginBtn">登录</a>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import App from '../App.vue';
    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                Vue.$http.post('http://localhost:3000/users/login', {'username': 'ma', 'password': 111}).then(function(data) {
                    console.log(data)
                })
                // console.log(this.form.username, this.form.password)
            }

        }
        // data: {
        //     form: {
        //         username: '',
        //         password: ''
        //     }
        // }
    }
</script>

<style>
    .loginBg{
        height: 100%;
        background: url("../assets/login-bg.jpg") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login{
        width: 40%;
        padding: 20px;
        border-radius: 4px;
        background: rgba(255,255,255,0.5);
    }
    .loginTitle{
        text-align: center;

    }
    .el-form-item{
        margin: 15px;
        display: flex;
        justify-content: space-around;
    }
    .el-form-item__content{
        width: 70%;
    }
    .forget{
        display: block;
        font-size: 12px;
        text-align: center;
    }
    .loginBtn{
        display: block;
        text-align: center;
        margin: 0 auto;
        padding: 10px 20px;
        margin-top: 20px;
        width: 60%;
        background: rgb(88,158,248);
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }

</style>