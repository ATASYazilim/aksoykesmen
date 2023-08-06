<template>
  <div class="container home5-counter-margin">
    <div class="home5-counter-grid">
      <div class="home5-counter-grid-item">
        <div class="d-flex align-items-center">
          <div>
            <h1 class="p-0 m-0">235+</h1>
          </div>
          <div>
            <p class="p-0 m-0 ms-2">Trusted <br />
              Clients</p>
          </div>
        </div>
      </div>
      <div class="home5-counter-grid-item">
        <div class="d-flex align-items-center">
          <div>
            <h1 class="p-0 m-0">95%</h1>
          </div>
          <div>
            <p class="p-0 m-0 ms-2">Cases <br />
              Won</p>
          </div>
        </div>
      </div>
      <div class="home5-counter-grid-item">
        <div class="d-flex align-items-center">
          <div>
            <h1 class="p-0 m-0">110+</h1>
          </div>
          <div>
            <p class="p-0 m-0 ms-2">Dedicated <br />
              Laywers</p>
          </div>
        </div>
      </div>
      <div class="home5-counter-grid-item">
        <div class="d-flex align-items-center">
          <div>
            <h1 class="p-0 m-0">110+</h1>
          </div>
          <div>
            <p class="p-0 m-0">Cases <br />
              Dismissed</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.home5-counter-margin {
  margin-top: 120px;
  margin-bottom: 125px;
}

.home5-counter-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.home5-counter-grid-item {
  grid-column: auto / span 3;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 992px) {
  .home5-counter-grid-item {
    grid-column: auto / span 6;
  }

}
</style>
