//###############################
//## ACTUAL SCRIPT TO DOWNLOAD ##
//######## YOUTUBE VIDEO ########
//###############################

$("#dl-video").on("click", function(event) { 
    var URL = document.getElementById("URL_area").value;
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = URL.match(regExp);
    
    if(match)
    {
        var downloading = chrome.downloads.download({
            url: URL,
            filename: "You Thought It Was Working You Noob.html"
        });
    }
    
});