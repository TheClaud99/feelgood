<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Curriculum from "./Curriculum.vue";
import { Modal } from "bootstrap";
import { ref } from "vue";

defineProps({
    members: {
        type: Array,
        default: [],
    },
});

// Membro di cui è al momento aperto il curriculum
const currentMember = ref({});

function openModal(member) {
    currentMember.value = member;
    const modal = new Modal(document.getElementById("curriculumModal"), {});
    modal.show();
}
</script>

<template>
    <section id="nostro_team" class="page position-relative bg-secondary">
        <div class="container text-white feelstrange-font main-container">
            <div class="row pb-3">
                <div class="col-12 text-center section-title">
                    IL NOSTRO TEAM
                </div>
            </div>
            <div
                class="row pt-5 justify-content-sm-center flex-grow-1 d-none d-sm-flex"
            >
                <template v-for="(member, index) in members" :key="member.id">
                    <div class="col-12" v-if="index % 5 === 0" />

                    <div
                        class="col-12 col-sm-2 text-center"
                        @click="openModal(member)"
                    >
                        <img :src="`/storage/${member.image}`" class="" />
                        <div>
                            {{ member.name }}
                        </div>
                    </div>
                </template>
            </div>
            <div class="row pt-5 d-sm-none">
                <div class="col-xs-12">
                    <Carousel
                        :itemsToShow="1"
                        :wrapAround="true"
                        :transition="500"
                    >
                        <Slide
                            v-for="(member, memberIndex) in members"
                            :key="member.id"
                        >
                            <div @click="openModal(member)">
                                <img
                                    :src="`/storage/${member.image}`"
                                    class="d-block"
                                />
                                <p>
                                    {{ member.name }}
                                </p>
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation>
                                <template #next>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="white"
                                    >
                                        <path
                                            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
                                        />
                                    </svg>
                                </template>
                                <template #prev>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="white"
                                    >
                                        <path
                                            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
                                        />
                                    </svg>
                                </template>
                            </Navigation>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
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

        <Curriculum id="curriculumModal" :member="currentMember" />
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

#nostro_team {
    .carousel__slide {
        padding: 5px;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__prev,
    .carousel__next {
        @include media-breakpoint-up(md) {
            margin: 0px -40px !important;
        }
    }

    .carousel__slide {
        img {
            width: 100%;
        }

        transform: rotateY(0) scale(0.95);

        p {
            font-size: 30px;
        }
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1);
    }
}
</style>
