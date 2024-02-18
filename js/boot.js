	var boot = function(game){
	
};
  
boot.prototype = {
	preload: function(){
         this.game.load.image('loading', loadPath+'loadingFill.png');
		 this.game.load.image('loadingBody', loadPath+'loadingBody.png');
		 this.game.load.image('loadingBg', loadPath+'loadingBg.png');
	},
  	create: function(){
		
		
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.stage.backgroundColor = "#3800A8";
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		
		this.game.state.start("Preload");
	}
}