<script setup>
import sala2 from "@/../images/sala2.jpeg";
import sala3 from "@/../images/sala3.jpeg";
import sala4 from "@/../images/sala4.jpeg";
</script>

<template>
    <section id="nostre_sale" class="page position-relative bg-primary">
        <div class="container text-white main-container">
            <div class="row pb-sm-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    LE NOSTRE SALE
                </div>
            </div>
            <div
                class="align-items-center flex-grow-1 justify-content-center overflow-hidden pt-md-5 row"
            >
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div
                            class="col-12 col-sm-6 col-md-4 text-center ps-5 pe-5 pb-2 p-sm-3"
                        >
                            <img :src="sala2" class="w-100 d-block" />
                        </div>
                        <div
                            class="col-12 col-sm-6 col-md-4 text-center ps-5 pe-5 pb-2 p-sm-3"
                        >
                            <img :src="sala3" class="w-100" />
                        </div>
                        <div
                            class="col-12 col-sm-6 col-md-4 text-center ps-5 pe-5 pb-2 p-sm-3"
                        >
                            <img :src="sala4" class="w-100 d-block" />
                        </div>

                        <div class="col-12 text-center p-3 d-none d-sm-block">
                            <p class="text-justify">
                                Le nostre sale sono state costruite con amore a
                                mano dai titolari ed è proprio grazie a questo
                                amore misto alla professionalità dei progetti di
                                un ingegnere del suono che le sale prova possono
                                regalare un'ottima acustica per suonare con la
                                tua band o per esercitarti. Grazie ai progetti
                                di Luca Tommasi, ingegnere del suono delle
                                nostre zone, abbiamo potuto costruire delle sale
                                acusticamente professionali, un'ottima resa
                                acustica però sempre legata ad un'estetica
                                piacevole e familiare.Ogni sala ha a
                                disposizione una batteria completa, due
                                amplificatori per chitarra, uno per basso, mixer
                                e impianto audio, su richiesta forniamo
                                microfoni, tastiera e tutto quello che possiamo
                                offrire!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

p {
    text-align: justify;
    text-align-last: center;

    @include media-breakpoint-up(sm) {
        font-size: 15px;
    }

    @include media-breakpoint-up(MD) {
        font-size: 20px;
    }

    @include media-breakpoint-up(xl) {
        font-size: 20px;
    }

    @include media-breakpoint-up(xxl) {
        font-size: 20px;
    }
}
</style>
