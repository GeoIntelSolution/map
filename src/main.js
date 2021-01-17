import { createApp } from 'vue'
import App from './App.vue'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
window.$=$;
window.mapboxgl=mapboxgl;
window.mapboxgl.accessToken =
"pk.eyJ1IjoiaWxvdmVneXgxMzE0IiwiYSI6ImNpb2h6emI0ODAwNnR2ZWt4bDFncGI3ZjYifQ.Pu9l94qL1MEDdDim2-s6RA";
createApp(App).mount('#app')
