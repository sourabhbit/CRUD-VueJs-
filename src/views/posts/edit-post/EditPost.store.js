import * as mutationTypes from "./EditPost.mutationTypes";
import EditPost from "./EditPost.actions";

export default {
  state: {
    editPost: { data: [], isFetching: false, error: null },
    postById: { data: [], isFetching: false, error: null },
  },
  mutations: {
    [mutationTypes.EDIT_POST_PROGRESS](state) {
      state.editPost = {
        data: [],
        inProgress: true,
        error: null,
      };
    },
    [mutationTypes.EDIT_POST_SUCCESS](state, payload) {
      state.editPost = {
        data: payload,
        inProgress: false,
        error: null,
      };
    },
    [mutationTypes.EDIT_POST_ERROR](state, payload) {
      state.editPost = {
        data: [],
        inProgress: false,
        error: payload.error,
      };
    },

    [mutationTypes.FETCH_POST_BY_ID_PROGRESS](state) {
      state.postById = {
        data: [],
        inProgress: true,
        error: null,
      };
    },
    [mutationTypes.FETCH_POST_BY_ID_SUCCESS](state, payload) {
      state.postById = {
        data: payload,
        inProgress: false,
        error: null,
      };
    },
    [mutationTypes.FETCH_POST_BY_ID_ERROR](state, payload) {
      state.postById = {
        data: [],
        inProgress: false,
        error: payload.error,
      };
    },
  },
  actions: { ...EditPost },
  getters: {
    editPostData: (state) => state.editPost,
    postByIdData: (state) => state.postById,
  },
};
