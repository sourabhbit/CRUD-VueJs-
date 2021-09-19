<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1>{{ postByIdData.data.title }}</h1>
        <h5>Written By - {{ postByIdData.data.author }}</h5>
        <p class="content">{{ postByIdData.data.content }}</p>
        <router-link to="/posts" class="btn btn-secondary button-padding"
          >Back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script src="./ReadPostView.js"></script>
<style lang="scss" module>
@import "../ReadPost.module.scss";
</style>
