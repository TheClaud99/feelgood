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
            <div
                :style="{ backgroundImage: `url(${postit})` }"
                class="postit position-relative w-100 h-100 p-5"
            >
                <img :src="scotch1" class="position-absolute scotch-1" />
                <img :src="scotch2" class="position-absolute scotch-2" />
                <a target="_blank" :href="post.link">
                    <img class="postit-image" :src="`/storage/${post.image}`" />
                </a>
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
.home {
    background-position-x: 36.5%;
}

.postit-container {
    width: 285px;
    height: 285px;
    right: 38px;
    bottom: 45px;
    z-index: 1;

    .postit {
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        .postit-image {
            max-width: 100%;
            max-height: 100%;
            transform: rotate(-3deg);
            box-shadow: -2px 2px 3px 0px;
        }

        .scotch {
            width: 46px;

            &-1 {
                @extend .scotch;
                right: 34px;
                z-index: 10;
                top: 25px;
            }

            &-2 {
                @extend .scotch;
                bottom: 24px;
                z-index: 10;
                left: 35px;
            }
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
