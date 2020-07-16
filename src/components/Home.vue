<template>
  <div class="home">
    <div id="landing">
      <HeroImage></HeroImage>
      <CallToAction></CallToAction>
      <span class="scroll-indication scroll-alert-icon"></span>
    </div>
    <div class="section">
      <Map></Map>
    </div>
  </div>
</template>

<script>
import HeroImage from './Home/HeroImage2.vue'
import CallToAction from './Home/CallToAction.vue'
import Map from './Home/Map.vue'

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components:{
    // HeroImage,
    CallToAction,
    HeroImage,
    Map
  }
}
</script>
