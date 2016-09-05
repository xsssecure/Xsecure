//this code does very little to stop an XXS attack
//it is used for the UI (button at the side)
//can be useful to get data back from user
//future work: could be used to help find other insecurites within page
function saveChanges(val, stren) {
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'value': val}, function() {
    });

    chrome.storage.local.set({'stren': stren}, function() {
    });
}


function showdata() {
    // Save it using the Chrome extension storage API.
    data = ["value","stren"]
    chrome.storage.local.get(data, function (items){
    	
    	var x = document.getElementsByClassName("ads_Checkbox");
    	$("ads_Checkbox").attr('checked', false);
    	console.log(items["value"]);
		console.log(items["stren"]);
		for(var index in items["value"]) { 
		    var y = items["value"][index]; 
		    for (i = 0; i < x.length; i++) {
		    	if (y == i){
		        	$(x[i]).attr('checked', true);
		    	}
		    }
		}


        $("input[type='radio'][name='strength'][value=" +  items["stren"] + "]").prop('checked', true);

    	return items;
    });
}



function checksite(url){
	//gets number of checks to do and loops
    for (var j = 0; j < strings.length; j++) {
    	//gets length of URL and loops
        for (var i = 0; i <= url.length ; i++) {
        	//creates a sub string the same length as the charicteristic then compaires them
            if (url.substring((i),(i + strings[j].length)) == strings[j]){
                $("#shield").attr('src',"shielddanger.jpg");
                return true; 
            };
        };
    };

   $("#shield").attr('src',"shieldsafe.jpg");
   //$(".moveimg").attr("src", "Shielddanger.jpg")
   //alert("hello2");
    return false;
}
//used to find the current tab opened and run on that
/*chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    checksite(url);
});*/

var strings = ["<",
"%3c",
"&lt",
"script"]


$(document).ready(function(){
	
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url)
        url = url.toLowerCase();
        checksite(url);
    });


	$("#settingscl").hide();

	$("#settingsop").click(function(){
		$("#settingsop").hide();
		$("#settingscl").show();
		showdata();
        $("#menu1").animate({'height': '0px', 'top': "-150px"}, function(){
        	$("#menu1").hide();
        });
        //
    });
    $("#settingscl").click(function(){
        $("#settingscl").hide();
        $("#settingsop").show();
        $("#menu1").animate({'height': '220px', 'top': "0px"}, function(){
        	$("#menu1").show("150");

        	var arr = $('.ads_Checkbox:checked').map(function () {
         		return this.value;
     		}).get();


            var selectedVal = "";
            var selected = $("input[type='radio'][name='strength']:checked");
            if (selected.length > 0) {
                selectedVal = selected.val();
            }

     		saveChanges(arr, selectedVal);
        });
    });


});