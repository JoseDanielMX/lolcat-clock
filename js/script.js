var time = new Date().getHours();
var noon = 12;
var evening = 18;
var wakeUpTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    var messageText;        
    var timeEventJS = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZ PARTEE TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME...";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #906EFF, #6F42FF)";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #FFBD74, #FF9A2A)";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZ TIME TO GETTUP.";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #5491C1, #2F78B0)";
    } else if (time < noon) {
        messageText = "GOOD MONIN!!";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #f16059, #dd5048)";
    } else if (time > evening) {
        messageText = "GOOD EVENIN!!";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #906EFF, #6F42FF)";
    } else {
        messageText = "GOOD AFTENOON!!";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #FFB25B, #FF9A2A)";
    }

    timeEventJS.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();

};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) { 
        meridian = "PM"; 
    }  
    if (hours > noon) { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;

};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Over :(";
        partyTimeButton.style.backgroundColor = "#222";
        document.body.style.backgroundImage = "linear-gradient(-45deg, #D61B1B, #AB0B0B, #FFD300, #FFDD39, #A7D84D,#8EC929)";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#B11414";
    }

};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
    
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);