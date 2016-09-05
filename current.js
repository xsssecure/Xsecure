//this code will search for charicteristics in the current URL
//however because in the manifest this is set to execute before any other code
//if there is an XSS attack the JS will be injected into the page via the URL
//however it will never get a chance to run as the redirect will occur before that line is executed
function urlsearch(improve, url, items){
	//future optimisation, only check after second "."
    url = url.toLowerCase();
    if (checksite(url, improve, items)){
        return 65;
    }else{
    	return 0;
    }
}
function checksite(url, improve, items){
	//gets number of checks to do and loops
    for (var j = 0; j < strings.length; j++) {
    	//gets length of URL and loops
        for (var i = 0; i <= url.length ; i++) {
        	//creates a sub string the same length as the characteristic then compares them
            if (url.substring((i),(i + strings[j].length)) == strings[j]){
     	   		localdbstore(true, url, url, items);
                return true; 
            };
        };
    };
    return false;
}

//this once complete will obtain the list for characteristics from the server
//this means that the list can be dynamically up dated without updating the extension
var strings = ["<",
"%3c",
"&lt",
"&#60",
"&#060",
"&#0060",
"&#00060",
"&#000060",
"&#0000060",
"&#x3c",
"&#x03c",
"&#x003c",
"&#x0003c",
"&#x00003c",
"&#x000003c",
"\\x3c",
"\\u003c",
"script"]

