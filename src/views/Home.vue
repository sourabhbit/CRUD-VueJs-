<template>
  <div class="home">
    <div class="p-4">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/posts" class="btn btn-primary p-4 dashboard-widget">
            All Posts
          </router-link>
        </div>
        <div class="col-md-2">
          <router-link
            to="/posts/create"
            class="btn btn-primary p-4 dashboard-widget"
          >
            Write New Post <i class="fa fa-plus-circle"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
