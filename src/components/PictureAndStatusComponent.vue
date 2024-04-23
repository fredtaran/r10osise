<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="min-h-[350px] p-6 border-2 border-gray-200 shadow rounded-md flex flex-col">
        <div class="flex justify-center items-center">
            <img src="/Taran.jpg" alt="user" class="h-40 border border-stone-900 rounded-full">
        </div>

        <div class="mt-5">
            <div class="flex flex-col justify-center items-center mb-3">
                <h3 class="text-2xl font-bold">FRED P. TARAN</h3>
                <span class="font-italic">ftaran04@gmail.com | 0995-383-5762</span>
            </div>

            <table class="table-auto w-full">
                <tbody>
                    <tr>
                        <td class="font-bold w-[200px] p-1 text-left">Status:</td>
                        <td class="w-[200px] p-1 text-right">Active</td>
                    </tr>

                    <tr>
                        <td class="font-bold w-[200px] p-1 text-left">Date of Registration:</td>
                        <td class="w-[200px] p-1 text-right">1/1/2024</td>
                    </tr>

                    <tr>
                        <td class="font-bold w-[200px] p-1 text-left">Date of Expiry:</td>
                        <td class="w-[200px] p-1 text-right">12/31/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex flex-row justify-center items-center mt-3">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Apply for Permit</button>
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Renew Permit</button>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Cancel Permit</button>
        </div>
    </div>
</template>