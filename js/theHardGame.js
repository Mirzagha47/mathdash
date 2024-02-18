var theHardGame = function(game){

	var qtext;
	var circle1;
	var answerTxt;

	var correctAns;

var opText;
var isFirstTime
var HandAdded;


}
var qText1;
	var qText2;
	var tilesArr = ["ansTile1","ansTile2","ansTile3","ansTile4"];
	var videoCount;
	var isVideoReady;
var circTween;
var scores = 0;
var currentScore = 0;  
var scoreBuffer = 0;
var scoreLabel;
var introPopUp;
var scoreLabelTween;
var scoreImg;
var timerSnd;
var sucessSnd;
var failSnd;
var pauseTimerImg;
var buyPauseImg;
var playTimerImg;
var currentOperator;
var countOperator = 0;
var speed = 0;
 var isFirstHardGame;

var plusBtn;
var drawnObject;
	var subBtn;
	var multBtn;
	var divBtn;
	var tileSprite;
	var fillTwen;
	var  hand;
	var currentQno;

theHardGame.prototype = {
  	create: function(){

		currentQno = this.randomRange(1,3);
		videoCount = 0;
		HandAdded =false;

		var bgPath = "BG"+this.randomRange(1,6);

		this.game.add.sprite(0, 0, bgPath);

		isFirstTime = false;
		isFirstHardGame = true;
		speed = 3000;

		this.addSquare();
	//	circle1 = new PieProgress(this.game, this.xPostion(50),  this.yPostion(55), 360);
		//qTile2 = this.game.add.sprite(this.xPostion(65), this.yPostion(20), "qTile");


		var circleSize;
		var anstxtSize;
		var scoreTxtSize;
		if(currentDevice == "HD")
		{
			qTextSize = 125;
			circleSize = 360;
			anstxtSize = 140;
			scoreTxtSize= 70;
		}		
		else if(currentDevice == "SHD")
		{
			qTextSize = 125 /1.5;
			circleSize = 360/1.5;
			anstxtSize = 140 /1.5;
			scoreTxtSize = 70/1.5;
		}


		answerPatch = this.game.add.sprite(this.xPostion(50),  this.yPostion(55), "answerPatch");
		answerPatch.anchor.set(0.5,0.5);

		answerTxt = this.game.add.bitmapText(this.xPostion(50),  this.game.height * 0.565, 'number', '1', anstxtSize);
		answerTxt.anchor.set(0.5,0.5);



	    timerSnd = this.game.add.audio('timer');
		sucessSnd = this.game.add.audio('sucess');
		failSnd = this.game.add.audio('fail');

		

		var scorePatch = this.game.add.sprite(this.game.width * 0.25 , this.game.height * 0.07, 'scorePatch');
		scorePatch.anchor.set(0.5,0.5);
        isAdReady = false;
      //  this.game.add.tween(circle1).to({radius: 64}, 1000, Phaser.Easing.Back.InOut, true, 1000, Infinity, true);

		this.checkFirstTime();
	  //scoreLabel = this.game.add.text(this.game.world.centerX - 30, 20, "0", {font: scoreFont, fill: "#ffffff", stroke: "#4355C7", strokeThickness: 15});
	  scoreLabel = this.game.add.bitmapText(this.game.width * 0.25 , this.game.height * 0.075, 'question', 'Score : 0', scoreTxtSize);
	  scoreLabel.anchor.set(0.5)
      scoreLabel.align = 'center';
	  currentScore  =0;

    //Create a tween to grow / shrink the score label
     scoreLabelTween = this.add.tween(scoreLabel.scale).to({ x: 1.5, y: 1.5}, 200, Phaser.Easing.Linear.In).to({ x: 1, y: 1}, 200, Phaser.Easing.Linear.In);

		
	muteBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'muteBtn', this.muteBtnClick, this);
	audioBtn = this.game.add.button(this.xPostion(85), this.yPostion(2), 'audioBtn', this.audioBtnClick, this);
	var muteStatus = localStorage.getItem("isMute");

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
	loadStore:function()
	{
		this.game.state.start("store");
	},
	checkFirstTime:function()
	{
		this.generateQuestion();
		
	},
	showPopUp:function()
	{
		dullBg = this.game.add.sprite(0,0,"dullBg");
		introPopUp = this.game.add.button(this.xPostion(50), this.yPostion(50),'secondHint',this.popupClose,this);
		introPopUp.anchor.set(0.5);
	},
	popupClose:function()
	{
		introPopUp.destroy();
		dullBg.destroy();
		hand = this.game.add.sprite(this.xPostion(35),this.yPostion(95), 'hand');
		hand.anchor.set(0.5);
		var bounce=this.game.add.tween(hand);
		HandAdded = true;
		if(plusBtn.name == correctAns)
		{
			 hand.x = plusBtn.x + plusBtn.width;
			 hand.y = plusBtn.y + plusBtn.height;
			 handTween =  bounce.to({ x: plusBtn.x + plusBtn.width/2,y: plusBtn.y + plusBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		else if(subBtn.name == correctAns)
		{
			 hand.x = subBtn.x + subBtn.width;
			 hand.y = subBtn.y + subBtn.height;
			 handTween =  bounce.to({ x: subBtn.x + subBtn.width/2,y: subBtn.y + subBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		else if(multBtn.name == correctAns)
		{
			 hand.x = multBtn.x + multBtn.width;
			 hand.y = multBtn.y + multBtn.height;
			 handTween =  bounce.to({ x: multBtn.x + multBtn.width/2,y: multBtn.y + multBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		else
		{
			 hand.x = divBtn.x + divBtn.width;
			 hand.y = divBtn.y + divBtn.height;
			 handTween =  bounce.to({ x: divBtn.x + divBtn.width/2,y: divBtn.y + divBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		//console.log("1.7");
		this.startTween1();
	},
	addSquare:function()
	{

		var width = 720 // example;
		var height = 720 // example;
		if(currentDevice == "HD")
		width =720;
		else if(currentDevice == "SHD")
		width = 720/1.5;

		var maskBG = this.game.add.graphics(0,0);
		maskBG.beginFill(0x000000);
		maskBG.drawCircle(this.game.world.centerX, (this.game.height * 0.55), width);
		maskBG.anchor.set(0.5,0.5)
		maskBG.alpha = 0.25;
		var bmd = this.game.add.bitmapData(width, width);

		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, width, width);
		bmd.ctx.fillStyle = '#ffcc00';
		bmd.ctx.fill();
		drawnObject = this.game.add.sprite(this.game.world.centerX, (this.game.height * 0.55) + width/2, bmd);
		drawnObject.anchor.setTo(0.5, 1);
		drawnObject.scale.set(1,0)
		var mask = this.game.add.graphics(0,0);
		mask.beginFill(0xffffff);
		mask.drawCircle(this.game.world.centerX, (this.game.height * 0.55), width);
		mask.anchor.set(0.5,0.5)
		drawnObject.mask = mask;
		//fillTwen = this.game.add.tween(drawnObject.scale).to({y:1}, 8000, Phaser.Easing.Linear.In, false);
		//fillTwen.onComplete.add(this.onComplete,this);
	},
	startTheAnimation:function()
	{
		
		if(isFirstHardGame)
		{
			isFirstHardGame = false;
			this.showPopUp();
			
		}
		else
		{
			this.game.tweens.removeAll();
			drawnObject.scale.set(1,0);
			if(isEffects == "true")
			{
				timerSnd.play();
			}
			fillTwen = this.game.add.tween(drawnObject.scale).to({y:1}, speed, Phaser.Easing.Linear.In, true);
			fillTwen.onComplete.add(this.onComplete,this);
			
		}
	},
	startTween:function()
	{

		if(videoCount == 0)
		{
			
			videoCount++;
			dullBg  = this.game.add.sprite(0,0,"dullBg");
			videoAdBtn = this.game.add.button(this.xPostion(50), this.yPostion(40),"videoAdBtn" , this.playVideoAd, this);
			videoAdBtn.anchor.set(0.5)
			noVideoAdBtn = this.game.add.button(this.xPostion(50), this.yPostion(60),"noVideoAdBtn" , this.novideoAdCLick, this);
			noVideoAdBtn.anchor.set(0.5)
		}
		else
		{
			//console.log("1");
			this.startTween1();
		}
	},
	playVideoAd:function()
	{
		
		videoAdBtn.destroy();
		noVideoAdBtn.destroy();
		var _this =this;
		if(isRevMob)
		{
			if(isVideoAdReady)
			{
				isVideoAdStartedLoading = false;
				isVideoReady = false;
				revmob.showRewardedVideo(onSuccess1, onError1);
			}
			else
			{
				revmob.loadRewardedVideo(onSuccess2,onError2);
				
				loadingVideoTxt  = this.game.add.sprite(this.game.width/2,this.game.height/2,"loadingVideoTxt");
				loadingVideoTxt.anchor.set(0.5);
				
				function onSuccess2(e)
					{
						if(e.RevMobAdsEvent == "REWARDED_VIDEO_LOADED")
						{
							isVideoReady = false;
							revmob.showRewardedVideo(onSuccess2, onError2);
						}
						else if(e.RevMobAdsEvent == "REWARDED_VIDEO_COMPLETED") 
						{
							isVideoAdReady = false;
							speed = 5000;		
							loadingVideoTxt.destroy();
							dullBg.destroy();
							//console.log("1.1");
							_this.startTween1();
						}

					}
					function onError2(e)
					{
						if (e.RevMobAdsEvent == "AD_NOT_RECEIVED") {

               				dullBg.destroy();
							   if(loadingVideoTxt != undefined)
							   {
								   loadingVideoTxt.destroy();
							   }
							_this.startTween1();
           			 }
					 
					}
				
				
			}
		}
		else
		{
			noInternet = this.game.add.button(this.xPostion(50), this.yPostion(50),'noInternet',this.noInternetClose,this);
	  		noInternet.anchor.set(0.5)
		}
		function onSuccess1(e)
		{
			if(e.RevMobAdsEvent == "REWARDED_VIDEO_COMPLETED") 
			{
				isVideoAdReady = false;
				speed = 5000;		
				//loadingVideoTxt.destroy();
				dullBg.destroy();
				//console.log("1.3");
				_this.startTween1();
			}

		}
		function onError1(e)
		{
			dullBg.destroy();
			//console.log("1.4");
			_this.startTween1();
		}
	},
	noInternetClose:function()
	{
		noInternet.destroy();
		dullBg.destroy();
		//console.log("1.5");
		this.startTween1();
	},
	addPlayComplete:function()
	{
		
		
	},
	VideoReady:function()
	{
		
	},
	novideoAdCLick:function()
	{
		videoAdBtn.destroy();
		noVideoAdBtn.destroy();
		dullBg.destroy();
		//console.log("1.6");
		this.startTween1();
	},
	startTween1:function()
	{
		
		
		if(isFirstHardGame)
		{
			isFirstHardGame = false;
			
			this.showPopUp();
			
		}
		else
		{
			
			//this.game.tweens.removeAll();
			drawnObject.scale.set(1,0);
			fillTwen = this.game.add.tween(drawnObject.scale).to({y:1}, speed, Phaser.Easing.Linear.In, true);
			fillTwen.onComplete.add(this.onComplete,this);
			
		}
		
	},
	checkPause:function()
	{

	},
	pauseTimer:function()
	{


	},
	update: function()
	{

	},
	onComplete:function()
	{
			var isAdUnlcoked = localStorage.getItem("isAdRemoved");
			if(isFullScreenAdReady && isAdUnlcoked == "false")
			{
				revmob.showLoadedFullscreen();	
				isFullScreenAdReady = false;
			}
			var fb;
			
			if(currentQno == 3)
			fb = qText1.text+" "+currentOperator+" "+ qText2.text+" " +" is equal to "+correctAns;
			else if(currentQno == 2)
			fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
			else
			fb = qText1.text+" "+currentOperator+" " +correctAns+" is equal to "+answerTxt.text;

			this.game.state.start("GameOver",true,false,currentScore,fb);
	},
	generateQuestion:function()
	{
		
		

		if(countOperator  == 0)
		currentQno = 1;
		else if(countOperator == 1)
		{
			
			currentQno = this.randomRange(2,3);
			
		}		
		else
		{
			currentQno = this.randomRange(1,3);
			
		}
		

		
		if(currentQno == 1)
		{
				var no1 = this.randomRange(1,10);
				var no2 = this.randomRange(1,10);

				var ops = this.randomRange(1,4);
				if(!isFirstTime)
				{
					var titleAnimSprite = this.game.add.sprite(this.game.width/2, this.game.height * 0.27, 'qTile5');
					titleAnimSprite.anchor.set(0.5,0.5);
					titleAnimSprite.scale.set(0,0)

					var titleAnim = this.game.add.tween(titleAnimSprite.scale).to({x: 1,y:1}, 1000, Phaser.Easing.Elastic.Out, true);
					//titleanim.onComplete.add(this.onAnimComplete, this);
					
					var opSize = 125
					
					//qText1 = this.game.add.text(75, 155, "100", {font: scoreFont1, fill: "#ffffff", stroke: "#ffffff", strokeThickness: 1});
					qText1 = this.game.add.bitmapText(this.xPostion(20), this.yPostion(27.5), 'question', '1', qTextSize);
					qText1.anchor.set(0.5,0.5);
					//qText2 = this.game.add.text(350, 155, "100", {font: scoreFont1, fill: "#ffffff", stroke: "#ffffff", strokeThickness: 1});
					qText2 = this.game.add.bitmapText(this.xPostion(80), this.yPostion(27.5), 'question', '2', qTextSize);
					qText2.anchor.set(0.5,0.5);
				}

				if(ops == 4)
				{
					if(currentDevice == "HD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.9) , this.game.height * 0.308	, 'ops', "", 200);
						opText.anchor.set(0.5);
					}
					else if(currentDevice == "SHD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.9) , this.game.height * 0.308	, 'ops', "", 200/1.5);
						opText.anchor.set(0.5);
					}
					
				}
				else
				{
					if(currentDevice == "HD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'ops', "", 125);
						opText.anchor.set(0.5);
					}
					else if(currentDevice == "SHD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'ops', "", 125/1.5);
						opText.anchor.set(0.5);
					}
				}
				
				var currentQuestion = 0;
				
				if(ops == 1)
				{

					answerTxt.text = (no1 + no2);
					qText1.text = (no1);
					qText2.text = "?";
					correctAns = 1;
					currentOperator = "+";

					currentQuestion = no2;
				}
				else if(ops == 2)
				{

					answerTxt.text = (no2 - no1);

					qText1.text = (no2);
					qText2.text = "?";
					currentOperator = "-";
					correctAns = 2;
					currentQuestion = no1;
				}
				else if(ops == 3)
				{
					answerTxt.text = (no1 * no2);
					qText1.text = (no1);
					qText2.text = "?";
					currentOperator = "×";
					correctAns = 3;
					currentQuestion = no2;
				}
				else
				{
					var temp = no2 * no1;
					answerTxt.text = no2;
					qText1.text = (temp);
					qText2.text = "?";
					currentOperator = "÷";
					correctAns = 4;
					currentQuestion = no1;
				}
				opText.text = currentOperator;
				var temArr = [];
				for(var i = 1;i < 11;i++)
				{
					if(i != currentQuestion)
					temArr.push(i)
				}
				this.shuffle(temArr);
				temArr.length -= 6;

				temArr.push(currentQuestion);
				this.shuffle(temArr);

				correctAns = currentQuestion;

				if(!isFirstTime)
				{
					isFirstTime = true;
					plusBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), temArr[0].toString(), this.playTheGame, this);
					plusBtn.anchor.set(0.5);
					subBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), temArr[1].toString(), this.playTheGame, this);
					subBtn.anchor.set(0.5);
					multBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), temArr[2].toString(), this.playTheGame, this);
					multBtn.anchor.set(0.5);
					divBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), temArr[3].toString(), this.playTheGame, this);
					divBtn.anchor.set(0.5);
					var choiceTween11 =  this.game.add.tween(plusBtn).to({x: this.xPostion(13)}, 1000, Phaser.Easing.Back.InOut, true);
					var choiceTween21 =  this.game.add.tween(subBtn).to({x: this.xPostion(37)}, 1000, Phaser.Easing.Back.InOut, true);
					var choiceTween31 =  this.game.add.tween(multBtn).to({x: this.xPostion(62)}, 1000, Phaser.Easing.Back.InOut, true);
					var choiceTween41 =  this.game.add.tween(divBtn).to({x: this.xPostion(87)}, 1000, Phaser.Easing.Back.InOut, true);
					
					choiceTween41.onComplete.add(this.startTween, this);
				}
				else{
					plusBtn = this.game.add.button(this.xPostion(13), this.yPostion(85), temArr[0].toString(), this.playTheGame, this);
					plusBtn.anchor.set(0.5);
					subBtn = this.game.add.button(this.xPostion(37), this.yPostion(85), temArr[1].toString(), this.playTheGame, this);
					subBtn.anchor.set(0.5);
					multBtn = this.game.add.button(this.xPostion(62), this.yPostion(85), temArr[2].toString(), this.playTheGame, this);
					multBtn.anchor.set(0.5);
					divBtn = this.game.add.button(this.xPostion(87), this.yPostion(85), temArr[3].toString(), this.playTheGame, this);
					divBtn.anchor.set(0.5);
					this.startTween();
				}			

				plusBtn.name = temArr[0].toString();
				subBtn.name = temArr[1].toString();
				multBtn.name = temArr[2].toString();
				divBtn.name = temArr[3].toString();
			}
			else if(currentQno == 2)
			{
								

				plusBtn = this.game.add.button(this.xPostion(13), this.yPostion(85), 'plusBtn', this.playTheGame, this);
				plusBtn.anchor.set(0.5,0.5);
				subBtn = this.game.add.button(this.xPostion(37), this.yPostion(85), 'subBtn', this.playTheGame, this);
				subBtn.anchor.set(0.5,0.5);
				multBtn = this.game.add.button(this.xPostion(62), this.yPostion(85), 'multBtn', this.playTheGame, this);
				multBtn.anchor.set(0.5,0.5);
				divBtn = this.game.add.button(this.xPostion(87), this.yPostion(85), 'divBtn', this.playTheGame, this);
				divBtn.anchor.set(0.5,0.5);

			
				
				plusBtn.name = "1";
				subBtn.name = "2";
				multBtn.name = "3";
				divBtn.name = "4";

				var no1 = this.randomRange(1,5);
				var no2 = this.randomRange(5,10);


				var ops = this.randomRange(1,4);
					if(currentDevice == "HD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'question', "", 125);
						opText.anchor.set(0.5);
					}
					else if(currentDevice == "SHD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'question', "", 125/1.5);
						opText.anchor.set(0.5);
					}
				

				
				if(ops == 1)
				{

					answerTxt.text = (no1 + no2);
					qText1.text = (no1);
					qText2.text = (no2);
					
					currentOperator = "+";
					correctAns = 1;

				}
				else if(ops == 2)
				{

					answerTxt.text = (no2 - no1);

					qText1.text = (no2);
					qText2.text = (no1);
					currentOperator = "-";
					correctAns = 2;
				}
				else if(ops == 3)
				{
					answerTxt.text = (no1 * no2);
					qText1.text = (no1);
					qText2.text = (no2);
					currentOperator = "×";
					correctAns = 3;
				}
				else
				{
					var temp = no2 * no1;
					answerTxt.text = no2;
					qText1.text = (temp);
					qText2.text = (no1);
					currentOperator = "÷";
					correctAns = 4;
				}
				opText.text = "?";
				this.startTween();
			}
			else
			{
				var ops = this.randomRange(1,4);
				var no1 = this.randomRange(1,5);
				var no2 = this.randomRange(5,10);

				if(ops == 1)
				{

					correctAns = (no1 + no2);
					qText1.text = (no1);
					qText2.text = (no2);
					
					currentOperator = "+";

				}
				else if(ops == 2)
				{

					correctAns = (no2 - no1);

					qText1.text = (no2);
					qText2.text = (no1);
					currentOperator = "-";
					
				}
				else if(ops == 3)
				{
					correctAns = (no1 * no2);
					qText1.text = (no1);
					qText2.text = (no2);
					currentOperator = "×";
					
				}
				else
				{
					var temp = no2 * no1;
					correctAns = no2;
					qText1.text = (temp);
					qText2.text = (no1);
					currentOperator = "÷";
					
				}

				if(ops == 4)
				{
					if(currentDevice == "HD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.9) , this.game.height * 0.308	, 'ops', "", 200);
						opText.anchor.set(0.5);
					}
					else if(currentDevice == "SHD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.9) , this.game.height * 0.308	, 'ops', "", 200/1.5);
						opText.anchor.set(0.5);
					}
					
				}
				else
				{
					if(currentDevice == "HD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'ops', "", 125);
						opText.anchor.set(0.5);
					}
					else if(currentDevice == "SHD")
					{
						opText = this.game.add.bitmapText(this.xPostion(50.8) , this.game.height * 0.29, 'ops', "", 125/1.5);
						opText.anchor.set(0.5);
					}
				}
				
				answerTxt.text = "?";

				var temArr = [];
				for(var i = 1;i < 20;i++)
				{
					if(i != currentQuestion)  
					temArr.push(i)
				}
				this.shuffle(temArr);
				temArr.length -= 16;
				
				temArr.push(correctAns);
				this.shuffle(temArr);
				
				this.shuffle(tilesArr);
				
				plusBtn = this.game.add.button(this.xPostion(13), this.yPostion(85),tilesArr[0] , this.playTheGame, this);
				plusBtn.anchor.set(0.5);
				subBtn = this.game.add.button(this.xPostion(37), this.yPostion(85), tilesArr[1], this.playTheGame, this);
				subBtn.anchor.set(0.5);
				multBtn = this.game.add.button(this.xPostion(62), this.yPostion(85), tilesArr[2], this.playTheGame, this);
				multBtn.anchor.set(0.5);
				divBtn = this.game.add.button(this.xPostion(87), this.yPostion(85), tilesArr[3], this.playTheGame, this);
				divBtn.anchor.set(0.5);
				var sizeAns = 130;

				if(currentDevice == "HD")
					{
						sizeAns = 130;
					}
					else if(currentDevice == "SHD")
					{
						sizeAns = 130 /1.5;
					}
				ans1 = this.game.add.bitmapText(this.xPostion(12) , this.yPostion(85.5)	, 'question', temArr[0].toString() , sizeAns);
				ans1.anchor.set(0.5);
				ans2 = this.game.add.bitmapText(this.xPostion(36) , this.yPostion(85.5)	, 'question', temArr[1].toString() , sizeAns);
				ans2.anchor.set(0.5);
				ans3 = this.game.add.bitmapText(this.xPostion(61) , this.yPostion(85.5)	, 'question', temArr[2].toString() , sizeAns);
				ans3.anchor.set(0.5);
				ans4 = this.game.add.bitmapText(this.xPostion(86) , this.yPostion(85.5)	, 'question', temArr[3].toString() , sizeAns);
				ans4.anchor.set(0.5);
				

				plusBtn.name = temArr[0];
				subBtn.name = temArr[1];
				multBtn.name = temArr[2];
				divBtn.name = temArr[3];
				opText.text = currentOperator;
				this.startTween();
			}
		
		
		//tileSprite = this.game.add.sprite(this.xPostion(10), this.yPostion(19), "qTile"+ops);
		
		
 


		
		



		countOperator++;


	},
 shuffle:function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}	,
	randomRange:function(min,max)
	{
		 return Math.floor(Math.random()*(max-min+1)+min);
	},
	playTheGame:function(btn)
	{
		if(HandAdded)
		{
			handTween.stop();
			hand.destroy();
			HandAdded = false;
		}
		if(qText2.text == "1" && currentQno != 3)
		{
			if(correctAns == 3 || correctAns == 4)
			{
				if(btn.name == 3 || btn.name == 4)
				{
					currentScore++;
					this.incrementScore();
					this.reloadQuestion();
					if(isEffects == "true")
					{
						timerSnd.stop();
						sucessSnd.play();
					}
				}
				else
				{
					//alert(btn.name +" : "+correctAns);
					if(currentQno == 3)
					fb = qText1.text+" "+currentOperator+" "+ qText2.text+" " +" is equal to "+correctAns;
					else if(currentQno == 2)
					fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
					else
					fb = qText1.text+" "+currentOperator+" " +correctAns+" is equal to "+answerTxt.text;
					var isAdUnlcoked = localStorage.getItem("isAdRemoved");
					if(isFullScreenAdReady && isAdUnlcoked == "false")
					{
						revmob.showLoadedFullscreen();	
						isFullScreenAdReady = false;
					}
					this.game.state.start("GameOver",true,false,currentScore,fb);
					if(isEffects == "true")
					{
						timerSnd.stop();
						failSnd.play();
					}
				}
			}
			else
			{
				//alert(btn.name +" : "+correctAns);
				if(currentQno == 3)
				fb = qText1.text+" "+currentOperator+" "+ qText2.text+" " +" is equal to "+correctAns;
				else if(currentQno == 2)
				fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
				else
				fb = qText1.text+" "+currentOperator+" " +correctAns+" is equal to "+answerTxt.text;
				var isAdUnlcoked = localStorage.getItem("isAdRemoved");
				if(isFullScreenAdReady && isAdUnlcoked == "false")
				{
					revmob.showLoadedFullscreen();	
					isFullScreenAdReady = false;
				}
				this.game.state.start("GameOver",true,false,currentScore,fb);
				if(isEffects == "true")
				{
					timerSnd.stop();
					failSnd.play();
				}
			}
		}
		else if(btn.name == correctAns)
		{
			currentScore++;
			this.incrementScore();
			this.reloadQuestion();
			if(isEffects == "true")
			{
				timerSnd.stop();
				sucessSnd.play();
			}
		}
		else
		{
			//alert(btn.name +" : "+correctAns);
			var isAdUnlcoked = localStorage.getItem("isAdRemoved");
			if(isAdReady && isAdUnlcoked == "false")
			{
				revmob.showLoadedFullscreen();	
				isFullScreenAdReady = false;
			}
			if(isEffects == "true")
			{
				timerSnd.stop();
				failSnd.play();
			}
			
			if(currentQno == 3)
			fb = qText1.text+" "+currentOperator+" "+ qText2.text+" " +" is equal to "+correctAns;
			else if(currentQno == 2)
			fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
			else
			fb = qText1.text+" "+currentOperator+" " +correctAns+" is equal to "+answerTxt.text;
			var isAdUnlcoked = localStorage.getItem("isAdRemoved");
			if(isFullScreenAdReady && isAdUnlcoked == "false")
			{
				revmob.showLoadedFullscreen();	
				isFullScreenAdReady = false;
			}
			this.game.state.start("GameOver",true,false,currentScore,fb);
		}
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
	incrementScore: function()
	{


			score =1;

			//scoreLabel.text = score;
			 this.createScoreAnimation(this.game.world.centerX, 150, '+'+score, score);


	},
	createScoreAnimation: function(x, y, message, scores){



  scoreLabelTween.start();
        scoreBuffer += scores;
		scoreLabel.text = "Score : "+scoreBuffer;
		if(currentScore >= 50)
		{
			localStorage.setItem("isMediumOpen","yes");
		}
},
reloadQuestion:function(){
	fillTwen.stop();
	this.game.tweens.removeAll();
	fillTwen = null;

	plusBtn.destroy();
	subBtn.destroy();
	multBtn.destroy();
	divBtn.destroy();
	opText.destroy();
	//tileSprite.destroy();
	
	this.checkPause();
	this.generateQuestion();
}

}

function randomrange(min,max)
{
	 return Math.floor(Math.random()*(max-min+1)+min);
}
var PieProgress = function(game, x, y, radius, color, angle) {

    this._radius = radius ;
    this._progress = 0;
    this.bmp = game.add.bitmapData(radius * 2, radius * 2);
    Phaser.Sprite.call(this, game, x, y, this.bmp);

    this.anchor.set(0.5);
    this.angle = angle || -90;
    this.color = color || "#9BE010";
    this.updateProgress();
}

PieProgress.prototype = Object.create(Phaser.Sprite.prototype);
PieProgress.prototype.constructor = PieProgress;

PieProgress.prototype.updateProgress = function() {
    var progress = this._progress;
    progress = Phaser.Math.clamp(progress, 0.00000, 0.99999);

    this.bmp.clear();
    this.bmp.ctx.fillStyle = this.color;
    this.bmp.ctx.beginPath();
    this.bmp.ctx.arc(this._radius, this._radius, this._radius, 0, (Math.PI * 2) * progress, true);
    this.bmp.ctx.lineTo(this._radius, this._radius);
    this.bmp.ctx.closePath();
    this.bmp.ctx.fill();
    this.bmp.dirty = true;
}

Object.defineProperty(PieProgress.prototype, 'radius', {
    get: function() {
        return this._radius;
    },
    set: function(val) {
        this._radius = (val > 0 ? val : 0);
        this.bmp.resize(this._radius * 2, this._radius * 2);
        this.updateProgress();
    }
});

Object.defineProperty(PieProgress.prototype, 'progress', {
    get: function() {
        return this._progress;
    },
    set: function(val) {
        this._progress = Phaser.Math.clamp(val, 0, 1);
        this.updateProgress();
    }
});
