var log = function (msg) {
    console.log("InAppBilling[js]: " + msg);
};

var InAppBilling = function () {
    this.options = {};
};

var localStorage = window.localStorage || {};

InAppBilling.prototype.init = function (success, fail, options, skus) {
	options || (options = {});

	this.options = {
		showLog: options.showLog || true
	};
	
	if (this.options.showLog) {
		log('setup ok');
	}
	
	var hasSKUs = false;
	//Optional Load SKUs to Inventory.
	if(typeof skus !== "undefined"){
		if (typeof skus === "string") {
        	skus = [skus];
    	}
    	if (skus.length > 0) {
        	if (typeof skus[0] !== 'string') {
            	var msg = 'invalid productIds: ' + JSON.stringify(skus);
            	log(msg);
				fail(msg);
            	return;
        	}
        	log('load ' + JSON.stringify(skus));
			hasSKUs = true;
    	}
	}
	
	if(hasSKUs){
		return cordova.exec(success, fail, "InAppBillingPlugin", "init", [skus]);
    }else {
        //No SKUs
		return cordova.exec(success, fail, "InAppBillingPlugin", "init", []);
    }
};
InAppBilling.prototype.getPurchases = function (success, fail) {
	if (this.options.showLog) {
		log('getPurchases called!');
	}
	return cordova.exec(success, fail, "InAppBillingPlugin", "getPurchases", ["null"]);
};
InAppBilling.prototype.buy = function (success, fail, productId) {
	if (this.options.showLog) {
		log('buy called!');
	}
	//alert("buy called! "+productId);
	/*console.log(":: IAP onPurchase Invoked ::");
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
        $("#"+prodId+" span").removeClass('lock').addClass('unlock');*/
	
	return cordova.exec(success, fail, "InAppBillingPlugin", "buy", [productId]);
};
InAppBilling.prototype.subscribe = function (success, fail, productId) {
	if (this.options.showLog) {
		log('subscribe called!');
	}
	return cordova.exec(success, fail, "InAppBillingPlugin", "subscribe", [productId]);
};
InAppBilling.prototype.consumePurchase = function (success, fail, productId) {
	if (this.options.showLog) {
		log('consumePurchase called!');
	}
	return cordova.exec(success, fail, "InAppBillingPlugin", "consumePurchase", [productId]);
};
InAppBilling.prototype.getAvailableProducts = function (success, fail) {
	if (this.options.showLog) {
		log('getAvailableProducts called!');
	}
	return cordova.exec(success, fail, "InAppBillingPlugin", "getAvailableProducts", ["null"]);
};
InAppBilling.prototype.getProductDetails = function (success, fail, skus) {
	if (this.options.showLog) {
		log('getProductDetails called!');
	}
	
	if (typeof skus === "string") {
        skus = [skus];
    }
    if (!skus.length) {
        // Empty array, nothing to do.
        return;
    }else {
        if (typeof skus[0] !== 'string') {
            var msg = 'invalid productIds: ' + JSON.stringify(skus);
            log(msg);
			fail(msg);
            return;
        }
        log('load ' + JSON.stringify(skus));

		return cordova.exec(success, fail, "InAppBillingPlugin", "getProductDetails", [skus]);
    }
};

//module.exports = new InAppBilling();