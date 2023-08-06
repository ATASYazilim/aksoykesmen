<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css/pagination";
const modules = [Navigation, A11y, Autoplay, Pagination];
const pagination_settings = {
  clickable: true,
  el: ".testimonial5-swiper-pagination",
  renderBullet: function (index, className) {
    return `<span class="${className} testimonial5-bullet"></span>`;
  },
};
</script>

<template>
  <div class="testimonial5-bg d-flex align-items-center position-relative">
    <div class="testimonial5-shape">
      <h1 class="testimonial5-reviews-title">520+</h1>
      <p class="testimonial5-reviews-text">Reviews</p>
    </div>
    <div class="container">
      <h2 class="testimonial5-subtitle">
        <span class="mx-2" style="text-decoration: line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Testimonials
        <span class="mx-2" style="text-decoration: line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </h2>
      <h1 class="section-title">What Our Clients Say</h1>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        :pagination="pagination_settings"
        :loop="true"
        :autoplay="{ delay: 4000 }"
        class="mt-5"
      >
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <div class="d-flex">
              <div>
                <img
                  src="/assets/img/home5/testimonials/client_1.png"
                  alt="Client 1"
                />
              </div>
              <div class="d-flex ms-5 align-items-center">
                <div>
                  <div style="color: #c89d66">
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                  </div>
                  <p class="my-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit,<br />sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi porro <br />
                    quisquam est, qui ipsum quia dolor sit amet,
                  </p>
                  <div>
                    <h3 class="testimonial5-author-title">Nicolas Otamendi</h3>
                    <p class="m-0 testimonial5-author-role">Social Activist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <div class="d-flex">
              <div>
                <img
                  src="/assets/img/home5/testimonials/client_1.png"
                  alt="Client 1"
                />
              </div>
              <div class="d-flex ms-5 align-items-center">
                <div>
                  <div style="color: #c89d66">
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                  </div>
                  <p class="my-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit,<br />sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi porro <br />
                    quisquam est, qui ipsum quia dolor sit amet,
                  </p>
                  <div>
                    <h3 class="testimonial5-author-title">Nicolas Otamendi</h3>
                    <p class="m-0 testimonial5-author-role">Social Activist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <div class="d-flex">
              <div>
                <img
                  src="/assets/img/home5/testimonials/client_1.png"
                  alt="Client 1"
                />
              </div>
              <div class="d-flex ms-5 align-items-center">
                <div>
                  <div style="color: #c89d66">
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                  </div>
                  <p class="my-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit,<br />sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi porro <br />
                    quisquam est, qui ipsum quia dolor sit amet,
                  </p>
                  <div>
                    <h3 class="testimonial5-author-title">Nicolas Otamendi</h3>
                    <p class="m-0 testimonial5-author-role">Social Activist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="testimonial5-swiper-pagination"></div>
    </div>
  </div>
</template>
<style>
.testimonial5-swiper-pagination {
  margin-top: 80px;
  min-height: 8px;
  width: 100% !important;
  text-align: center;
}

.swiper-pagination-bullet.testimonial5-bullet.swiper-pagination-bullet {
  border-radius: 0;
  color: #c89d66 !important;
  background-color: #c89d66 !important;
  opacity: 0.5 !important;
  height: 5px;
  width: 20px;
}

.swiper-pagination-bullet.testimonial5-bullet.swiper-pagination-bullet-active {
  border-radius: 0;
  color: #c89d66 !important;
  opacity: 1 !important;
  background-color: #c89d66 !important;
  height: 5px;
  width: 40px;
}
</style>

<style scoped>
.testimonial5-bg {
  border-bottom: 1px solid #fff0;
  min-height: 766px;
}

.testimonial5-shape {
  top: -50px;
  left: 50px;
  position: absolute;
  background-color: rgb(200, 157, 102);
  border-radius: 0 40% 0 40%;
  padding: 40px;
}

.testimonial5-reviews-title {
  font-size: 52px;
  font-family: "Rajdhani";
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1;
  text-align: center;
}

.testimonial5-reviews-text {
  font-size: 20px;
  font-family: "Rajdhani";
  color: rgb(255, 255, 255);
  line-height: 1.5;
  text-align: center;
}

.testimonial5-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
  text-align: center;
}

.testimonial5-author-title {
  font-size: 20px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.4;
}

.testimonial5-author-role {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(79, 79, 103);
  line-height: 1.556;
}
</style>
