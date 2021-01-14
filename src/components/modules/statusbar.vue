<template>
  <div class="statusbar">
    <span class="span1">滤波总数: <strong class="strongFont">{{num}}</strong> 条</span>
    <span class="span2">运行速度: <strong class="strongFont">{{speed}}</strong> km/h</span>
  </div>
</template>
<script>
export default {
  name: "statusbar",
  created() {},
  props: {
    num: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 90
    }
  }
};
</script>
<style scoped>
.statusbar {
  position: absolute;
  width: 300px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  top: 0px;
  z-index: 28;
  background: #fff;
  color:#979595;
  box-shadow: 10px 10px 5px #888888;

}
.span2{
    margin-left:30px;
}
.span1{
    margin-left: 20px;
}
.strongFont{
    font-size: 18px;
    color:#000;
}
</style>