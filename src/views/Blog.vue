<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Blog" subTitle="Blog" />
  <!-- Blog Area  -->

  <div id="blog-page" class="blog-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="single-blog-item" v-for="blog in blogs" :key="blog.id">
            <div class="blog-bg">
              <img :src="blog.images.banner_image" :alt="blog.title" />
            </div>
            <div class="blog-content">
              <p class="blog-meta">
                <i class="las la-user-circle"></i>Admin |
                <i class="las la-calendar-check"></i>24 Dec
              </p>
              <router-link
                :to="{ name: 'BlogDetails', params: { id: blog.id } }"
                >{{ blog.title }}</router-link
              >
              <p>{{ blog.short_description }}</p>
              <router-link
                :to="{ name: 'BlogDetails', params: { id: blog.id } }"
                class="read-more"
                >Read More</router-link
              >
              <div>
                <i class="las la-heart"></i>{{ blog.likes }} |
                <i class="las la-comments"></i>{{ blog.comments.length }}
              </div>
            </div>
          </div>

          <div class="pagination-block mb-15">
            <a class="page-numbers" href="/blog">1</a>
            <a class="page-numbers current" href="/blog">2</a>
            <a class="next page-numbers" href="/blog"
              ><i class="las la-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-search">
            <form action="/blog">
              <input type="search" placeholder="Search here" />
              <button type="submit"><i class="las la-search"></i></button>
            </form>
          </div>
          <div class="blog-category">
            <h5>Categories</h5>
            <a
              :class="category.id == 1 ? 'active' : ''"
              v-for="category in categories"
              :key="category.id"
              href="#"
              >{{ category.name }} ({{ category.count }})</a
            >
          </div>
          <div class="recent-post">
            <h5>Recent Post</h5>
            <span v-for="recentBlog in blogs.slice(0, 3)" :key="recentBlog.id">
              <img :src="recentBlog.images.banner_image" alt="" />
              <div class="single-recent-post">
                <h6>{{ recentBlog.short_description.substr(0, 40) }}....</h6>
                <p class="blog-date">
                  <i class="las la-calendar"></i>{{ recentBlog.date }}
                </p>
              </div>
            </span>
          </div>
          <div class="archive">
            <h5>Archive</h5>
            <a
              :class="archive.id == 1 ? 'active' : ''"
              v-for="archive in archives"
              :key="archive.id"
              href="#"
              >{{ archive.name }} ({{ archive.count }})</a
            >
          </div>
          <div class="popular-tag">
            <h5>Popular Tags</h5>
            <span
              :class="tag.id == 1 ? 'active' : ''"
              v-for="tag in tags"
              :key="tag.id"
              ><a href="#">{{ tag.name }}</a></span
            >
          </div>
          <div class="helpline-section">
            <div class="overlay-2"></div>
            <div class="helpline-content text-center">
              <h4>
                Need <br />
                Consultancy Help
              </h4>
              <p>Gatherin galso sprit moving shall flow</p>
              <button type="submit">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Footer5 from "@/components/Home5/Footer5.vue";

import axios from "axios";

export default {
  name: "Blog",
  components: { NavbarHome5, Breadcrumb, Footer5 },
  data() {
    return {
      blogs: [],
      archives: [],
      categories: [],
      tags: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedBlogData = await axios.get("/assets/data/blogs.json");
    this.blogs = fetchedBlogData.data.blogs;

    let fetchedCategoryData = await axios.get("/assets/data/categories.json");
    this.categories = fetchedCategoryData.data.categories;

    let fetchedTagData = await axios.get("/assets/data/tags.json");
    this.tags = fetchedTagData.data.tags;

    let fetchedArchiveData = await axios.get("/assets/data/archives.json");
    this.archives = fetchedArchiveData.data.archives;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Blog | Aksoy/Kesmen",
  description: "Blog | Aksoy/Kesmen",
  ogDescription: "Blog | Aksoy/Kesmen",
  ogTitle: "Blog | Aksoy/Kesmen",
});
</script>
