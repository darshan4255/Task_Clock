var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var night = 22;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var session = "AM";

    // Set hours
	if (hours >= noon)
	{
        session = "PM";
	}

	if (hours > noon)
	{
		hours = hours - 12;
	}

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + session;
    document.getElementById('clock').innerHTML = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    // var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime)
    {
        image = "partytime.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime)
    {
        image = "wake.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime)
    {
        image = "lunch.png";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime)
    {
        image = "nappp.jpeg";
        messageText = "Sleep tight!";
    }
    else if (time < noon)
    {
        image = "morning.jpg";
        messageText = "Good Morning!";
    }
    else if (time >= night || time <= wakeuptime)
    {
        image = "night.jpg";
        messageText = "Good Night!";
    }
    else if (time >= evening)
    {
        image = "evening.jpg";
        messageText = "Good Evening!";
    }
    else
    {
        image = "good afternoon.jpg";
        messageText = "Good Afternoon!";
    }

    console.log(messageText); 
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#FF5733";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyEvent(); 
partyButton.addEventListener("click", partyEvent);


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);