<script setup>
import jack1 from "@/../images/jack1.png";
import jack2 from "@/../images/jack2.png";
import scuola from "@/../images/icons_rounded/scuola.png";
import sale from "@/../images/icons_rounded/sale.png";
import musicaInsieme from "@/../images/icons_rounded/musica_insieme.png";
import altro from "@/../images/icons_rounded/altro.png";
</script>

<template>
    <section id="cosa_facciamo" class="page position-relative">
        <div class="container text-primary main-container">
            <div class="row pb-3">
                <div class="col-12 text-center feelstrange-font section-title">
                    COSA FACCIAMO
                </div>
            </div>
            <div class="row pt-5 align-items-center">
                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="scuola" class="cosa-facciamo-icon" />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Scuola di musica
                    </p>
                </div>
                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="sale" class="cosa-facciamo-icon mixer" />
                    <p class="text-center feelstrange-font pb-5 d-md-none">
                        Sala prove
                    </p>
                </div>
                <div class="col-6 col-md-3 text-center text-primary">
                    <img
                        :src="musicaInsieme"
                        class="cosa-facciamo-icon musica-insieme"
                    />
                    <p class="text-center feelstrange-font d-md-none">
                        Musica d'insieme
                    </p>
                </div>
                <div class="col-6 col-md-3 text-center text-primary">
                    <img :src="altro" class="cosa-facciamo-icon" />
                    <p class="text-center feelstrange-font d-md-none">
                        E molto altro
                    </p>
                </div>
            </div>
            <div class="row pt-3 text-center text-primary d-none d-md-flex">
                <div class="col-xs-12 col-md-3">
                    <p class="p-lg-3">
                        I nostri corsi di musica si cuciono addosso all'allievo
                        in modo da potergli dare ciò di cui ha bisogno. Il
                        nostro metodo è completamente personalizzato per poter
                        donare all'allievo la miglior esperienza per apprendere
                        la musica in modo sereno.
                    </p>
                </div>
                <div class="col-xs-12 col-md-3">
                    <p class="p-lg-3">
                        Le nostre sale sono state costruite con amore a mano dai
                        titolari ed è proprio grazie a questo amore e la
                        professionalità del ingegnere del suono che le sale
                        prova possono regalare un'ottima acustica per suonare
                        con la tua band o per esercitarti.
                    </p>
                </div>
                <div class="col-xs-12 col-md-3">
                    <p class="p-lg-3">
                        La nostra musica d'insieme non solo ti da la possibilità
                        di suonare o cantare con una vera e propria band
                        composta da altri allievi della scuola, ma ti regala
                        anche la possibilità di esibirti su un palco e porta lo
                        studio dello strumento ad un livello superiore.
                    </p>
                </div>
                <div class="col-xs-12 col-md-3">
                    <p class="p-lg-3">
                        Ci siamo sempre prefissati l'obbiettivo di non fermarci
                        ad una cosa ma cerchiamo sempre di migliorarci ed andare
                        avanti, evolverci. Per questo all'interno della Feel
                        Good puoi trovare molto altro rispetto a ciò che ti
                        aspetteresti!
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

// img {
//     max-width: 322px;
//     z-index: -1;
// }

// .jack1 {
//     right: 0;
//     top: 45px;
// }
// .jack2 {
//     left: 0;
//     bottom: 45px;
// }

p {
    text-align: justify;

    @include media-breakpoint-up(xs) {
        font-size: 17px;
    }

    @include media-breakpoint-up(xxl) {
        font-size: 20px;
    }
}
</style>
