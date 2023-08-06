<script setup>
import Footer5 from "./Footer5.vue"
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination, A11y, Autoplay} from "swiper";
import 'swiper/css/pagination'
const modules = [Navigation, A11y, Autoplay, Pagination]

const pagination_settings = {
  clickable: true,
  el: '.home5-swiper-pagination',
  renderBullet: function (index, className) {
    return `<span class="${className} home5-blog-bullet"></span>`
  }
}

const breakPoints = {
  "992": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "768": {
    slidesPerView: 1,
  }
}
</script>
<template>
  <div class="recent-blog5-bg position-relative">
    <div class="recent-blog5-wiggly-shape">
      <img src="/assets/img/home5/recent_blog/blog_shape.png" alt="" />
    </div>
    <div class="recent-blog5-hat-shape">
      <img src="/assets/img/home5/footer/home2-shape2.png" alt="" />
    </div>
    <div class="container">
      <h2 class="recent-blog-subtitle">

        <span class="mx-2" style="text-decoration:line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Recent Blog
        <span class="mx-2" style="text-decoration:line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </h2>
      <h1 class="section-title">
        Every Single Update And Recent <br />
        Story From Our Blog
      </h1>
      <div class="recent-blogs-container">
        <swiper :modules="modules" :breakpoints="breakPoints" navigation :pagination="pagination_settings" :loop="true"
          :autoplay="{delay: 4000}">
          <swiper-slide>
            <div class="recent-blog-card">
              <div>
                <img src="/assets/img/home5/recent_blog/blog_1.png" alt="Blog 2">
                <div class="recent-blog-meta-container">
                  <div class="recent-blog-meta">
                    <p class="recent-blog-date">June 28, 2023</p>
                    <h2 class="recent-blog-title">Ten Useful Tips From Experts in <br />
                      Lawyer And Legal</h2>
                    <p class="recent-blog-content">Many desktop publishing packages and web page editors <br />Lorem Ipsum
                      as their default model text,
                    </p>
                    <router-link :to="{name: 'Blog'}" class="w-100">
                      <p class="recent-blog-read-more">Read More <i class="las la-arrow-right"></i></p>
                    </router-link>
                  </div>
                </div>

              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="recent-blog-card">
              <img src="/assets/img/home5/recent_blog/blog_2.png" alt="Blog 2">
              <div class="recent-blog-meta-container">
                <div class="recent-blog-meta">
                  <p class="recent-blog-date">June 28, 2023</p>
                  <h2 class="recent-blog-title">Ten Useful Tips From Experts in <br />
                    Lawyer And Legal</h2>
                  <p class="recent-blog-content">Many desktop publishing packages and web page editors <br />Lorem Ipsum
                    as their default model text,
                  </p>
                  <router-link :to="{name: 'Blog'}" class="w-100">
                    <p class="recent-blog-read-more">Read More <i class="las la-arrow-right"></i></p>
                  </router-link>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="home5-swiper-pagination"></div>
        </swiper>
      </div>
    </div>
    <Footer5 />
  </div>
</template>
<style>
.home5-swiper-pagination {
  margin-top: 125px;
  min-height: 8px;
  width: 100% !important;
  text-align: center;
}

.swiper-pagination-bullet.home5-blog-bullet.swiper-pagination-bullet {
  color: #2f3140 !important;
  background-color: #2f3140 !important;
  opacity: 1 !important;
  height: 8px;
  width: 8px;
}

.swiper-pagination-bullet.home5-blog-bullet.swiper-pagination-bullet-active {
  color: #c89d66 !important;
  background-color: #c89d66 !important;
  height: 8px;
  width: 8px;
}
</style>
<style scoped>
/* Styling Blogs Part */
.recent-blogs-container {
  padding-top: 2rem;
  padding-bottom: 12rem;
}

.recent-blog-card {
  display: flex;
  justify-content: center;
}

.recent-blog5-bg {
  overflow: hidden;
  padding-top: 6rem;
  background-color: #f7f2ec;
}

.recent-blog-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
  text-align: center;

  margin-bottom: 2rem;
}

.recent-blog-meta-container {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;

}

.recent-blog-meta {
  background-color: #f7f2ec;
  width: 80%;
}

.recent-blog-date {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(79, 79, 103);
  margin-bottom: 0;
  line-height: 3.444;
  text-align: center;
}

.recent-blog-title {
  font-size: 30px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.333;
  text-align: center;
}

.recent-blog-content,
.recent-blog-read-more {
  text-align: center;
}

.recent-blog-read-more:hover {
  color: rgb(200, 157, 102);
  cursor: pointer;
}

/* Styling Blog Shapes */
.recent-blog5-wiggly-shape {
  position: absolute;
  right: 0;
}

.recent-blog5-hat-shape {
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 34.85%;
  transform: rotate(4deg);
}

@media screen and (max-width:1200px) {
  .recent-blog5-hat-shape {
    bottom: 37.85%;
    transform: rotate(5deg);
  }
}

@media screen and (max-width:992px) {
  .recent-blog5-hat-shape {
    bottom: 40.85%;
    transform: rotate(9deg);
  }
}

@media screen and (max-width:768px) {
  .recent-blog5-hat-shape {
    bottom: 51.85%;
    transform: rotate(23deg);
  }
}
</style>

