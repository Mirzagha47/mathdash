var gameOver = function(game){}
var curScr = 0;
var fbTxt;
var qTextSize;
gameOver.prototype = {
	init: function(score1,txt){
		curScr = score1;
		fbTxt = txt;
	},
  	create: function(){

		if(timerSnd != null || timerSnd != undefined)
		timerSnd.stop();
		//alert(fbTxt)
  		this.game.add.sprite(0, 0, 'BG7');

		//  titleShadow1 = this.game.add.sprite(this.game.width * 0.53, this.game.height * 0.14, 'titleShadow1' );
		// titleShadow1.alpha = 0;
		// titleShadow1.anchor.set(0.5,0.5);

		var titleAnimSprite = this.game.add.sprite(this.game.width/2, this.game.height * -0.15, 'removeAds');
		titleAnimSprite.anchor.set(0.5,0.5);
		titleAnimSprite.alpha = 0.0001

		var titleAnim = this.game.add.tween(titleAnimSprite).to({y: this.game.height * 0.15}, 1000, Phaser.Easing.Back.InOut, true);
		titleAnim.onComplete.add(this.onAnimComplete, this);

		removeADBtn = this.game.add.button(this.xPostion(-50), this.yPostion(70), 'removeAds', this.removeADBtn, this);
		removeADBtn.anchor.set(0.5,0.5);
		fb = this.game.add.sprite(this.xPostion(-50), this.yPostion(36.5), 'feedBackPatch');
		fb.anchor.set(0.5,0.5);


		playAgainMenu = this.game.add.button(this.xPostion(52.6), this.yPostion(82), 'playAgainBtn', this.playTheGame, this);
		playAgainMenu.scale.set(0,0);
		playAgainMenu.anchor.set(0.5,0.5);
		menuBtn = this.game.add.button(this.xPostion(50), this.yPostion(92), 'menuBtn', this.loadmenu, this);
		menuBtn.scale.set(0,0);
		menuBtn.anchor.set(0.5,0.5);
		var feddBacktxtSize = 60;
		var scoreTxt = 66;

		if(currentDevice == "HD")
		{
			feddBacktxtSize = 60;
			// scoreTxt
		}
		else if(currentDevice == "SHD")
		{
			feddBacktxtSize = 60/1.5;
			scoreTxt = 66 /1.5;
		}
		feedbackText = this.game.add.bitmapText(this.xPostion(-50), this.yPostion(35), 'fontGameOver', fbTxt, feddBacktxtSize);
	    gameOverScorePatch = this.game.add.sprite(this.xPostion(-50), this.yPostion(53.5), 'gameOverScorePatch');
		gameOverScorePatch.anchor.set(0.5,0.5);

		scoreText1 = this.game.add.bitmapText(this.xPostion(49), this.yPostion(49.5), 'question', fbTxt, scoreTxt);
		scoreText1.anchor.set(0.5,0.5);
		scoreText1.alpha =0;
		scoreText2 = this.game.add.bitmapText(this.xPostion(60), this.yPostion(57), 'question', '2', scoreTxt	);
		scoreText2.anchor.set(0.5,0.5);
		scoreText2.alpha =0;
		this.storeScore();

		var muteStatus = localStorage.getItem("isMute");
		muteBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'muteBtn', this.muteBtnClick, this);
		audioBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'audioBtn', this.audioBtnClick, this);
		if(muteStatus == "true")
		{
			muteBtn.visible = true;
			audioBtn.visible = false;
		}
		else
		{
			muteBtn.visible = false;
			audioBtn.visible = true;
		}

	},
	onAnimComplete:function()
	{
		var titleText1 = this.game.add.sprite(this.game.width/2, this.game.height * 0.15, 'titleText2' );
		titleText1.scale.set(0.25 , 0.25 );
		titleText1.anchor.set(0.5,0.5);
		titleText1Tween = this.game.add.tween(titleText1.scale);    
   	    titleText1Tween.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
        titleText1Tween.start();
		// titleShadow1.alpha = 1;
		scoreTween1 =  this.game.add.tween(removeADBtn).to({x: this.xPostion(47)}, 1000, Phaser.Easing.Back.InOut, true);
		scoreTween2 =  this.game.add.tween(fb).to({x: this.xPostion(47)}, 1000, Phaser.Easing.Back.InOut, true);
		scoreTween3 =  this.game.add.tween(gameOverScorePatch).to({x: this.xPostion(50)}, 1000, Phaser.Easing.Back.InOut, true);
		scoreTween4 =  this.game.add.tween(feedbackText).to({x: this.xPostion(18)}, 1000, Phaser.Easing.Back.InOut, true);
		var _this = this;
		setTimeout(function(){
		_this.onTweenCompl();
	  },1000);

	},onTweenCompl:function(){
		scoreText1.alpha = 1;
		scoreText2.alpha = 1;
		gOverTween1 = this.game.add.tween(playAgainMenu.scale);
   	    gOverTween1.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);
		gOverTween2 = this.game.add.tween(menuBtn.scale);
   	    gOverTween2.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);
		gOverTween1.start();
		gOverTween2.start();

	},muteBtnClick:function()
	{
		localStorage.setItem("isMute","false");
		this.game.sound.mute = false;
		muteBtn.visible = false;
		audioBtn.visible = true;
	},
	audioBtnClick:function()
	{
		localStorage.setItem("isMute","true");
		this.game.sound.mute = true;
		audioBtn.visible = false;
		muteBtn.visible = true;
	},
	playTheGame: function(){
		countOperator = 0;
		this.game.state.start("levels");
	},
	loadmenu: function(){
		countOperator = 0;
		this.game.state.start("menu");
	},
	xPostion: function(value)
	{
			var Xpos = (this.game.width * value) / 100;

			return Xpos;
	},
	yPostion: function(value)
	{
			var Ypos = (this.game.height * value) / 100;

			return Ypos;
	},
	storeScore:function()
	{
		scoreText1.text = curScr;

		var prevHighScore = localStorage.getItem("highScore");
		if(curScr > prevHighScore)
		{
			localStorage.setItem("highScore", curScr);
			//window.game.submitScore(leaderboardId, curScr);
		}
		
		
		prevHighScore = localStorage.getItem("highScore");

		if(prevHighScore != null)
		scoreText2.text = prevHighScore;
		else
		scoreText2.text = "0";
	}
}
