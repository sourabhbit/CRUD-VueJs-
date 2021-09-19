import ServiceApi from "../../../services/service";
import * as mutationTypes from "./ReadPost.mutationTypes";

const ReadPostActions = {
  async fetchPostData({ commit }, id) {
    commit(mutationTypes.FETCH_POST_BY_ID_PROGRESS);
    let response = null;
    response = await ServiceApi.getPostByIdApi(id);
    if (response.error) {
      commit(mutationTypes.FETCH_POST_BY_ID_ERROR, {
        error: response.error.data.message,
      });
      console.log("error", response.error.data.message);
    } else {
      commit(mutationTypes.FETCH_POST_BY_ID_SUCCESS, response);
    }
  },
};

export default ReadPostActions;
