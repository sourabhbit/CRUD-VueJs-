import { mapActions, mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  data() {
    return {
      post: {},
    };
  },

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  computed: { ...mapGetters(["savePostData"]) },

  methods: {
    ...mapActions(["createPostRequest"]),
    onSubmit() {
      const { title, author, content } = this.post;
      this.createPostRequest({
        title: title,
        author: author,
        content: content,
      });
    },
  },

  watch: {
    savePostData: function () {
      if (this.savePostData) {
        this.$swal.fire({
          text: "Success, Post has been added.",
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
