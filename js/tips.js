var tips = function(game){
	var bpmText;
	var textWidth;
	var playMenu;
	var tipsMenu;
	var rateMenu;
	}
 
tips.prototype = {
	
  	create: function(){
		
	this.game.add.sprite(0, 0, 'tipsBg');
	var tips = this.game.add.sprite(this.xPostion(50),this.yPostion(60), 'tipsImg1');
	tips.anchor.set(0.5);
	var hand = this.game.add.sprite(this.xPostion(35),this.yPostion(95), 'hand');
	hand.anchor.set(0.5);
	
		playMenu = this.game.add.button(this.xPostion(0), this.yPostion(0), 'tipsInfo', this.playTheGame, this);
	
		playMenu.alpha = 0;
		this.game.time.events.add(Phaser.Timer.SECOND * 3, this.fadePicture, this);
		var bounce=this.game.add.tween(hand);

		bounce.to({ x: hand.x - 10,y: hand.y - 10 }, 500 , Phaser.Easing.Linear.In , true, 500, 20, true).loop(true);
	
	},
	fadePicture:function()
	{
		playMenu.alpha = 1;
	},
	playTheGame: function(){
		this.game.state.start("menu");
		//playMenu.alpha = 0;
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