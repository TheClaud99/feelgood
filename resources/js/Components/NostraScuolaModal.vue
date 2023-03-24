<script setup>
import "bootstrap";
import isEqual from "lodash.isequal";
// defineProps({
//     member: {
//         type: Object,
//     },
// });
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
                    <h1 class="modal-title feelstrange-font">
                        La nostra scuola
                    </h1>
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
                        I nostri corsi sono costruiti intorno alle esigenze
                        dell'allievo.
                        <br class="d-none d-sm-block" />La prima lezione è
                        gratuita e serve per dar la possibilità al nuovo allievo
                        di conoscere noi, l'insegnante e vedere la struttura.
                        Facciamo pacchetti da 4 lezioni che si svolgono
                        settimanalmente. <br class="d-none d-sm-block" />Abbiamo
                        lezioni da 1h individuali o di classe, per i più piccoli
                        invece, per creare un primo approccio alla musica,
                        abbiamo creato delle lezioni da 30min. I nostri allievi
                        si interfacceranno anche con gli allievi degli altri
                        strumenti con la musica d'insieme, avranno la
                        possibilità di esibirsi su un palco, sia a inizio e/o
                        fine anno che durante tutto l'anno scolastico nei vari
                        eventi che faremo. <br class="d-none d-sm-block" />
                        Vieni a trovarci, ti aspettiamo!
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
