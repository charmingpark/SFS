document.addEventListener('DOMContentLoaded', function(){

  /* play & stop button */
  const iframe = document.getElementById('HeaderVideo');

  // $f == Froogaloop
  const player = $f(iframe);

  
  // bind events
  const playButton = document.getElementById("play-button");
  playButton.addEventListener("click"||"focus", function() {
    player.api("play");
    this.style.visibility = "hidden";
    pauseButton.style.visibility = "visible";

  });
  
  const pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click"||"focus",  function() {
    player.api("pause");
    this.style.visibility = "hidden";
    playButton.style.visibility = "visible";
  });
  

  


// 더 짧게도 만들 수 있음
/* $('#cnt1 .swiper-auto-wrap button').on('click', function () {
  const btnNum = $(this).index();
  console.log(btnNum);  //자동실행0,일시정지1 
  if (btnNum === 0) {
    swiper.autoplay.start();
  } else {
    swiper.autoplay.stop();
  }
  $(this).addClass('hidden').siblings().removeClass('hidden');
}); */