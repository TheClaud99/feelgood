<script setup>
import scuola1 from "@/../images/scuola 1.png";
import scuola3 from "@/../images/scuola 3.png";
</script>

<template>
    <section id="nostra_scuola" class="page position-relative">
        <div class="container text-primary main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    LA NOSTRA SCUOLA
                </div>
            </div>
            <div class="row justify-content-md-center pt-3">
                <div class="col-xs-12 col-md-5 p-3">
                    <p class="text-justify">
                        La Feel Good nasce nel 2012,grazie ai progetti di Luca
                        Tommasi, ingegnere del suono, abbiamo potuto costruire
                        delle sale acusticamente professionali, un'ottima resa
                        acustica però sempre legata ad un'estetica piacevole e
                        familiare.Il nostro spirito è proprio quello di far
                        sentire i nostri clienti non solo clienti ma parte di
                        una realtà e di una famiglia, quella Feel Good!Al
                        momento gestita da Laura e Jo, colleghi nel lavoro,
                        marito e moglie nella vita, si impegnano ad accompagnare
                        per mano i primi passi dei nuovi musicisti ed a far
                        continuare gli studi a chi è già più navigato, seguendo
                        tutti gli allievi dal primo approccio alla musica,
                        all'acquisto del proprio strumento fino alle esibizioni
                        su un palco. Non ultimi per importanza, le colonne
                        portanti della scuola, il nostro team insegnanti, la
                        nostra famiglia!
                    </p>
                </div>
                <div
                    class="col-xs-12 col-md-6 col-lg-5 text-center p-3 img-scuola-div"
                >
                    <img :src="scuola3" class="w-100" />
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

    @include media-breakpoint-up(xl) {
        font-size: 20px;
    }

    @include media-breakpoint-up(xxl) {
        font-size: 20px;
    }
}
</style>
