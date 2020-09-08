<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问:" :list="recentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@c/changeCity/province";
import Hot from "@c/changeCity/hot";
import Category from "@c/changeCity/category";
export default {
  data() {
    return {
      hotList: [],
      recentList: [],
    };
  },
  created() {
    this.$api.hot().then((res) => {
      this.hotList = res.map((item) => item.name);
    });
    this.$api.recents().then((res) => {
      this.recentList = res.map((item) => item.name);
    });
  },
  components: {
    Province,
    Hot,
    Category,
  },
};
</script>

<style>
</style>