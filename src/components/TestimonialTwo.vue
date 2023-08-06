<template>
    <div class="testimonial-area-2 section-padding">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="testimonial-carousel">
                        <swiper
                            :modules="modules"
                            :slides-per-view="1"
                            :space-between="30"
                            :pagination="{ clickable: true }"
                            :autoplay="{ delay: 4000 }"
                            
                        >
                            <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
                                <div class="single-testimonial-item">
                                    <div class="testimonial-avatar">
                                        <img :src="testimonial.image" :alt="testimonial.name">
                                    </div>
                                    <div class="testimonial-content">
                                        <div class="testimonial-icon-before"><i class="las la-quote-left"></i></div>
                                        <p>{{testimonial.comment}}</p>
                                        <div class="testimonial-icon-after"><i class="las la-quote-right"></i></div>
                                        <h4>{{testimonial.name}} <span>{{testimonial.designation}}</span></h4>
                                    </div>
                                </div>
                            </swiper-slide>                           
                        </swiper>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import axios from 'axios'
export default {
    name: 'TestimonialTwo',
    components : {Swiper, SwiperSlide,},
    data(){
        return {
            modules: [Navigation, Pagination, A11y, Autoplay],            
            testimonials : []
        }
    },
    async mounted(){
       
        let fetchedData = await axios.get("/assets/data/testimonial_two.json");
        this.testimonials = fetchedData.data.testimonials;

        
    }
}
</script>