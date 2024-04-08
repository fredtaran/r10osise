<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['close']);

const password = ref('');
const confirmPassword = ref('');
const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);

const passwordInputType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));
const confirmPasswordInputType = computed(() => (isConfirmPasswordVisible.value ? 'text' : 'password'));

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

const toggleConfirmPasswordVisibility = () => {
    isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
};

const closeModal = () => {
    emit('close');
};

const submitForm = () => {
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }
    // Here you can handle the password change logic
    console.log('Password changed:', password.value);
    closeModal();
};
</script>

<!-- ChangePasswordModal.vue -->
<template>
    <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[100]"
        v-if="isOpen">
        <div class="bg-white p-5 rounded-[5px]">
            <div class="mb-4">
                <h2 class="text-2xl">Change Password</h2>
            </div>
            <form @submit.prevent="submitForm" class="w-[50rem] max-w-sm mx-auto">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <div class="relative mb-5">
                    <input :type="passwordInputType" v-model="password" id="password"
                        class="block mb-2 text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                        style="border: 1px solid lightslategray;" />
                    <button @click.prevent="togglePasswordVisibility"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-if="isPasswordVisible">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            v-else="isPasswordVisible">
                            <path stroke="currentColor" stroke-width="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>

                <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900">Confirm
                    Password</label>
                <div class="relative mb-5">
                    <input :type="confirmPasswordInputType" v-model="confirmPassword" id="confirmPassword"
                        class="block mb-2 text-sm font-medium text-gray-900 p-2 w-full rounded-md"
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
                            v-else="isPasswordVisible">
                            <path stroke="currentColor" stroke-width="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>

                <div class="flex gap-3">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save
                        Password</button>
                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" @click="closeModal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>