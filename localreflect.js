function localstored(improve, url){
	prob = 0;	
	responseone = $.ajax({
		type: "GET",
		url: url,
        cache: false,
		async: false
	}).responseText;


	//var invalid = /((\$\.post\([ |]"[0-9]+(?:\.[0-9]+){3})) + /i
	var pos = responseone.search(/(\$\.post\((\n|\n | |)"[0-9]+(?:\.[0-9]+){3}")|(\$\.ajax\({(\n|\n | |)type(?: |):(?: |)"post",(\n|\n | |)url(?: |):(?: |)[0-9]+(?:\.[0-9]+){3})+ /i);
	if (pos != -1){
		prob = prob + 35;
	}

	var pos = responseone.search(/[0-9]+(?:\.[0-9]+){3}/g);
	if (pos != -1){
		prob = prob + 2;
	}

	var pos = responseone.search(/window.open\(.+?\+[ |]document.cookie/igm);
	if (pos != -1){
		prob = prob + 65;
	}

	var pos = responseone.search(/<img.+?src=["|'].+?["|'] *\+ *document.cookie/igm);
	if (pos != -1){
		prob = prob + 75;
	}

	return prob;
}