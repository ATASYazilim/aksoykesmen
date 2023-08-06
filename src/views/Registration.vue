<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Registration" subTitle="Registration" />

  <!-- Sign Up  -->

  <div class="main-wrapper gray-bg">
    <div class="image-holder">
      <img src="/assets/img/registration.jpg" alt="" />
    </div>
    <div class="form-inner">
      <form action="">
        <div class="form-header">
          <h3>Sign Up</h3>
          <hr />
        </div>
        <div class="form-group">
          <label for="">Full Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">User Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">E-mail</label>
          <input type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Select Country</label>
          <select name="" id="">
            <option value="01">Australia</option>
            <option value="01">United Kingdom</option>
            <option value="01">Italy</option>
            <option value="01">France</option>
            <option value="01">Germany</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">City</label>
          <input type="text" class="form-control" />
        </div>

        <div class="form-group">
          <a href="#" class="main-btn">Create My Account</a>
        </div>

        <p class="form-meta">
          Already have an account?
          <router-link class="text-link" :to="{ name: 'SignIn' }"
            >Sign In</router-link
          >
        </p>
      </form>
    </div>
  </div>
  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Footer5 from "@/components/Home5/Footer5.vue";

export default {
  name: "Registration",
  components: { NavbarHome5, Breadcrumb, Footer5 },
  data() {
    return {};
  },
  mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Registration |Aksoy/Kesmen",
  description: "Registration  | Aksoy/Kesmen",
  ogDescription: "Registration  | Aksoy/Kesmen",
  ogTitle: "Registration | Aksoy/Kesmen",
});
</script>
