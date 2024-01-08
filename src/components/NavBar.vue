<template>
  <nav :class="navClasses">
    <router-link to="/" class="flex items-center">
      <img src="@/assets/images/logo.svg" alt="logo" class="mr-6 rounded-full w-16 h-16 pt-1" />
      <code class="font-semibold text-2xl text-green-500">{{ ` ${myName}` }}</code>
    </router-link>

    <div :class="menuClasses">
      <div v-if="isMobile" class="block text-2xl md:hidden">
        <i class="pi pi-times text-2xl text-indigo-700" @click="toggleActive"></i>
      </div>
      <router-link
        v-for="(item, index) in navigation"
        :to="item.to"
        :key="item.name + index"
        class="text-2xl font-extrabold md:text-xl cursor-pointer text-green-500"
        @click="toggleActive"
      >
        {{ item.name }}
      </router-link>
    </div>

    <div class="flex flex-row items-center space-x-3 md:hidden">
      <i class="pi pi-bars text-2xl text-indigo-700" @click="toggleActive"></i>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      active: false,
      myName: 'Q-Wash',
      navigation: [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Services', to: '/services' },
        { name: 'Contact', to: '/contact' },
        { name: 'Register', to: '/register' },
        { name: 'Login', to: '/login' }
      ]
    }
  },
  computed: {
    navClasses() {
      return {
        'flex justify-between py-5 items-center px-2 md:px-5 z-50 fixed top-0 w-full shadow-md': true,
        'bg-indigo-800 text-white': this.scrollPosition > 0,
      }
    },
    menuClasses() {
      return {
        'flex flex-col absolute top-0 py-5 duration-300': true,
        'bg-indigo-800 text-white': this.scrollPosition > 0,
        'bg-slate-400': this.scrollPosition === 0,
        '-right-[0%]': this.active,
        '-right-[100%]': !this.active,
        'w-full items-center justify-center space-y-5': true,
        'md:right-0 md:items-center md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent md:space-x-5 md:relative md:flex-row md:top-0 md:w-max': true
      }
    },
    isMobile() {
      return window.innerWidth < 768
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
