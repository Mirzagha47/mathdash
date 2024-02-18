var preload = function(game){


}
 var music;
preload.prototype = {
	preload: function(){

			//this.checkConnection();


		   this.game.load.bitmapFont('question', 'assets/HD/font/font.png', 'assets/HD/font/font.fnt');
		   this.game.load.bitmapFont('fontGameOver', 'assets/HD/font/fontGameOver.png', 'assets/HD/font/fontGameOver.fnt');
		   this.game.load.bitmapFont('number', 'assets/HD/font/number.png', 'assets/HD/font/number.fnt');
		   this.game.load.bitmapFont('ops', 'assets/HD/font/ops.png', 'assets/HD/font/ops.fnt');
		  

		   this.game.load.image('BG1', loadPath+'backGround/bg1.png');
		   this.game.load.image('BG2', loadPath+'backGround/bg2.png');
		   this.game.load.image('BG3', loadPath+'backGround/bg3.png');
		   this.game.load.image('BG4', loadPath+'backGround/bg4.png');
		   this.game.load.image('BG5', loadPath+'backGround/bg5.png');
		   this.game.load.image('BG6', loadPath+'backGround/bg6.png');
		   this.game.load.image('BG7', loadPath+'backGround/bg7.png');
		   this.game.load.image('BG8', loadPath+'backGround/bg8.png');

		  
		   this.game.load.image('loadingVideoTxt', loadPath+'loadingVideoTxt.png');
		   


		   this.game.load.image('titleText', loadPath+'titleText.png');
		   this.game.load.image('noVideoAlert', loadPath+'noVideoAlert.png');
		   this.game.load.image('noPurchase', loadPath+'noPurchase.png');
		   this.game.load.image('noInternet', loadPath+'noInternet.png');
		   
		  
	
		   this.game.load.image('tipsImg1', loadPath+'tipsImg1.png');
		    this.game.load.image('hand', loadPath+'hand.png');
		   this.game.load.image('settingsText', loadPath+'settingsText.png');
		   this.game.load.image('settingsBg', loadPath+'settingsBg.png');
		    this.game.load.image('bgmBtn', loadPath+'bgmBtn.png');
		    this.game.load.image('bgmBtnMute', loadPath+'bgmBtnMute.png');
		    this.game.load.image('effectsBtnMute', loadPath+'effectsBtnMute.png');
		    this.game.load.image('effectsBtn', loadPath+'effectsBtn.png');
		    this.game.load.image('leaderBoardBtn', loadPath+'leaderBoardBtn.png');
		    this.game.load.image('rateUsBtn', loadPath+'rateUsBtn.png');
		    this.game.load.image('backBtn', loadPath+'backBtn.png');
		    this.game.load.image('restorePurchase', loadPath+'restorePurchase.png');
		    
		    this.game.load.image('titleText1', loadPath+'titleText1.png');
		    this.game.load.image('titleText2', loadPath+'titleText2.png');
		 
		  
		  
		  
		  
		  this.game.load.image('gameOverScorePatch', loadPath+'gameOverScorePatch.png');
		  
		  this.game.load.image('1', loadPath+'no/one.png');
		  this.game.load.image('2', loadPath+'no/two.png');
		  this.game.load.image('3', loadPath+'no/three.png');
		  this.game.load.image('4', loadPath+'no/four.png');
		  this.game.load.image('5', loadPath+'no/five.png');
		  this.game.load.image('6', loadPath+'no/six.png');
		  this.game.load.image('7', loadPath+'no/seven.png');
		  this.game.load.image('8', loadPath+'no/eight.png');
		  this.game.load.image('9', loadPath+'no/nine.png');
		  this.game.load.image('10', loadPath+'no/ten.png');
		  this.game.load.image('secondHint', loadPath+'secondHint.png');
		  this.game.load.image('removeAds', loadPath+'removeAds.png');
		  this.game.load.image('answerPatch', loadPath+'answerPatch.png');
		  this.game.load.image('feedBackPatch', loadPath+'feedBackPatch.png');
		  
		  this.game.load.image('muteBtn', loadPath+'muteBtn.png');
		  this.game.load.image('audioBtn', loadPath+'audioBtn.png');
		  this.game.load.image('firstHint', loadPath+'firstHint.png');
		  this.game.load.image('geekBtn', loadPath+'geekBtn.png');
		  
		  
		  this.game.load.image('tipsInfo', loadPath+'tipsInfo.png');
		  this.game.load.image('playBtn', loadPath+'playBtn.png');
		  this.game.load.image('tipsBg', loadPath+'tipsBg.png');
		  this.game.load.image('playAgainBtn', loadPath+'playAgainBtn.png');
		  this.game.load.image('menuBtn', loadPath+'menuBtn.png');
		  this.game.load.image('noAds', loadPath+'noAds.png');
		  this.game.load.image('tipsBtn', loadPath+'tipsBtn.png');
		  this.game.load.image('rateBtn', loadPath+'rateBtn.png');
		  this.game.load.image('plusBtn', loadPath+'plusBtn.png');
		  this.game.load.image('subBtn', loadPath+'subBtn.png');
		  this.game.load.image('multBtn', loadPath+'multBtn.png');
		  this.game.load.image('divBtn', loadPath+'divBtn.png');
		  this.game.load.image('easyBtn', loadPath+'easyBtn.png');
		  this.game.load.image('medBtn', loadPath+'mediumBtn.png');
		  
		  this.game.load.image('ansTile1', loadPath+'ansTile1.png');
		  this.game.load.image('ansTile2', loadPath+'ansTile2.png');
		  this.game.load.image('ansTile3', loadPath+'ansTile3.png');
		  this.game.load.image('ansTile4', loadPath+'ansTile4.png');
		  this.game.load.image('dullBg', loadPath+'dullBg.png');
		  this.game.load.image('videoAdBtn', loadPath+'videoAdBtn.png');
		  this.game.load.image('noVideoAdBtn', loadPath+'noVideoAdBtn.png');

		  
		  this.game.load.image('scorePatch', loadPath+'scorePatch.png');
		   
		  
		  this.game.load.image('qTile', loadPath+'qTile.png');
		  this.game.load.image('qTile5', loadPath+'qTile5.png');
		 
		  this.game.load.audio('bgm', ['assets/audio/bgm.mp3', 'assets/audio/bgm.ogg']);
		  this.game.load.audio('timer', ['assets/audio/timer.mp3', 'assets/audio/timer.ogg']);
		  this.game.load.audio('sucess', ['assets/audio/sucess.mp3', 'assets/audio/sucess.ogg']);
		  this.game.load.audio('fail', ['assets/audio/fail.mp3', 'assets/audio/fail.ogg']);

		  var loadingBg = this.add.sprite(0,0,"loadingBg");
		  var width1 = this.game.cache.getImage("loadingBody").width/2;
		  var loadingBody = this.add.sprite(this.game.width/2 - width1,this.game.height/2,"loadingBody");
		  loadingBody.anchor.setTo(0,0.5);
		  var width = this.game.cache.getImage("loading").width/2;
		  if(currentDevice == "SHD")
          width+= 25/1.5;
		  else
          width+=25;
		  var loadingBar = this.add.sprite(this.game.width/2 - width,this.game.height/2,"loading");
          loadingBar.anchor.setTo(0,0.5);
		  this.load.setPreloadSprite(loadingBar);

		  


	},
	checkConnection:function() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'U';
    states[Connection.ETHERNET] = 'E';
    states[Connection.WIFI]     = 'W';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'C';
    states[Connection.NONE]     = 'NO';
	connectionStatus = states[networkState];
    alert('Connection type: ' + states[networkState]);
},
  	create: function(){
		 music = this.game.add.audio('bgm');


		music.volume = 0.2;
		music.play('', 0, 0.2, true);
		music.onLoop.add(this.playLevelMusic, this);

		//thisgame.state.start("PlayGame", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
		this.game.state.start("menu");

	},
	playLevelMusic: function() {
    music.play('', 0, 0.2, true);
}
}
