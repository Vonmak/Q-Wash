<template>
  <div>
    <NavBar />
    <div class="bg-slate-300 text-indigo-950 py-10 px-10 lg:px-48">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-extrabold mb-6">Our Team</h2>
        <p class="mb-6 text-lg">
          <span class="text-indigo-700 text-xl">Q-Wash:</span> Turning Grime into Gleam, One Suds at
          a Time. Unleash the Shine, Nairobi's Ultimate Car Care!
        </p>
        <router-link
          to="/login"
          class="bg-indigo-950 hover:bg-indigo-900 py-3 px-4 text-white text-xl rounded-md"
        >
          Get Started?
        </router-link>
      </div>
      <div class="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 text-indigo-950 my-10">
        <div class="shadow-xl bg-slate-100">
          <div class="h-72">
            <img :src="logo" alt="logo" class="mb-6 sm:mb-0 h-full w-full" />
          </div>
          <div class="p-4">
            <h3 class="font-extrabold text-xl">Victor Ondari</h3>
            <p>
              Lacus laoreet non curabitur gravida. Orci ac auctor augue mauris augue neque. Et
              malesuada fames ac turpis egestas sed. Sit amet commodo nulla facilisi nullam
              vehicula.
            </p>
          </div>
          <hr />
          <div class="flex gap-4 items-center p-4">
            <i class="pi pi-briefcase font-extrabold text-xl"></i>
            <p class="font-extrabold">Founder/CEO</p>
          </div>
        </div>
        <div class="shadow-xl bg-slate-100">
          <div class="h-72">
            <img :src="logo" alt="logo" class="mb-6 sm:mb-0 h-full w-full" />
          </div>
          <div class="p-4">
            <h3 class="font-extrabold text-xl">Victor Ondari</h3>
            <p>
              Lacus laoreet non curabitur gravida. Orci ac auctor augue mauris augue neque. Et
              malesuada fames ac turpis egestas sed. Sit amet commodo nulla facilisi nullam
              vehicula.
            </p>
          </div>
          <hr />
          <div class="flex gap-4 items-center p-4">
            <i class="pi pi-briefcase font-extrabold text-xl"></i>
            <p class="font-extrabold">Founder/CEO</p>
          </div>
        </div>
        <div class="shadow-xl bg-slate-100">
          <div class="h-72">
            <img :src="new1" alt="logo" class="mb-6 sm:mb-0 h-full w-full" />
          </div>
          <div class="p-4">
            <h3 class="font-extrabold text-xl">Victor Ondari</h3>
            <p>
              Lacus laoreet non curabitur gravida. Orci ac auctor augue mauris augue neque. Et
              malesuada fames ac turpis egestas sed. Sit amet commodo nulla facilisi nullam
              vehicula.
            </p>
          </div>
          <hr />
          <div class="flex gap-4 items-center p-4">
            <i class="pi pi-briefcase font-extrabold text-xl"></i>
            <p class="font-extrabold">Founder/CEO</p>
          </div>
        </div>
        <div class="shadow-xl bg-slate-100">
          <div class="h-72">
            <img :src="logo" alt="logo" class="mb-6 sm:mb-0 h-full w-full" />
          </div>
          <div class="p-4">
            <h3 class="font-extrabold text-xl">Victor Ondari</h3>
            <p>
              Lacus laoreet non curabitur gravida. Orci ac auctor augue mauris augue neque. Et
              malesuada fames ac turpis egestas sed. Sit amet commodo nulla facilisi nullam
              vehicula.
            </p>
          </div>
          <hr />
          <div class="flex gap-4 items-center p-4">
            <i class="pi pi-briefcase font-extrabold text-xl"></i>
            <p class="font-extrabold">Founder/CEO</p>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import logo from '@/assets/images/wash.jpeg'
import new1 from '../assets/images/challenger.jpeg'

export default {
  components: {
    NavBar,
    TheFooter
  },
  data() {
    return {
      logo,
      new1
    }
  }
}
</script>
