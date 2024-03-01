<script setup>
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const formData = reactive({
    username: "",
    password: ""
})

const rules = computed(() => {
    return {
        username: {
            required: helpers.withMessage("Username is required.", required),
        },
        password: {
            required: helpers.withMessage("Password is required.", required),
        }
    }
})

const v$ = useVuelidate(rules, formData)

const login = async () => {
    const validationResult = await v$.value.$validate()
    if (validationResult) {
        
    }
}

</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div
            class="flex flex-col items-center shadow-lg p-5 w-[500px] justify-center rounded-lg divide-y-2 divide-gray-500 bg-white">
            <div class="flex flex-col items-center">
                <img src="/mgb-logo.png" alt="MGB Logo" class="h-[150px] w-[150px] mb-3 sm:mb-0">
                <h1 class="text-xl font-bold hidden sm:block">Mines and Geosciences Bureau - X</h1>
            </div>

            <div class="w-full">
                <h1 class="text-center text-2xl font-extrabold ">Online Application for Safety Engineers and Safety
                    Inspector</h1>
            </div>

            <div class="w-full">
                <span class="text-lg font-bold">Login to your account</span>
                <form @submit.prevent="login" class="mt-2">
                    <div class="mb-4">
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="username" v-model="formData.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Username" autocomplete="off">
                        </div>
                        <span class="text-sm text-red-700 font-italic font-bold" v-for="error in v$.username.$errors"
                            :key="error.uid">{{ error.$message }}</span>
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                            <input type="password" id="password" v-model="formData.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password">
                        </div>
                        <span class="text-sm text-red-700 font-italic font-bold" v-for="error in v$.password.$errors"
                            :key="error.uid">{{ error.$message }}</span>
                    </div>

                    <div class="mt-5">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center inline-flex items-center justify-center">
                            <svg class="w-6 h-6text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                            </svg>
                            Login
                        </button>
                    </div>
                </form>

                <div class="mt-5">
                    <p>No account yet? Register <RouterLink :to="{ 'name': 'register' }"
                            class="underline text-blue-600 font-bold hover:text-red-600">here</RouterLink>.</p>
                </div>
            </div>
        </div>
    </div>
</template>