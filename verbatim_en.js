/*********************************************

TIP FOR THE PROS:
--- You can use html tags
    to improve your Verbatim text:
    See the example bellow:

    MSG_SINGULAR_EMAIL = "<i>%</i> unread e-mail"
        
        or, for colouring it:

     MSG_SINGULAR_EMAIL = "<font color='red'>%</font> unread e-mail"

*********************************************/

var
ERROR_WORD = "error!",
ERROR_INTERJECTION = "Oh oh.",
WRONG_CITY_CODE = "wrong city code",
NO_CITY_CODE = "no city code defined",
CONNECTION_PROBLEM = "connection problem",

WELCOME_SP1 = "Welcome to Verbatim! It's our first time together, so let me help you!",
WELCOME_SP2 = "1st: Make sure you have defined on Settings App, your City Code, for retrieving weather data! ... 2nd: You can hide status bar for saving more room. Actually, all info you need, will be displayed by me, and 3rd: check out, the Settings app for more customization details, and there, you can get my developer contact information, for any troubleshooting.",
WELCOME_SP3 = "Enjoy this clean experience!",

WELCOME_TXT0 = "Welcome to <b>Verbatim</b>!",
WELCOME_TXT1 = "<b>PLEASE</b>! Listen to me.",
WELCOME_TXT2 = "Set your city code on <b>Settings app</b>",
WELCOME_TXT3 = "The available <b>options</b> are:",
WELCOME_TXT4 = "- Text <b>animations</b> like this one",
WELCOME_TXT5 = "- <b>Hide</b> status bar for room save",
WELCOME_TXT6 = "<b>Suggestion</b>: hide lockscreen stuff",
WELCOME_TXT7 = "like <b>slide to unlock</b> text,",
WELCOME_TXT8 = "or simply <b>customize</b> it",

MSG_SINGULAR_EMAIL = "<b>%</b> unread e-mail",
MSG_PLURAL_EMAIL = "<b>%</b> unread e-mails",

MSG_SINGULAR_APPS = "<b>%</b> app to update",
MSG_PLURAL_APPS = "<b>%</b> pending updates",

MSG_SINGULAR_SMS = "<b>%</b> message to read",
MSG_PLURAL_SMS = "<b>%</b> messages to read",

MSG_SINGULAR_CALLS = "also, <b>%</b> missed call",
MSG_PLURAL_CALLS = "also, <b>%</b> missed calls",

MSG_BATTERY_ALMOST_FULL = " <b>almost</b> fully charged battery",
MSG_BATTERY_FULL_PLUGGED = " <b>fully</b> loaded, unplug your charger",
MSG_BATTERY_FULL = " <b>fully</b> charged",
MSG_BATTERY_CHARGING = " <b>%</b> and charging",
MSG_BATTERY_DRAINING = " <b>%</b> and draining",


/* Use http://en.wikipedia.org/wiki/ISO_8601 for formating */
DATE_FORMAT = "EEEEdMMMMdYYYY",


end_of_definitions = 'en'; 


WEATHER_CONDITION = [
"tornado",
"tropical storm",
"hurricane",
"severe thunderstorms",
"thunderstorms",
"mixed rain and snow",
"mixed rain and sleet",
"mixed snow and sleet",
"freezing drizzle",
"drizzle",
"freezing rain",
"showers",
"showers",
"snow flurries",
"light snow showers",
"blowing snow",
"snow",
"hail",
"sleet",
"dust",
"foggy",
"haze",
"smoky",
"blustery",
"windy",
"cold",
"cloudy",
"mostly cloudy", /* night */
"mostly cloudy", /* day */ 
"partly cloudy", /* night */
"partly cloudy", /* day */ 
"clear", /* night */
"sunny",
"fair", /* night */
"fair", /* day */ 
"mixed rain and hail",
"hot",
"isolated thunderstorms",
"scattered thunderstorms",
"scattered thunderstorms",
"scattered showers",
"heavy snow",
"scattered snow showers",
"heavy snow",
"partly cloudy",
"thundershowers",
"snow showers",
"isolated thundershowers"];

WEATHER_CONDITION[3200] ="not available";
/*
	(star 		*	condition)
	(percent	%	temperature)
	(sharp		#	city name)
*/
var
WEATHER_TXT = "<b>*</b> at <b>%</b>",
WEATHER_ICON_LINE = " in <b>#</b>";

/* Function that returns the number in words */
Number.prototype.toWords=function(){var a=["","thousand","million","billion","trillion"];var h=["zero","one","two","three","four","five","six","seven","eight","nine"];var k=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];var e=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];var l=this.toString();l=l.replace(/[\, ]/g,"");if(l!=parseFloat(l)){return"not a number"}var j=l.indexOf(".");if(j==-1){j=l.length}if(j>15){return"too big"}var b=l.split("");var f="";var c=0;for(var d=0;d<j;d++){if((j-d)%3==2){if(b[d]=="1"){f+=k[Number(b[d+1])]+" ";d++;c=1}else{if(b[d]!=0){f+=e[b[d]-2]+" ";c=1}}}else{if(b[d]!=0){f+=h[b[d]]+" ";if((j-d)%3==0){f+="hundred "}c=1}}if((j-d)%3==1){if(c){f+=a[(j-d-1)/3]+" "}c=0}}if(j!=l.length){var g=l.length;f+="point ";for(var d=j+1;d<g;d++){f+=h[b[d]]+" "}}return f.replace(/\s+/g," ")};

/* Use the function bellow if you don't have find a function that converts numbers to words in your language */
// Number.prototype.toWords=function(){return this;}
