window.onload = function() {
	var bpmText;
	var textWidth;
	var playMenu;
	var tipsMenu;
	var rateMenu;
var game = new Phaser.Game(480,800,Phaser.AUTO,"",{
		preload:onPreload,
		create:onCreate,
		update:onUpdate,
		resize:onResize // <- this will be called each time the game is resized
	});    
function onPreload() {
	
	this.game.load.bitmapFont('myfont', 'assets/font/fontx.png', 'assets/font/fontx.fnt');
	this.game.load.image('BG', 'assets/Bg.png');
	this.game.load.image('playBtn', 'assets/playBtn.png');
	this.game.load.image('tipsBtn', 'assets/tipsBtn.png');
	this.game.load.image('rateBtn', 'assets/rateBtn.png');
}

function onCreate() {
	
	

	
}


function xPostion(value)
{
		var Xpos = (game.width * value) / 100;
		
		return Xpos;
}
function yPostion(value)
{
		var Ypos = (game.height * value) / 100;
		
		return Ypos;
}
function onUpdate() {
}

function onResize(){
}
}