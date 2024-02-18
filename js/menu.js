var menu = function(game){
	var bpmText;
	var textWidth;
	var playMenu;
	var tipsMenu;

	}
 var muteBtn;
 var audioBtn;
menu.prototype = {

  	create: function(){
		
	
	this.game.add.sprite(0, 0, "BG1");


	var width = this.game.cache.getImage("playBtn").width;
//	playMenu = this.game.add.button(this.game.width/2 +  width * 0.07, this.game.height * 0.42, 'playBtn', this.playTheGame, this);
	playMenu = this.game.add.button(this.game.width/2, this.game.height * 0.55, 'playBtn', this.playTheGame, this);
	playMenu.anchor.set(0.5,0.5)
	

	//tipsMenu = this.game.add.button(this.game.width/2 , this.game.height * 0.57, 'tipsBtn', this.tipsClick, this);
	tipsMenu = this.game.add.button(this.game.width/2, this.game.height * 0.725, 'tipsBtn', this.tipsClick, this);
	tipsMenu.anchor.set(0.5,0.5)
	
	//tipsMenu.scale.set(0,0);
	
	noadsMenu = this.game.add.button(this.game.width/2, this.game.height * 0.87, 'noAds', this.removeAd, this);
	noadsMenu.anchor.set(0.5,0.5);
	noadsMenu.visible = false;
	
	//noadsMenu.scale.set(0,0);

	var muteStatus = localStorage.getItem("isMute");
	muteBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'muteBtn', this.muteBtnClick, this);
	audioBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'audioBtn', this.audioBtnClick, this);
		muteBtn.alpha = 0;
		audioBtn.alpha = 0;
	if(muteStatus == "true")
	{
		this.game.sound.mute = true;
		muteBtn.visible = true;
		audioBtn.visible = false;
	}
	else if(muteStatus == "false")
	{
		muteBtn.visible = false;
		audioBtn.visible = true;
	}
	else
	{
		muteBtn.visible = false;
		audioBtn.visible = true;
	}
	
	this.onAnimComplete()

	
},
showHand:function(){

	this.hand = this.game.add.sprite(playMenu.x + 150, playMenu.y + 50,"hand");
	this.hand.anchor.set(0)
	
	this.game.add.tween(this.hand).to({x:playMenu.x + 100, y : playMenu.y },500,"Linear",-1,0,-1,true);
	this.game.add.tween(this.hand.scale).to({x:1.1, y : 1.1},500,"Linear",-1,0,-1,true);


},
removeAd:function()
{
		window.iap.purchaseProduct("purchase1", function (result){
		isAdRemoved = "true";
        localStorage.setItem("isAdRemoved","true");
	}, 
	function (error){
		//alert("error: "+error);
	});
},
videoLoaded:function()
{
	isVideoAdReady = true;
},
videoLoadedFail:function()
{

},
settingsClick:function()
{
	this.game.state.start("settings");
},
randomRange:function(min,max)
	{
		 return Math.floor(Math.random()*(max-min+1)+min);
	},
	onAnimComplete:function()
	{
		muteBtn.alpha = 1;
		audioBtn.alpha = 1;
		
		playMenu.visible = false;
		tipsMenu.visible = false;

		btnTween1 = this.game.add.tween(noadsMenu).to({x: this.game.width/2}, 1500, Phaser.Easing.Back.InOut, true);
		titleText = this.game.add.sprite(this.game.width/2, this.game.height * 0.25, 'titleText' );
		
		titleText.anchor.set(0.5,0.5);
		titleTWeen = this.game.add.tween(titleText.scale);
   	    titleTWeen.from({x:0,y:0}, 500, Phaser.Easing.Back.Out,true);
		
		titleTWeen.onComplete.add(function(){

			
			playMenu.visible = true;
			tipsMenu.visible = true;

			this.game.add.tween(playMenu).from({y: titleText.y,alpha:0}, 250, "Linear", true);
			this.game.add.tween(tipsMenu).from({y: titleText.y,alpha:0}, 350, "Linear", true);

			this.game.time.events.add(2000,function(){
				this.showHand();
			},this);

		},this);
	
		btnTween1.onComplete.add(this.Tween2Start, this);
        







	},
	Tween2Start:function()
	{
		
		
	},
	Tween3Start:function()
	{
   	    btnTween3.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);
        btnTween3.start();
		var _this = this;
		setTimeout(function(){
			_this.Tween4Start();
		}, 300);
	},
	Tween4Start:function()
	{
		btnTween4 = this.game.add.tween(noadsMenu.scale);
   	    btnTween4.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);
        btnTween4.start();
		
	},
	muteBtnClick:function()
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
		this.game.state.start("levels");
	},
	tipsClick:function()
	{
		this.game.state.start("tips");
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
	}
}
