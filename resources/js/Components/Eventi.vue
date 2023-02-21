<script setup>
import sala2 from "@/../images/sala2.jpeg";
import sala3 from "@/../images/sala3.jpeg";
import sala4 from "@/../images/sala4.jpeg";

defineProps({
    events: {
        type: Array,
        default: [],
    },
});
</script>

<template>
    <section id="eventi" class="page position-relative bg-secondary">
        <div class="container text-white main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    E20
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-xs-12 col-md-4 text-center p-3">
                    <img :src="sala2" class="w-100" />
                </div>
                <div class="col-xs-12 col-md-4 text-center p-3">
                    <img :src="sala3" class="w-100" />
                </div>
                <div class="col-xs-12 col-md-4 text-center p-3">
                    <img :src="sala4" class="w-100" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
