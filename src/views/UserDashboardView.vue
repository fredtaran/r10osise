<script setup>
import { ref } from 'vue';
import NavAndSidebarBase from './NavAndSidebarBase.vue';

const search = ref("")

const headers = [
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Dessert (100g serving)',
  },
  { key: 'calories', title: 'Calories'},
  { key: 'fat', title: 'Fat (g)' },
  { key: 'carbs', title: 'Carbs (g)' },
  { key: 'protein', title: 'Protein (g)' },
  { key: 'iron', title: 'Iron (%)' },
]

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: 16,
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: 0,
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: 2,
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: 45,
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: 22,
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
  {
    name: 'Dingdong',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
]

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

          <v-data-table :headers="headers" :items="desserts" :search="search" :dark="true"></v-data-table>
        </v-card>
      </div>
    </div>
  </NavAndSidebarBase>
</template>
