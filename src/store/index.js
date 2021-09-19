import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
// import Vue from "vue";
// import Vuex from "vuex";
import ListPost from "./../views/posts/list-post/ListPost.store";
import CreatePost from "./../views/posts/create-post/CreatePost.store";
import EditPost from "./../views/posts/edit-post/EditPost.store";
// Vue.use(Vuex);

export default createStore({
  modules: {
    ListPost,
    CreatePost,
    EditPost,
  },
  state: {},
  mutations: {},
  actions: {},
});
