<template>
  <div>
    <div class="mapcontainer" id="map_1"></div>
    <statusbar :num="num" :speed="speed"></statusbar>
    <lengend></lengend>
    <geojsonlayer :mapId="mapId" :datas="data" v-if="mapComplete"></geojsonlayer>
  </div>
</template>
<script>
import * as turf from "@turf/turf";

import statusbar from "./modules/statusbar.vue";
import lengend from "./modules/lengend.vue";
import geojsonlayer from "./modules/layers/geojsonlayer.vue";
export default {
  name: "Emap",
  created() {},
  components: {
    statusbar,
    lengend,
    geojsonlayer
  },
  mounted() {
    this.gMap = new window.mapboxgl.Map({
      container: "map_1",
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
      zoom: 13
    });
    let fc = turf.featureCollection([]);
    this.gMap.on("load", () => {
      this.mapComplete = true;
      if(!window.maps)  window.maps = {};
    //   window.maps.put("map_1", this.gMap);
      window.maps['map_1']=this.gMap;
      this.gMap.addSource("route", {
        type: "geojson",
        data: fc
      });

      this.gMap.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#888",
          "line-width": 8
        }
      });
    });

    this.data = [
      [-21.966562271118164, 64.14573316204756],
      [-21.951112747192383, 64.13682354566215],
      [-21.931285858154297, 64.13996844255709],
      [-21.93523406982422, 64.14760456687506],
      [-21.948881149291992, 64.14921387414103]
    ];
  },
  data() {
    return {
      gMap: null,
      num: 2,
      speed: 90,
      mapId: "map_1",
      data: [],
      mapComplete: false
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