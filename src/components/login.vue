<template>
    <div id="login" class="positionCenter">
        <el-row :gutter="20">
            <el-col :span="6" :offset="8">
                <div class="grid-content bg-purple">
                    <h1 class="center">资源库系统录入平台</h1>
                    <el-form label-width="80px">
                        <el-form-item label="用户名：">
                            <el-input v-model="userName" @focus="clickInput()"></el-input>
                        </el-form-item>
                        <el-form-item label="密码：">
                            <el-input v-model="userPassword" @focus="clickInput()"></el-input>
                        </el-form-item>
                        <el-checkbox v-model="checked">记住用户名</el-checkbox>
                    </el-form>
                    <el-button type="primary" class="loginBtn blockCenter" @click="goLogin()">登录</el-button>
                    <div  class="errorLogin" name="errorLogin" v-show="error">
                        {{message}}
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import "../css/login.scss";
    export default {
        data () {
            return {
                userName: "",
                userPassword: "",
                error: false,
                message: "",
                checked: false
            }
        },
        methods: {
            goLogin () {
                var params = {
                    "username": this.userName,
                    "password": this.userPassword
                };
                this.$http.post("/login",params).then((result) => {
                    if(result.data){
                        if(this.checked){
                            localStorage.setItem("v4UserName",this.userName);
                            localStorage.setItem("v4UserPassword",this.userPassword);
                        } else {
                            localStorage.removeItem("v4UserName");
                            localStorage.removeItem("v4UserPassword");
                        }
                        this.$emit("increment","MainCom");
                    } else {
                        if(this.userName == "" || this.userPassword == ""){
                            this.message = "“用户名”或“密码”不能为空";
                        } else {
                            this.message = "“用户名”或“密码”密码错误";
                        }
                        this.error = true;
                    }
                });
            },
            clickInput () {
                this.error = false;
            }
        },
        created () {
            if(window.localStorage.getItem("v4UserName")){
                this.userName = window.localStorage.getItem("v4UserName");
                this.userPassword = window.localStorage.getItem("v4UserPassword");
                this.checked = true;
            }
        }
    }
</script>