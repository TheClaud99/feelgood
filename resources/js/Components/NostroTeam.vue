<script setup>
import jack1 from "@/../images/jack1.png";
import jack2 from "@/../images/jack2.png";
import scuola from "@/../images/icons_rounded/scuola.png";
import sale from "@/../images/icons_rounded/sale.png";
import musicaInsieme from "@/../images/icons_rounded/musica_insieme.png";
import altro from "@/../images/icons_rounded/altro.png";

defineProps({
    members: {
        type: Array,
        default: [],
    },
});

// console.log(members);
</script>

<template>
    <section id="nostro_team" class="page position-relative bg-secondary">
        <div class="container text-white feelstrange-font main-container">
            <div class="row pb-3">
                <div class="col-12 text-center section-title">
                    IL NOSTRO TEAM
                </div>
            </div>
            <div class="row pt-5 justify-content-md-center flex-grow-1">
                <template v-for="(member, index) in members" :key="member.id">
                    <div class="col-xs-12" v-if="index % 5 === 0" />

                    <div class="col-xs-12 col-md-2 text-center">
                        <img :src="`/storage/${member.image}`" class="" />
                        <div>
                            {{ member.name }}
                        </div>
                    </div>
                </template>
            </div>
            <!-- <div class="row pt-2 justify-content-md-center flex-grow-1">
                <div
                    v-for="member in members.slice(0, 5)"
                    :key="member.id"
                    class="col-xs-12 col-md-2 text-center"
                >
                    <img :src="`/storage/${member.image}`" class="" />
                    <div>
                        {{ member.name }}
                    </div>
                </div>
            </div>
            <div class="row pt-2 justify-content-md-center flex-grow-1">
                <div
                    v-for="member in members.slice(5)"
                    :key="member.id"
                    class="col-xs-12 col-md-2 text-center"
                >
                    <img :src="`/storage/${member.image}`" class="" />
                    <div>
                        {{ member.name }}
                    </div>
                </div>
            </div> -->
        </div>
        <!-- <img :src="jack1" class="position-absolute jack1" />
        <img :src="jack2" class="position-absolute jack2" /> -->
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

img {
    max-width: 100%;

    @include media-breakpoint-up(xl) {
        max-width: 200px;
    }
}
</style>
