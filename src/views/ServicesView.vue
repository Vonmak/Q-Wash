<template>
  <div>
    <NavBar />

    <div class="bg-slate-300 text-indigo-950 py-10 px-10 lg:px-48">
      <h2 class="font-extrabold text-3xl text-center">Services offered by Q-Wash</h2>
      <p class="mb-6 text-lg text-center">
        <span class="text-indigo-700 text-xl">Q-Wash:</span> Turning Grime into Gleam, One Suds at a
        Time. Unleash the Shine, Nairobi's Ultimate Car Care!
      </p>
      <div
        id="app"
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-indigo-950 my-10"
      >
        <div
          v-for="wash in carWashes"
          :key="wash.id"
          :wash="wash"
          class="shadow-xl bg-slate-100 rounded-md p-6"
        >
          <h3 class="font-extrabold text-xl">{{ wash.name }}</h3>
          <p v-snip="3">{{ wash.description }}</p>
          <router-link
            :to="{ name: 'ServiceDetail', params: { slug: wash.slug } }"
            class="text-indigo-500 hover:text-green-700 block mt-4"
          >
            Learn more {{ '>>' }}
          </router-link>
        </div>
      </div>
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
      carWashes: carWashesData
    }
  }
}
</script>
