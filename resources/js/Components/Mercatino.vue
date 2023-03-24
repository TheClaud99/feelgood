<script setup>
// import MultipleItemCarousel from "@/Components/MultipleItemCarousel.vue";
import { ref, computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import VueEasyLightbox from "vue-easy-lightbox";

const props = defineProps({
    products: {
        type: Array,
        default: [],
    },
});

const index = ref(null);
const lightBoxVisible = ref(false);

const images = ref([]);

function show(product) {
    index.value = 0;
    if (product.photos) {
        images.value = product.photos.map((photo) => ({
            src: `/storage/${photo}`,
            title: product.name,
            alt: product.name,
        }));
    } else {
        images.value = [];
    }
    images.value.unshift({
        src: `/storage/${product.image}`,
        title: product.name,
        alt: product.name,
    });
    lightBoxVisible.value = true;
}
const onHide = () => (lightBoxVisible.value = false);

const breakpoints = {
    // 700px and up
    0: {
        itemsToShow: 1,
        snapAlign: "center",
    },
    // 1024 and up
    768: {
        itemsToShow: 1.95,
        snapAlign: "center",
    },
    992: {
        itemsToShow: 2.95,
        snapAlign: "center",
    },
    1200: {
        itemsToShow: 3,
        snapAlign: "center",
    },
    1400: {
        itemsToShow: 3,
        snapAlign: "center",
    },
};

function isVisible(productIndex, currentSlide, slidesCount) {
    const range = 2;

    if (slidesCount == 0) {
        return false;
    }
    if (range * 2 > slidesCount) {
        return true;
    }
    let from = currentSlide - range;
    let to = currentSlide + range;

    if (from < 0) {
        from = from + slidesCount;
        return productIndex >= from || productIndex <= to;
    }

    if (to >= slidesCount) {
        to = to % slidesCount;
        return productIndex >= from || productIndex <= to;
    }

    return from <= productIndex && productIndex <= to;
}
</script>

<template>
    <section id="mercatino" class="page position-relative bg-primary">
        <div class="container text-white main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    MERCATINO
                </div>
            </div>
            <div class="row pt-sm-5 flex-grow-1 align-items-center">
                <div class="col-xs-12">
                    <VueEasyLightbox
                        :visible="lightBoxVisible"
                        :imgs="images"
                        :index="index"
                        :loop="true"
                        @hide="onHide"
                    />
                    <Carousel
                        :wrapAround="true"
                        :transition="500"
                        :breakpoints="breakpoints"
                    >
                        <template #slides="{ currentSlide, slidesCount }">
                            <Slide
                                v-for="(product, productIndex) in products"
                                :key="product.id"
                            >
                                <img
                                    v-if="
                                        isVisible(
                                            productIndex,
                                            currentSlide,
                                            slidesCount
                                        )
                                    "
                                    :src="`/storage/${product.image}`"
                                    class="w-100 d-block"
                                    @click="show(product)"
                                />
                            </Slide>
                        </template>

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
        </div>
    </section>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

#mercatino {
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
            margin: 0px -23px !important;
        }
    }

    // .carousel__slide {
    //     opacity: 0.9;
    //     transform: rotateY(-20deg) scale(0.9);
    // }

    // .carousel__slide--active ~ .carousel__slide {
    //     transform: rotateY(20deg) scale(0.9);
    // }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg) scale(0.9);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg) scale(0.9);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.1);
    }
}
</style>
