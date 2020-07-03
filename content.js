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
        sendURL(URL);
    }
    
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}