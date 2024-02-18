var settings = function(game){
	var bgmBtn;
	var rateUsBtn;
	var leaderBoardBtn;
	var effectsBtn;
	var backBtn;
	var restorePurchase;
	var settingsShadow;
	var settingsText;
	}
 var muteBtn;
 var audioBtn;
settings.prototype = {
	
  	create: function(){
	
	

	this.game.add.sprite(0, 0, "settingsBg");
	
	settingsShadow = this.game.add.sprite(this.game.width * 0.53, this.game.height * 0.14, 'titleShadow1' );
	settingsShadow.alpha = 0;
	settingsShadow.anchor.set(0.5,0.5);

	var titleAnimSprite = this.game.add.sprite(this.game.width/2, this.game.height * -0.15, 'titleBg3');
	titleAnimSprite.anchor.set(0.5,0.5);

	var titleAnim = this.game.add.tween(titleAnimSprite).to({y: this.game.height * 0.15}, 1000, Phaser.Easing.Back.InOut, true);
	titleAnim.onComplete.add(this.onAnimComplete, this);

	

    
	
	
	bgmBtn = this.game.add.button(this.game.width * -0.20 , this.game.height * 0.40, 'bgmBtn', this.onBmClick, this);
	bgmBtn.anchor.set(0.5,0.5)
	
	bgmBtnMute = this.game.add.button(this.xPostion(33) , this.game.height * 0.40, 'bgmBtnMute', this.onBmMuteClick, this);
	bgmBtnMute.anchor.set(0.5,0.5)
	bgmBtnMute.visible = false;

	effectsBtn = this.game.add.button(this.game.width * -0.20 , this.game.height * 0.40, 'effectsBtn', this.onEffectsClick, this);
	effectsBtn.anchor.set(0.5,0.5)
	
	effectsBtnMute = this.game.add.button(this.xPostion(63) , this.game.height * 0.40, 'effectsBtnMute', this.onEffectsMuteClick, this);
	effectsBtnMute.anchor.set(0.5,0.5)
	effectsBtnMute.visible = false;
	
	leaderBoardBtn = this.game.add.button(this.game.width * -0.20 , this.game.height * 0.55, 'leaderBoardBtn', this.leaderBoardClick, this);
	leaderBoardBtn.anchor.set(0.5,0.5)
	
	
	rateUsBtn = this.game.add.button(this.game.width * -0.20 , this.game.height * 0.55, 'rateUsBtn', this.rateUsClick, this);
	rateUsBtn.anchor.set(0.5,0.5)
	

	backBtn = this.game.add.button(this.game.width * 0.2 , this.game.height * 0.90, 'backBtn', this.backBtnClick, this);
	backBtn.anchor.set(0.5,0.5)
	backBtn.scale.set(0);

	restorePurchase = this.game.add.button(this.game.width * 0.5 , this.game.height * 0.75, 'restorePurchase', this.restoreClick, this);
	restorePurchase.anchor.set(0.5,0.5)
	restorePurchase.scale.set(0);

	var muteStatus = localStorage.getItem("isMute");
	//muteBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'muteBtn', this.muteBtnClick, this);
	//audioBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'audioBtn', this.audioBtnClick, this);
	
	if(muteStatus == "true")
	{
		
	}
	else if(muteStatus == "false")
	{
		
	}
	else
	{
		
	}
	
	
},
rateUsClick:function()
{
	window.location.replace('market://details?id=com.DP.MathMind');
},
randomRange:function(min,max)
	{
		 return Math.floor(Math.random()*(max-min+1)+min);
	},
	onAnimComplete:function()
	{
		settingsText = this.game.add.sprite(this.game.width/2, this.game.height * 0.14, 'settingsText' );
		settingsText.scale.set(0.25 , 0.25 );
		settingsText.anchor.set(0.5,0.5);
		titleTWeen = this.game.add.tween(settingsText.scale);    
   	    titleTWeen.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
        titleTWeen.start();
		titleShadow.alpha = 1;

		btnTween1 = this.game.add.tween(playMenu.scale);    
   	    btnTween1.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);       
        btnTween1.start();
        var _this = this;
		//btnTween1.onComplete.add(this.Tween2Start, this);
        setTimeout(function(){
			_this.Tween2Start(); 
		}, 300);
		

		var twn1 =  this.game.add.tween(bgmBtn).to({x: this.xPostion(33)}, 1000, Phaser.Easing.Back.InOut, true);
		var twn2 =  this.game.add.tween(effectsBtn).to({x: this.xPostion(63)}, 1000, Phaser.Easing.Back.InOut, true);
		var twn3 =  this.game.add.tween(leaderBoardBtn).to({x: this.xPostion(33)}, 1000, Phaser.Easing.Back.InOut, true);
		var twn4 =  this.game.add.tween(rateUsBtn).to({x: this.xPostion(63)}, 1000, Phaser.Easing.Back.InOut, true);
		

      var _this = this;
		setTimeout(function(){
		_this.Tween2Start();
	  },1000);
		
	},
	Tween2Start:function()
	{
		
		var setTween1 = this.game.add.tween(backBtn.scale);    
   	    setTween1.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);  
		var setTween2 = this.game.add.tween(restorePurchase.scale);    
   	    setTween2.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);      
		setTween1.start();
		setTween2.start();
		setTween2.onComplete.add(this.onCompletOfTween, this);
	},
	onCompletOfTween:function()
	{
		isEffects = localStorage.getItem("isEffects");
		var isMute = localStorage.getItem("isMute");
		if(isEffects == "true")
		{
			effectsBtn.visible = true;
			effectsBtnMute.visible = false;

		}
		else
		{
			effectsBtnMute.visible = true;
			effectsBtn.visible = false;
		}
		if(isMute == "true")
		{
			bgmBtnMute.visible = true;
			bgmBtn.visible = false;

		}
		else
		{
			bgmBtn.visible = true;
			bgmBtnMute.visible = false;
			
		}
	},
	onBmClick:function()
	{
		localStorage.setItem("isMute","true");
		this.game.sound.mute = true;
		bgmBtn.visible = false;
		bgmBtnMute.visible = true;
	},
	onBmMuteClick:function()
	{
		localStorage.setItem("isMute","false");
		this.game.sound.mute = false;
		bgmBtn.visible = true;
		bgmBtnMute.visible = false;
	},
	onEffectsClick:function()
	{
		localStorage.setItem("isEffects","false");
		isEffects = "false";
		effectsBtnMute.visible = true;
		effectsBtn.visible = false;
	},
	onEffectsMuteClick:function()
	{
		localStorage.setItem("isEffects","true");
		isEffects = "true";
		effectsBtnMute.visible = false;
		effectsBtn.visible = true;
	},
	leaderBoardClick:function()
	{
		//window.game.showLeaderboard(leaderboardId);
	
		window.game.login();
	}
	,
	backBtnClick: function(){
		this.game.state.start("menu");
	},
	restoreClick:function()
	{
		var _this = this;
		window.iap.restorePurchases(function (result){
        for (var i = 0 ; i < result.length; ++i){
            var p = result[i];
            
            if (self.existing_purchases.indexOf(p['productId']) === -1)
                self.existing_purchases.push(p['productId']);			
 
            //alert("productId: "+p['productId']);

			localStorage.setItem("isAdRemoved","true");
        }
    }, 
    function (error){
       noPurchase = _this.game.add.button(_this.xPostion(50), _this.yPostion(50),'noPurchase',_this.noPurchaseClose,_this);
	   noPurchase.anchor.set(0.5)
    });
	},
	noPurchaseClose:function()
	{
		noPurchase.destroy();
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