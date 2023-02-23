<template>
    <a
        v-if="show"
        href="#"
        class="dot-orange position-fixed text-center d-flex align-items-center"
    >
        <svg
            class="d-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="white"
        >
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
        </svg>
    </a>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const show = ref(false);

// https://stackoverflow.com/a/34831787/13365948
function handleScroll(event) {
    let scrollTop = window.scrollY;
    if (scrollTop > 0) {
        show.value = true;
    } else {
        show.value = false;
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

a {
    right: 17px;
    z-index: 1000;
    bottom: 10px;

    svg {
        margin: 0 auto;
        width: 34px;
    }
}

.dot {
    width: 60px;
    height: 60px;
    margin: 0 5px;
    border-radius: 50%;
    margin: 0 auto;

    &-orange {
        @extend .dot;
        background-color: $secondary;
    }
}
</style>
