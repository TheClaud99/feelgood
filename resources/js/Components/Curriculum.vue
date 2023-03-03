<script setup>
import "bootstrap";
defineProps({
    member: {
        type: Object,
    },
});
</script>

<template>
    <div
        v-if="member"
        class="modal fade show"
        tabindex="-1"
        aria-labelledby="exampleModalFullscreenLabel"
        aria-modal="true"
        role="dialog"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ member.name }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <span v-html="member.description"></span>
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
</style>
