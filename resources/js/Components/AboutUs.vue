<script setup>
import jo from "@/../images/staff/Jo.png";
import laura from "@/../images/staff/Laura.png";
</script>

<template>
    <section id="nostra_scuola" class="page position-relative">
        <div class="container text-primary main-container feelstrange-font">
            <div class="row pb-5">
                <div class="col-12 text-center section-title">NOI</div>
            </div>
            <div class="row justify-content-md-center text-center">
                <div class="col-xs-12 col-md-4 p-5">
                    <img :src="jo" />
                    <p>Jo</p>
                </div>
                <div class="col-xs-12 col-md-4 p-5 img-scuola-div">
                    <img :src="laura" />
                    <p>Laura</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

.main-container {
    @include media-breakpoint-up(sm) {
        padding: 35px 10px 0 10px;
    }

    @include media-breakpoint-up(md) {
        padding: 35px 10px 0 10px;
    }

    @include media-breakpoint-up(lg) {
        padding: 35px 10px 0 10px;
    }

    @include media-breakpoint-up(xl) {
        padding: 35px 10px 0 10px;
    }

    @include media-breakpoint-up(xxl) {
        padding: 35px 10px 0 10px;
    }
}

img {
    max-width: 100%;
}

p {
    font-size: 34px;
}
</style>
