<script setup>
import NavAndSidebarBase from '@/components/NavAndSidebarBase.vue'
import PictureAndStatusModule from '@/components/PictureAndStatusComponent.vue'

</script>

<template>
    <NavAndSidebarBase>
        <div class="grid grid-cols-12 gap-2">
            <div class="col-span-3">
                <PictureAndStatusModule />
            </div>
            
            <div class="col-span-9">
                
            </div>
        </div>
    </NavAndSidebarBase>
</template>