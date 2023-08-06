<template>
<div class="testimonial-area dark-bg section-padding">
		<div class="overlay-2"></div>
		<div class="capricorn-testimonial">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center ">
						<div class="section-title">
							<h6 class="text-white">Testimonial</h6>
							<h2 class="text-white">Client's <b>Feedback</b></h2>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<div class="client-carousel ">
                            <swiper
                                :modules="modules"
                                :slides-per-view="1"
                                :space-between="30"
                                
                                :autoplay="{ delay: 4000 }"
                                :breakpoints="{
                                '575': {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                '768': {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                '990': {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                '1024': {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                }"
                            >
                                <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
                                    <div class="single-client-item">
                                        <div class="testimonial-icon"><i class="las la-quote-left"></i></div>
                                        <p>{{testimonial.comment}}</p>
                                        <img :src="testimonial.image" :alt="testimonial.name">
                                        <div class="author-desc">
                                            <h5>{{testimonial.name}}</h5><span>{{testimonial.designation}}</span>
                                        </div>
                                    </div>
                                </swiper-slide>

                            </swiper>
						</div>
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
    name: 'TestimonialOne',
    components : {Swiper, SwiperSlide,},
    data(){
        return {
            modules: [Navigation, Pagination, A11y, Autoplay],            
            testimonials : []
        }
    },
    async mounted(){
       
        let fetchedData = await axios.get("/assets/data/testimonial_one.json");
        this.testimonials = fetchedData.data.testimonials;

        
    }
}
</script>