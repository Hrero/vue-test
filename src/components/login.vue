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
        <div class="ui floating dropdown labeled search icon button">
            <i class="world icon"></i>
            <span class="text">Select Language</span>
            <div class="menu">
                <div class="item">Arabic</div>
                <div class="item">Chinese</div>
                <div class="item">Danish</div>
                <div class="item">Dutch</div>
                <div class="item">English</div>
                <div class="item">French</div>
                <div class="item">German</div>
                <div class="item">Greek</div>
                <div class="item">Hungarian</div>
                <div class="item">Italian</div>
                <div class="item">Japanese</div>
                <div class="item">Korean</div>
                <div class="item">Lithuanian</div>
                <div class="item">Persian</div>
                <div class="item">Polish</div>
                <div class="item">Portuguese</div>
                <div class="item">Russian</div>
                <div class="item">Spanish</div>
                <div class="item">Swedish</div>
                <div class="item">Turkish</div>
                <div class="item">Vietnamese</div>
            </div>
        </div>
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
                checked: false
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
            $(".ui.dropdown").dropdown();
        }
    }
</script>
