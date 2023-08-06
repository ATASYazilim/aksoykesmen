<template>
  <!-- Breadcrumb Area  -->

  <div class="breadcroumb-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcroumb-title">
            <h1>{{ mainTitle }}</h1>
            <h6><a href="/">Home</a> / {{ subTitle }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainTitle", "subTitle"],
  setup() {},
};
</script>
