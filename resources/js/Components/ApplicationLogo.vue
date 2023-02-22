<template>
    <a href="#">
        <img
            :style="{ opacity: opacity }"
            class="position-fixed"
            :src="logoSrc"
            alt=""
        />
        <!-- <img
            :style="{ opacity: (1 - opacity) * 0.5 }"
            class="position-fixed"
            :src="logoWhite"
            alt=""
        /> -->
    </a>
</template>

<script setup>
import logo from "@/../images/logo.png";
import logoWhite from "@/../images/logo_white.png";
import { onMounted, onBeforeUnmount, ref } from "vue";

const opacity = ref(1.0);
const logoSrc = ref(logo);

// https://stackoverflow.com/a/34831787/13365948
function handleScroll(event) {
    let elementHeight = 500;
    let scrollTop = window.scrollY;
    if (elementHeight - scrollTop > 0) {
        opacity.value = (elementHeight - scrollTop) / elementHeight;
        logoSrc.value = logo;
    } else {
        opacity.value = 0;
        // logoSrc.value = logoWhite;
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
img {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
}

@media (min-width: 768px) {
    img {
        max-width: 100px;
        top: 60px;
    }
}

@media (min-width: 992px) {
    img {
        max-width: 200px;
        top: 30px;
    }
}

@media (max-width: 768px) {
    img {
        display: none;
    }
}
</style>
