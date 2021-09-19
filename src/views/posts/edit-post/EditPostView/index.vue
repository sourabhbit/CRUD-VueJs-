<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Edit Post</h6>
      </div>
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div v-if="postByIdData.inProgress">
            <div class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <br />
              Loading Post Details
            </div>
          </div>
          <div v-if="fetchPostData !== null && !postByIdData.inProgress">
            <div class="form-group row">
              <div class="col-6">
                <label>Title:</label>
                <Field
                  id="title"
                  name="title"
                  type="text"
                  class="form-control"
                  :value="postByIdData.data.title"
                  v-model="postByIdData.data.title"
                />
                <ErrorMessage name="title" class="text-danger" />
              </div>
              <div class="col-6">
                <label>Author:</label>
                <Field
                  name="author"
                  type="text"
                  class="form-control"
                  :value="postByIdData.data.author"
                  v-model="postByIdData.data.author"
                />
                <ErrorMessage name="author" class="text-danger" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-12">
                <label>Content:</label>
                <Field
                  name="content"
                  as="textarea"
                  rows="15"
                  class="form-control"
                  :value="postByIdData.data.content"
                  v-model="postByIdData.data.content"
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
                value="Save Update"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script src="./EditPostView.js"></script>
<style lang="scss" module>
@import "../EditPost.module.scss";
</style>
