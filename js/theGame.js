var theGame = function(game){
	var qText1;
	var qText2;
	var qtext;
	var circle1;
	var answerTxt;

	var correctAns;
	var plusBtn;
	var subBtn;
	var multBtn;
	var divBtn;
	var scorePatch1;
	var  hand;
	var scores = 0;


}
var circTween;

var currentScore = 0;
var scoreBuffer = 0;
var scoreLabel;
var introPopUp;
var timerSnd;
var sucessSnd;
var failSnd;
var scoreLabelTween;
var scoreImg;
var pauseTimerImg;
var buyPauseImg;
var playTimerImg;
var currentOperator;
var countOperator = 0;
var speed =0;


var isHandAdded;
theGame.prototype = {
  	create: function(){


		isHandAdded = false;
		var bgPath = "BG"+this.randomRange(1,6);

		this.game.add.sprite(0, 0, bgPath);
		var scorePatch = this.game.add.sprite(this.game.width * 0.25 , this.game.height * 0.07, 'scorePatch');
		scorePatch.anchor.set(0.5,0.5);



		timerSnd = this.game.add.audio('timer');
		sucessSnd = this.game.add.audio('sucess');
		failSnd = this.game.add.audio('fail');

		//qTile1 = this.game.add.sprite(this.xPostion(10), this.yPostion(19), "qTile");
		var titleAnimSprite = this.game.add.sprite(this.game.width/2, this.game.height * 0.27, 'qTile');
		titleAnimSprite.anchor.set(0.5,0.5);
		titleAnimSprite.scale.set(0,0)

		var titleAnim = this.game.add.tween(titleAnimSprite.scale).to({x: 1,y:1}, 1000, Phaser.Easing.Elastic.Out, true);
		//titleAnim.onComplete.add(this.onAnimComplete, this);
		//titleanim.onComplete.add(this.onAnimComplete, this);

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

		
		
		//qText1 = this.game.add.text(75, 155, "100", {font: scoreFont1, fill: "#ffffff", stroke: "#ffffff", strokeThickness: 1});
		qText1 = this.game.add.bitmapText(this.xPostion(20), this.yPostion(27.5), 'question', '1', qTextSize);
		qText1.anchor.set(0.5,0.5);
		qText1.visible = false;
		//qText2 = this.game.add.text(350, 155, "100", {font: scoreFont1, fill: "#ffffff", stroke: "#ffffff", strokeThickness: 1});
		qText2 = this.game.add.bitmapText(this.xPostion(80), this.yPostion(27.5), 'question', '2', qTextSize);
		qText2.anchor.set(0.5,0.5);
		qText2.visible = false;

		
		circle1 = new PieProgress(this.game, this.xPostion(50),  this.yPostion(55), circleSize,"#ffcc00");
		//circle1.alpha = 0;
		circle1.color = "#ffcc00";
		circle1.scale.set(0.0,0.0);
		circleScaleTWeen = this.game.add.tween(circle1.scale);
		circleScaleTWeen.to({x:1,y:1}, 1000, Phaser.Easing.Elastic.Out);
		circleScaleTWeen.start();
		circleScaleTWeen.onComplete.add(this.checkFirstTime, this);

		this.game.world.add(circle1);

		answerPatch = this.game.add.sprite(this.xPostion(50),  this.yPostion(55), "answerPatch");
		answerPatch.anchor.set(0.5,0.5);
		answerTxt = this.game.add.bitmapText(this.game.width/2,  this.game.height * 0.565, 'number', '1', anstxtSize);
		answerTxt.anchor.set(0.5,0.5)
		answerTxt.visible = false;

		plusBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), 'plusBtn', this.playTheGame, this);
		plusBtn.anchor.set(0.5,0.5);
		subBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), 'subBtn', this.playTheGame, this);
		subBtn.anchor.set(0.5,0.5);
		multBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), 'multBtn', this.playTheGame, this);
		multBtn.anchor.set(0.5,0.5);
		divBtn = this.game.add.button(this.xPostion(-11), this.yPostion(85), 'divBtn', this.playTheGame, this);
		divBtn.anchor.set(0.5,0.5);


		choiceTween1 =  this.game.add.tween(plusBtn).to({x: this.xPostion(13)}, 1000, Phaser.Easing.Back.InOut, true);
		choiceTween2 =  this.game.add.tween(subBtn).to({x: this.xPostion(37)}, 1000, Phaser.Easing.Back.InOut, true);
		choiceTween3 =  this.game.add.tween(multBtn).to({x: this.xPostion(62)}, 1000, Phaser.Easing.Back.InOut, true);
		choiceTween4 =  this.game.add.tween(divBtn).to({x: this.xPostion(87)}, 1000, Phaser.Easing.Back.InOut, true);
		
		
		plusBtn.name = "1";
		subBtn.name = "2";
		multBtn.name = "3";
		divBtn.name = "4";
        isAdReady = false;
      //  this.game.add.tween(circle1).to({radius: 64}, 1000, Phaser.Easing.Back.InOut, true, 1000, Infinity, true);

		//this.checkFirstTime();
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
	onAnimComplete:function()
	{

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
		dullBg = this.game.add.sprite(0,0,"dullBg");		
		this.showPopUp();
	},
	showPopUp:function()
	{
		answerTxt.text = 3;
		qText1.text = 1;
		qText2.text = 2;
		correctAns = 1;
		qText1.visible = true;
		qText2.visible = true;
		currentOperator = "+";
		isHandAdded = true;
		introPopUp = this.game.add.button(this.xPostion(50), this.yPostion(50),'firstHint',this.popupClose,this);
		introPopUp.anchor.set(0.5)
	},
	popupClose:function()
	{
		introPopUp.destroy();
		dullBg.destroy();
		this.checkPause();
		this.generateQuestion();
		hand = this.game.add.sprite(this.xPostion(35),this.yPostion(95), 'hand');
		hand.anchor.set(0.5);
		var bounce = this.game.add.tween(hand);
		if(currentOperator == "+")
		{
			 hand.x = plusBtn.x + plusBtn.width;
			 hand.y = plusBtn.y + plusBtn.height;
			 handTween =  bounce.to({ x: plusBtn.x + plusBtn.width/2,y: plusBtn.y + plusBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		else if(currentOperator == "-")
		{
			 hand.x = subBtn.x + subBtn.width;
			 hand.y = subBtn.y + subBtn.height;
			 handTween =  bounce.to({ x: subBtn.x + subBtn.width/2,y: subBtn.y + subBtn.height/2 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
		}
		else if(currentOperator == "x")
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
		if(isFullScreenAdReady && isAdRemoved == "false")
		{
			revmob.showLoadedFullscreen();	
			isFullScreenAdReady = false;			
		}
		var fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
		timerSnd.stop();
		this.game.state.start("GameOver",true,false,currentScore,fb);
	},
	generateQuestion:function()
	{


		var no1 = this.randomRange(1,5);
		var no2 = this.randomRange(5,10);


		var ops = this.randomRange(1,4);


		if(ops == 1)
		{

			answerTxt.text = (no1 + no2);
			qText1.text = (no1);
			qText2.text = (no2);
			correctAns = 1;
			currentOperator = "+";
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
			currentOperator = "x";
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




		if(countOperator == 0)
		{
			speed = 10000;
		}
		else
		{
			if(scoreBuffer <= 5)
			{
				speed = 6000;
			}
			else if(scoreBuffer > 5)
			{
				speed = 5000;
			}
			else 
			{
				speed = 4000;
			}
		}

		circTween = this.game.add.tween(circle1).to({progress: 1}, speed, Phaser.Easing.Linear.none, true, 0, 0, false);
		circTween.onComplete.add(this.onComplete, this);
		qText1.visible = true;
		qText2.visible = true;
		answerTxt.visible = true;
		
		countOperator++;
		if(isEffects == "true")
		timerSnd.play();
	},
	randomRange:function(min,max)
	{
		 return Math.floor(Math.random()*(max-min+1)+min);
	},
	playTheGame:function(btn)
	{
		if(isHandAdded)
		{
			handTween.stop();
			hand.destroy();
			isHandAdded = false;
		}
		if(qText2.text == "1" && (currentOperator == "*" || currentOperator == "÷"))
		{
			if(correctAns == 3 || correctAns == 4)
			{
				if(btn.name == 3 || btn.name == 4)
				{
					currentScore++;
					if(isEffects == "true")
					{
						timerSnd.stop();
						sucessSnd.play();
					}
					this.incrementScore();
					this.reloadQuestion();

				}
				else
				{
				 	  var fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
					    if(isAdReady )
						{
							if(AdMob)
							{
								AdMob.showInterstitial();
							}				
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
				var fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
					if(isAdReady )
					{
						if(AdMob)
						{
							AdMob.showInterstitial();
						}				
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
			console.log(btn.name+ ": 1 :" + correctAns);
			currentScore++;
			if(isEffects == "true")
			{
				timerSnd.stop();
				sucessSnd.play();
			}
			this.incrementScore();
			this.reloadQuestion();

		}
		else
		{
			console.log(btn.name+ ": 2 : " + correctAns);
			if(isEffects == "true")
			{
				timerSnd.stop();
				failSnd.play();
			}
			var isAdUnlcoked = localStorage.getItem("isAdRemoved");
			if(isFullScreenAdReady && isAdUnlcoked == "false")
			{
				revmob.showLoadedFullscreen();
				isFullScreenAdReady = false;
			}
			var fb = qText1.text+" "+currentOperator+" " +qText2.text+" is equal to "+answerTxt.text;
			if(isAdReady )
			{
				if(AdMob)
				{
					AdMob.showInterstitial();
				}				
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
	circTween.stop();
	circTween = null;
	circle1.progress = 0;
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
    this.color = color || "#FFCC00";
    this.updateProgress();
}

PieProgress.prototype = Object.create(Phaser.Sprite.prototype);
PieProgress.prototype.constructor = PieProgress;

PieProgress.prototype.updateProgress = function() {
    var progress = this._progress;
    progress = Phaser.Math.clamp(progress, 0.0000, 0.99999);

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
