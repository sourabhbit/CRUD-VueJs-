import { mapGetters, mapActions } from "vuex";
import PostDetail from "./PostDetail";

export default {
  components: {
    PostDetail,
  },
  created() {
    this.fetchPostListRequest();
  },
  computed: { ...mapGetters(["postListData"]) },

  methods: {
    ...mapActions(["fetchPostListRequest"]),
  },
};
