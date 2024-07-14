const apikey = "0d13e30e5df8a9de83b4027fd8782884";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?appid=0d13e30e5df8a9de83b4027fd8782884&units=metric&q=";
const searchbox = document.querySelector("#input1");
const searchbtn = document.querySelector("#btn1");
const weather_icon = document.querySelector('#Weathericon'); 
const back_IMG = document.querySelector("body");
const  display_wea = document.querySelectorAll('.Weather_1');



async function Checkweather(city){
    const response = await fetch(apiurl + city +'&appid=${apikey}');

    if(response.status == 404){
      document.querySelector('.error').style.display = "block";
      document.querySelector('.Weather_1').style.display = "none";
 
   }else{

    let data = await response.json();

 document.querySelector('.city').innerHTML = data.name;
 document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
 document.querySelector('.hum').innerHTML = data.main.humidity +"%";
 document.querySelector('.windV').innerHTML = data.wind.speed + "km/h";
 document.querySelector('#min_deg').innerHTML = Math.round(data.main.temp_min) + "°C";
 document.querySelector('#max_deg').innerHTML = Math.round(data.main.temp_max) + "°C";



 if(data.weather[0].main == "Clouds"){
    weather_icon.src = "clouds.png";
    back_IMG.style.backgroundImage = "url('clody.webp')";


 }
 else if(data.weather[0].main == "rain"){
    weather_icon.src = "rain.png";
    back_IMG.style.backgroundImage = "url('raining.jpg')";

 }
 else if(data.weather[0].main == "Clear"){
    weather_icon.src = "clear.png";
    back_IMG.style.backgroundImage = "url('CLEAR.jpg')";

 }
 else if(data.weather[0].main == "Drizzle"){

    weather_icon.src = "drizzle.png";
    back_IMG.style.backgroundImage = "url('driz.jpg')";
 }
 else if(data.weather[0].main == "Mist"){

    weather_icon.src = "mist.png";
    back_IMG.style.backgroundImage = "url('MIST_WEA.jpg')";
 }
     document.querySelector('.Weather_1').style.display = "block";
     document.querySelector('.error').style.display = "none";


   }    


};

searchbtn.addEventListener("click", function (){
    Checkweather(searchbox.value);

})

 