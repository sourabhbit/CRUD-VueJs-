<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <img
        src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"
        class="card-img-top"
        alt="..."
      />
      <h5 class="card-title font-weight-bold">{{ post.title }}</h5>
      <p class="card-text">
        Written By - <span class="text-info">{{ post.author }}</span>
      </p>
      <p class="card-text">{{ truncat(post.content, 70, "...") }}</p>
      <!-- <a href="#" class="btn btn-primary button-padding">Read More</a> -->
      <router-link
        :to="{ name: 'ReadPost', params: { id: index } }"
        class="btn btn-primary button-padding"
        title="Read More"
        >Read More
      </router-link>
      <router-link
        :to="{ name: 'EditPost', params: { id: index } }"
        class="btn btn-primary button-padding"
        title="Edit Post"
      >
        <i class="fa fa-pencil"></i
      ></router-link>
      <button
        class="btn btn-danger button-padding"
        @click="deletePostModal(index)"
        title="Delete Post"
      >
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "PostDetail",
  props: {
    post: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: { ...mapGetters(["postDeleteData"]) },

  methods: {
    ...mapActions(["deletePostRequest", "fetchPostListRequest"]),
    deletePostModal(id) {
      Swal.fire({
        text: "Are you sure to delete the post ?",
        icon: "error",
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Confirm Delete",
        showCancelButton: true,
      }).then((result) => {
        if (result["isConfirmed"]) {
          this.deletePostRequest(id);
          this.fetchPostListRequest({
            page: 1,
            search: "",
          });
          Swal.fire({
            text: "Success, Post has been deleted.",
            icon: "success",
            position: "top-end",
            timer: 1000,
          });
        }
      });
    },
    truncat(str, max, suffix) {
      return str.length < max
        ? str
        : `${str.substr(
            0,
            str.substr(0, max - suffix.length).lastIndexOf(" ")
          )}${suffix}`;
    },
  },
};
//
</script>
