var store = function(game){
	var bpmText;
	var textWidth;
	var playMenu;
	var tipsMenu;
	var rateMenu;
	}
  var androidIAPObj = new InAppBilling();
store.prototype = {
	
  	create: function(){
		
	this.game.add.sprite(0, 0, 'storeBg');
	
	this.game.add.button(this.xPostion(10), this.yPostion(25), 'unlockAll', this.unlockAllClick, this);
	
	this.game.add.button(this.xPostion(10), this.yPostion(40), 'pause1', this.pauseClick1, this);
	
	this.game.add.button(this.xPostion(10), this.yPostion(55), 'pause2', this.pauseClick2, this);
	
     this.game.add.button(this.xPostion(10), this.yPostion(70), 'backBtn', this.backBtn, this);
	
	androidIAPObj.init();
	
	},
	unlockAllClick: function()
	{
		var purchaseDetails = androidIAPObj.buy(this.unlockSuccess, this.fail, "cc.maths.purchase.unlock1");
	},
	unlockSuccess:function()
	{
		localStorage.setItem("isMediumOpen","yes");
		localStorage.setItem("isHardOpen","yes");
	},
	fail:function()
	{
		alert("Purchase Faled.pls try Again");
	},
	pauseClick1:function()
	{
		var purchaseDetails = androidIAPObj.buy(this.adsSuccess, this.fail, "cc.maths.purchase.removeads1");
		
		
	}
	,
	adsSuccess:function()
	{
		localStorage.setItem("isAdRemoved","true");
	},
	backBtn:function()
	{
		this.game.state.start("menu");
		
		
	},
	megaSuccess:function()
	{
		pauseCur = localStorage.getItem("pauseCount");
		pauseCur = pauseCur + 100;
		localStorage.setItem("pauseCount",pauseCur);
		
		
	},
	pauseClick2:function()
	{
		var purchaseDetails = androidIAPObj.buy(this.megaSuccess, this.fail, "cc.maths.purchase.pack1");
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