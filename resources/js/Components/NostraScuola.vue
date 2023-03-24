<script setup>
import scuola3 from "@/../images/scuola 3.jpg";
import { Modal } from "bootstrap";
import NostraScuolaModal from "./NostraScuolaModal.vue";

function openModal() {
    const modal = new Modal(document.getElementById("nostraScuolaModal"), {});
    modal.show();
}
</script>

<template>
    <section id="nostra_scuola" class="page position-relative">
        <div class="container text-primary main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    LA NOSTRA SCUOLA
                </div>
            </div>
            <div
                class="row justify-content-md-center flex-grow-1 align-items-center overflow-hidden pt-3"
            >
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-5 p-3 order-1 order-md-12">
                            <p class="text-justify overflow-hidden">
                                I nostri corsi sono costruiti intorno alle
                                esigenze dell'allievo.
                                <br class="d-none d-sm-block" />La prima lezione
                                è gratuita e serve per dar la possibilità al
                                nuovo allievo di conoscere noi, l'insegnante e
                                vedere la struttura. Facciamo pacchetti da 4
                                lezioni che si svolgono settimanalmente.
                                <br class="d-none d-sm-block" />Abbiamo lezioni
                                da 1h individuali o di classe, per i più piccoli
                                invece, per creare un primo approccio alla
                                musica, abbiamo creato delle lezioni da 30min. I
                                nostri allievi si interfacceranno anche con gli
                                allievi degli altri strumenti con la musica
                                d'insieme, avranno la possibilità di esibirsi su
                                un palco, sia a inizio e/o fine anno che durante
                                tutto l'anno scolastico nei vari eventi che
                                faremo. <br class="d-none d-sm-block" />
                                Vieni a trovarci, ti aspettiamo!
                            </p>
                        </div>
                        <div
                            class="col-12 col-md-6 col-lg-5 text-center p-3 img-scuola-div order-12 order-md-1"
                        >
                            <img :src="scuola3" class="w-100 d-block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shadow position-absolute w-100 pe-none d-md-none" />
        <button
            @click="openModal"
            class="btn btn-light position-absolute rounded-pill feelstrange-font ml-auto mr-auto d-block d-md-none"
        >
            LEGGI DI PIù
        </button>

        <NostraScuolaModal id="nostraScuolaModal" />
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

.main-container {
    height: 100%;
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

button {
    bottom: 34px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 147px;
    padding: 0px 0px 0px 0px;
    font-size: 20px;
}

p {
    text-align: justify;

    @include media-breakpoint-up(md) {
        font-size: 15px;
    }

    @include media-breakpoint-up(xl) {
        font-size: 20px;
    }

    @include media-breakpoint-up(xxl) {
        font-size: 21px;
    }
}
</style>
