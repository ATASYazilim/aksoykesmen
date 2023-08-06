<script setup>
import Button from './Button5.vue';

</script>
<template>
  <div class="container home5-price-margin">
    <h2 class="home5-price-subtitle">
      <span class="mx-2" style="text-decoration:line-through">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      Pricing Plans
      <span class="mx-2" style="text-decoration:line-through">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </h2>
    <h1 class="section-title mt-3 mb-5">We Provide The Best Notary Fees</h1>
    <div class="d-grid-system home5-card-grid">
      <div class="home5-price-card position-relative">
        <div class="home5-price-card-popular">
          <p class="m-0">Popular</p>
        </div>
        <div>
          <h2 class="home5-price-card-subtitle">Growth</h2>
          <h1 class="home5-price-card-title mt-2">$ 2,500 <span class="home5-price-sub">/Case</span></h1>
        </div>
        <hr />
        <div>
          <p>Neque porro quisquam est, qui ipsum quia dolor sit amet, consectetur,</p>
        </div>
        <div class="my-5">
          <router-link class="w-100" :to="{name: 'Price'}">
            <Button text="Get Started" class="w-100 buy-button-hover" />
          </router-link>
        </div>
        <div>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 20 hours of consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 4 hour response time</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> On-site consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> Assistance in 6 practice</p>
        </div>
      </div>
      <div class="home5-price-card position-relative">
        <div>
          <h2 class="home5-price-card-subtitle">Standard</h2>
          <h1 class="home5-price-card-title mt-2">$ 1,500 <span class="home5-price-sub">/Case</span></h1>
        </div>
        <hr />
        <div>
          <p>Neque porro quisquam est, qui ipsum quia dolor sit amet, consectetur,</p>
        </div>
        <div class="my-5">
          <router-link class="w-100" :to="{name: 'Price'}">
            <Button text="Get Started" class="w-100 buy-button-hover" />
          </router-link>
        </div>
        <div>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 20 hours of consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 4 hour response time</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> On-site consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> Assistance in 6 practice</p>
        </div>
      </div>
      <div class="home5-price-card position-relative">
        <div>
          <h2 class="home5-price-card-subtitle">Enterprise</h2>
          <h1 class="home5-price-card-title mt-2">$ 5,500 <span class="home5-price-sub">/Case</span></h1>
        </div>
        <hr />
        <div>
          <p>Neque porro quisquam est, qui ipsum quia dolor sit amet, consectetur,</p>
        </div>
        <div class="my-5">
          <router-link class="w-100" :to="{name: 'Price'}">
            <Button text="Get Started" class="w-100 buy-button-hover" />
          </router-link>
        </div>
        <div>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 20 hours of consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> 4 hour response time</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> On-site consultation</p>
          <p><span class="me-1"><i class="las la-circle dot"></i> </span> Assistance in 6 practice</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home5-price-margin {
  margin-top: 125px;
  margin-bottom: 125px;
}

.home5-card-grid {
  grid-gap: 20px;
}

.home5-price-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
  text-align: center;

}

.home5-price-card-title {
  font-size: 52px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  text-align: left;
}

.home5-price-card-subtitle {
  font-size: 20px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.3;
  text-align: left;

}

.home5-price-sub {
  font-size: 18px;
  font-weight: 500;
}

.home5-price-card {
  grid-column: auto / span 4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 35px;
  border-radius: 28px;
}

.home5-price-card:hover {
  box-sizing: content-box;
  outline: 2px dotted black;
}

.dot {
  background-color: #c89d66;
  color: #c89d66;
  border-radius: 50%;
  font-size: 0.75rem;
  vertical-align: center;
}

.home5-price-card-popular {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 40px;

  background-color: rgb(200, 157, 102);
  border-radius: 0 28px 0 0;
}

.home5-price-card-popular p {
  color: white;
}

.buy-button-hover:hover {
  color: #fff;
  background-color: rgb(47, 49, 64);
}

@media screen and (max-width:1000px) {
  .home5-price-card {
    grid-column: auto / span 6;
  }

  .home5-price-card:last-child {

    grid-column: 4 / span 6;
  }
}

@media screen and (max-width:768px) {
  .home5-price-card {
    grid-column: auto / span 12;
  }

  .home5-price-card:last-child {
    grid-column: auto / span 12;
  }
}
</style>

