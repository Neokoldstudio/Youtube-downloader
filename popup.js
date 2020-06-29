//###############################
//######## CH'TIT RAPPEL ########
//### NE PAS OUBLIER LE PULL ####
//###############################
//###############################

$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 0, 500 ],
    slide: function(event, ui) {
        var time = [
            getStringFromTime(getFormattedTimeFromSeconds(ui.values[ 0 ])),
            getStringFromTime(getFormattedTimeFromSeconds(ui.values[ 1 ]))
        ]
        $("#slider-infos")[0].innerHTML =  "<b>De</b> " + time[ 0 ] + " <b>à</b> " + time[ 1 ];
    }
});

var time = [
    getStringFromTime(getFormattedTimeFromSeconds($( "#slider-range" ).slider( "values", 0 ))),
    getStringFromTime(getFormattedTimeFromSeconds($( "#slider-range" ).slider( "values", 1 )))
]
$("#slider-infos")[0].innerHTML = "<b>De</b> " + time[0] + " <b>à</b> " + time[1];

$("#dl-video").on("click", function(event) { // Event triggered when the download button is clicked. event variable contain the event informations
})

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
    else
    {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
}

function getStringFromTime(time)
{
    var toReturn = "";
    if(time.hours)
        toReturn+=time.hours + "h "
    if(time.minutes)
        toReturn+=time.minutes + "min "
    if(time.seconds!=undefined)
        toReturn+=time.seconds + "sec"
    //toReturn = time.hours + "h " + time.minutes + "min " + time.seconds + "sec";
    return toReturn;
}