<template>
    <div class="loader-overlay">    
    </div>
    <div class="abosulte top-0 min-h-[50vh] flex justify-center items-center">
        <img src="../../public/loading.gif" alt="loader" class="absolute z-[500]">
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
    z-index: 100;
    top: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
</style>