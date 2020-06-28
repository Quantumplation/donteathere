<template>
  <div class="home">
    <div id="landing">
      <!-- <HeroImage></HeroImage> -->
      <HeroImage2></HeroImage2>
      <CallToAction></CallToAction>
      <!-- <span class="scroll-indication scroll-alert-icon"></span> -->
    </div>
    <div class="section">
      <Map></Map>
    </div>
  </div>
</template>

<script>
// import HeroImage from './Home/HeroImage.vue'
import HeroImage2 from './Home/HeroImage2.vue'
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
    HeroImage2,
    Map
  }
}
</script>
