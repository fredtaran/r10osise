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
                <h2 class="text-2xl font-bold">Educational Background</h2>
            </div>

            <form @submit.prevent="" class="w-full mx-auto">
                <div class="grid grid-flow-row gap-y-3">
                    <!-- Name of school -->
                    <div class="grid">
                        <label for="name_of_school" class="block font-medium text-gray-900">Name of School</label>
                        <input type="text" id="name_of_school"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of name of school -->

                    <!-- Address -->
                    <div class="grid">
                        <label for="address" class="block font-medium text-gray-900">Address/Location</label>
                        <input type="text" id="address"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of address -->

                    <!-- Date of attendance -->
                    <div class="grid grid-cols-2 gap-2">
                        <div class="">
                            <label for="date_of_attendance_from" class="block font-medium text-gray-900">Date of Attendance (From)</label>
                            <input type="date" id="date_of_attendance_from"
                                class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                                style="border: 1px solid lightslategray;" />
                        </div>

                        <div class="">
                            <label for="date_of_attendance_to" class="block font-medium text-gray-900">Date of Attendance (To)</label>
                            <input type="date" id="date_of_attendance_to"
                                class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                                style="border: 1px solid lightslategray;" />
                        </div>
                    </div>
                    <!-- End of date of attendance -->

                    <!-- Units earned or degree -->
                    <div class="grid">
                        <label for="units_or_degree" class="block font-medium text-gray-900">Units Earned or Degree Obtained</label>
                        <input type="text" id="units_or_degree"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of units earned or degree -->

                    <!-- Attachment -->
                    <div class="grid">
                        <label for="attachment" class="block font-medium text-gray-900">Attachment</label>
                        <input type="file" id="attachment"
                            class="block text-sm font-medium text-gray-900 p-2 w-full rounded-md"
                            style="border: 1px solid lightslategray;" />
                    </div>
                    <!-- End of attachment -->
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