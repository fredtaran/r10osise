<template>
    <NavAndSidebarBase>
        <div class="min-h-[350px] p-6 border-2 border-gray-200 shadow rounded-md">
            <h3 class="text-2xl font-bold">Board Examimnation</h3>

            <div class="mt-5">
                <div class="flex flex-row">
                    <div class="w-full flex items-center">
                        <button type="button"
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
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Title of Examination</th>
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Date Taken</th>
                                <th class="border border-slate-900 text-center p-2" rowspan="2">Rating</th>
                                <th class="border border-slate-900 text-center p-2" colspan="3">Registration</th>
                            </tr>

                            <tr class="border border-slate-900 text-center">
                                <th class="border border-slate-900 text-center p-2">Kind</th>
                                <th class="border border-slate-900 text-center p-2">No.</th>
                                <th class="border border-slate-900 text-center p-2">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="border border-slate-900 text-center">
                                <td class="border border-slate-900 text-center p-2">Career Service Eligibility (CSE) 2nd Level</td>
                                <td class="border border-slate-900 text-center p-2">10/05/2018</td>
                                <td class="border border-slate-900 text-center p-2">80.9%</td>
                                <td class="border border-slate-900 text-center p-2">Professional</td>
                                <td class="border border-slate-900 text-center p-2">12345</td>
                                <td class="border border-slate-900 text-center p-2">07/25/2018</td>
                            </tr>

                            <tr class="border border-slate-900 text-center">
                                <td class="border border-slate-900 text-center p-2">Mechanical Engineering Licensure Exam</td>
                                <td class="border border-slate-900 text-center p-2">10/05/2018</td>
                                <td class="border border-slate-900 text-center p-2">99%</td>
                                <td class="border border-slate-900 text-center p-2">-</td>
                                <td class="border border-slate-900 text-center p-2">-</td>
                                <td class="border border-slate-900 text-center p-2">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NavAndSidebarBase>
</template>

<script setup>
import NavAndSidebarBase from '@/components/NavAndSidebarBase.vue';
</script>