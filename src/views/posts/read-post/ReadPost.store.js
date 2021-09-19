import * as mutationTypes from "./ReadPost.mutationTypes";
import ReadPost from "./ReadPost.actions";

export default {
  state: {
    postById: { data: [], isFetching: false, error: null },
  },
  mutations: {
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
  actions: { ...ReadPost },
  getters: {
    postByIdData: (state) => state.postById,
  },
};
