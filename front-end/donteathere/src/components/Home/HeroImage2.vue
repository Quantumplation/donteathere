<template>
  <div class="hero-text-div">
    <p v-for='(word, index) in words' v-bind:key='index' :class='"row " + word.class'>
      <span v-for='index in word.repeat' v-bind:key='index' :class="highlight(index, word.index, word.color) ">{{word.word}}<span v-show="index == word.index || word.index === -1" class="text-outline">{{word.word}}</span></span>
    </p>
    <span class="scroll-hero scroll-alert-icon"></span>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data(){
    return{
      words:[{word:"$", repeat:41, class:"slide-left", index:-1, color:"text-yellow"},
        {word:"VOTE", repeat:21, class:"slide-right", index:11, color:"text-red"},
        {word:"WITH", repeat:21, class:"slide-left", index:11, color:"text-white"},
        {word:"YOUR", repeat:21, class:"slide-right", index:11, color:"text-white"},
        {word:"WALLET", repeat:21, class:"slide-left", index:11, color:"text-white"},
        {word:"$", repeat:41, class:"slide-right", index:-1, color:"text-yellow"}
      ]
    }
  },
  methods:{
    highlight(index, Word_index, color){
      if(index == Word_index || Word_index === -1)
        return color;
    }
  },
  created:function(){
    $(window).scroll(function() {
      $(".slide-left").css({
        "top": 0,
        "left": -($(window).scrollTop()) + "px"
      });
    });

    $(window).scroll(function() {
      $(".slide-right").css({
        "top": 0,
        "left": ($(window).scrollTop()) + "px"
      });
    });

    $(window).scroll(function() {
      $(".scroll-alert-icon").fadeTo(1.0, 0.0);
    });

    $(window).scroll(function() {
     var scrollPosition = $(window).scrollTop();
      $(".scroll-hero").each(function() {
        // console.log($(this).css("opacity"));
       /* If the element is completely within bounds of the window, fade it in */
       if (scrollPosition > 10) { //object comes into view (scrolling down)
         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
       } else { //object goes out of view (scrolling up)
         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
       }
     });
   })
  },
}
</script>
