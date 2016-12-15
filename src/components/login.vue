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
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password"
                           v-model="userPassword">
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
        <div class="ui indicating progress" :data-value="zhi" id="example5">
            <div class="bar">
                <div class="progress"></div>
            </div>
            <div class="label">Adding Photos</div>
        </div>
        <button @click="ccc">开始</button>
    </div>
</template>

<script>
    //var async = require("async");
    import "../css/login.scss"
    //import axios from "axios"
    import $ from "jquery"

    export default {
        data () {
            return {
                userName: "",
                userPassword: "",
                error: false,
                message: "",
                checked: false,
                zhi: 0
            }
        },
        methods: {
            goLogin () {
                this.$router.push("/");
                /*console.log("goLogin");
                $('.ui.form').onSuccess(() => {
                    console.log("登录");
                })*/
               /* var params = {
                    "username": this.userName,
                    "password": this.userPassword
                };
              this.$router.push("/home");*/
              //axios.get("/deleteRadioId?file=radio.mp3")
                /*.then((result) => {
                    if (result.data) {
                        if (this.checked) {
                            localStorage.setItem("v4UserName", this.userName);
                            localStorage.setItem("v4UserPassword", this.userPassword);
                        } else {
                            localStorage.removeItem("v4UserName");
                            localStorage.removeItem("v4UserPassword");
                        }
                        this.$router.push("/home")
                    } else {
                        if (this.userName == "" || this.userPassword == "") {
                            this.message = "“用户名”或“密码”不能为空";
                        } else {
                            this.message = "“用户名”或“密码”密码错误";
                        }
                        this.error = true;
                    }
                })*/
            },
            xxx () {
                let self = this;
                self.zhi += 1;
                $('#example5').progress("increment");
            },
            ccc () {
                let self = this;
                setInterval(function(){
                    self.zhi += 1;
                    $('#example5').progress("set progress", self.zhi+"%");
                },50);
            }
        },
        created () {
            if (window.localStorage.getItem("v4UserName")) {
                this.userName = window.localStorage.getItem("v4UserName");
                this.userPassword = window.localStorage.getItem("v4UserPassword");
                this.checked = true;
            }
        },
        mounted () {
            $('#example5').progress({
                total: 100,
                text: {
                    success : '上传完成'
                }
            });
        },
       /* watch: {
            "zhi" () {
                $('#example5').progress();
            }
        }*/
    }
</script>
