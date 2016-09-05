reqs = ["value","perattack", "stren"];

chrome.storage.local.get(reqs, function (items){
	if (items["value"] == null && items["stren"] == null){
		chrome.storage.local.set({'value': "0"}, function() {});
		chrome.storage.local.set({'stren': "40"}, function() {});
	}
	if (items["stren"] != "-1") {
		var danger = 0;
		//console.log(items["value"].indexOf(4));
		var improve = true;
		if (items["value"].indexOf(4) == -1){
			improve = false;
		}else{
			improve = true;
		}
		
		for(var index in items["value"]) { 
		    var y = items["value"][index]; 
		    if (y == 0){
		    	danger = danger + urlsearch(improve, document.URL, items);
		    }else if (y == 1){
		    	danger = danger + localdb(improve, document.URL, items);
		    }else if (y == 2){
		    	//pagescan(items["stren"], document.url);
		    	console.log("remote scan is curerntly being developed");
		    }else if (y == 3){
		    	danger = danger + localstored(improve, document.URL);
		    }
		}
		
		if(danger > parseInt(items["stren"])){
			if (confirm("looks dodgy, click okay to load cancel to stop loading: Danger=" + danger)){
			}else{
				window.location = "http://www.google.co.uk";
			}
			
		}
	}
	else{
		//console.log("off by strength");
	}
});


/*sleep(3000);

function sleep(milliseconds) {
  	var start = new Date().getTime();
  	for (var i = 0; i < 1e7; i++) {
    	if ((new Date().getTime() - start) > milliseconds){
      		break;
    	}
  	}
}

function testone(improve, url, fldocument){
	$.get(url, function(response) { 
    	alert(response) 
	});
}

*/