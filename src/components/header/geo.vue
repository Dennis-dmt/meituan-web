<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{posName}}
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>[&nbsp;
      <a href="#" v-for="city in nearCity" :key="city.id">{{city.name}}&nbsp;</a>]
    </div>
    <div class="m-user" v-if="userName===''">
      <router-link class="login" :to="{name:'login'}">立即登入</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     nearCity: [],
  //   };
  // },
  computed: {
    ...mapState({
      posName: (state) => state.position.name,
      nearCity: (state) => state.position.nearCity,
      userName: (state) => state.userName,
    }),
  },
  created() {
    this.$api.getPosition().then((res) => {
      this.$store.dispatch("setPostion", res);
    });
  },
};
</script>

<style>
</style>