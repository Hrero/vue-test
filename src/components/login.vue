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
    </div>
</template>

<script>
    import "../css/login.scss"
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
                let params = {
                        userName: this.userName,
                        password: this.userPassword
                    },
                    self = this;
                $.post("/login", params, (data) => {
                    console.log(data);
                    self.$router.push("/");
                })
            }
        },
        created () {

        },
        mounted () {

        }
    }
</script>
