const ServiceApi = {
  getPostListApi: () => {
    let data = JSON.parse(localStorage.getItem("posts"));
    // console.log(data);
    return data;
  },

  getPostByIdApi: (id) => {
    console.log(id);
    var posts = JSON.parse(localStorage.getItem("posts"));
    return posts[id];
  },

  createPostApi: (data) => {
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (posts) {
      posts.push(data);
      localStorage.setItem("posts", JSON.stringify(posts));
      return true;
    } else {
      localStorage.setItem("posts", JSON.stringify([data]));
      return true;
    }
  },

  deletePostApi: (id) => {
    var posts = JSON.parse(localStorage.getItem("posts"));
    let result = posts.splice(id, 1);
    console.log(result);
    localStorage.setItem("posts", JSON.stringify(posts));
  },

  editPostApi: (data) => {
    const id = data.id;
    var posts = JSON.parse(localStorage.getItem("posts"));
    delete data["id"];
    posts[id] = data;
    localStorage.setItem("posts", JSON.stringify(posts));
    return true;
  },
};

export default ServiceApi;
