<template>
  <div>
    <div class="mapcontainer" id="map_1"></div>
    <statusbar :num="num" :speed="speed"></statusbar>
    <lengend></lengend>
    <geojsonlayer :mapId="mapId" :datas="roads" v-if="mapComplete"></geojsonlayer>
    <crosslayer :mapId="mapId" :datas="data" v-if="mapComplete"></crosslayer>
  </div>
</template>
<script>
import statusbar from "./modules/statusbar.vue";
import lengend from "./modules/lengend.vue";
import geojsonlayer from "./modules/layers/geojsonlayer.vue";
import crosslayer from "./modules/layers/crosslayer.vue";

export default {
  name: "Emap",
  created() {},
  components: {
    statusbar,
    lengend,
    geojsonlayer,
    crosslayer
  },
  mounted() {
    this.gMap = new window.mapboxgl.Map({
      container: "map_1",
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
      zoom: 13
    });
    this.gMap.on("load", () => {
      this.mapComplete = true;
      if (!window.maps) window.maps = {};
      //   window.maps.put("map_1", this.gMap);
      window.maps["map_1"] = this.gMap;
      this.data = [
        [-21.966562271118164, 64.14573316204756],
        [-21.951112747192383, 64.13682354566215],
        [-21.931285858154297, 64.13996844255709],
        [-21.93523406982422, 64.14760456687506],
        [-21.948881149291992, 64.14921387414103]
      ];

      this.roads = [
        {
          id: 1,
          coordinates: [
            [-21.966562271118164, 64.14573316204756],
            [-21.951112747192383, 64.13682354566215]
          ]
        },
        {
          id: 2,
          coordinates: [
            [-21.951112747192383, 64.13682354566215],
            [-21.931285858154297, 64.13996844255709]
          ]
        },
        {
          id: 3,
          coordinates: [
            [-21.931285858154297, 64.13996844255709],
            [-21.93523406982422, 64.14760456687506]
          ]
        },
        {
          id: 4,
          coordinates: [
            [-21.93523406982422, 64.14760456687506],
            [-21.948881149291992, 64.14921387414103]
          ]
        }
      ];
    });
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