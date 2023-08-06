import { createRouter, createWebHistory } from "vue-router";
import Home5 from "../views/Home5.vue";
import About from "../views/About.vue";
import Attorney from "../views/Attorney.vue";
import Blog from "../views/Blog.vue";
import Case from "../views/Case.vue";
import ChooseUs from "../views/ChooseUs.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Service.vue";
import AttorneyDetails from "../views/SingleAttorney.vue";
import BlogDetails from "../views/SingleBlog.vue";
import CaseDetails from "../views/SingleCase.vue";
import ServiceDetails from "../views/SingleService.vue";
import Registration from "../views/Registration.vue";
import SignIn from "../views/SignIn.vue";

const routes = [

  {
    path: "/",
    name: "Home5",
    component: Home5,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/attorney",
    name: "Attorney",
    component: Attorney,
  },

  {
    path: "/blogs",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/cases",
    name: "Case",
    component: Case,
  },

  {
    path: "/choose-us",
    name: "ChooseUs",
    component: ChooseUs,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/services",
    name: "Services",
    component: Services,
  },

  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },

  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },

  {
    path: "/attorney-details/:id",
    name: "AttorneyDetails",
    component: AttorneyDetails,
  },

  {
    path: "/blog-details/:id",
    name: "BlogDetails",
    component: BlogDetails,
  },

  {
    path: "/case-details/:id",
    name: "CaseDetails",
    component: CaseDetails,
  },

  {
    path: "/service-details/:id",
    name: "ServiceDetails",
    component: ServiceDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
