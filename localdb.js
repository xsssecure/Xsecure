function localdb(improve, cururl, items){
	var returndata = 0;
	for(var index in items["perattack"]) { 
		if (items["perattack"][index] == cururl){
			console.log("found site");
			returndata = returndata + 15;
		}else if (items["perattack"][index] == document.domain){
			console.log("found domain")
			returndata = returndata + 7;
		}

	}
	return returndata;
	
}



function localdbstore(improve, cururl, domainurl, items){
	//items["sites"].push(cururl);
	//items["sites"].push(domainurl);
	current = [""," "];
	if (jQuery.isEmptyObject(items["perattack"])) {
		current = [cururl, domainurl];
		console.log("empty")
	}else {
		console.log("not empty")
		for(var index in items["value"]) { 
			console.log(items["value"][index]);
			current.push(items["value"][index]);
		}

		current.push(cururl);
		current.push(domainurl);
	}

	chrome.storage.local.set({'perattack': current}, function() {});
	
}