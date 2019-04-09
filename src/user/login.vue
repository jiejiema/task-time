<template>
    <div id="login" class="loginBg">
        <div class="login">
            <h3 class="userTitle">LitSoft</h3>
            <el-form ref="ruleForm" :model="ruleForm" >
                <el-form-item label="用户" >
                    <el-input v-model="ruleForm.username"></el-input>
<!--                    <p>{{form.username}}</p>-->
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
            </el-form>

            <div class="otherBtn">
                <router-link to="/forget-password" class="forget">忘记密码</router-link>
                <router-link to="/register" class="">未注册</router-link>
            </div>
<!--            <router-link to="/home" class="loginBtn" @click="login()">登录</router-link>-->
            <a @click="login()" class="loginBtn">登录</a>
            <div class="error">{{error}}</div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue';
    // import axios from 'axios';

    export default {
        name: "login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                error:''
            }
        },
        methods: {
            login() {
                // axios.post('http://localhost:3000/users/login',
                this.$axioss.post('/users/login',
                    {'username': 'ma', 'password': 111}).then((response) => {
                    console.log(response)
                })
            }

        }
    }
</script>

<style>
    @import "./user.css";


    .otherBtn{
        font-size: 12px;
        text-align: center;
    }
    .forget{
        margin-right: 10px;
    }


</style>