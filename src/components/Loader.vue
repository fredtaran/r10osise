<template>
    <div class="loader-overlay">    
    </div>
    <div class="flex justify-center items-center">
        <img src="/loading.gif" alt="loader" class="absolute top-0 z-[500]">
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: ["visible"]
};
</script>

<style>
.loader-overlay {
    background-color: gray;
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    height: -webkit-fill-available;
    z-index: 100;
    top: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
</style>