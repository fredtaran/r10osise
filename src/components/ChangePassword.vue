<script setup>
import { ref, computed, reactive } from 'vue'
import { required, helpers, sameAs, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import Loader from './Loader.vue'
import apiClient from '../../services/apiClient'
import store from '@/store/store'

const props = defineProps({
    isOpen: Boolean,
})

const emit = defineEmits(['close'])

const formData = reactive({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
})

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const isLoading = ref(false)
const backendCurrentPasswordErrorMsg = ref("")
const backendSuccessMsg = ref("")

const rules = computed(() => {
    return {
        currentPassword: {
            required: helpers.withMessage("Your current password is required", required)
        },
        newPassword: {
            required: helpers.withMessage("New password is required", required),
            minLength: helpers.withMessage("The password must be at least six characters long", minLength(6))
        },
        confirmPassword: {
            required: helpers.withMessage("Please confirm your password", required),
            sameAsPassword: helpers.withMessage("Password doesn't match", sameAs(formData.newPassword))
        }
    }
})

const v$ = useVuelidate(rules, formData)

const currentPasswordInputType = computed(() => (isCurrentPasswordVisible.value ? 'text' : 'password'))
const newPasswordInputType = computed(() => (isNewPasswordVisible.value ? 'text' : 'password'))
const confirmPasswordInputType = computed(() => (isConfirmPasswordVisible.value ? 'text' : 'password'))

const toggleCurrentPasswordVisibility = () => {
    isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value
}

const toggleNewPasswordVisibility = () => {
    isNewPasswordVisible.value = !isNewPasswordVisible.value
}

const toggleConfirmPasswordVisibility = () => {
    isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value
}

const closeModal = () => {
    emit('close')
    formData.currentPassword = ""
    formData.newPassword = ""
    formData.confirmPassword = ""
    v$.value.$reset()
}

const submitForm = async () => {
    const validationResult = await v$.value.$validate()
    isLoading.value = true
    if (validationResult) {
        try {
            await apiClient.get('/sanctum/csrf-cookie')
            const response = await apiClient.post(`/api/change-password/${store.state.user.id}`, formData)

            isLoading.value = false
            backendCurrentPasswordErrorMsg.value = ""
            backendSuccessMsg.value = response.data.msg
            formData.currentPassword = ""
            formData.newPassword = ""
            formData.confirmPassword = ""
            v$.value.$reset()
        } catch (err) {
            isLoading.value = false
            v$.value.$reset()
            backendCurrentPasswordErrorMsg.value = err.response.data.errors.currentPassword
        }
        isLoading.value = false
    } else {
        backendCurrentPasswordErrorMsg.value = ""
    }
    isLoading.value = false
}
</script>

<!-- ChangePasswordModal.vue -->
<template>
    <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[100]"
        v-if="isOpen">
        <div class="bg-white p-5 rounded-[5px]">
            <div class="mb-4">
                <h2 class="text-2xl">Change Password</h2>
            </div>
            <div class="p-4 my-4 text-sm text-slate-900 rounded-lg bg-green-200" role="alert" v-if="backendSuccessMsg">
                <span class="font-medium">{{ backendSuccessMsg }}</span>
            </div>
            <form @submit.prevent="submitForm" class="w-[50rem] max-w-sm mx-auto">
                <!-- Current password -->
                <label for="currentPassword" class="block mb-1 text-sm font-medium text-gray-900">Current
                    Password</label>
                <div class="relative">
                    <input :type="currentPasswordInputType" v-model="formData.currentPassword" id="currentPassword"
                        class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                        style="border: 1px solid lightslategray;" />
                    <button @click.prevent="toggleCurrentPasswordVisibility"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-if="isCurrentPasswordVisible">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-else="isCurrentPasswordVisible">
                            <path stroke="currentColor" stroke-width="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
                <span class="text-sm text-red-700 font-italic font-bold mb-5"
                    v-for="error in v$.currentPassword.$errors" :key="error.uid">{{ error.$message }}</span>
                <span class="text-sm text-red-700 font-italic font-bold mb-5"
                    v-for="error in backendCurrentPasswordErrorMsg" :key="error.uid">{{ error }}</span>
                <!-- End current password -->

                <!-- New password -->
                <label for="newPassword" class="block mb-1 mt-5 text-sm font-medium text-gray-900">New Password</label>
                <div class="relative">
                    <input :type="newPasswordInputType" v-model="formData.newPassword" id="newPassword"
                        class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                        style="border: 1px solid lightslategray;" />
                    <button @click.prevent="toggleNewPasswordVisibility"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-if="isNewPasswordVisible">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-else="isNewPasswordVisible">
                            <path stroke="currentColor" stroke-width="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
                <span class="text-sm text-red-700 font-italic font-bold mb-5" v-for="error in v$.newPassword.$errors"
                    :key="error.uid">{{ error.$message }}</span>
                <!-- End new password -->

                <!-- Confirm password -->
                <label for="confirmPassword" class="block mb-1 mt-5 text-sm font-medium text-gray-900">Confirm
                    Password</label>
                <div class="relative">
                    <input :type="confirmPasswordInputType" v-model="formData.confirmPassword" id="confirmPassword"
                        class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                        style="border: 1px solid lightslategray;" />
                    <button @click.prevent="toggleConfirmPasswordVisibility"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-if="isConfirmPasswordVisible">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-else="isConfirmPasswordVisible">
                            <path stroke="currentColor" stroke-width="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
                <span class="text-sm text-red-700 font-italic font-bold mb-5"
                    v-for="error in v$.confirmPassword.$errors" :key="error.uid">{{ error.$message }} <br/> </span>
                <!-- End confirm password -->

                <div class="flex gap-3 mt-3">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save
                        Password</button>
                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        @click="closeModal">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <div v-show="isLoading">
        <Loader :visible="isLoading" />
    </div>
</template>