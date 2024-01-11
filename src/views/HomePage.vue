<template>
  <div>
    <NavBar />
    <section class="h-90vh">
      <div
        class="h-full bg-indigo-500"
        :style="{
          backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)), url(${merc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundBlendMode: 'multiply'
        }"
      >
        <div
          class="text-white font-bold p-4 absolute left-0 bottom-0 transform -translate-y-1/2 md:translate-x-1/2"
        >
          <div class="bg-indigo-950 text-xl px-3 py-1">Looking to</div>
          <div class="bg-green-600 text-2xl my-2 px-3 py-1 font-extrabold">Wash your Car</div>
          <div class="bg-indigo-950 text-xl px-3 py-1 mb-2">at the comfort of your home?</div>
          <router-link
            to="/login"
            class="bg-green-800 hover:bg-green-900 p-2 text-white text-xl rounded mt-2"
          >
            Get Started?
          </router-link>
        </div>
      </div>
    </section>
    <section class="bg-slate-200 grid md:grid-cols-2 gap-4 py-10 px-10 lg:px-48">
      <div class="flex items-center justify-center">
        <div class="rounded-full overflow-hidden w-96 h-96">
          <img :src="merc" alt="about" class="rounded-full w-96 h-96" />
        </div>
      </div>
      <div class="text-indigo-950 flex items-center justify-center">
        <p class="text-3xl text-center">
          <span class="text-4xl font-extrabold">Q-Wash</span> <br />
          At Q-wash, we <span class="font-bold italic text-green-700">redefine</span> Car Care in Nairobi with Expertise and Brilliance. <br />
          We <span class="font-bold italic text-green-700">elevate</span> your vehicle's shine with our state-of-the-art techniques and meticulous
          attention. <br />
          Welcome to Q-Wash and experience automotive <span class="font-bold italic text-green-700">perfection</span> at Nairobi's ultimate car care destination!
        </p>
      </div>
    </section>
    <FooterView />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterView from '../components/TheFooter.vue'
import merc from '../assets/images/wash.jpeg'

export default {
  components: {
    NavBar,
    FooterView
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
