<script setup>
import Button5 from "./Button5.vue"
</script>
<template>
  <div class="container ready-to-help-margin">
    <div class="ready-to-help-grid">
      <div class="ready-to-help-grid-item ready-help-left">
        <div class="position-relative">
          <img class="img img-fluid w-100" src="/assets/img/home5/ready_to_help/help_desk.png" alt="Help Desk" />
          <div class="ready-to-help-quote d-flex">
            <p>Duis aute irure dolor in velit esse <br />
              cillum dolore fugiat nulla pariatur <br />
              excepteur sint <span class="mx-4" style="color:#c89d66;font-weight:400;"> ______________ </span>

            </p>
            <div class="ready-to-help-quote-icon">
              <img src="/assets/img/home5/ready_to_help/quote_icon.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="ready-to-help-grid-item ready-help-right">
        <h2 class="ready-to-help-subtitle">
          <span class="mx-2" style="text-decoration:line-through">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          About Company
        </h2>
        <h1 class="ready-to-help-title">We Are Ready To Help Your <br />
          Aksoy/Kesmen Needs</h1>
        <p class="ready-to-help-content">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores
          eos qui rationes voluptatem quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
        <div class="d-flex ready-to-help-features">
          <div class="border px-2 py-4">
            <h3 class="ready-to-help-feature">Best Legal Defence</h3>
            <p class="mt-2 mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
          <div class="border px-2 py-4">
            <h3 class="ready-to-help-feature">Skilled Attorneys</h3>
            <p class="mt-2 mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </div>
        <div class="mt-2">
          <router-link :to="{name: 'Case'}">
            <Button5 text="Discover More" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ready-to-help-margin {
  margin-top: 125px;
}

/* Styling LEFT side of the Hero */
.ready-to-help-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}

.ready-to-help-grid-item {
  grid-column: auto / span 6;
}

.ready-help-left {
  padding-right: 30px;
}

.ready-to-help-quote {
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 90%;

  padding: 35px;
}

.ready-to-help-quote p {
  font-size: 24px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.417;
  text-align: left;
}

.ready-to-help-quote-icon {
  display: flex;
  align-items: flex-end;
}


/* Styling RIGHT side of the Hero */
.ready-to-help-title {
  font-size: 52px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.192;
  text-align: left;
}

.ready-to-help-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
  text-align: left;

}

.ready-to-help-feature {
  font-size: 24px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.167;
  text-align: left;
}

@media screen and (max-width:1200px) {
  .ready-to-help-grid-item {
    grid-column: auto / span 12;
  }

  .card-stack {
    width: 100%;
  }

  .ready-help-right {
    margin-top: 50px;
    padding: 40px 60px;
  }

  .ready-help-left {
    display: flex;
    justify-content: center;
  }

  .ready-to-help-subtitle {
    margin-bottom: 20px;
  }

  .ready-to-help-content {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .ready-to-help-features {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .ready-to-help-features>div {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
