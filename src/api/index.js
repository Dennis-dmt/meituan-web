import $axios from './http'
const $api = {
  //查询最近热门搜索
  searchHotWords(config = {}) {
    return $axios.get("/header/searchHotWords", config)
  },
  //搜索框列表数据获取
  search(config = {}) {
    return $axios.get("/header/search", config)
  },
  //首页左侧导航条 导航数据
  nav(config = {}) {
    return $axios.get("/index/nav", config)
  },
  //首页下方（有格调内容区数据获取）
  resultsByKeywords(config = {}) {
    return $axios.get("/index/resultsByKeywords", config)
  },
  //产品展示列表数据获取
  goodsList(config = {}) {
    return $axios.get("/list/goodsList", config)
  },
  // 获取热门城市
  hot(config = {}) {
    return $axios.get("/city/hot", config)
  },
  //最近搜索城市
  recents(config = {}) {
    return $axios.get("/city/recents", config)
  },
  //获取省份列表
  province(config = {}) {
    return $axios.get("/city/province", config)
  },
  //获取当前位置信息
  getPosition(config = {}) {
    return $axios.get("/city/getPosition", config)
  },
  //获取城市列表接口
  cityList(config = {}) {
    return $axios.get("/city/cityList", config)
  },
  // 用户登录接口
  login(config = {}) {
    return $axios.get("/login", config)
  },
  ///用户注册接口
  register(config = {}) {
    return $axios.get("/register", config)
  },
}
export default $api