<script setup>
import "bootstrap";
</script>

<template>
    <div
        class="modal fade show"
        tabindex="-1"
        aria-labelledby="nostra scuola"
        aria-modal="true"
        role="dialog"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title feelstrange-font">NOI</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body position-relative overflow-hidden">
                    <!-- <img
                        :src="`/storage/${member.image}`"
                        class="position-absolute overflow-hidden h-100 d-block"
                    /> -->
                    <span class="d-block h-100 overflow-auto position-relative">
                        La Feel Good nasce nel 2012,grazie ai progetti di Luca
                        Tommasi, ingegnere del suono, abbiamo potuto costruire
                        delle sale acusticamente professionali, un'ottima resa
                        acustica però sempre legata ad un'estetica piacevole e
                        familiare. Il nostro spirito è proprio quello di far
                        sentire i nostri clienti non solo clienti ma parte di
                        una realtà e di una famiglia, quella Feel Good! Al
                        momento gestita da Laura e Jo, colleghi nel lavoro,
                        marito e moglie nella vita, si impegnano ad accompagnare
                        per mano i primi passi dei nuovi musicisti ed a far
                        continuare gli studi a chi è già più navigato, seguendo
                        tutti gli allievi dal primo approccio alla musica,
                        all'acquisto del proprio strumento fino alle esibizioni
                        su un palco. Non ultimi per importanza, le colonne
                        portanti della scuola, il nostro team insegnanti, la
                        nostra famiglia!
                    </span>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

.modal-body {
    span {
        text-align: justify;
        font-size: 25px;
    }

    img {
        bottom: 0;
        opacity: 0.7;

        @include media-breakpoint-up(xs) {
            left: 0;
        }

        @include media-breakpoint-up(lg) {
            left: auto;
            right: 20px;
        }
    }
}
</style>
