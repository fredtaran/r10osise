<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="min-h-[350px] p-6 border-2 border-gray-200 shadow rounded-md flex flex-col">
        <div class="flex justify-center items-center">
            <img src="/Taran.jpg" alt="user" class="h-40 border border-stone-900 rounded-full">
        </div>

        <div class="mt-5">
            <div class="flex justify-center items-center mb-3">
                <h3 class="text-2xl font-bold">FRED P. TARAN</h3>
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
    </div>
</template>