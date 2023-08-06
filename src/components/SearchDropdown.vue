<script setup>
import { onMounted } from "vue";
onMounted(() => {
  //Header Search Form
  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }
});
</script>
<template>
  <!-- Search Dropdown Area -->

  <div class="search-popup">
    <span class="search-back-drop"></span>

    <div class="search-inner">
      <div class="container">
        <div class="upper-text">
          <div class="text">Search for anything.</div>
          <button class="close-search">
            <span class="la la-times"></span>
          </button>
        </div>

        <form method="post" action="/blogs">
          <div class="form-group">
            <input
              type="search"
              name="search-field"
              value=""
              placeholder="Search..."
              required="true"
            />
            <button type="submit"><i class="la la-search"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
