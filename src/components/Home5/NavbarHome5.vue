<template>
  <header class="header-area" id="header-4">
    <div class="header-wrapper">
      <div class="sticky-area">
        <div class="navigation sticky-top">
          <div class="container">
            <div class="header-inner-box">
              <router-link to="/" class="logo">
                <img src="/assets/img/logo.png" alt="" />
              </router-link>
            </div>
            <div class="main-menu d-flex justify-content-end">
              <nav class="navbar navbar-expand-lg w-100">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item home4-nav-item">
                      <a class="nav-link" href="/"
                        >Home
                        <span class="sub-nav-toggler"> </span>
                      </a>
                      
                    </li>

                    <li class="nav-item home4-nav-item">
                      <a class="nav-link" href="Attorney"
                        >Our Attorney
                        <span class="sub-nav-toggler"> </span>
                      </a>
                    </li>
                    <li class="nav-item home4-nav-item">
                      <a class="nav-link" href="Services"
                        >Services
                        <span class="sub-nav-toggler"> </span>
                      </a>
                    
                    </li>

                    <li class="nav-item home4-nav-item">
                      <a class="nav-link" href="cases"
                        >Case Study
                        <span class="sub-nav-toggler"> </span>
                      </a>
                    </li>

                    <li class="nav-item home4-nav-item">
                      <a class="nav-link" href="blogs"
                        >Blog
                        <span class="sub-nav-toggler"> </span>
                      </a>
                      
                    </li>

                    
                    <li class="nav-item home4-nav-item">
                      <router-link class="nav-link" :to="{ name: 'About' }"
                        >About</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div div class="d-none d-xl-flex sub_options">
                  <div
                    class="border-start border-end search-icon search-trigger d-flex align-items-center"
                  >
                    <i class="las la-search home5_search_button"></i>
                  </div>
                  <div class="d-flex contact_wrapper_five">
                    <p class="m-0 home5-get-number">
                      <span style="color: #724d1d"
                        ><i class="la la-phone"></i></span
                      >+998-8776345
                    </p>
                  </div>
                  <div
                    class="d-flex ps-3 border-start d-flex align-items-center"
                  >
                    <div class="home5_contact">
                      <RouterLink :to="{ name: 'Contact' }"
                        >Contact Us</RouterLink
                      >
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <SearchDropdown />
</template>
<script setup>
import { onMounted } from "vue";
import Button from "./Button5.vue";
import SearchDropdown from "../SearchDropdown.vue";

onMounted(() => {
  $(".sticky-area").sticky({
    topSpacing: 0,
  });

  // Mobile Menu
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav li a").on("click", function () {
    $(".sub-nav-toggler").removeClass("active");
  });

  var subMenu = $(".navbar-nav  .sub-menu");
  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="las la-angle-down"></i> </button>';
      });

    var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }

  // Menu Active Color

  $(".main-menu .navbar-nav .nav-link").on("mouseover", function () {
    $(".main-menu .navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
</script>
