<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Add New Post</h6>
      </div>
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div class="form-group row">
            <div class="col-6">
              <label>Post Title:</label>
              <Field
                id="title"
                name="title"
                type="text"
                class="form-control"
                v-model="post.title"
              />
              <ErrorMessage name="title" class="text-danger" />
            </div>
            <div class="col-6">
              <label>Post Author:</label>
              <Field
                name="author"
                type="text"
                class="form-control"
                v-model="post.author"
              />
              <ErrorMessage name="author" class="text-danger" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label>Post Content:</label>
              <Field
                name="content"
                as="textarea"
                rows="15"
                class="form-control"
                v-model="post.content"
              />
              <ErrorMessage name="content" class="text-danger" />
            </div>
          </div>
          <div class="form-group">
            <router-link to="/posts" class="btn btn-secondary button-padding"
              >Cancel</router-link
            >
            <input
              type="submit"
              class="btn btn-primary button-padding"
              value="Add Post"
            />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script src="./CreatePostView.js"></script>
<style lang="scss" module>
@import "../CreatePost.module.scss";
</style>
