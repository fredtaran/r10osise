<script setup>
import { ref } from 'vue';
import NavAndSidebarBase from '@/components/NavAndSidebarBase.vue';

const search = ref("")

const headers = []
const applications = []

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
        <v-card flat>
          <template v-slot:text>
            <v-text-field v-model="search" label="Search" single-line variant="outlined" hide-details></v-text-field>
          </template>

          <v-data-table :headers="headers" :items="applications" :search="search" :items-per-page="5" class="elevation-1"></v-data-table>
        </v-card>
      </div>
    </div>
  </NavAndSidebarBase>
</template>
