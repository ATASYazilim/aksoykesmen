<script setup></script>

<template>
  <div class="practice-area-bg">
    <!-- Practice Area Cards -->
    <div class="container practice-area-container">
      <!-- Title -->
      <h2 class="practice-area-subtitle mb-3">
        <span class="mx-2" style="text-decoration: line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Practice Areas
        <span class="mx-2" style="text-decoration: line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </h2>
      <h1 class="section-title">
        We Are Here To Fight Against Any Violence <br />
        With Experience
      </h1>
      <div class="practice-area-card-grid">
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Business Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100"
              src="/assets/img/home5/practice_areas/practice_area_1.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Family Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100"
              src="/assets/img/home5/practice_areas/practice_area_2.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Criminal Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100"
              src="/assets/img/home5/practice_areas/practice_area_3.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Real State Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100"
              src="/assets/img/home5/practice_areas/practice_area_4.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Civil Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100"
              src="/assets/img/home5/practice_areas/practice_area_5.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
        <div class="practice-area-card-item">
          <div>
            <h1 class="practice-area-card-title">Labour Law</h1>
            <p class="practice-area-card-content my-2">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself,
            </p>
          </div>
          <div
            class="w-100 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              class="img img-fluid w-100 w-100"
              src="/assets/img/home5/practice_areas/practice_area_6.png"
              alt="Business Law"
            />
          </div>
          <div class="practice-area-read-more">
            <router-link :to="{ name: 'Case' }">
              <p>
                Read More
                <span class="read-more-arrow"
                  ><i class="las la-arrow-right"></i
                ></span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.practice-area-container {
  padding-bottom: 120px;
  padding-top: 120px;
}

.practice-area-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
  text-align: center;
}

.practice-area-card-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
}

.practice-area-card-item {
  grid-column: auto / span 4;
  padding: 30px;
  width: 100%;
  background-color: white;
}

.practice-area-card-title {
  font-size: 30px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}

.practice-area-card-content {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(79, 79, 103);
  line-height: 1.556;
  text-align: left;
}

.read-more-arrow {
  visibility: hidden;
  transition: all 0.2s;
  transform: translateX(-5px);
}

.practice-area-card-item:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.practice-area-card-item:hover .read-more-arrow {
  visibility: visible;
  transform: translateX(0);
}

.practice-area-read-more:hover p {
  color: #c89d66;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .practice-area-card-item {
    grid-column: auto / span 6;
  }
}

@media screen and (max-width: 992px) {
  .practice-area-card-item {
    grid-column: auto / span 12;
  }
}
</style>
