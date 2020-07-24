$(function() {
    $('#vegas').vegas({
        slides: [
            { src: 'image/vegas_sample01.jpg' },
            { src: 'image/vegas_sample02.jpg' },
            { src: 'image/vegas_sample03.jpg' },
            { src: 'image/vegas_sample04.jpg' },
            { src: 'image/vegas_sample05.jpg' }
        ],
        
       
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 2000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 4000, //スライド表示中のアニメーションの時間
       
    });
});

