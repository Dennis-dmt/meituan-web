<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in lists" :key="index">
        <a :href="`#city-${item}`">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(val, key,index) in cityGroup"
      :key="index"
      :id="`city-${key}`"
    >
      <dt>{{key}}</dt>
      <dd>
        <span v-for="city in val" :key="city.id" @click="handleClick(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {},
    };
  },
  created() {
    this.$api.cityList().then((res) => {
      let obj = {};
      res.forEach((item) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods: {
    handleClick(city) {
      this.$store.dispatch("setPostion", city);
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>