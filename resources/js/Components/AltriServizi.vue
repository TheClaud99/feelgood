<script setup>
import jack1 from "@/../images/jack1.png";
import jack2 from "@/../images/jack2.png";
import grafico from "@/../images/icons_rounded/grafico.png";
import shop from "@/../images/icons_rounded/shop.png";
import news from "@/../images/icons_rounded/news.png";
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
            <div class="row pt-5 flex-grow-1 align-items-center">
                <div class="col-12">
                    <div class="row">
                        <div class="col-6 col-md-3 text-center text-primary">
                            <img :src="shop" class="cosa-facciamo-icon mixer" />
                            <p
                                class="text-center feelstrange-font pb-5 d-md-none"
                            >
                                Shop
                            </p>
                        </div>
                        <div class="col-6 col-md-3 text-center text-primary">
                            <img :src="grafico" class="cosa-facciamo-icon" />
                            <p
                                class="text-center feelstrange-font pb-5 d-md-none"
                            >
                                Grafica
                            </p>
                        </div>

                        <div class="col-6 col-md-3 text-center text-primary">
                            <img :src="eventi" class="cosa-facciamo-icon" />
                            <p
                                class="text-center feelstrange-font pb-5 d-md-none"
                            >
                                Eventi
                            </p>
                        </div>
                        <div class="col-6 col-md-3 text-center text-primary">
                            <img
                                :src="news"
                                class="cosa-facciamo-icon musica-insieme"
                            />
                            <p
                                class="text-center feelstrange-font pb-5 d-md-none"
                            >
                                Feel Good Post
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="row pt-3 text-center flex-grow-1 text-primary d-none d-md-flex overflow-hidden"
            >
                <div class="col-12 col-md-3 text-center text-primary">
                    <p class="text-center feelstrange-font mb-0">Shop</p>
                    <p class="p-lg-3">
                        Nel nostro Shop potrai trovare: dai jeans vintage alle
                        t-shirt FLGD prodotte direttamente da noi, dai
                        braccialetti di “Si Fa Pe' Ride” che affiancano perline
                        colorate a parole dialettali irriverenti ad oggettistica
                        a tema musicale e non.
                    </p>
                </div>
                <div class="col-12 col-md-3 text-center text-primary">
                    <p class="text-center feelstrange-font mb-0">Grafica</p>
                    <p class="p-lg-3">
                        Jo oltre ad aver fatto per anni il Tatuatore,
                        appassionato di illustrazione, fotografia, street art,
                        ecc, si è affacciato all'arte della grafica ormai da
                        anni e porta avanti questa passione sia locandine per
                        gruppi o locali che loghi di varie attività e molto
                        altro!
                    </p>
                </div>

                <div class="col-12 col-md-3 text-center text-primary">
                    <p class="text-center feelstrange-font mb-0">Eventi</p>
                    <p class="p-lg-3">
                        I nostri eventi non si fermano al Feel Good musica fest
                        di Maggio/Giugno ma nell'arco dell'anno organizziamo Jam
                        session nelle quali coinvolgiamo anche i nostri allievi.
                    </p>
                </div>
                <div class="col-12 col-md-3 text-center text-primary">
                    <p class="text-center feelstrange-font mb-0">
                        Feel Good Post
                    </p>
                    <p class="p-lg-3">
                        The Feel Good Post è il nostro giornale autoprodotto,
                        scritto da noi e da due dei nostri allievi. Parleremo di
                        musica a tutto tondo, dalla cronaca rosa alle news del
                        momento, dall'oroscopo ai quiz e qualche curiosità sulla
                        scuola.
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

    @include media-breakpoint-up(xs) {
        font-size: 17px;
    }

    @include media-breakpoint-up(xxl) {
        font-size: 20px;
    }
}
</style>
