
const card =document.querySelector(".card");
const search=document.querySelector(".search button");
const weather=document.querySelector(".weather");
const details=document.querySelector(".details");
const error404=document.querySelector(".not-found");


search.addEventListener('click',()=>{

    const APIKey='a302b2918355a15ed5576f920905a359';
    const city=document.querySelector('.search input').value;


    

    if(city==='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{

        if(json.cod=='404'){
            card.style.height='550px';
            weather.classList.remove('active');
            details.classList.remove('active');
            error404.classList.add('active');
            
           
            return;
        }

        card.style.height='555px';
        weather.classList.add('active');
        details.classList.add('active');
        error404.classList.remove('active');
        
        
        const image=document.querySelector('.weather .weather-icon');
        const temperature=document.querySelector('.weather .temp');
        const cityName=document.querySelector('.weather .city-name');
        const humidity=document.querySelector('.details .humidity');
        const wind=document.querySelector('.details .wind');

        cityName.innerText = json.name;
        temperature.innerText = `${Math.round(json.main.temp)}°C`;
        humidity.innerText = `${json.main.humidity}%`;
        wind.innerText = `${json.wind.speed}km/hr`;


        switch (json.weather[0].main.toLowerCase()) {
            case 'clear':
                image.src='assets/clear.png';
                break;
            
            case 'clouds':
                image.src='assets/clouds.png';
                break;    
            
                
            case 'rain':
                image.src='assets/rain.png';
                break; 
                
            case 'snow':
                image.src='assets/snow.png';
                break;

            case 'mist':
                image.src='assets/mist.png';
                break; 

            case 'drizzle':
                image.src='assets/drizzle.png';
                break; 
        
            default:
                image.src='assets/rain.png';
        }

    })
    .catch(err=>console.error('Error fetching weather data:',err));
});

