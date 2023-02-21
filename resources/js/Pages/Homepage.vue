<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import MainSection from "@/Components/MainSection.vue";
import CosaFacciamo from "@/Components/CosaFacciamo.vue";
import NostreSale from "@/Components/NostreSale.vue";
import NostraScuola from "@/Components/NostraScuola.vue";
import NostroTeam from "@/Components/NostroTeam.vue";
import AboutUs from "@/Components/AboutUs.vue";
import Mercatino from "@/Components/Mercatino.vue";
import AltriServizi from "@/Components/AltriServizi.vue";
import Eventi from "@/Components/Eventi.vue";
import Contatti from "@/Components/Contatti.vue";
import { Head } from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import ArrowUp from "@/Components/ArrowUp.vue";

defineProps({ members: Array, products: Array, events: Array });
</script>

<template>
    <Head title="Home" />

    <MainLayout>
        <ApplicationLogo />
        <MainSection />
        <CosaFacciamo />
        <NostreSale />
        <NostraScuola />
        <NostroTeam :members="members" />
        <AboutUs />
        <Mercatino :products="products" />
        <AltriServizi />
        <Eventi :events="events" />
        <Contatti />

        <ArrowUp />
    </MainLayout>
</template>
