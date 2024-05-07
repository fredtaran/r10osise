<script setup>
import NavAndSidebarBase from '@/components/NavAndSidebarBase.vue';
import EducationalBackgroundModal from '@/components/EducationalBackgroundModal.vue'
import { ref } from 'vue';

const isModalOpen = ref(false)

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

// Placeholder for the data from database
const tableData = ref([
    {
        name_of_school: "University of Science and Technology of the Southern Philippines",
        address_of_school: "C.M. Recto Ave., Lapasan, Cagayan de Oro City",
        date_of_attendance_from: "06/01/2013",
        date_of_attendance_to: "03/31/2017",
        units_earned_or_degree: "BS in Information Technology",
        attachment: "Diploma.pdf"
    },
    {
        name_of_school: "Misamis Oriental General Comprehensive High School",
        address_of_school: "A. Velez St., Cagayan de Oro City",
        date_of_attendance_from: "06/01/2009",
        date_of_attendance_to: "03/31/2013",
        units_earned_or_degree: "High School Graduate",
        attachment: "Diploma.pdf"
    },
])

</script>

<template>
    <EducationalBackgroundModal :isOpen="isModalOpen" @close="closeModal"></EducationalBackgroundModal>

    <NavAndSidebarBase>
        <div class="min-h-[350px] p-6 border-2 border-gray-200 shadow rounded-md">
            <h3 class="text-2xl font-bold">Educational Background</h3>

            <div class="mt-5">
                <div class="flex flex-row">
                    <div class="w-full flex items-center">
                        <button type="button" @click="openModal"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2 py-1.5 inline-flex items-center">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 12h14m-7 7V5" />
                            </svg>
                            Add Entry
                        </button>
                    </div>

                    <div class="w-full flex justify-end mb-5">
                        <form class="w-full max-w-md">
                            <label for="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div class="relative">
                                <input type="search" id="default-search"
                                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search ..." autocomplete="off" required />
                                <button type="submit"
                                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                                    @click.prevent="">
                                    <svg class="w-4 h-4 text-white font-extrabold" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="overflow-auto">
                    <table class="table-auto overflow-scroll w-full border border-slate-900 text-center">
                        <thead>
                            <tr class="border border-slate-900 text-center">
                                <th class="border border-slate-900 text-center p-2 w-[20rem]" rowspan="2">Name of School</th>
                                <th class="border border-slate-900 text-center p-2 w-[15rem]" rowspan="2">Address /Location</th>
                                <th class="border border-slate-900 text-center p-2" colspan="2">Date of Attendance</th>
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Units Earned or Degree
                                    Obtained</th>
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Attachment</th>
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Action</th>
                            </tr>

                            <tr class="border border-slate-900 text-center">
                                <th class="border border-slate-900 text-center p-2">From</th>
                                <th class="border border-slate-900 text-center p-2">To</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(row, index) in tableData" :key="index"
                                class="border border-slate-900 text-center">
                                <td class="border border-slate-900 text-center p-2">{{ row.name_of_school }}</td>
                                <td class="border border-slate-900 text-center p-2">{{ row.address_of_school }}</td>
                                <td class="border border-slate-900 text-center p-2">{{ row.date_of_attendance_from }}
                                </td>
                                <td class="border border-slate-900 text-center p-2">{{ row.date_of_attendance_to }}</td>
                                <td class="border border-slate-900 text-center p-2">{{ row.units_earned_or_degree }}
                                </td>
                                <td class="border border-slate-900 text-center p-2">{{ row.attachment }}
                                </td>
                                <td class="border border-slate-900 text-center p-2">
                                    <button
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2 py-1.5 inline-flex items-center mx-1"
                                        title="Edit" @click="saveEntry()">
                                        <svg class="w-6 h-6 text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                        </svg>
                                    </button>

                                    <button
                                        class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2 py-1.5 inline-flex items-center mx-1"
                                        title="Delete">
                                        <svg class="w-6 h-6 text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NavAndSidebarBase>
</template>