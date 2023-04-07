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
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

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
</style>
