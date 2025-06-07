<script setup>
import menuImage from "@/../images/menu.png";
import postit from "@/../images/postit.png";
import scotch1 from "@/../images/scotch1.png";
import scotch2 from "@/../images/scotch2.png";
import { Carousel } from "bootstrap";
import { onMounted } from "vue";

onMounted(() => {
    const myCarouselElement = document.querySelector("#postCarousel");
    const carousel = new Carousel(myCarouselElement, {
        ride: "carousel",
        interval: 3000,
    });
});

defineProps({
    posts: {
        type: Array,
        default: [],
    },
});
</script>

<template>
    <section
        :style="{ backgroundImage: `url(${menuImage})` }"
        class="page home"
    >
        <div v-if="posts" class="position-absolute postit-container">
            <div class="position-relative">
                <img :src="postit" class="w-100" />
                <div class="position-absolute postit-text">
                    <div
                        id="postCarousel"
                        class="position-relative carousel slide"
                        data-bs-ride="carousel"
                    >
                        <img
                            :src="scotch1"
                            class="position-absolute scotch-1"
                        />
                        <img
                            :src="scotch2"
                            class="position-absolute scotch-2"
                        />
                        <div class="carousel-inner">
                            <div
                                v-for="(post, postIndex) in posts"
                                :key="post.id"
                                :class="[
                                    { active: postIndex == 0 },
                                    'carousel-item',
                                ]"
                            >
                                <a
                                    class="w-100 h-100 d-block"
                                    target="_blank"
                                    :href="post.link"
                                >
                                    <img
                                        class="postit-image w-100"
                                        :src="`/storage/${post.image}`"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a
            href="#contact_us"
            class="btn btn-light position-absolute rounded-pill feelstrange-font ml-auto mr-auto"
            >CONTATTACI</a
        >
        <a
            id="whatsapp_link"
            href="https://whatsapp.com/channel/0029VafcdN1HgZWVWFJeG72F"
            target="blank"
            class="position-absolute text-center d-flex align-items-center ml-auto mr-auto"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
            </svg>
        </a>
    </section>
</template>

<style scoped lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

.home {
    background-position-x: 36.5%;
}

.postit-container {
    width: 18rem;
    right: 38px;
    bottom: 45px;
    z-index: 1;

    @media (min-width: 1600px) {
        width: 26rem;
        height: 26rem;
    }

    .postit-text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-3deg);
        width: 63%;
    }

    .carousel-inner {
        box-shadow: -2px 2px 3px 0px;
    }

    .scotch {
        width: 2.8rem;

        &-1 {
            @extend .scotch;
            right: -11%;
            z-index: 10;
            top: -15%;
            width: 27%;
        }

        &-2 {
            @extend .scotch;
            bottom: -15%;
            z-index: 10;
            width: 27%;
            left: -10%;
        }
    }
}

a[href="#contact_us"] {
    bottom: 10px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 147px;
    padding: 0px 0px 0px 0px;
    font-size: 20px;
}

/* New button */
a#whatsapp_link {
    bottom: 10px;
    left: calc(
        50% + 80px
    ); /* Adjust 80px as needed to position the new button */
    right: auto;

    @include media-breakpoint-up(sm) {
        bottom: 52px;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
    }

    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: #fff;

    svg {
        margin: 0 auto;
        width: 32px;
    }
}
</style>
