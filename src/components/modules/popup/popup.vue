<template>
  <div class="popupContent">
    <ul class="tools">
      <li @click="handleEdit">
        <span class="fa-edit" onclick="hello"></span>编辑
      </li>
      <li>
        <span class="fa-bicycle"></span>监视
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Popup",
  props: {
    popcontent: {
      type: Object,
      default: () => {}
    },
    mapId: {
      type: String,
      default: ""
    },
    position: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleEdit() {
      console.log("sssss");
    }
  },
  watch: {
    position(val) {
      new window.mapboxgl.Popup({})
        .setDOMContent(this.$el)
        .setLngLat(val)
        .addTo(this.gMap);
    }
  },
  created() {
    this.gMap = window.maps[this.mapId];
  },
  mounted() {
    new window.mapboxgl.Popup({})
      .setHTML(this.$el)
      .setLngLat(this.position)
      .addTo(this.gMap);
  }
};
</script>
<style >
</style>