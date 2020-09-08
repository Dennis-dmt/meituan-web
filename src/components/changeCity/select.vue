<template>
  <div
    :class="['choose-wrap',cityDisabled?'disabled':'']"
    @click.stop="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose" :class="[cityDisabled?'disabled':'']">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{ active : showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper" :class="[className]">
          <div class="col" v-for="(listData, index) in renderList" :key="index">
            <span
              class="mt-item"
              :class="{active: item.name === value}"
              v-for="(item, index) in listData"
              :key="index"
              @click="changeVal(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: [
    "list",
    "value",
    "title",
    "showWrapperActive",
    "cityDisabled",
    "className",
  ],
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let resList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resList.push(data);
      }
      return resList;
    },
  },
  methods: {
    showWrapper() {
      // this.showWrapperActive = true;
      if (!this.cityDisabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      // this.showWrapperActive = false;
      this.$emit("change_active", false);
      console.log("documentClick");
    },
    changeVal(item) {
      this.$emit("change", item);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>