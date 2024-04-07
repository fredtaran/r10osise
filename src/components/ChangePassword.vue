<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['close']);

const password = ref('');
const confirmPassword = ref('');

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
    <div class="modal" v-if="isOpen">
        <div class="modal-content">
            <h2>Change Password</h2>
            <form @submit.prevent="submitForm">
                <input type="password" v-model="password" placeholder="New Password" required />
                <input type="password" v-model="confirmPassword" placeholder="Confirm New Password" required />
                <button type="submit">Change Password</button>
            </form>
            <button @click="closeModal">Cancel</button>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>