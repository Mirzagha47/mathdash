var levels = function(){
	var thisRef;
	}

levels.prototype = {
	
  	create: function(){
		
	thisRef = this;
	
	this.game.add.sprite(0, 0, "BG8");
	
	


	var width = this.game.cache.getImage("easyBtn").width;
	easyMenu = this.game.add.button(this.game.width/2, this.game.height * 0.45, 'easyBtn', this.easyGame, this);
	easyMenu.anchor.set(0.5,0.5)
	
	
	
	medMenu = this.game.add.button(this.game.width/2 , this.game.height * 0.625, 'medBtn',this.mediumGame,this);
	medMenu.anchor.set(0.5,0.5)


	/*hardMenu = this.game.add.button(this.game.width/2  + width * 0.06, this.game.height * 0.70, 'hardBtn',this.hardGame,this);
	hardMenu.anchor.set(0.5,0.5)
	hardMenu.scale.set(0,0);*/
	var width1 = this.game.cache.getImage("geekBtn").width;
	geekBtn = this.game.add.button(this.game.width * 0.5   , this.game.height * 0.8, 'geekBtn',this.hardGame,this);
	geekBtn.anchor.set(0.5,0.5)
	

	

	muteBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'muteBtn', this.muteBtnClick, this);
	audioBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'audioBtn', this.audioBtnClick, this);
	var muteStatus = localStorage.getItem("isMute");
	
	this.onAnimComplete()

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
	
	
	},muteBtnClick:function()
	{

		this.game.sound.mute = false;
		muteBtn.visible = false;
		audioBtn.visible = true;
	},
	closeBtnCLick:function()
	{
		popUpGroup.visible = false;
	},
	videoBtnCLick:function()
	{


		
	},
	
	purchaseBtnCLick:function()
	{
		this.game.state.start("TheHardGame");
	},
	
	videoFail:function()
	{
		alert("Video Not availabe , Try Again Later")
	},
	onAnimComplete:function()
	{
	

		var titleText1 = this.game.add.sprite(this.game.width/2, this.game.height * 0.2, 'titleText1' );
		titleText1.scale.set(1.5);
		titleText1.anchor.set(0.5,0.5);
		titleText1Tween = this.game.add.tween(titleText1.scale);    
   	    titleText1Tween.from({x:0,y:0}, 1000, Phaser.Easing.Elastic.Out);       
		titleText1Tween.start();
		
		
		
		easyMenu.visible = false;
		medMenu.visible = false;
		geekBtn.visible = false;

		lvlTween1 = this.game.add.tween(easyMenu.scale);    
   	    lvlTween1.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
        lvlTween1.start();
		
		
		lvlTween1.onComplete.add(function(){

				
			easyMenu.visible = true;
			medMenu.visible = true;
			geekBtn.visible = true;


			this.game.add.tween(easyMenu).from({y: titleText1.y + 100,alpha:0}, 250, "Linear", true);
			this.game.add.tween(medMenu).from({y:  titleText1.y + 100,alpha:0}, 350, "Linear", true);
			this.game.add.tween(geekBtn).from({y:  titleText1.y  + 100,alpha:0}, 500, "Linear", true);
		},this);
		
	},
	randomRange:function(min,max)
	{
		 return Math.floor(Math.random()*(max-min+1)+min);
	},
	Tween1Start:function()
	{
		menuTween1 = this.game.add.tween(medMenu.scale);    
		menuTween1.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
		menuTween1.start();
		var _this = this;
		 setTimeout(function(){
		 		_this.Tween3Start(); 
		 	}, 300);
	},
	Tween2Start:function()
	{
		
		menuTween2 = this.game.add.tween(hardMenu.scale);    
   	    menuTween2.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
        menuTween2.start();
		var _this = this;
		setTimeout(function(){
			_this.Tween3Start(); 
		}, 300);
	},
	Tween3Start:function()
	{
		 menuTween3 = this.game.add.tween(geekBtn.scale);    
   	     menuTween3.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
         menuTween3.start();
		 menuTween3.onComplete.add(this.onLoadAd, this);
		
	},
	onLoadAd:function()
	{
		if(isRevMob)
		{
			revmob.loadFullscreen(['UIInterfaceOrientationPortrait','UIInterfaceOrientationPortraitUpsideDown'], onSuccess, onError);
		}
		function onSuccess()
		{
			isFullScreenAdReady = true;
		}
		function onError()
		{
			
		}
	},
	audioBtnClick:function()
	{
		this.game.sound.mute = true;
		audioBtn.visible = false;
		muteBtn.visible = true;
	},
	easyGame: function(){
		currentLevel = "TheGame";
		this.game.state.start("TheGame");
	},	
	mediumGame: function(){
		currentLevel = "TheMediumGame";
		this.game.state.start("TheMediumGame");
	},	
	hardGame: function(){
		this.game.state.start("TheHardGame");
	
	},	
	geekGame: function(){
		//this.game.state.start("TheGame");
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