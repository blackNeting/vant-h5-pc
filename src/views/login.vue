<template>
  <div class="main">
      <div class="wraap-head" type="flex" justify="center" align="center">
      <div class="bg"></div>
      <div class="logo"></div>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-row style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </van-row>
    </van-form>
    <div class="wraap-content"></div>
    <div class="wraap-bottom"></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  /* width: 750px;   */
}
.wraap-head {
  height: 520px;
  // height: 260px;
  // height: 39%;
  flex-direction: column;
  .bg {
    height: 400px;
    // height: 200px;
    width: 100%;
    // background: url('~@/assets/login-bg.png') center no-repeat;
    background: red;
    background-size: 100% 100%;
  }
  .logo {
    width: 140px;
    height: 140px;
    // width: 70px;
    // height: 70px;
    background: url('~@/assets/logo.png') center no-repeat;
    background-size: 100% 100%;
    transform: translateY(-50%);

  }
}

</style>