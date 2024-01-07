<template>
     <div class="h-screen bg-slate-300 text-indigo-950 flex flex-col md:flex-row">
    <!-- Left side content -->
    <div
      class="bg-indigo-900 text-white rounded-l-lg md:w-1/3 h-full"
      :style="{
      backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)), url(${logpic2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundBlendMode: 'multiply',
    }"
    >
      <div class="h-full px-10 flex items-center">
        <div class="h-2/3">
          <h3 class="text-center text-2xl font-extrabold py-5">
            Welcome to
            <span class="text-4xl font-extrabold text-green-500">Q-Wash</span>
          </h3>

          <div>
            <h6 class="text-xl font-semibold py-5 text-green-500">Why Q-Wash?</h6>

            <h4 class="text-2xl font-bold py-5">Reliability</h4>
            <p>
              Consistent and dependable performance characterizes our carwash equipment and
              services.
            </p>

            <h4 class="text-2xl font-bold py-5">Flexibility</h4>
            <p>
              Adapting to diverse customer needs is our strength, thanks to our versatile package
              options.
            </p>
            <h4 class="text-2xl font-bold py-5">Mobility</h4>
            <p>
              Experience the convenience of our mobile carwash services, bringing our business to
              your location.
            </p>

            <p class="text-xl py-5 text-green-500">Start your Journey to freedom.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right side content -->
    <div class="flex items-center justify-center border h-full md:w-2/3">
      <div
        class="border-2 rounded-lg bg-slate-200 h-full md:h-1/2 w-full md:w-1/2 flex flex-col justify-center items-center"
      >
        <div>logo<img :src="logo" alt="logo" /></div>
        <h3 class="text-center text-xl">Log In</h3>
        <form @submit.prevent="handleSubmit" class="mx-auto px-5 py-10 w-full">
          <div className="mb-4">
            <label>
              <input
                type="email"
                name="email"
                v-model="email"
                required
                placeholder="Email Address"
                className="w-full border-b border-indigo-950 rounded-md py-2 px-4 bg-slate-200 focus:outline-indigo-700 focus:bg-slate-50"
              />
            </label>
          </div>
          <div class="mb-4">
            <label>
              <input
                type="password"
                v-model="password"
                minlength="6"
                required
                placeholder="Password"
                class="w-full border-b border-indigo-950 rounded-md py-2 px-4 bg-slate-200 focus:outline-indigo-700 focus:bg-slate-50"
              />
            </label>
          </div>
          <!-- Submit button -->
          <button
            type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md mt-5"
          >
            Login
          </button>

          <p class="text-center p-2 mt-5">-or-</p>
          <button
            type=""
            class="w-full bg-slate-300 hover:bg-slate-400 p-2 rounded-md mt-5 flex gap-2"
          >
           <img :src="logo" alt="" class="h-4"> Log In with Google
          </button>
        </form>
        <p>
            Need to create an account?
          <span class="text-indigo-600 hover:text-indigo-900 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logpic2 from '../../assets/images/students.jpg'
import logo from '../../assets/images/logo.svg'
export default {
  data() {
    return {
      email: '',
      password: '',
      logpic2,
      logo
    }
  },
  methods: {
    handleSubmit() {
      // Here you can perform form validation, API requests, etc.
      // For demonstration purposes, let's just log the form data.
      console.log({
        email: this.email,
        password: this.password,
      })
      // You can also emit an event to a parent component or perform other actions
      // such as making an API call to register the user.
    }
  }
}
</script>
<style scoped>
/* Add your component styles here */
</style>