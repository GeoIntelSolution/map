<template>
  <div></div>
</template>
<script>
import * as turf from "@turf/turf";
export default {
  name: "geojsonviewer",
  props: {
    mapId: {
      type: String,
      default: ""
    },
    datas: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    datas(val) {
      this.handleData(val);
    }
  },
  data() {
    return {
      activeid: 0,
      datasource: null,
      layername: "route",
      popups: {
        tools: null
      }
    };
  },
  created() {
    this.gMap = window.maps[this.mapId];
    this.gMap.addSource(this.layername, {
      type: "geojson",
      data: turf.featureCollection([])
    });

    this.gMap.addLayer({
      id: "route",
      type: "line",
      source: this.layername,
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#888",
        "line-width": ["match", ["get", "active"], 1, 8, 5]
      }
    });
    this.gMap.on(
      "click",
      this.layername,
      function(e) {
        //   console.log(e.features[0].properties.id);
        this.activeid = e.features[0].properties.id;
        this.active_with_id(this.activeid);
        this.popups.tools = new window.mapboxgl.Popup({})
          .setLngLat(e.lngLat)
          .setHTML(
            `<div class="popupContent">
                <ul class="tools">
                    <li><span class="fa-edit" onclick="hello"></span>编辑</li>
                    <li><span class="fa-bicycle"></span>监视</li>
                </ul>
            </div>`
          )
          .setMaxWidth("300px")
          .addTo(this.gMap);

        window.$(".fa-edit").click(function() {
          console.log("aaa");
        });
      }.bind(this)
    );
  },
  mounted() {
    this.handleData(this.datas);
  },
  beforeUnmount() {
    if (this.gMap.getLayer(this.layername)) this.gMap.removeLayer("state-data");
    if (this.gMap.getSource(this.layername))
      this.gMap.removeSource(this.layername);
  },
  methods: {
    hello() {
      console.log("ccc");
    },
    handleData(datas) {
      let features = datas.map(item => {
        return turf.lineString(item.coordinates, {
          id: item.id,
          active: item.active
        });
      });
      let fc = turf.featureCollection(features);
      this.datasource = features;
      this.gMap.getSource(this.layername).setData(fc);
    },
    active_with_id(id) {
      let i = this.datasource.findIndex(item => item.properties.id === id);
      if (i != -1) {
        let old = this.datasource[i];
        let newone = {
          ...old,
          properties: {
            active: 1
          }
        };
        let newdatasource = [
          ...this.datasource.slice(0, i),
          newone,
          ...this.datasource.slice(i + 1, this.datasource.length)
        ];
        this.datasource = newdatasource;
        let fc = turf.featureCollection(this.datasource);

        this.gMap.getSource("route").setData(fc);
      }
    }
  }
};
</script>
<style lang="less">
.popupContent {
  width: 300px;
  .tools {
    list-style: none;
    li {
      display: inline;
      &:hover {
        background: #d3d3d3;
        cursor: pointer;
      }
    }
  }
}
</style>