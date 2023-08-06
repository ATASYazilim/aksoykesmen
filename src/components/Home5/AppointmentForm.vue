<script setup>
import Button5 from './Button5.vue';
</script>
<template>
  <div class="appointment-margin">
    <div class="container">
      <div class="appointment-grid">
        <div class="appointment-grid-right">
          <div class="appointment-input">
            <input type="text" placeholder="Your Name">
          </div>
          <div class="appointment-input">
            <input type="text" placeholder="Last Name">
          </div>
          <div class="appointment-input">
            <input type="text" placeholder="Phone Number">
          </div>
          <div class="appointment-input">
            <input type="email" placeholder="Your Email">
          </div>
          <div class="appointment-input">
            <input type="text" placeholder="Choose a service">
          </div>
          <div class="appointment-input">
            <input type="text" placeholder="Choose specialist">
          </div>
          <div class="appointment-input span-full">
            <input type="text" placeholder="Choose District">
          </div>
        </div>
        <div class="appointment-grid-left">
          <h1 class="appointment-title mb-3">Appointment Event</h1>
          <Button5 text="Submit Request" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-center">
    <img class="img img-fluid" src="/assets/img/home5/home5_thin_banner.png" alt="Make an Appointment Now">
  </div>
</template>
<style scoped>
.appointment-margin {
  margin-top: 120px;
  margin-bottom: 120px;
}

.appointment-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
}

.appointment-grid-right {
  grid-column: auto / span 8;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.appointment-grid-left {
  grid-column: auto / span 4;
}

.appointment-title {
  font-size: 52px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.192;
  text-align: left;
}

.appointment-input {
  grid-column: auto / span 4;
}

.span-full {
  grid-column: auto / span 12;
}

.appointment-input input {
  color: #4f4f67;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #e3deda;
}

.appointment-input input::placeholder {
  color: #4f4f67;
}

@media screen and (max-width:992px) {
  .appointment-grid-left {
    grid-column: auto / span 12;
    order: -1;
  }

  .appointment-grid-right {
    grid-column: auto / span 12;
  }
}
</style>

