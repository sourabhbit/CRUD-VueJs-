import * as mutationTypes from "./CreatePost.mutationTypes";
import CreatePost from "./CreatePost.actions";

export default {
  state: {
    savePost: { data: [], isFetching: false, error: null },
  },
  mutations: {
    [mutationTypes.CREATE_POST_PROGRESS](state) {
      state.savePost = {
        data: [],
        inProgress: true,
        error: null,
      };
    },
    [mutationTypes.CREATE_POST_SUCCESS](state, payload) {
      state.savePost = {
        data: [payload.data],
        inProgress: false,
        error: null,
      };
    },
    [mutationTypes.CREATE_POST_ERROR](state, payload) {
      state.savePost = {
        data: [],
        inProgress: false,
        error: payload.error,
      };
    },
  },
  actions: { ...CreatePost },
  getters: {
    savePostData: (state) => state.savePost,
  },
};
