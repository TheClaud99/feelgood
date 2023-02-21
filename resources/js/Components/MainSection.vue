<script setup>
import menuImage from "@/../images/menu.png";
</script>

<template>
    <section
        :style="{ backgroundImage: `url(${menuImage})` }"
        class="page home"
    >
        <a
            href="#contattaci"
            class="btn btn-light position-absolute rounded-pill feelstrange-font ml-auto mr-auto"
            >CONTATTACI</a
        >
    </section>
</template>

<style scoped lang="scss">
a {
    bottom: 10px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 200px;
    padding: 10px 10px 10px 10px;
    font-size: 20px;
}
</style>
