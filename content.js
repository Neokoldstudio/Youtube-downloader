//###############################
//## ACTUAL SCRIPT TO DOWNLOAD ##
//######## YOUTUBE VIDEO ########
//###############################

var isSliderInitialized = false;

document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.getSelected(null,function(tab) {
        var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        var match = tab.url.match(regExp);
        if(match)
        {
            document.getElementById("URL_area").value = tab.url;
            fetch(`http://localhost:4000/getVideoLength?URL=${tab.url}`, {
                method: 'get'
            }).then(response => response.json()).then(data => {
                console.log(data);
                //document.getElementById("URL_area").value = data.length;
    
    
                var Duration = data.length;
                isSliderInitialized = true;
                $("#slider-infos")[0].innerHTML = "<b>From</b> " + time[0] + " <b>to</b> " + getStringFromTime(getFormattedTimeFromSeconds(data.length));
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: Duration,
                    values: [0, Duration],
                    create: function () {
                        //handle.text( $( this ).slider( "value" ) );
                    },
                    slide: function (event, ui) {
                        //handle.text( ui.value );
                        var time = [
                            getStringFromTime(getFormattedTimeFromSeconds(ui.values[0])),
                            getStringFromTime(getFormattedTimeFromSeconds(ui.values[1]))
                        ];
                        $("#slider-infos")[0].innerHTML = "<b>From</b> " + time[0] + " <b>to</b> " + time[1];
                    }
                });
            })
        }
    });
});

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
    var startTime = $( "#slider-range" ).slider( "values", 0 );
    var endTime = $( "#slider-range" ).slider( "values", 1 );
    window.location.href = `http://localhost:4000/downloadAudio?URL=${URL}?startTime=${startTime}?endTime=${endTime}`;
}

//#############
//#           #
//#slider part#
//#           #
//#############

var handle = $( "#Multi_slider" );
var Duration = 1000;
$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: Duration,
    values: [ 0, Duration],
    create: function() {
        //handle.text( $( this ).slider( "value" ) );
      },
    slide: function(event, ui) {
        //handle.text( ui.value );
        var time = [
            getStringFromTime(getFormattedTimeFromSeconds(ui.values[ 0 ])),
            getStringFromTime(getFormattedTimeFromSeconds(ui.values[ 1 ]))
        ];
        if(isSliderInitialized)
            $("#slider-infos")[0].innerHTML =  "<b>From</b> " + time[ 0 ] + " <b>to</b> " + time[ 1 ];
        else
            $("#slider-infos")[0].innerHTML = "<b><i>Please wait...</i></b>";
    }
});


var time = [
    getStringFromTime(getFormattedTimeFromSeconds($( "#slider-range" ).slider( "values", 0 ))),
    getStringFromTime(getFormattedTimeFromSeconds($( "#slider-range" ).slider( "values", 1 )))
];

//$("#slider-infos")[0].innerHTML = "<b>From</b> " + time[0] + " <b>to</b> " + time[1];
$("#slider-infos")[0].innerHTML = "<b><i>Please wait...</i></b>";


function getFormattedTimeFromSeconds(secs)
{
    var hours, minutes, seconds = 0;
    var isHours = secs / 3600;
    var isMinutes = secs / 60;
    var remainder = secs;
    if(secs>0)
    {
        if(isHours>1)
        {
            remainder = remainder%3600;
            hours = Math.floor(isHours);
            isMinutes = remainder / 60;
        }
        if(isMinutes>1)
        {
            remainder = remainder % 60;
            minutes = Math.floor(isMinutes);
            seconds = remainder;
        }
        else
        {
            if(remainder>0)
                seconds = remainder;
        }
        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
    if(isMinutes>1)
    {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function getStringFromTime(time) {
    var toReturn = "";
    if(time.hours)
    {
        toReturn+=time.hours + "h ";
    }
    if(time.minutes)
    {
        toReturn+=time.minutes + "m ";
    }
    if(time.seconds!=undefined)
    {
        toReturn+=time.seconds + "s ";
    }
    return toReturn;
}