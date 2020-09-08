import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  position: {
    // acronym: "am"
    // firstChar: "A"
    // id: 402
    // name: "澳门"
    // pinyin: "aomen"
    // rank: "Z"
  },
  userName: ''
}


const mutations = {
  setPostion(state, payload) {
    state.position = payload
  },
  setUserName(state, payload) {
    state.userName = payload
  }
}

const actions = {
  setPostion({ commit }, val) {
    // 后端获取当前位置数据
    commit('setPostion', val)
  }
}

const getters = {

}


const store = new Vuex.Store({
  state, mutations, actions, getters
})

export default store