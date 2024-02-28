<script setup>
import { ref } from 'vue';
import NavAndSidebarBase from './NavAndSidebarBase.vue';

</script>

<template>
  <NavAndSidebarBase>
    <h1 class="text-3xl font-bold">Dashboard</h1>

    <div class="p-2 mt-5 rounded-md shadow-lg sm:flex-row sm:justify-between sm:items-center">
      <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h3 class="text-xl font-bold">List of Application</h3>
        <button v-ripple
          class="border-2 border-solid border-button-border mt-1 py-2 rounded-lg bg-button-bg font-bold hover:text-black hover:bg-transparent sm:px-5">
          <i class="fa-solid fa-plus font-bold"></i> Apply
        </button>
      </div>

      <div class="w-full mt-5 overflow-x-scroll">
        
      </div>
    </div>
  </NavAndSidebarBase>
</template>
