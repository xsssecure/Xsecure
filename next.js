//this section of code is set in the manifest to execute after a page has fully loaded
//this code will add a "on click listener" a all "a href" tags meaning that when a link
//is clicked before that page can be requested this script will check its URL for XSS attacks
//if it finds one it will stop the page from ever being requested
//this is the best solution however will only work if the user is sent a link so for the program
//to be fully secure other methods are required too.

function new_page(new_url){
    //future optomisation, only check after seccond "."
    oldurl = new_url;
    new_url = new_url.toLowerCase();
    if (checksite(new_url)){
        if (confirm("looks dodgy, click okay to load cancel to stop loading: Danger=list")){
             window.location = oldurl;
        }else{
            window.location = "http://www.google.co.uk";
        }
    };
}

function checksite(url){
    //gets number of checks to do
    for (var j = 0; j < strings.length; j++) {
        //gets length of URL
        for (var i = 0; i <= url.length ; i++) {
            //creates a sub string the same length as the charicteristic then compaires them
            if (url.substring((i),(i + strings[j].length)) == strings[j]){
                return true; 
            };
        };
    };
    return false;
}

//this once complete will obtaint the list fo charicteristics from the server
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

//adding onclick listener to each a tag
//then getting the href attribute value and running the script with that URL
//this is now run by controller but waits for document.ready
    
    /*$(document).ready(function() {
    	$('a').click(function() {
            new_page($(this).attr('href'));
        });	
});*/

    chrome.storage.local.get("value", function (items){
        var improve = true; 
        if (items["value"].indexOf(4) == -1){
            improve = false;
        }else{
            improve = true;
        }

        for(var index in items["value"]) { 
            var y = items["value"][index]; 
            if (y == 0){
                $('a').click(function(event) {
                    event.preventDefault();
                    new_page($(this).attr('href'));
                });
            }
        }
    });

    
