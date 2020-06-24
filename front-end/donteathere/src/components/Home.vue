<template>
  <div class="home">
    <div id="landing" class="section">
      <HeroImage></HeroImage>
      <CallToAction></CallToAction>
    </div>
    <div class="section">

    </div>
  </div>
</template>

<script>
import HeroImage from './Home/HeroImage.vue'
import CallToAction from './Home/CallToAction.vue'

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components:{
    HeroImage,
    CallToAction
  }
}
</script>
