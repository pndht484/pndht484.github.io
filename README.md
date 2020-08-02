
<!DOCTYPE html>
<html lang="ja">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Portforio_practice_jquery</title>
  <link rel="stylesheet" href="vegas.min.css" />
  <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
 
  <link href="style111.css" rel="stylesheet">

  <script type="text/javascript" src="vegas.min.js"> </script>
  <script type="text/javascript" src="function.js"></script> 

  <link rel="stylesheet" href="css/animate.min.css" />
  <script type="text/javascript" src="animatedModal.min.js"> </script>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
   
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   


  <style>
    @media (min-width: 360px) {
    #vegas {
      padding:0px;
      width: 1200px;
      height: 900px;
    }}
    @media (max-width: 360px) {
    #vegas {
      padding:0px;
      width: 350px;
      height: 350px;
    }}

    #btn-close-modal {
      width: 100%;
      text-align: center;
      cursor: pointer;
      color: #fff;
    }
    
   </style>


<script type="text/javascript">
$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
});
</script>

</head>

<body>



  <div class="body1">
    <header class="header">
      <div class="content-wrapper header-nav">
      <h1><i class="fas fa-frog fa-spin"></i>週末副業社</h1>
        <nav>
          <ul>
            <li><a href="#">トップページ</a></li>
            <li><a href="#">会社概要</a></li>
            <li><a href="#">事業内容</a></li>
            <li><a href="#">採用情報</a></li>
            <li><a href="#">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
    
  <div class="menu-btn">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="menu">
      <div class="menu__item">トップページ</div>
      <div class="menu__item">会社概要</div>
      <div class="menu__item">事業内容</div>
      <div class="menu__item">採用情報</div>
    </div>

  <div id="vegas">
    <div class="example">
        <p>当ホームページにお越しいただき<br>
         まことにありがとうございます</p>	
    </div>
  </div>

  <h2>
    <div class="translate">
    <p class="border-bottom">
      <i class="fas fa-kiwi-bird fa-2x faa-wrench "></i>海外旅行好きなサイト</p></div>
    </h2>

    <div class="wrap" >
    <div class="box28-1" >
    <span class="box-title-1">アクティビティ</span>
    
    <div class="content1">  
    <img src="vegas_sample01.jpg" style="clip-path:  polygon(20% 0%, 100% 0%,100% 100%, 0% 100%);">
    </div>
   <div class="content2">  
    <p>アラブストリートには、ファッション雑貨店や飲食店がずらり。２時間もあれば回れるコンパクトなエリアです。アラビア絨毯や籐かご、ソケット帽子などのムスリムの生活必需品や、エキゾチックな香りのお土産がたくさん見つかるでしょう。MRTブギス駅から徒歩圏内なので道に迷う心配はありません。
   </p>
   </div>
  </div>
</div>

@media (min-width: 360px) {
<div class="wrap-pc" >
  <div class="box28-2-pc">
    <span class="box-title-2-pc">ショッピング</span>
   
   <div class="content2">  
    <p>チャイナタウン駅から直通のアーケード街がパゴダストリート。雑貨店がひしめきあうメインストリートです。古くからの老舗レストランや最新雑貨ショップまで、新旧入り混じったチャイナタウンをくまなく散策してみましょう。きっとお気に入り点が見付かるハズ？
    </p>
  </div>
   <div class="content1">  
    <img src="vegas_sample02.jpg" style="clip-path:  polygon(20% 0%, 100% 0%,100% 100%, 0% 100%);">
   </div>
  </div>
</div>
}

@media (max-width: 360px) {
<div class="wrap-sp" >
    <div class="box28-2-sp" >
    <span class="box-title-2-sp">ショッピング</span>
    
    <div class="content1">  
    <img src="vegas_sample02.jpg" style="clip-path:  polygon(20% 0%, 100% 0%,100% 100%, 0% 100%);">
    </div>
   <div class="content2">  
    <p>チャイナタウン駅から直通のアーケード街がパゴダストリート。雑貨店がひしめきあうメインストリートです。古くからの老舗レストランや最新雑貨ショップまで、新旧入り混じったチャイナタウンをくまなく散策してみましょう。きっとお気に入り点が見付かるハズ？
    </p>
   </div>
  </div>
</div>
}




<div class="wrap" >
  <div class="box28-3">
    <span class="box-title-3">食べ歩き</span>
    
   <div class="content1">  
    <img src="vegas_sample03.jpg" style="clip-path:  polygon(20% 0%, 100% 0%,100% 100%, 0% 100%);">
    </div>
   <div class="content2">  
    <p>「ハイナンチキンライス（海南鶏飯）」は、シンガポールグルメの代表格と言っても過言ではありません。鶏の脂で炒めた白米を、同じく鶏からとったスープで調理したご飯に、茹でた鶏肉が添えられたもの。あっさりとした旨味が日本人の口にもよく合います。
   </p>
   </div>
</div>
</div>

<div>
<!--Call your modal-->
<ul>
  <h4>コーディングツール</h4>
  <li>
    <a id="demo01" href="#animatedModal" >WORKS</a>
    </li>
</ul>
</div>

<!--DEMO01-->
<div id="animatedModal">
  <!--THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID -->
  <div  id="btn-close-modal" class="close-animatedModal"> 
      CLOSE MODAL
  </div>
 

  <div class="content1">
      <!--Your modal content goes here-->
      <img src="html_css.jpg"  alt="" >
      <img src="js.jpg" alt=""  >
  </div>
</div>

<script>

  //demo 01
  $("#demo01").animatedModal();

  //demo 02
  $("#demo02").animatedModal({
      animatedIn:'lightSpeedIn',
      animatedOut:'bounceOutDown',
      color:'#3498db',
      // Callbacks
      beforeOpen: function() {
          console.log("The animation was called");
      },           
      afterOpen: function() {
          console.log("The animation is completed");
      }, 
      beforeClose: function() {
          console.log("The animation was called");
      }, 
      afterClose: function() {
          console.log("The animation is completed");
      }
  });

</script>
  

<div class="box27">
  <span class="box-title">お問い合わせフォーム</span>

<form method="post" action="sample.cgi">
      <fieldset>
          <p>名前<input type="text" name="name1" size="10"></p>
          <p>住所<input type="text" name="address1" size="30"></p>
          <p>ご相談内容<input type="text" name="address1" size="100"></p>
      </fieldset>
           <p><input type="submit" value="送信"></p>
  </form>
</div>
</body>


<footer>
  
  <!-- 背景を正方形で白抜き -->
  <div class="wrap-a" >
  <ul class="pattern-02 square"　>
      <li >
        <div class="content1-a">
          <a href="#" class="icon-wrap icon-wrap-facebook">
              <i class="fab fa-facebook fa-3x"></i>
          </a>
        </div>
        <div class="content2-a">
          <a href="#" class="icon-wrap icon-wrap-twitter">
            <i class="fab fa-twitter fa-3x"></i>
          </a>
        </div>
        <div class="content3-a">
          <a href="#" class="icon-wrap icon-wrap-line">
            <i class="fab fa-line fa-3x"></i>
          </a>
        </div>
      </li>
<li>
</ul>
</div>

<h5>↓連絡先：下名がお客様のお手伝いをさせて頂きます</h5>
<div class="wrap-a" `**clearfix**`>
       <div class="content4-a">
        <img src="4.jpg">
      </div>
</div>

<div>
<h5>カレンダー</h5>
<input type="text" id="datepicker">
</div>


</footer>
</html>
