<template>
  <div id="map" class="content">
  </div>
</template>

<script>
import * as mapdata from './../Map/muy_map_conf.js';

export default {
  data(){
    return{}
  },
  mounted() {
    mapdata.initMap();
  }
}
</script>
