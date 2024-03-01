<script setup>
import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'
import axios from 'axios'

const formData = reactive({
    username: "",
    password: "",
    confirm_password: ""
})

const isUsernameUnique = ref(true) // Track the uniqueness of the username
const usernameTouched = ref(false); // Track if username input has been touched

const rules = computed(() => {
    return {
        username: {
            required: helpers.withMessage("This field is required.", required),
            minLength: helpers.withMessage("Username should be at least 10 characters long.", minLength(10)),
            async isUnique(username) {
                if(!helpers.req(username)) {
                    return true;
                }
                return checkUsername(username)
            }
        },
        password: {
            required: helpers.withMessage("This field is required.", required),
            minLength: helpers.withMessage("Password should be at least 6 characters long.", minLength(6))
        },
        confirm_password: {
            required: helpers.withMessage("This field is required.", required),
            sameAs: helpers.withMessage("Password do not match.", sameAs(formData.password))
        }
    }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
    const validationResult = await v$.value.$validate()
    if (validationResult) {

    }
}

const checkUsername = async () => {
    const response = await axios.get(`check_username?username=${formData.username}`)
    isUsernameUnique.value = response.data.exist // Update the reactive variable
}

</script>

<template>
    <div class="relative min-h-screen flex items-center justify-center">
        <div class="absolute inset-0 bg-center bg-registration opacity-50"></div>

        <div class="relative z-10 opacity-100">
            <div class="shadow-lg p-5 rounded-lg min-w-[460px] bg-white">
                <h1 class="text-center text-3xl font-bold mb-5">Create your account</h1>

                <div class="">
                    <form @submit.prevent="submitForm">
                        <div class="grid gap-6">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                <input type="text" id="username" autocomplete="off"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    v-model="formData.username" @input="usernameTouched = true">
                                <span class="text-sm text-red-700 font-italic font-bold"
                                    v-for="error in v$.username.$errors" :key="error.uid">{{ error.$message }}</span>
                                <span v-if="isUsernameUnique && usernameTouched" class="text-sm text-red-700 font-italic font-bold">Username
                                    is already being
                                    used.</span>
                            </div>

                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" id="password" autocomplete="off"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    v-model="formData.password">
                                <span class="text-sm text-red-700 font-italic font-bold"
                                    v-for="error in v$.password.$errors" :key="error.uid">{{ error.$message }}</span>
                            </div>

                            <div>
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm
                                    Password</label>
                                <input type="password" id="confirm_password" autocomplete="off"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    v-model="formData.confirm_password">
                                <span class="text-sm text-red-700 font-italic font-bold"
                                    v-for="error in v$.confirm_password.$errors" :key="error.uid">{{ error.$message }}</span>
                            </div>

                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                            <span>Already have an account? Login <RouterLink :to="{ 'name': 'login' }"
                                    class="underline text-blue-600 font-bold hover:text-red-600">here</RouterLink>.</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
