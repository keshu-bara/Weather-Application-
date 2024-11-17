const apiKey="afcd2bcec29e7438aa3677144d0cdad3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const wheatherIcon=document.querySelector(".weather-icon");



async function checkWheather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        
    }
    else{
        document.querySelector(".error").style.display="none";
        
    }
    var data= await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    const card=document.querySelector(".card");
    


    if(data.weather[0].main=="Clouds"){
        wheatherIcon.src="images/clouds.png";
        // card.style.background="linear-gradient(135deg, #8e9eab, #eef2f3, #d3d3d3)";
        // card.style.color="white";

    }
    else if(data.weather[0].main=="Clear"){
        wheatherIcon.src="images/clear.png";
        // card.style.background="linear-gradient(135deg, #ffcf33, #ff7e00, #ff4500)";
        // card.style.color="white";
    }
    else if(data.weather[0].main=="Drizzle"){
        wheatherIcon.src="images/drizzle.png";
        // card.style.background="linear-gradient(135deg, #b3d4e0, #cad9df, #6fa3ef)";

    }
    else if(data.weather[0].main=="Rain" ){
        wheatherIcon.src="images/rain.png";
        // card.style.background="linear-gradient(135deg, #2a5298, #1e3c72, #64b3f4)";
    }
    else if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze"){
        wheatherIcon.src="images/snow.png";
        // card.style.background="linear-gradient(135deg, #9fa4c4, #d3d3d3, #c1dfc4)";
        // card.style.color="black";
    }
    document.querySelector(".weather").style.display = "block";


    
}

// searchbtn.addEventListener("click" , ()=>{
//     checkWheather(searchbox.value);

// })
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWheather(searchbox.value);
    }
});




