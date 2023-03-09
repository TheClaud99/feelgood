<script setup>
import "bootstrap";
import isEqual from "lodash.isequal";
defineProps({
    member: {
        type: Object,
    },
});
</script>

<template>
    <div
        class="modal fade show"
        tabindex="-1"
        aria-labelledby="curriculum"
        aria-modal="true"
        role="dialog"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" v-if="member && !isEqual(member, {})">
                <div class="modal-header">
                    <h5 class="modal-title">{{ member.name }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body position-relative overflow-hidden">
                    <img
                        :src="`/storage/${member.image}`"
                        class="position-absolute overflow-hidden h-100 d-block"
                    />
                    <span
                        class="d-block h-100 overflow-auto position-relative"
                        v-html="member.description"
                    ></span>
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
