<script setup>
import jack1 from "@/../images/jack1.png";
import jack2 from "@/../images/jack2.png";
import grafico from "@/../images/icons_rounded/grafico.png";
import mercatino from "@/../images/icons_rounded/mercatino.png";
import liuteria from "@/../images/icons_rounded/liuteria.png";
import eventi from "@/../images/icons_rounded/eventi.png";
</script>

<template>
    <section id="altri_servizi" class="page position-relative">
        <div class="container text-primary main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    ALTRI SERVIZI
                </div>
            </div>
            <div class="row pt-5 align-items-center">
                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="mercatino" class="cosa-facciamo-icon mixer" />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Mercatino
                    </p>
                </div>
                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="grafico" class="cosa-facciamo-icon" />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Grafica
                    </p>
                </div>

                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="eventi" class="cosa-facciamo-icon" />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Eventi
                    </p>
                </div>
                <div class="col-6 col-md-3 text-center text-primary">
                    <img
                        :src="liuteria"
                        class="cosa-facciamo-icon musica-insieme"
                    />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Liuteria
                    </p>
                </div>
            </div>
            <div class="row pt-3 d-none d-md-flex">
                <div class="col-xs-12 col-md-3 text-center text-primary">
                    <p class="p-3">
                        Nel nostro atrio si può trovare una zona dedicata alla
                        vendita di strumenti usati, abbiamo voluto dare uno
                        spazio fisico dove il possibile interessato possa
                        trovare e provare, sotto la nostra supervisione, lo
                        strumento che desidera.
                    </p>
                </div>
                <div class="col-xs-12 col-md-3 text-center text-primary">
                    <p class="p-3">
                        Jo oltre ad aver fatto per anni il Tatuatore,
                        appassionato di illustrazione, fotografia, street art,
                        ecc, si è affacciato all'arte della grafica ormai da
                        anni e porta avanti questa passione sia locandine per
                        gruppi o locali che loghi di varie attività e molto
                        altro!
                    </p>
                </div>

                <div class="col-xs-12 col-md-3 text-center text-primary">
                    <p class="p-3">
                        I nostri eventi non si fermano al Feel Good musica fest
                        di Maggio/GIugno ma nell'arco dell'anno organizziamo Jam
                        session nelle quali coinvolgiamo anche i nostri allievi.
                        Durante l'estate organizziamo aperitivi in musica sul
                        palco all'esterno della struttura.
                    </p>
                </div>
                <div class="col-xs-12 col-md-3 text-center text-primary">
                    <p class="p-3">
                        All'interno disponiamo anche di un laboratorio di
                        liuteria dove è possibile riparare chitarre o bassi
                        Facciamo assistenza ai nostri allievi ed insegnanti e
                        chiunque ne abbia bisogno.
                    </p>
                </div>
            </div>
        </div>
        <!-- <img :src="jack1" class="position-absolute jack1" />
        <img :src="jack2" class="position-absolute jack2" /> -->
    </section>
</template>

<style scoped lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

.cosa-facciamo-icon {
    max-width: 134px;
}

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
