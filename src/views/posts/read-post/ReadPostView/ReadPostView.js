import { mapActions, mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      id: null,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },

  created: function () {
    this.id = this.$route.params.id;
    this.fetchPostData(this.id);
  },

  computed: {
    ...mapGetters(["editPostData", "postByIdData"]),
  },

  methods: {
    ...mapActions(["editPostRequest", "fetchPostData"]),
    onSubmit() {
      const { title, author, content } = this.postByIdData.data;
      // return false;
      this.editPostRequest({
        id: this.id,
        title: title,
        author: author,
        content: content,
      });
    },
  },

  watch: {
    editPostData: function () {
      if (this.editPostData) {
        Swal.fire({
          text: "Success, Post has been updated successfully !",
          icon: "success",
          position: "top-end",
          timer: 1000,
        });

        this.$router.push({ name: "Post" });
      }
    },
  },

  setup() {
    // Define a validation schema
    const schema = yup.object({
      title: yup.string().required().min(5),
      author: yup.string().required(),
      content: yup.string().required().min(5),
    });

    return {
      schema,
    };
  },
};
