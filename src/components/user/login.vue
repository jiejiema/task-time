<template>
    <div id="login" class="loginBg">
        <div class="login">
            <h3 class="userTitle">LitSoft</h3>
            <el-form ref="ruleForm" :model="ruleForm" >
                <el-form-item label="用户" >
                    <el-input v-model="ruleForm.username"></el-input>
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
            <a @click="login('ruleForm', ruleForm)" class="loginBtn">登录</a>
            <div class="error">{{error}}</div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue';
    // import axios from 'axios';

    export default {
        name: 'login',
        data() {
            return {
                routeParams: '222ee',
                ruleForm: {
                    username: '',
                    password: '',
                },
                error:'',
                rules: {
                    name: [
                        { required: true, message: '请输入itcode', trigger: 'blur' },
                        { min: 5, max: 6, message: '长度在 5 到 6 个字符', trigger: 'blur' }
                    ],
                },
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            getUser() {
                this.routeParams = this.$route.params.username;
                // console.log(this.routeParams)
                this.ruleForm.username = this.routeParams ? this.routeParams: '';
            },
            login(formName, ruleForm) {
                this.$axioss.post('/users/login',
                    {'username': ruleForm.username, 'password': ruleForm.password}).then((response) => {
                        const result = response.data;
                    // console.log('response',response);
                    if (result.result === 0) {
                        this.$router.push({
                            name: 'home',
                            params: {
                                username: result.data[0].username
                            }
                        })
                        localStorage.setItem('task-userName', result.data[0].username)
                    } else {
                        alert(result.message);
                    }
                })
            }

        }
    }
</script>

<style>
    @import "user.css";


    .otherBtn{
        font-size: 12px;
        text-align: center;
    }
    .forget{
        margin-right: 10px;
    }


</style>
