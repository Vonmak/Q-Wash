<template>
  <div>
    <NavBar />
    <section class="h-screen border-4 border-red-700">
      <div
        class="h-full border-4 border-blue-900 bg-indigo-700"
      :style="{
      backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)), url(${merc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundBlendMode: 'multiply',
    }"
      >
        <div
          class="text-orange-700 font-bold p-4 absolute left-0 bottom-0 transform -translate-y-1/2 md:translate-x-1/2"
        >
          <div class="bg-indigo-600 text-xl px-3 py-1">Looking to</div>
          <div class="bg-green-600 text-2xl my-2 px-3 py-1 font-extrabold">Wash your Car</div>
          <div class="bg-indigo-600 text-xl px-3 py-1">at the comfort of your home?</div>
          <router-link to="/login" type="submit" class="bg-green-600 hover:bg-red-700 p-2 text-2xl rounded-md mt-1">
            Get Started?
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import merc from '../assets/images/wash.jpeg'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      merc
    }
  }
}
</script>
<style scoped>
/* Add your custom styles here */
</style>
