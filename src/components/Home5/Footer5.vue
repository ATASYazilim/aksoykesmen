<template>
  <div class="footer5-bg">
    <!-- Subscribe -->
    <div class="container footer-container">
      <div class="d-lg-flex justify-content-between align-items-center mb-5">
        <h1 class="footer5-title">✋We would like to be in touch.</h1>
        <div class="subscribe5-form">
          <form action="/">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="container mb-5">
      <div class="d-grid-system footer5-grid">
        <div class="footer5-column">
          <h2 class="footer5-subtitle">About Aksoy/Kesmen</h2>
          <p class="text-white my-4">
            Duis aute irure dolor in cilum eu fugiat nulla pariatur. Excepteur
            non proident, sunt in culpa qui officia mollit
          </p>
          <h2 class="footer5-subtitle mb-2">Follow Us</h2>
          <div class="d-flex">
            <button class="footer5-social">
              <i class="lab la-facebook"></i>
            </button>
            <button class="footer5-social ms-1">
              <i class="lab la-twitter"></i>
            </button>
            <button class="footer5-social ms-1">
              <i class="lab la-instagram"></i>
            </button>
            <button class="footer5-social ms-1">
              <i class="lab la-linkedin"></i>
            </button>
          </div>
        </div>
        <div class="footer5-column">
          <h2 class="footer5-subtitle mb-4">Contact Info:</h2>
          <!-- Single Contact Item -->
          <div class="d-flex align-items-center mb-3">
            <img src="/assets/img/home5/footer/Address_Icon.png" alt="" />
            <div class="ms-3">
              <h3 class="text-white fw-bold">Address:</h3>
              <p class="m-0 text-white">13 Division st, New York, 16004</p>
            </div>
          </div>
          <!-- Single Contact Item -->
          <div class="d-flex align-items-center mb-3">
            <img src="/assets/img/home5/footer/Phone_Icon.png" alt="" />
            <div class="ms-3">
              <h3 class="text-white fw-bold">Phone:</h3>
              <p class="m-0 text-white">(+1)212-946-2064</p>
            </div>
          </div>
          <!-- Single Contact Item -->
          <div class="d-flex align-items-center mb-3">
            <img src="/assets/img/home5/footer/Email_Icon.png" alt="" />
            <div class="ms-3">
              <h3 class="text-white fw-bold">Email:</h3>
              <p class="m-0 text-white">contact@aksoykesmen.com</p>
            </div>
          </div>
        </div>
        <div class="footer5-column">
          <h2 class="footer5-subtitle mb-4">Useful Links</h2>
          <div>
            <router-link :to="{ name: 'Home5' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                Home
              </p>
            </router-link>
            <router-link :to="{ name: 'About' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                About Us
              </p>
            </router-link>
            <router-link :to="{ name: 'Attorney' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                Meet Our Team
              </p>
            </router-link>
            <router-link :to="{ name: 'ChooseUs' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                Testimonials
              </p>
            </router-link>
            <router-link :to="{ name: 'Blog' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                Blog
              </p>
            </router-link>
            <router-link :to="{ name: 'Contact' }" class="w-100">
              <p class="text-white">
                <span class="me-1"><i class="las la-circle dot"></i> </span>
                Contact Us
              </p>
            </router-link>
          </div>
        </div>
        <div class="footer5-column">
          <h2 class="footer5-subtitle mb-4">Trending Post</h2>
          <p class="text-white">
            Fully Know the Difference Between <br />
            Notary & Attestation
          </p>
          <p class="text-white fw-bold">By Admin</p>
          <hr class="text-white fw-bold" />
          <p class="text-white">
            The Future of The Legal Industry <br />
            Predictions And Trends
          </p>
          <p class="text-white fw-bold">By Admin</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Styling Footer Part */

.footer5-grid {
  grid-gap: 5%;
}

.footer5-column {
  grid-column: auto / span 3;
}

.footer-container {
  padding-top: 14rem;
}

.footer5-title {
  font-size: 52px;
  font-family: "Rajdhani";
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.192;
  text-align: left;
}

.footer5-subtitle {
  font-size: 26px;
  font-family: "Rajdhani";
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.385;
}

.footer5-social {
  border: none;
  border-radius: 100%;
  font-size: 24px;
  padding: 0.75rem;
  color: white;
  background-color: black;
}

.footer5-social:hover {
  background-color: #c89d66;
}

.dot {
  background-color: #c89d66;
  color: #c89d66;
  border-radius: 50%;
  font-size: 0.75rem;
  vertical-align: center;
}

/** Styling Subscribe Form Part **/
.subscribe5-form {
  position: relative;
  width: 40%;
}

.subscribe5-form button {
  position: relative;
  left: -25px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  /* border-radius: 0px 10px 10px 0px; */
  border-radius: 2rem;
  border: 0;
  cursor: pointer;
}

.subscribe5-form input {
  margin: 0;
  background: #fff;
  border-radius: 7px 0px 0px 7px;
  border: 0;
}

.subscribe5-form input::placeholder {
  color: #797a7e;
  font-size: 14px;
}

.subscribe5-form form {
  display: flex;
  align-items: center;
  width: 100%;
}

@media screen and (max-width: 992px) {
  .subscribe5-form {
    width: 100%;
  }

  .footer5-column {
    grid-column: auto / span 6;
  }
}

@media screen and (max-width: 768px) {
  .footer5-column {
    grid-column: auto / span 12;
  }
}
</style>
