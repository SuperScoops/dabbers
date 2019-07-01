/*!
**|   XaeMae Sequenced Module Loader
**|   
**@preserve
*/
// -- Channel Namespace --
if (!this[CHANNEL.name])
    this[CHANNEL.name] = {};
// -- The Module Library
window[CHANNEL.name].sequenceList = {
	'layout':      { active: 1, rank: -1, url: "//cdn.jsdelivr.net/gh/superscoops/dabbers@master/CustomEdit6.js",              callback: true },
    'channel':      { active: 1, rank: -1, url: "//cdn.jsdelivr.net/gh/sawwashere/CYTUBE-BABYMETAL@1.0.14/enhanced.js",              callback: true },
    'Xaekai Modules':      { active: 1, rank: -1, url: "//cdn.jsdelivr.net/gh/sawwashere/CYTUBE-BABYMETAL@1.0.14/XaekaiModules.js",              callback: true },
};

window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList)

window[CHANNEL.name].sequencerLoader = function (){
    // After first run we curry the previous modules callback
    // This is mainly used to reassign variables in modules/scripts that don't use module options
    if(window[CHANNEL.name].sequencePrev){
        setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0)
        window[CHANNEL.name].sequencePrev = "";
    }

    if(window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length){
        return (function(){ console.log("Xaekai's Script Sequencer: Loading Complete.") })()
    }

    var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
    if(window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length){
        if(window[CHANNEL.name].sequenceList[currKey].active
            && window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank
        ){
            console.log("Xaekai's Script Sequencer: Loading " + currKey);
            window[CHANNEL.name].sequencePrev = currKey;
            window[CHANNEL.name].sequenceState++;
            $.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader)
        } else {
            window[CHANNEL.name].sequenceState++;
            window[CHANNEL.name].sequencerLoader()
        }
    }
};window[CHANNEL.name].sequencerLoader()

$('head').append("<link rel='stylesheet' href='//cdn.jsdelivr.net/gh/sawwashere/CYTUBE-BABYMETAL@1.0.14/base.css' />");
$('head').append("<link rel='stylesheet' href='//cdn.jsdelivr.net/gh/sawwashere/CYTUBE-BABYMETAL@1.0.14/theme.css' />");
$(".navbar-brand").text("Fate/Type-Moon");
$(".navbar-brand").removeAttr("href");

if(!CLIENT.googlehax){
    CLIENT.googlehax = true;
    socket.on('changeMedia', (data)=>{ 
        if (data["type"] === 'gd'){
            $('#videowrap').addClass('googlehax');
        }
        else
        {
            $('#videowrap').removeClass('googlehax');
        }
    })
    $('head').append(
        $('<style>')
            .attr('id','googlehax-style')
            .text('.googlehax embed { left: -5em; }')
    )
    $('#mediarefresh').click()
}

setInterval(function(){ document.title = $("#currenttitle").text();}, 5000);

var buttonTimeout = window.setTimeout(function () {
var qualButton=$("<button id='qualityDropDown' class='btn btn-sm btn-default OLB dropdown-toggle' title='Quality' data-toggle='dropdown'>Quality</button>")

$("#VideoOverlay").append(qualButton);
$("#qualityDropDown").after("<ul class='dropdown-menu'><li><button id='qualAuto'>Auto</button><li><button id='qual240'>240p</button></li><li><button id='qual360'>360p</button></li><li><button id='qual480'>480p</button></li><li><button id='qual720'>720p</button></li><li><button id='qual1080'>1080p</button></li><li><button id='qualmax'>Max</button></li></ul>");
$('#qualAuto').click(function(){USEROPTS.default_quality = "auto", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="Auto";});
$('#qual240').click(function(){USEROPTS.default_quality = "240", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="240p";});
$('#qual360').click(function(){USEROPTS.default_quality = "360", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="360p";});
$('#qual480').click(function(){USEROPTS.default_quality = "480", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="480p";});
$('#qual720').click(function(){USEROPTS.default_quality = "720", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="720p";});
$('#qual1080').click(function(){USEROPTS.default_quality = "1080", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="1080p";});
$('#qualmax').click(function(){USEROPTS.default_quality = "best", PLAYER.mediaType = "",PLAYER.mediaId = "",socket.emit("playerReady"),document.getElementById("qualityDropDown").childNodes[0].nodeValue="Max";});
$('div.vjs-volume-menu-button').css("margin-left", "125px");
  window.clearTimeout(buttonTimeout);
}, 5000);
