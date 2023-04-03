<script setup>
import menuImage from "@/../images/menu.png";
import postit from "@/../images/postit.png";
import scotch1 from "@/../images/scotch1.png";
import scotch2 from "@/../images/scotch2.png";

defineProps({
    post: {
        type: Object,
        default: [],
    },
});
</script>

<template>
    <section
        :style="{ backgroundImage: `url(${menuImage})` }"
        class="page home"
    >
        <div class="position-absolute postit-container">
            <div class="position-relative">
                <img :src="postit" class="w-100" />
                <div class="position-absolute postit-text">
                    <div class="position-relative">
                        <img
                            :src="scotch1"
                            class="position-absolute scotch-1"
                        />
                        <img
                            :src="scotch2"
                            class="position-absolute scotch-2"
                        />
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
    width: 25%;
    right: 38px;
    bottom: 45px;
    z-index: 1;

    // @include media-breakpoint-up(xxl) {
    //     width: 26rem;
    //     height: 26rem;
    // }

    .postit-text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-3deg);
        width: 63%;
    }

    .postit-image {
        box-shadow: -2px 2px 3px 0px;
    }

    .scotch {
        width: 2.8rem;

        @include media-breakpoint-up(xxl) {
            width: 4rem;
        }

        &-1 {
            @extend .scotch;
            right: -11%;
            z-index: 10;
            top: -15%;
            width: 31%;
        }

        &-2 {
            @extend .scotch;
            bottom: -15%;
            z-index: 10;
            width: 31%;
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
