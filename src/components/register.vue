<template>
    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
</template>

<style>
  .register-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script>
export default{
  data () {
    return {
      showLogin: true,
      showRegister: true,
      showTishi: false,
      tishi: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods:{
    ToLogin:function () {
      this.$router.push({path: '/login'})
    },
    register:function () {
      this.$axios.post('/signin',{'name':this.newUsername,
        'password':this.newPassword})
        .then(function (response) {
        console.log(response);
        if(response.data.data==='注册成功'){
          alert(response.data.data)
          //this.$router.push({path: '/login'})
        }
        else {
          alert(response.data.msg);
        }
        })
        .catch(function (error) {
          console.log(error.response);
        });
    }
  }
}

</script>
