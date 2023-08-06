<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Sign In" subTitle="Sign In" />
  <!-- Sign In  -->

  <div class="main-wrapper gray-bg">
    <div class="image-holder sign-in">
      <img src="/assets/img/sign-in.jpg" alt="" />
    </div>
    <div class="form-inner sign-in">
      <form action="">
        <div class="form-header">
          <h3>Sign In</h3>
          <hr />
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
          <router-link :to="{ name: 'SignIn' }" class="main-btn"
            >Log In</router-link
          >
        </div>

        <p class="form-meta mt-30">
          <a class="text-link" href="#">Forgot your password</a>
        </p>
        <p class="form-meta">
          <router-link class="text-link" :to="{ name: 'Registration' }"
            >Create Account</router-link
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
  name: "SignIn",
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
  title: "Sign In | Aksoy/Kesmen",
  description: "Sign In  | Aksoy/Kesmen",
  ogDescription: "Sign In | Aksoy/Kesmen",
  ogTitle: "Sign In | Aksoy/Kesmen",
});
</script>
