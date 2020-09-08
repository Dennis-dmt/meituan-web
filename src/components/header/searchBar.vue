<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="{name:'index'}">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(hotPlace, index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:hotPlace}}">{{hotPlace}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(search, index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:search}}">{{search}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(suggest, index) in suggestList" :key="index">{{suggest}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: [],
    };
  },
  created() {
    //最近热门搜索
    this.$api.searchHotWords().then((res) => {
      this.hotPlaceList = res;
      this.suggestList = res;
    });
  },
  watch: {
    //搜索框列表数据获取
    searchWord: function () {
      this.$api.search().then((res) => {
        this.searchList = res.list.filter((item) => {
          return item.indexOf(this.searchWord) > -1;
        });
      });
    },
  },
  computed: {
    isHotPlace() {
      return this.isFocus === true && this.searchWord === "";
    },
    isSearchList() {
      return this.isFocus === true && this.searchWord !== "";
    },
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      console.log("blur");
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
// @import "@/assets/css/public/header/search.scss";
// @import "@/assets/css/public/header/index.scss";
</style>