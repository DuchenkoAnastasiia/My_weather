const mainBlock = document.querySelector('.main_block')

const imgWeather = []

const options = {
    enableHighAccuracy: true,
};
  
function success(pos) {
    const crd = pos.coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=minutely&units=metric&appid=92c7635674c2c7ad1ddba07bb9b618a6`).then(data => data.json()).then(data => {
        mainBlock.insertAdjacentHTML("beforebegin",
        `
        <div class="current_weather box">
            <h3>CURRENT WEATHER</h3>
            <div class=blocks>
                <div class=block>
                    <img class=img src="${data.current.weather[0].icon}">
                    <p class=weather>${data.current.weather[0].description}</p>
                </div>

                <div class=block>
                    <p class=current_city>${data.timezone}</p>
                    <p class=current_temp temp>${data.current.temp}&#176;</p>
                    <p class=current_title>Real feel ${data.current.feels_like}&#176;</p>
                </div>

                <div class=block>
                    <p class=current_title>Sunrise: <span class=current_text>${data.current.sunrise}</span></p>
                    <p class=current_title>Sunset: <span class=current_text>${data.current.sunset}</span></p>
                </div>
            </div>
        </div>

        <div class="hourly box">
            <h3>HOURLY</h3>
        </div>
        `
        )
    });    
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};
  
navigator.geolocation.getCurrentPosition(success, error, options);

  
