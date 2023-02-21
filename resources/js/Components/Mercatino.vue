<script setup>
// import MultipleItemCarousel from "@/Components/MultipleItemCarousel.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps({
    products: {
        type: Array,
        default: [],
    },
});

const breakpoints = {
    // 700px and up
    576: {
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
        itemsToShow: 5,
        snapAlign: "center",
    },
    1400: {
        itemsToShow: 5,
        snapAlign: "center",
    },
};
</script>

<template>
    <section id="mercatino" class="page position-relative bg-primary">
        <div class="container text-white main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    MERCATINO
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-xs-12">
                    <Carousel
                        :itemsToShow="2.95"
                        :wrapAround="true"
                        :transition="500"
                        :breakpoints="breakpoints"
                    >
                        <Slide v-for="product in products" :key="product.id">
                            <img
                                :src="`/storage/${product.image}`"
                                class="w-100 d-block"
                            />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
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

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
