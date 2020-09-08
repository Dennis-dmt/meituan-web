<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{posName}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{posName}}{{$route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      posName: (state) => state.position.name,
    }),
  },
};
</script>

<style>
</style>