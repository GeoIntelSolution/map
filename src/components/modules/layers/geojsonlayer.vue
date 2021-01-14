<template>
    <div></div>
</template>
<script>
import * as turf from '@turf/turf';
export default {
    name:'geojsonviewer',
    props:{
        mapId:{
            type:String,
            default:''
        },
        datas:{
            type:Array,
            default:()=>[]
        }
    },
    watch:{
        datas(val){
            this.handleData(val);
        }
    },
    created(){
        this.gMap=window.maps[this.mapId];
    },
    mounted(){
        this.handleData(this.datas);
    },
    methods:{
        handleData(datas){
            let l=turf.lineString(datas);
            let fc =turf.featureCollection([l]);
            this.gMap.getSource('route').setData(fc);
        }
    }
}
</script>