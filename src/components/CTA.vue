<template>
 <!--CTA Section-->

    <div class="cta-area-2 white">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-8 col-12">
                    <h6>24/7 We Are Here</h6>
                    <h2>Get a Free Case <b>Evaluation</b></h2>
                </div>
                <div class="col-lg-6 offset-lg-1 col-md-12 col-12">
                    <div class="contact-info">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="call">
                                    <i class="las la-phone"></i>
                                    <h5>Call Us</h5>
                                    <p>{{homeData.phone}}</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="mail">
                                    <i class="las la-envelope"></i>
                                    <h5>E-mail</h5>
                                    <p>{{homeData.mail}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'CTA',
    data(){
        return {
            homeData : []
        }
    },
    async mounted(){
       
        let fetchedHomeData = await axios.get("/assets/data/homeData.json");
        this.homeData = fetchedHomeData.data.homeData;

        
    }
}
</script>