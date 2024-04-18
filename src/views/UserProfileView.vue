<script setup>
import NavAndSidebarBase from '@/components/NavAndSidebarBase.vue'
import PictureAndStatusComponent from '@/components/PictureAndStatusComponent.vue'
import PersonelDetailComponent from '@/components/PersonalDetailsComponent.vue'

</script>

<template>
    <NavAndSidebarBase>
        <div class="grid grid-cols-12 gap-2">
            <div class="col-span-3">
                <PictureAndStatusComponent />
            </div>
            
            <div class="col-span-9">
                <PersonelDetailComponent />
            </div>
        </div>
    </NavAndSidebarBase>
</template>