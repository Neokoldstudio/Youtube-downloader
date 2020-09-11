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
        sendVideo(URL);
    }
});

function sendVideo(URL) {
    window.location.href = `http://localhost:4000/downloadVideo?URL=${URL}`;
}

$("#dl-audio").on("click", function(event) { 
    var URL = document.getElementById("URL_area").value;
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = URL.match(regExp);
    
    if(match)
    {
        sendAudio(URL);
    }
});

function sendAudio(URL) {
    window.location.href = `http://localhost:4000/downloadAudio?URL=${URL}`;
}