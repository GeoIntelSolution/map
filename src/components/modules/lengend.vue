<template>
  <div class="legendPanel">
    <div class="roadStatus">
      <p>干线协调状态</p>
      <ul class="roadStatusList">
        <li>
          <div class="statusicon normal"></div>正常
        </li>
        <li>
          <div class="statusicon abnormal"></div>异常
        </li>
        <li>
          <div class="statusicon nostatus"></div>非协调时段
        </li>
      </ul>
    </div>
    <div class="crossStatus">
      <p>信号控制状态</p>
      <ul class="crossStatusList">
        <li>
          <div class="statusicon online"></div>在线
        </li>
        <li>
          <div class="statusicon offline"></div>离线
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "legend"
};
</script>
<style lang="less">
.legendPanel {
  position: absolute;
  width: 300px;
  height: 130px;
  border-radius: 5px;
  background: #f3f3f3;
  box-shadow: 10px 10px 5px #888888;
  top: 0px;
  right: 0px;
  .roadStatus,
  .crossStatus {
    margin-left: 10px;
    font-size: 16px;
  }
  .roadStatus {
    margin-left: 10px;
    font-size: 16px;
    .roadStatusList {
      margin-left: -27px;
      margin-top: -13px;
      list-style: none;
      li {
        display: inline;
        line-height: 30px;
        margin-left: 10px;
      }
    }
  }

  .crossStatus {
    margin-top: -10px;
    .crossStatusList {
      margin-left: -27px;
      margin-top: -13px;
      list-style: none;
      li {
        display: inline;
        line-height: 30px;
        margin-left: 10px;
      }
    }

    .online {
      border-radius: 50%;
      background: rgb(0, 110, 255);
      width: 10px;
      height: 10px;
    }

    .offline {
      border-radius: 50%;
      background: #d3d3d3;
      width: 10px;
      height: 10px;
    }
  }

  .statusicon {
    margin-right: 5px;
    display: inline-block;
    width: 20px;
    height: 5px;
    // background: rgba(255, 0, 0, 0.562);
  }
  .normal {
    background: #0f0;
  }
  .abnormal {
    background: #f00;
  }
  .nostatus {
    background: #d3d3d3;
  }
}
</style>