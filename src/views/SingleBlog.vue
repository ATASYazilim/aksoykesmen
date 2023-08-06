<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Single Blog" subTitle="Single Blog" />
  <!-- Blog Area  -->

  <div id="blog-page" class="blog-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="single-blog-wrap">
            <img :src="images.banner_image" :alt="currentBlog.title" />
            <div class="blog-meta">
              <span><i class="las la-user"></i>{{ currentBlog.author }}</span>
              <span><i class="las la-calendar"></i>{{ currentBlog.date }}</span>
              <span
                ><i class="las la-comments"></i
                >{{ comments.length }} Comments</span
              >
            </div>
            <h3>{{ currentBlog.title }}</h3>
            <p>{{ currentBlog.full_content }}</p>

            <h5>{{ currentBlog.sub_title_1 }}</h5>
            <p>{{ currentBlog.sub_title_1_content }}</p>
            <div class="row">
              <div class="col-lg-6 mb-30">
                <img class="blog-inside" :src="images.image_1" alt="" />
              </div>
              <div class="col-lg-6">
                <img class="blog-inside" :src="images.image_2" alt="" />
              </div>
            </div>

            <h5>{{ currentBlog.sub_title_2 }}</h5>
            <p>{{ currentBlog.sub_title_2_content }}</p>
            <hr />
            <div class="author-profile">
              <img src="/assets/img/client-img.jpg" alt="" />
              <div class="author-info">
                <h6>Harvert Milan</h6>
                <p>
                  While publishing our article in a journal, to claim it as our
                  article, where should be our name in the authors list, the
                  first name
                </p>
                <div class="social-icon">
                  <ul>
                    <li>
                      <a href="#" class=""><i class="lab la-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#" class=""><i class="lab la-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" class=""
                        ><i class="lab la-pinterest-p"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" class=""><i class="lab la-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />

            <div class="comments-section">
              <h5>Comments ({{ comments.length }})</h5>
              <div
                class="single-comments-section"
                v-for="comment in comments"
                :key="comment.id"
              >
                <img :src="comment.author_image" :alt="comment.id" />
                <p>
                  <b>{{ comment.author_name }}</b
                  ><span>{{ comment.date }}</span>
                </p>
                <p>{{ comment.content }}</p>
                <p><a href="#" class="reply-btn">Reply</a></p>
              </div>
            </div>
          </div>
          <div class="comments-form">
            <h3>Leave A Reply</h3>
            <p>
              Your email address will not be published. Required fiels are
              marked
            </p>
            <div class="row">
              <div class="col-lg-12">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Write Your Comment"
                ></textarea>
              </div>
              <div class="col-lg-6">
                <input type="text" placeholder="Your Name" />
              </div>
              <div class="col-lg-6">
                <input type="email" placeholder="Email here" />
              </div>
              <div class="col-lg-12">
                <button type="submit">Post Comment</button>
              </div>
            </div>
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
  name: "SingleBlog",
  components: { NavbarHome5, Breadcrumb, Footer5 },
  data() {
    return {
      blogs: [],
      archives: [],
      categories: [],
      tags: [],
      currentBlog: [],
      images: [],
      comments: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedBlogData = await axios.get("/assets/data/blogs.json");
    this.blogs = fetchedBlogData.data.blogs;

    this.currentBlog = this.blogs.find(
      (item) => item.id == this.$route.params.id
    );
    this.images = this.currentBlog.images;
    this.comments = this.currentBlog.comments;

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
  title: "Blog Details | Aksoy/Kesmen",
  description: "Blog Details | Aksoy/Kesmen",
  ogDescription: "Blog Details | Aksoy/Kesmen",
  ogTitle: "Blog Details | Aksoy/Kesmen",
});
</script>
