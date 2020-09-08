var time = new Date().getHours();
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var messageText;
var noon = 12;
var evening = 18;
var wakeupTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "GOOD MONIN!!";
} else if (time > evening) {
    messageText = "GOOD EVENIN!!";
} else {
    messageText = "GOOD AFTENOON!!";
}

timeEventJS.innerText = messageText;
lolcat.src = image;