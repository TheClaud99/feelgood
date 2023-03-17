<script setup>
import postit from "@/../images/postit.png";
import GoogleMapLoader from "./GoogleMapLoader.vue";
</script>

<template>
    <section id="contact_us" class="page position-relative bg-primary">
        <div class="container text-white main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    COME TROVARCI
                </div>
            </div>
            <div
                class="flex-grow-1 justify-content-md-center overflow-hidden pt-3 row"
            >
                <div
                    class="col-xs-12 col-md-6 p-3 d-flex flex-column text-white"
                >
                    <div class="row">
                        <div class="col-1"></div>
                        <div
                            class="col-9 postit-container ascrada-font text-black position-relative"
                        >
                            <img :src="postit" class="w-100" />
                            <div class="position-absolute postit-text">
                                <div class="pe-5 ps-5 text-center">
                                    <div class="pt-5">Tel. +39 3921231231</div>
                                    <div>
                                        Via Monte Tambura 19, Viareggio (LU)
                                    </div>
                                    <div class="pb-3 pb-lg-5">
                                        fgviareggio@gmail.com
                                    </div>
                                    <div class="pb-5">
                                        Segreteria aperta <br />
                                        dal lunedì al venerdì dalle 15:00 alle
                                        24:00.
                                        <br />
                                        Il giovedì dalle 15:00 alle 21:00.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-xs-12 col-md-6 col-lg-5 text-center p-3 img-scuola-div"
                >
                    <GoogleMapLoader />
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <a
                        target="blank"
                        href="https://www.facebook.com/feelgoodviareggio"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            fill="orange"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            />
                        </svg>
                    </a>

                    <a
                        target="blank"
                        href="https://www.instagram.com/feel_good_viareggio/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="orange"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            />
                        </svg>
                    </a>

                    <a
                        target="blank"
                        href="https://www.tiktok.com/@feelgoodviareggio"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="orange"
                        >
                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

a {
    color: white;
    font-size: 17px;
}

svg {
    padding-right: 20px;
    padding-left: 20px;
    height: 30px;
}

.postit-container {
    z-index: 1;

    .postit-text {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-3deg);

        @include media-breakpoint-up(xs) {
            line-height: 16px;
            font-size: 23px;
        }

        @include media-breakpoint-up(sm) {
            line-height: 22px;
            font-size: 31px;
        }

        @include media-breakpoint-up(md) {
            line-height: 15px;
            font-size: 23px;
        }

        @include media-breakpoint-up(lg) {
            line-height: 20px;
            font-size: 30px;
        }

        @include media-breakpoint-up(xl) {
            line-height: 26px;
            font-size: 34px;
        }
    }
}
</style>
