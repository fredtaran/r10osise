<script setup>
import { ref, reactive, computed } from 'vue'
import { required, helpers } from '@vuelidate/validators'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import apiClient from '../../services/apiClient'

const store = useStore()
const router = useRouter()
const loading = ref(false)
const errorMessage = ref('')

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
    loading.value = true
    if (validationResult) {
        try {
            await apiClient.get('/sanctum/csrf-cookie')
            await store.dispatch('login', formData)

            if(store.state.user.role == 3) {
                router.replace('/user_profile')
            }
        } catch (err) {
            errorMessage.value = err.response.data.message
        } finally {
            formData.password = ''
            loading.value = false
        }
    } else {
        loading.value = false
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
                <div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert" v-if="errorMessage">
                    <span class="font-medium">{{ errorMessage }}</span>
                </div>
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
                            <input type="text" id="username" v-model="formData.username" @input="errorMessage = ''"
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
                            <input type="password" id="password" v-model="formData.password" @input="errorMessage = ''"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password">
                        </div>
                        <span class="text-sm text-red-700 font-italic font-bold" v-for="error in v$.password.$errors"
                            :key="error.uid">{{ error.$message }}</span>
                    </div>

                    <div class="mt-5">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50" :disabled="loading">
                            <div role="status" v-if="loading">
                                <svg aria-hidden="true"
                                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                            <span class="inline-flex" v-if="!loading">
                                <svg class="w-6 h-6text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                </svg>
                                Login
                            </span>
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