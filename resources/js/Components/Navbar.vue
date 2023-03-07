<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";
import logo from "@/../images/logo.png";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <nav
        class="navbar navbar-expand-md navbar-dark bg-primary feelstrange-font position-absolute w-100"
    >
        <div class="container-fluid">
            <div class="navbar-brand abs d-md-none" href="#">
                <img class="logo" :src="logo" />
            </div>
            <button
                class="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="navbar-collapse collapse text-end text-md-center"
                id="collapseNavbar"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#nostre_sale">LE SALE </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#nostra_scuola"> SCUOLA </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#nostro_team">
                            LA FAMIGLIA
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#mercatino"> MERCATINO </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#eventi"> EVENTI </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact_us">CONTATTI</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

.nav-link {
    color: #ffff;

    &:hover {
        color: #e95a2d;
    }

    @include media-breakpoint-down(md) {
        padding: 4px;
    }
}

// https://stackoverflow.com/a/20362024/13365948
@include media-breakpoint-up(md) {
    nav {
        height: 100px;
    }

    .navbar-brand.abs {
        position: absolute;
        width: auto;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        padding-top: 144px;
    }
}

.logo {
    max-height: 100px;
}

/* Home section */

.navTrigger {
    display: none;
}
</style>
