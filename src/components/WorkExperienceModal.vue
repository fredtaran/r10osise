<script setup>
import { ref } from 'vue'

const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}


</script>

<template>
    <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[100]"
        v-if="isOpen">
        <div class="bg-white p-5 rounded-[5px] w-[70rem]">
            <div class="mb-4">
                <h2 class="text-2xl font-bold">Work Experience</h2>
            </div>

            <form @submit.prevent="" class="w-full mx-auto">
                <div class="grid grid-flow-row gap-y-3">
                    <!-- Position -->
                    <div class="grid">
                        <label for="position" class="block font-medium text-gray-900">Position</label>
                        <input type="text" id="position"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of position -->

                    <!-- Inclusive date -->
                    <div class="grid grid-cols-2 gap-2">
                        <div class="">
                            <label for="inclusive_date_from" class="block font-medium text-gray-900">Inclusive
                                Date(From)</label>
                            <input type="date" id="inclusive_date_from"
                                class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                                style="border: 1px solid lightslategray;" />
                        </div>

                        <div class="">
                            <label for="inclusive_date_to" class="block font-medium text-gray-900">Inclusive
                                Date(To)</label>
                            <input type="date" id="inclusive_date_to"
                                class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                                style="border: 1px solid lightslategray;" />
                        </div>
                    </div>
                    <!-- End inclusive date -->

                    <!-- Length of service -->
                    <div class="grid">
                        <label for="length_of_service" class="block font-medium text-gray-900">Length of Service</label>
                        <input type="text" id="length_of_service"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of length of service -->

                    <!-- Status of appointment -->
                    <div class="grid">
                        <label for="status_of_appointment" class="block font-medium text-gray-900">Status of
                            Appointment</label>
                        <input type="text" id="status_of_appointment"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of status of appointment -->

                    <!-- Company -->
                    <div class="grid">
                        <label for="company" class="block font-medium text-gray-900">Company</label>
                        <input type="text" id="company"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of company -->
                </div>

                <div class="flex gap-3 mt-3">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        @click="closeModal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>