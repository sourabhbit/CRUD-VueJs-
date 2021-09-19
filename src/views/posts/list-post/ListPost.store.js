// import Vue from "vue";
// import Vuex from "vuex";
import * as mutationTypes from "./ListPost.mutationTypes";
import ListPost from "./ListPost.actions";

// Vue.use(Vuex);

export default {
  state: {
    postList: { data: [], isFetching: false, error: null },
    postDelete: { data: false, isFetching: false, error: null },
  },
  mutations: {
    [mutationTypes.FETCH_POST_PROGRESS](state) {
      state.postList = {
        data: [],
        inProgress: true,
        error: null,
      };
    },
    [mutationTypes.FETCH_POST_SUCCESS](state, payload) {
      state.postList = {
        data: payload,
        inProgress: false,
        error: null,
      };
    },
    [mutationTypes.FETCH_POST_ERROR](state, payload) {
      state.postList = {
        data: [],
        inProgress: false,
        error: payload.error,
      };
    },

    [mutationTypes.DELETE_POST_PROGRESS](state) {
      state.postDelete = {
        data: false,
        inProgress: true,
        error: null,
      };
    },
    [mutationTypes.DELETE_POST_SUCCESS](state, payload) {
      state.postDelete = {
        data: payload,
        inProgress: false,
        error: null,
      };
    },
    [mutationTypes.DELETE_POST_ERROR](state, payload) {
      state.postDelete = {
        data: payload,
        inProgress: false,
        error: payload.error,
      };
    },
  },
  actions: { ...ListPost },
  getters: {
    postListData: (state) => state.postList,
    postDeleteData: (state) => state.postDelete,
  },
};
