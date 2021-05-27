<template>
  <section class="blog-posts">
    <h1>Blog posts</h1>
    <!-- Each blog post -->
    <div class="blog-post row" v-for="post in posts" :key="post.title">
      <h3 class="blog-title">
        <a href="posts/{{ post.id }}">{{ post.title }}</a>
      </h3>
      <p class="blog-description">{{ post.description }}</p>
      <small class="blog-created-at">{{ post.createdAt }}</small>
    </div>
  </section>
</template>

<script>
const axios = require("axios");

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:5001/blog-site-vue/us-central1/app/posts")
      .then((response) => (this.posts = response.data));
  },
};
</script>

<style scoped>
.blog-posts {
  height: 100%;
}
.blog-post {
  margin: auto;
  width: 500px;
  min-height: 120px;
  border-bottom: 1px solid lightskyblue;
  text-align: left;
  padding-bottom: 10px;
}
.blog-title {
  color: skyblue;
  width: 100%;
  margin: 10px 0px 0px 10px;
}
.blog-title > a {
  color: skyblue;
  text-decoration: none;
}
.blog-description {
  font-size: 14px;
  width: 100%;
  margin-left: 10px;
}
.blog-created-at {
  width: 100%;
}
</style>
