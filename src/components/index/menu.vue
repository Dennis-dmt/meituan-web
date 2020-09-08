<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(menu, index) in menuList" :key="index" @mouseenter="menuEnter(menu)">
        <i :class="menu.type"></i>
        {{menu.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detialLeave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.items" :key="`${v}_${i}`">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curDetail: null,
      menuList: [],
    };
  },
  created() {
    //首页左侧导航条 导航数据
    this.$api.nav().then((res) => {
      this.menuList = res;
    });
  },
  methods: {
    menuEnter(menu) {
      console.log("menu", menu);
      this.curDetail = menu;
    },
    menuLeave() {
      console.log("menuLeave");
      // 延迟200ms触发
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detialLeave() {
      this.curDetail = null;
    },
  },
};
</script>

<style>
</style>