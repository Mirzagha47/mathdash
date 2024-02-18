var ConceptListController = function(){

    var conceptRef = this;

	//var IAPObj = new IAP();
	//var androidIAPObj = new InAppBilling();
	var productId;
	var currentDevice = StaticLibrary.findDevice();
	
    this.init = function(){
		
		/* if(currentDevice == "IOS"){
        	IAPObj.initialize();
    	}
    	else if(currentDevice == "Android"){
    		//alert("Android Init calling");
    		androidIAPObj.init();
    	} */
		
        console.log(":: Concept List Controller Invoked ::");
        loadManager = new LoadManager();
		$(".clickEventClass").unbind('click').bind("click", this.listClickHandler);	
		$("#contentScreen").css("position","absolute");
		$("#contentScreen").css("width","100%");
		
		/* if(localStorage.getItem("purchased_Ids") !== null && localStorage.getItem("purchased_Ids") !== "" && localStorage.getItem("purchased_Ids") !== "undefined"){ 
			
			var prodIds = localStorage.getItem("purchased_Ids").split('|'); 
			productId = "";
			for (var i=0; i < prodIds.length; i++){
				productId = prodIds[i].split('.')[3];
				$("#"+productId+" span").removeClass('lock').addClass('unlock');
			}
		} */
    }
	
    this.listClickHandler = function(event){
        //console.log($(event.currentTarget).find("a").html());
    	
        $(".clickEventClass").unbind("click");
		$("#contactsearch").blur();	
        var temp = $(event.currentTarget).find("a").html();

        var isPurchase = $(event.currentTarget).find("span").attr('class');
        
        //if(isPurchase == "unlock")
        //{ 
			
			$("#btnNavSearch").css("display","block");
			count=2;
            console.log(":: Elimination Link Clicked ::");
            if(flurryManager != undefined)
            flurryManager.addCustomEvent(temp+" is Selected in Concepts"); 
            StaticLibrary.controlView("contentScreen");
			StaticLibrary.controlFooter("lblFooter2");
            loadManager.loadCurrentPage("Pages/" + temp +"/index.html", internalPageLoadSuccessHandler);
			
        /* }else{
        	var projectId = $(event.currentTarget).attr('id');
    		//alert(projectId);
    		console.log(":: listClickHandler Invoked 1::");
    	    if(currentDevice == "IOS"){
				if(projectId != "" && projectId != null && projectId != "undefined"){
					IAPObj.buy("com.integra.iapdemo1."+ projectId, this.success);
				}
				else{
					StaticLibrary.reloadConcepts();
				}
			}//end of ios
			else if(currentDevice == "Android"){
				if(projectId != "" && projectId != null && projectId != "undefined"){
					var purchaseDetails = androidIAPObj.buy(this.success, this.fail, "com.integra.iapdemo1."+ projectId);
				}
				else{
					StaticLibrary.reloadConcepts();
				}
				console.log(":: IAP onPurchase Invoked ::");
				if(localStorage.getItem("purchased_Ids") === null || localStorage.getItem("purchased_Ids") === "" || localStorage.getItem("purchased_Ids") === "undefined"){
					localStorage.setItem("purchased_Ids", productId);
				}
				else{
					var prodIds = "";
					if(localStorage.getItem("purchased_Ids") !== null && localStorage.getItem("purchased_Ids") !== "" && localStorage.getItem("purchased_Ids") !== "undefined"){
						prodIds = localStorage.getItem("purchased_Ids");
						localStorage.setItem("purchased_Ids", prodIds +"|"+ productId);
					}
			
					console.log("--------LocalStorage Data--------");
					console.log(localStorage.getItem("purchased_Ids"));
				}
				var prodId = productId.split('.')[3];
				//alert(prodId);
				$("#"+prodId+" span").removeClass('lock').addClass('unlock');
			}// end of android.
        } */
		
    } // end of listClickHandler
	
	function success(){
    	alert("Product Purchased Successfully!!!");
    	//console.log(":: success Invoked ::");
    	
    }
    function fail(){
    	alert("Product Purchased fail!!!");
    	//console.log(":: fail Invoked ::");
    }
}