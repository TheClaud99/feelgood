<script setup>
import jo from "@/../images/staff/Jo.png";
import laura from "@/../images/staff/Laura.png";
import noi from "@/../images/staff/noi.png";
</script>

<template>
    <section id="nostra_scuola" class="page position-relative">
        <div class="container text-primary main-container feelstrange-font">
            <div class="row">
                <div class="col-12 text-center section-title">NOI</div>
            </div>
            <div
                class="align-items-center flex-grow-1 justify-content-center overflow-hidden row"
            >
                <div class="col-12">
                    <div class="row justify-content-center">
                        <!-- <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <img :src="laura" />
                            <p class="name">Laura</p>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <img :src="jo" />
                            <p class="name">Jo</p>
                        </div> -->
                        <div class="col-12 col-sm-6 col-md-5">
                            <img :src="noi" />
                            <p class="name feelstrange-font">Jo e Laura</p>
                        </div>
                        <div class="col-12 col-sm-12 col-md-8">
                            <p class="text-justify">
                                La Feel Good nasce nel 2012,grazie ai progetti
                                di Luca Tommasi, ingegnere del suono, abbiamo
                                potuto costruire delle sale acusticamente
                                professionali, un'ottima resa acustica però
                                sempre legata ad un'estetica piacevole e
                                familiare. Il nostro spirito è proprio quello di
                                far sentire i nostri clienti non solo clienti ma
                                parte di una realtà e di una famiglia, quella
                                Feel Good! Al momento gestita da Laura e Jo,
                                colleghi nel lavoro, marito e moglie nella vita,
                                si impegnano ad accompagnare per mano i primi
                                passi dei nuovi musicisti ed a far continuare
                                gli studi a chi è già più navigato, seguendo
                                tutti gli allievi dal primo approccio alla
                                musica, all'acquisto del proprio strumento fino
                                alle esibizioni su un palco. Non ultimi per
                                importanza, le colonne portanti della scuola, il
                                nostro team insegnanti, la nostra famiglia!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shadow position-absolute w-100 pe-none d-md-none" />
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

    p.text-justify {
        text-align: justify;
        text-align-last: center;
        font-family: var(--bs-body-font-family);

        @include media-breakpoint-up(sm) {
            font-size: 15px;
        }

        @include media-breakpoint-up(md) {
            font-size: 17px;
        }

        @include media-breakpoint-up(xl) {
            font-size: 17px;
        }

        @include media-breakpoint-up(xxl) {
            font-size: 17px;
        }
    }

    img {
        max-width: 100%;
    }

    p.name {
        text-align: center;
        font-size: 34px;
    }
}

.shadow {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 38%,
        rgba(255, 255, 255, 0) 100%
    );
    height: 200px;
    bottom: 0;
}
</style>
