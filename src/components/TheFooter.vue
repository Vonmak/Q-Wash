<template>
  <div class="">
    <div class="bg-slate-200 text-indigo-950 py-10 px-10 lg:px-48">
      <h3 class="text-4xl font-extrabold mb-10">Get in touch with us</h3>
      <div class="grid sm:grid-cols-4 sm:gap-4">
        <div class="mb-6 sm:mb-0">
          <h4 class="text-xl font-bold">Location</h4>
          <p>6th Floor Senteu Plaza,</p>
          <p>Galana/Lenana Road,</p>
          <p>Nairobi, Kenya.</p>
        </div>
        <div class="mb-6 sm:mb-0">
          <h4 class="text-xl font-bold">Phone</h4>
          <p>+254791665710</p>
        </div>
        <div class="mb-6 sm:mb-0">
          <h4 class="text-xl font-bold">Email</h4>
          <p>info@qwawsh.co.ke</p>
        </div>
        <div>
          <h4 class="text-xl font-bold">Address</h4>
          <p>P.O Box 22494 - 00505</p>
          <p>Nairobi, Kenya.</p>
        </div>
      </div>
    </div>
    <div
      class="bg-green-200 py-10 px-10 lg:px-48 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div class="">
        <img :src="logo" alt="logo" class="h-10 mb-6 sm:mb-0" />
      </div>

      <form action="" method="post" class="flex flex-col sm:flex-row sm:gap-12">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          class="mb-6 sm:mb-0 p-4 rounded focus:outline-green-700 focus:bg-slate-50"
        />
        <button type="submit" class="mb-6 sm:mb-0 bg-green-700 p-4 rounded text-white">
          Subscribe to Our Newsletter
        </button>
      </form>
    </div>
    <div class="bg-slate-200 text-indigo-950 py-10 grid sm:grid-cols-3 text-center">
      <p>2024 All rights reserved</p>
      <div class="flex flex-col gap-4 sm:flex-row items-center justify-evenly">
        <router-link to="/" class="mt-6 sm:mt-0 font-bold">Home</router-link>
        <router-link to="/about" class="font-bold">About Us</router-link>
        <router-link to="/about" class="font-bold">Our Services</router-link>
        <router-link to="/register" class="font-bold">Sign Up</router-link>
        <router-link to="/login" class="font-bold">Sign In</router-link>
      </div>
      <div class="mt-5 sm:mt-0">
        <i class="pi pi-facebook bg-slate-300 text-xl p-2 mr-4 rounded"></i>
        <i class="pi pi-twitter bg-slate-300 text-xl p-2 mr-4 rounded"></i>
        <i class="pi pi-instagram bg-slate-300 text-xl p-2 mr-4 rounded"></i>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/images/logo.svg'
export default {
  data() {
    return {
      logo
    }
  }
}
</script>
