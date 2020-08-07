
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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

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
    
    @media screen and (min-width: 769px) {
  .sp_only {
    display: none; } }
@media screen and (min-width: 415px) and (max-width: 768px) {
  .sp_only {
    display: none; } }

@media screen and (min-width: 769px) {
  .tb_only {
    display: none; } }
@media screen and (max-width: 414px) {
  .tb_only {
    display: none; } }

@media screen and (min-width: 415px) and (max-width: 768px) {
  .pc_only {
    display: none; } }
@media screen and (max-width: 414px) {
  .pc_only {
    display: none; } }

@media screen and (min-width: 769px) {
  .sp_tb_only {
    display: none; } }

@media screen and (max-width: 414px) {
  .pc_tb_only {
    display: none; } }
 
/*---------------------------------------------------------------
	contact
/*---------------------------------------------------------------*/   
   div.wpcf7 {
	margin: 0;
	padding: 0;
}

div.wpcf7 .screen-reader-response {
	position: absolute;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	height: 1px;
	width: 1px;
	margin: 0;
	padding: 0;
	border: 0;
}

div.wpcf7-response-output {
	margin: 2em 0.5em 1em;
	padding: 0.2em 1em;
	border: 2px solid #ff0000;
}

div.wpcf7-mail-sent-ok {
	border: 2px solid #398f14;
}

div.wpcf7-mail-sent-ng,
div.wpcf7-aborted {
	border: 2px solid #ff0000;
}

div.wpcf7-spam-blocked {
	border: 2px solid #ffa500;
}

div.wpcf7-validation-errors,
div.wpcf7-acceptance-missing {
	border: 2px solid #f7e700;
}

.wpcf7-form-control-wrap {
	position: relative;
}

span.wpcf7-not-valid-tip {
	color: #f00;
	font-size: 1em;
	font-weight: normal;
	display: block;
}

.use-floating-validation-tip span.wpcf7-not-valid-tip {
	position: absolute;
	top: 20%;
	left: 20%;
	z-index: 100;
	border: 1px solid #ff0000;
	background: #fff;
	padding: .2em .8em;
}

span.wpcf7-list-item {
	display: inline-block;
	margin: 0 0 0 1em;
}

span.wpcf7-list-item-label::before,
span.wpcf7-list-item-label::after {
	content: " ";
}

.wpcf7-display-none {
	display: none;
}

div.wpcf7 .ajax-loader.is-active {
	visibility: visible;
}

div.wpcf7 div.ajax-error {
	display: none;
}

div.wpcf7 .placeheld {
	color: #888;
}

div.wpcf7 input[type="file"] {
	cursor: pointer;
}

div.wpcf7 input[type="file"]:disabled {
	cursor: default;
}

div.wpcf7 .wpcf7-submit:disabled {
	cursor: not-allowed;
}
  
/*---------------------------------------------------------------
	contact
/*---------------------------------------------------------------*/
.contact {
	padding: 50px;
	background-image: url(../img/red-ocean-min.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: auto;
	line-height: 1.9;
	position: relative;
}

.contact::before {
	padding-top: 50px;
	background-color: rgba(0,0,0,0.4);
	position: absolute;
	width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	content: ' ';
}


.contact-p {
	font-size: 16px;
	line-height: 1.5em;
	color: #fff;
}

.kitashoogmail {
	font-size: 30px;
	display: inline-block;
	margin: 25px 0 25px 0;
	color: #fff;
	font-family:'Bradley Hand','Georgia','Century',serif;
}

.kitashoogmail:hover {
	color: #fff;
}

.form-group {
	margin-bottom: 1rem;
}  
/*---------------------------------------------------------------
	contact
/*---------------------------------------------------------------*/
.contact {
	padding: 15px;
	height: 750px !important;
}

.contact-cover {
	padding-top: 15px;
}

.contact-p {
	margin-bottom: 30px;
}

.kitashoogmail {
	font-size: 26px;
	margin-top: 0;  
/*---------------------------------------------------------------
	About
/*---------------------------------------------------------------*/

.contents-h2 {
	font-size: 50px;
	margin-bottom: 25px;
}



   </style>



</head>

<body>

<div class="body-head">
<h1>ホームページ制作から運営まで<br class="sp_tb_only">サポートします！</h1>
<p>ブログ対応ページ（Wordpress対応）<br class="sp_only">かつご要望に応じてAPIも追加対応<br class="tb_only">お困りのオーナー様必見！<br class="sp_only"><br class="pc_only">広告やメルマガなどの販促活動からページ作成まで<br class="sp_tb_only">ショップの成長をお手伝い！</p>
</div>

<div class="body-pc">
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
   
    <img src="10.jpg">
      
   
       
  <div class="menu-btn">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="menu">
    <h1><i class="fas fa-frog fa-spin"></i>週末副業社</h1>
      <div class="menu__item">トップページ</div>
      <div class="menu__item">会社概要</div>
      <div class="menu__item">事業内容</div>
      <div class="menu__item">採用情報</div>
      <div class="menu__item">お問い合わせ</div>
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
	<span class="box-title">お問い合わせ</span>
 <div class="contact" id="contact">
		<div class="contact-cover">
			<div class="container text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="2500">
				<h2 class="contents-h2">Contact</h2>
				<p class="contact-p">
                制作のご依頼・ご相談（無料）などは
                <br>
                 メールアドレスまたはお問い合わせ欄からご連絡ください。
				</p>
				<p>
				<a href="mailto:-------------@gmail.com" class="kitashoogmail">
				<i class="far fa-envelope">
				</i>
				kitashoooooo@gmail.com
				</a>
				</p>
				<div role="form" class="wpcf7" id="wpcf7-f23-o1" lang="ja" dir="ltr">
				<div class="screen-reader-response">
				</div>
					<form class="wpcf7-form" novalidate="novalidate">
						<div class="form-group">
					    	<span class="wpcf7-form-control-wrap text-861">
					    		<input type="text" name="text-861" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control form-control-lg" aria-required="true" aria-invalid="false" placeholder="お名前" id="name">
					    	</span>
					  	</div>
						<div class="form-group">
					   		 <span class="wpcf7-form-control-wrap email-957">
					   		 	<input type="email" name="email-957" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control form-control-lg" aria-required="true" aria-invalid="false" placeholder="メールアドレス" id="email">
					   		 </span>
					  	</div>
						<div class="form-group">
					    	<span class="wpcf7-form-control-wrap textarea-193">
					    		<textarea name="textarea-193" cols="40" rows="7" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control form-control-lg" aria-required="true" aria-invalid="false" placeholder="お問い合わせ内容" id="body"></textarea>
					    	</span>
					  	</div>
						<div class="text-center">
							<input type="button" value="フォームを送信" class="wpcf7-form-control wpcf7-submit btn btn-secondary btn-center" id="ajax">
						</div>
					</form>
				</div>
			</div>
		</div>
</div>



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
</body>
</html>
