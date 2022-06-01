var apiKey ='f3c7f6f0c1bd55045c6c4f5cb473b0de'

function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) =>{
        console.log(success);

        let {latitude, longitude} = success.coords;

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,current,minutely,alerts&appid=${apiKey}').then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data)
        })

    })
}

function showWeatherData (data) {
    
}