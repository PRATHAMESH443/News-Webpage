async function getPlaces() {
  var input = document.getElementById('input');
  await new google.maps.places.Autocomplete(input);
}

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchKey = document.getElementById('input').value;
  console.log(searchKey);
  searchWeather(searchKey);
});

function searchWeather(searchKey) {
    let WeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=f7abd24267de8ebf0993e5f6bd9edd6f`;
  window
    .fetch(WeatherApi)
    .then((data) => {
      data
        .json()
        .then((weather) => {
          console.log(weather);
       let weatherData=weather.weather;
       let main=weather.main;

       output=[];
       for(let x of weatherData){
           output +=`
           <div class="col-md-12 mt-4 card">
           <div class="card-body">
           <h1>${weather.name}</h1>
           <div>
           <p class="icon">
           <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></p>
           <p><span>Temp :<span>
           <span class="temp">${weather.main.temp}&deg;c</span></p>

           <p class="float-left">Humidity :${weather.main.humidity}&deg;c</p>
           <p class="des float-left">${x.description}</p>
           <p class="des float-right">${x.main}</p>
           </div>

           </div>
           </div>
           `;
           document.getElementById("weatherTemplate").innerHTML=output;
       }

        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
