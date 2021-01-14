<template>
  <div>
    <div class="mapcontainer" id="map_1"></div>
    <statusbar :num="num" :speed="speed"></statusbar>
    <lengend ></lengend>
  </div>
</template>
<script>
import statusbar from "./modules/statusbar.vue";
import lengend from "./modules/lengend.vue";
export default {
  name: "Emap",
  created() {},
  components: {
    statusbar,
    lengend
  },
  mounted() {
    this.gMap = new window.mapboxgl.Map({
      container: "map_1",
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
      zoom: 13
    });
  },
  data() {
    return {
      gMap: null,
      num: 2,
      speed: 90
    };
  }
};
</script>
<style >
#map_1 {
  width: 100vw;
  height: 100vh;
}
</style>