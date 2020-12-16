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

// Favicon

// Takes an emoji as a parameter and returns a valid data URL that can be used as a favicon
// Thanks to https://formito.com/tools/favicon
const faviconHref = emoji =>
  `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>${emoji}</text></svg>`

// Targets the favicon <link> in the <head> and changes it to that emoji
const changeFavicon = emoji => {
    // Ensure we have access to the document, i.e. we are in the browser.
    if (typeof window === 'undefined') return
  
    const link =
      window.document.querySelector("link[rel*='icon']") ||
      window.document.createElement("link")
    link.type = "image/svg+xml"
    link.rel = "shortcut icon"
    link.href = faviconHref(emoji)
  
    window.document.getElementsByTagName("head")[0].appendChild(link)
  }

  // Changes the emoji showing the correct time
  const currentEmoji = () => {
    // Add 15 minutes and round down to closest half hour
    const time = new Date(Date.now() + 15 * 60 * 1000)
  
    const hours = time.getHours() % 12
    const minutes = time.getMinutes() < 30 ? 0 : 30
  
    return {
      "0.0": "🕛",
      "0.30": "🕧",
      "1.0": "🕐",
      "1.30": "🕜",
      "2.0": "🕑",
      "2.30": "🕝",
      "3.0": "🕒",
      "3.30": "🕞",
      "4.0": "🕓",
      "4.30": "🕟",
      "5.0": "🕔",
      "5.30": "🕠",
      "6.0": "🕕",
      "6.30": "🕡",
      "7.0": "🕖",
      "7.30": "🕢",
      "8.0": "🕗",
      "8.30": "🕣",
      "9.0": "🕘",
      "9.30": "🕤",
      "10.0": "🕙",
      "10.30": "🕥",
      "11.0": "🕚",
      "11.30": "🕦",
    }[`${hours}.${minutes}`]
  }

// One minute
const delay = 60 * 1000

// Change the favicon when the page gets loaded...
const emoji = currentEmoji()
changeFavicon(emoji)

// ... and update it every minute
setInterval(() => {
  const emoji = currentEmoji()
  changeFavicon(emoji)
}, delay)