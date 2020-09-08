<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Container from "@c/index/container";
import MMenu from "@c/index/menu";
import MLife from "@c/index/life";
export default {
  components: {
    MMenu,
    MLife,
    Container,
  },
  data() {
    return {
      iStyle: {
        title: "有格调",
        list: [
          { text: "全部", tab: "all" },
          { text: "约会聚餐", tab: "food" },
          { text: "电影", tab: "movie" },
          { text: "按摩spa", tab: "spa" },
          { text: "旅游", tab: "travel" },
        ],
      },
      recomment: {
        title: "很优惠",
        list: [
          { text: "全部", tab: "all" },
          { text: "美食", tab: "food" },
          { text: "休闲", tab: "xiuxian" },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>