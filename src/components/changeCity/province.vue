<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProActive"
      @change="changeProvince"
      class-name="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :cityDisabled="cityDisabled"
      class-name="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["上海", "深圳", "广州", "北京", "海南", "黑龙江"],
      searchWord: "",
      loading: false,
      cityDisabled: true,
    };
  },
  components: {
    MSelect,
  },
  created() {
    this.$api.province().then((res) => {
      this.provinceList = res.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  methods: {
    changeProActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod() {
      console.log("remoteMethod", this.searchWord);
      // 请求后端接口
    },
    changeCity(val) {
      this.city = val.name;
      this.$store.dispatch("setPostion", val);
      this.$router.push({ name: "index" });
    },
    changeProvince(val) {
      this.province = val.name;
      this.cityDisabled = false;
      this.cityList = val.cityInfoList;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>