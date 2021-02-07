
$(function() {
    $('#vegas').vegas({
        overlay: true,
        transition: 'flash', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 2000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 4000, //スライド表示中のアニメーションの時間
        
        slides: [
            { src: 'vegas_sample01_pc.png' },
            { src: 'vegas_sample02.jpg' },
            { src: 'vegas_sample03.jpg' },
            { src: 'vegas_sample04.jpg' },
            { src: 'vegas_sample05.jpg' }
        ],
        
       
       
    });
});






$(function(){
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('is-active');
    });
  });
