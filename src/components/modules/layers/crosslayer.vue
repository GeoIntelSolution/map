<template>
  <div></div>
</template>
<script>
import * as turf from "@turf/turf";

export default {
  name: "crosslayer",
  props: {
    mapId: {
      type: String,
      default: ""
    },
    datas:{
        type:Array,
        default:()=>[]
    }
  },
  watch: {
    datas(val) {
      this.handleData(val);
    }
  },
  created() {
    this.gMap = window.maps[this.mapId];
    this.gMap.addSource("cross", {
      type: "geojson",
      data: turf.featureCollection([])
    });
    this.gMap.addLayer({
      id: "cross",
      type: "symbol",
      source: "cross",
      layout: {
        "icon-image": "grocery-11"
      }
    });
    this.gMap.on('click',['cross'],function(e){
        console.log(e);
    })
  },
  mounted() {
    this.handleData(this.datas);
  },
  methods: {
    handleData(datas) {
      let points = datas.map(point => {
        return turf.point(point);
      });
      this.gMap.getSource("cross").setData(turf.featureCollection(points));
    }
  }
};
</script>
<style scoped>
</style>