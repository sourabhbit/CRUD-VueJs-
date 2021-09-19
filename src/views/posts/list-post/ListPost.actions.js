import ServiceApi from "../../../services/service";
import * as mutationTypes from "./ListPost.mutationTypes";

const ListPostActions = {
  async fetchPostListRequest({ commit }) {
    commit(mutationTypes.FETCH_POST_PROGRESS);

    const response = await ServiceApi.getPostListApi();
    if (response.error) {
      commit(mutationTypes.FETCH_POST_ERROR, {
        error: response.error.data.message,
      });
      console.log("error", response.error.data.message);
    } else {
      commit(mutationTypes.FETCH_POST_SUCCESS, response);
    }
  },

  async deletePostRequest({ commit }, id) {
    commit(mutationTypes.DELETE_POST_PROGRESS);

    const response = await ServiceApi.deletePostApi(id);
    if (response.error) {
      commit(mutationTypes.DELETE_POST_ERROR, {
        error: response.error.data.message,
      });
      console.log("error", response.error.data.message);
    } else {
      commit(mutationTypes.DELETE_POST_SUCCESS, response);
    }
  },
};

export default ListPostActions;
