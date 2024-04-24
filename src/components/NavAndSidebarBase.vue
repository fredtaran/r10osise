<script setup>
import { initDrawers, initDropdowns } from 'flowbite';
import { onMounted, ref } from 'vue';
import apiClient from '../../services/apiClient'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Loader from './Loader.vue';
import ChangePassword from './ChangePassword.vue'

const store = useStore()
const router = useRouter()

const isLoading = ref(false)
const isModalOpen = ref(false);

onMounted(() => {
    initDrawers();
    initDropdowns();
})

const logout = async () => {
    isLoading.value = true
    await apiClient.get('/sanctum/csrf-cookie')
    await store.dispatch('logout')
    isLoading.value = false
    router.replace('/')
}

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<template>
    <ChangePassword :isOpen="isModalOpen" @close="closeModal" />
    
    <nav class="fixed top-0 z-50 w-full bg-banner-bg border-b border-gray-200">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <!-- Hamburger Button -->
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        data-drawer-show="logo-sidebar" aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <!-- Logo Placeholder -->
                    <a href="#" class="flex ms-2 md:me-24">
                        <img src="/mgb-logo.png" alt="MGB Logo" class="h-16 me-3">
                        <span class="self-center text-white text-xl font-semibold sm:text-2xl whitespace-nowrap">MGB
                            OSISE</span>
                    </a>
                </div>

                <!-- User Profile Button -->
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img src="/Taran.jpg" alt="User Image Placeholder" class="w-8 h-8 rounded-full">
                            </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                            id="dropdown-user">
                            <div class="px-4 py-3" role="none">
                                <p class="text-sm text-gray-900" role="none">Fred P. Taran</p>
                                <p class="text-sm font-medium text-gray-900 truncate" role="none">ftaran04@gmail.com</p>
                            </div>
                            <ul class="py-1" role="none">
                                <li>
                                    <a @click="openModal" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                        role="menuItem">Change Password</a>
                                </li>

                                <li>
                                    <a @click="logout" href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                        role="menuItem">Signout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
        aria-label="Sidebar">
        <div class="h-full px-3 py-5 overflow-y-auto bg-white">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink :to="{ name: 'user-profile' }" v-ripple
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <i class="fa-solid fa-user text-2xl w-8"></i>
                        <span class="ms-3">Profile</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'user-educational-background' }" v-ripple
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <i class="fa-solid fa-user-graduate text-2xl w-8"></i>
                        <span class="ms-3">Educational Background</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'user-board-exam' }" v-ripple
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <i class="fa-solid fa-file-lines text-2xl w-8"></i>
                        <span class="ms-3">Board Exams/Certifications</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'user-work-experience' }" v-ripple
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <i class="fa-solid fa-briefcase text-2xl w-8"></i>
                        <span class="ms-3">Work Experiences</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'user-training' }" v-ripple
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <i class="fa-solid fa-person-digging text-2xl w-8"></i>
                        <span class="ms-3">Trainings</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>

    <div class="p-4 sm:ml-64">
        <div class="p-4 rounded-lg mt-20">
            <slot />
        </div>
    </div>

    <div v-show="isLoading">
        <Loader :visible="isLoading" />
    </div>
</template>