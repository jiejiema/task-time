<template>
    <div id="register" class="registerBg">
        <div class="login">
            <h3 class="userTitle">LitSoft</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="用 户 " prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="密 码 " prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="again">
                    <el-input type="password" v-model="ruleForm.again"></el-input>
                </el-form-item>


                <a class="registerBtn" @click="submitForm('ruleForm', ruleForm)">注册</a>

            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                    again: '',
                    type: [],
                },
                rules: {
                    name: [
                        { required: true, message: '请输入itcode', trigger: 'blur' },
                        { min: 5, max: 6, message: '长度在 5 到 6 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    again: [
                        { required: true, message: '请输入密码', trigger: 'blur' },{
                            validator: (rule, value, callback)=>{
                                if (value === '') {
                                   callback(new Error('请确认密码'));
                                } else if (value !== this.ruleForm.password){
                                    callback(new Error('两次密码不一致'))
                                } else {
                                    callback()
                                }
                            }
                        }
                    ]
                }
            };
        },
        methods: {

            submitForm(formName, ruleForm) {
                this.$router.push({
                    name: 'login',
                    params: {
                        username: result.data[0].username
                    }

                });
                // console.log(ruleForm);
                // console.log('refs',this.$refs[formName])

                this.$refs[formName].validate((valid) => {
                    if (valid) {  // 验证成功
                        this.$axioss.post('/users/register',
                            {'username': ruleForm.name, 'password': ruleForm.password}).then((response) => {
                                // console.log(response)
                            const result = response.data;
                            if (result.result === 0) {
                                alert(result.message);
                                // console.log(result.data[0].username,111);
                                this.$router.push({
                                    name: 'login',
                                    params: {
                                        username: result.data[0].username
                                    }

                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style>
    @import "user.css";
</style>