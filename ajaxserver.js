function pagescan(stren, url){
	$(document).ready(function() {
	    retundat = $.ajax({
	        type: "POST",
	        url: 'http://192.168.159.128/apiext/deter.php',
	        data: {dom:document.getElementsByTagName('html')[0].innerHTML, posurl:url},
			async: false,
	        dataType: "text"
	    });
		if (retundat.responseText != "safe"){
			if (parseInt(stren) < parseInt(retundat.responseText)){
        		if (confirm("looks dodgy, click okay to load cancel to stop loading")){
        			console.log("cont");
        		}
        		else{
        			window.location = "http://www.google.co.uk";
        		}
            }
		}else{
			console.log("safe")
		}
	});
}