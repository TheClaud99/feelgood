<template>
    <!-- <div id="googleMap" class="google-map h-100" ref="googleMap"></div>
    <template v-if="Boolean(google) && Boolean(map)">
        <slot :google="google" :map="map" />
    </template> -->

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.0297188585464!2d10.253163315276693!3d43.87593584601744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5a1e3eeddce69%3A0x9d824ceb3340f258!2sFeel+Good+Di+Farnocchia+Jonathan+%26+C.+Sas!5e0!3m2!1sit!2sit!4v1560350645399!5m2!1sit!2sit"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
    ></iframe>
</template>

<script setup>
// import { Loader } from "@googlemaps/js-api-loader";
// import { defineProps, ref, onMounted } from "vue";

// const props = defineProps({
//     mapConfig: Object,
//     apiKey: String,
// });

// const google = ref(null);
// const map = ref(null);
// const googleMap = ref(null);

// function initializeMap() {
//     const mapContainer = googleMap.value;
//     map.value = new google.value.maps.Map(
//         document.getElementById("googleMap"),
//         props.mapConfig
//     );
//     const marker = new google.value.maps.Marker({
//         position: props.mapConfig.center,
//         map: map.value,
//     });
// }

// onMounted(async () => {
//     const googleMapApi = new Loader({
//         apiKey: props.apiKey,
//     });
//     google.value = await googleMapApi.load();
//     initializeMap();
// });
</script>
