<template>
  <div>
    <NavBar />

    <div class="bg-slate-300 text-indigo-950 py-10 px-10 lg:px-48">
      <p class="mb-6 text-lg text-center">
        <span class="text-indigo-700 text-xl">Q-Wash:</span> Turning Grime into Gleam, One Suds at a
        Time. Unleash the Shine, Nairobi's Ultimate Car Care!
      </p>
      <router-link to="/services" class="text-indigo-500 hover:text-green-700 block">
        Back to Services
      </router-link>

      <section className="grid md:grid-cols-2 gap-8 py-10 px-5 bg-green-800 rounded">
        <div className="order-last md:order-first">
          <h2 className="text-4xl text-blue-950 font-extrabold p-4">
            {{ carWash.name }}
          </h2>
          <p className="text-white text-lg">{{ carWash.description }}</p>
          <p className="text-center text-blue-950">I promise, you will love it!</p>
        </div>
        <div className="rounded-md">
          <img :src="carWash.image" alt="" className="w-full h-full rounded-md" />
        </div>
      </section>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import carWashesData from '@/data'

export default {
  components: {
    NavBar,
    TheFooter
  },
  data() {
    return {
      carWash: {}
    }
  },
  created() {
    const carWashSlug = this.$route.params.slug

    this.carWash = carWashesData.find((wash) => wash.slug === carWashSlug) || {}
  }
}
</script>
