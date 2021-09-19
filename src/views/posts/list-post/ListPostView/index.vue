<template>
  <div class="container">
    <div class="row justify-content-center mt-2 mb-2">
      <div class="col-12">
        <h4 class="text-left mb-2">All Posts</h4>
      </div>
    </div>
    <div class="">
      <div class="d-flex flex-wrap">
        <div v-for="(item, index) in postListData.data" :key="item.id">
          <post-detail :index="index" :post="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ListPostView.js"></script>
<style lang="scss" module>
@import "../ListPost.module.scss";
</style>
