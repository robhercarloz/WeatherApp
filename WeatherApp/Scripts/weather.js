//Constants that will be used throught the app
const wDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const wMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//conditions coming back from dark sky to display img
const iconValues = {
    CLEARDAY: 'clear-day',
    CLEARNIGHT: 'clear-night',
    RAIN: 'rain',
    SNOW: 'snow',
    SLEET: 'sleet',
    WIND: 'wind',
    FOG: 'fog',
    CLOUDY: 'cloudy',
    PARTLY_CLOUDY_DAY: 'partly-cloudy-day',
    PARTLY_CLOUDY_NIGHT: 'partly-cloudy-night'
}

//funciton to get location LAT and LONG
function initGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail)
    } else {
        alert("Sorry, your browser does not support geolocation services.")
    }
}


function fetchLocation(apiKey, latitude, longitude) {
    var googleApiLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    fetch(googleApiLink)
        


}

//functon success if able to get location 
function success(position) {
    //adding keys here
    //dskey
    //googleapikey

    fetchLocation(googleApiKey, position.coords, latitude, position.coords.longitude);
}
//if it fails to get location
function fail() {
    alert("Sorry, your browser does not support geolocation services")
}



