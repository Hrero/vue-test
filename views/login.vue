<template>
    <div id="login" class="positionCenter">
        <h1 class="center">资源库系统录入平台</h1>
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="userName">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="userPassword">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model="checked"> 记住我
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default" @click="goLogin()">登录</button>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 errorLogin" v-show="error">
                    {{message}}
                </div>
            </div>
        </form>
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
                        this.$emit("increment","MainComponent");
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