import ServiceApi from "../../../services/service";
import * as mutationTypes from "./CreatePost.mutationTypes";
import Swal from "sweetalert2";

const CreatePostActions = {
  async createPostRequest({ commit }, payload) {
    commit(mutationTypes.CREATE_POST_PROGRESS);

    let response = null;
    response = await ServiceApi.createPostApi(payload);
    if (!response) {
      commit(mutationTypes.CREATE_POST_ERROR, {
        error: response.error.data.message,
      });
      console.log("error", response.error.data.message);
    } else {
      commit(mutationTypes.CREATE_POST_SUCCESS, { data: response });
      Swal.fire("Post added successfully!", "", "success");
    }
  },
};

export default CreatePostActions;
