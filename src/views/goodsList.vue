<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <!-- 面包屑导航 -->
      <crumb />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <List />
        </el-row>
      </el-col>
      <!-- 地图模块 -->
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>
<script>
import categroy from "@c/products/categroy";
import crumb from "@c/products/crumb";
import List from "@c/products/list";
export default {
  components: {
    crumb,
    categroy,
    List,
  },
  mounted() {
    console.log(1111, this.$store.state);
  },
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>