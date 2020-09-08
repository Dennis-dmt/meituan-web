<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active:kind===item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
      <!-- <dd :class="{active:kind==='food'}" data-type="food">约会聚餐</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in kindList" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
    },
  },
  mounted() {},
  created() {
    this.$api.resultsByKeywords().then((res) => {
      this.allLists = res;
    });
  },
  data() {
    return {
      kind: "all",
      allLists: {},
    };
  },
  computed: {
    kindList() {
      return this.allLists[this.kind];
    },
  },
  methods: {
    over(e) {
      let dom = e.target,
        tagName = dom.tagName;

      if (tagName !== "DD") {
        return;
      }
      this.kind = dom.dataset.type;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>