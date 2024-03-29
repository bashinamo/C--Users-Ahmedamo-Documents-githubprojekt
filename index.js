// Stockholms värder
async function getWeather(){
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=8102f14f4c80b2bf57eb41a0c18b3cc7&units=metric');
  const data = await res.json();
  let temp = Math.round(data.main.temp);
  let main = data.weather[0].main;
  
  const iconcontainer4 = document.querySelector('.iconcontainer4');
  iconcontainer4.innerHTML = 'Stockholm  ' + temp;

  if(main == 'Snow'){
    iconcontainer4.innerHTML += '<i class="far fa-snowflake"></i>';
  } else if (main == 'Rain'){
    iconcontainer4.innerHTML += '<i class="fas fa-cloud-rain"></i>';
  } else if(main == 'Clear'){
    iconcontainer4.innerHTML += '<i class="fas fa-sun"></i>';
  } else if(main == 'Clouds'){
    iconcontainer4.innerHTML += '<i class="fas fa-cloud"></i>';
  }
}

getWeather();

// Tokyo värder
async function getTokyoWeather(){
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=8102f14f4c80b2bf57eb41a0c18b3cc7&units=metric');
  const data = await res.json();
  let temp = Math.round(data.main.temp);
  let main = data.weather[0].main;
  
  const iconcontainer5 = document.querySelector('.iconcontainer5');
  iconcontainer5.innerHTML = 'Tokyo ' + temp;

  if(main == 'Snow'){
    iconcontainer5.innerHTML += '<i class="far fa-snowflake"></i>';
  } else if (main == 'Rain'){
    iconcontainer5.innerHTML += '<i class="fas fa-cloud-rain"></i>';
  } else if(main == 'Clear'){
    iconcontainer5.innerHTML += '<i class="fas fa-sun"></i>';
  } else if(main == 'Clouds'){
    iconcontainer5.innerHTML += '<i class="fas fa-cloud"></i>';
  }
}

getTokyoWeather();

// Tokyo värder
async function getBagdadWeather(){
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bagdad&appid=8102f14f4c80b2bf57eb41a0c18b3cc7&units=metric');
  const data = await res.json();
  let temp = Math.round(data.main.temp);
  let main = data.weather[0].main;
  
  const iconcontainer6 = document.querySelector('.iconcontainer6');
  iconcontainer6.innerHTML = 'Bagdad ' + temp;

  if(main == 'Snow'){
    iconcontainer6.innerHTML += '<i class="far fa-snowflake"></i>';
  } else if (main == 'Rain'){
    iconcontainer6.innerHTML += '<i class="fas fa-cloud-rain"></i>';
  } else if(main == 'Clear'){
    iconcontainer6.innerHTML += '<i class="fas fa-sun"></i>';
  } else if(main == 'Clouds'){
    iconcontainer6.innerHTML += '<i class="fas fa-cloud"></i>';
  }
}

getBagdadWeather();






function updateClock(){
    const now = new Date();
    let timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

    document.getElementById('klocka').innerHTML = timeString;
}
setInterval(updateClock, 1000);
    updateClock(); 


    // Snabblänkar
    function iconcontainer() {
        window.location.href = 'https://www.google.com';
      }
      function iconcontainer1(){
        window.location.href ='https://www.linkedin.com';
      }
      function iconcontainer2(){
        window.location.href = 'https://www.youtube.com/';
      }
      function iconcontainer3(){
        window.location.href = 'https://github.com/';
      }

    // Vädret

    
    // lägga till
    

    // anteckningar
    const sparaKnapp = document.getElementById('sparaknapp');

    if(localStorage.anteckningarText == undefined){
      anteckningarText.value = '';
    }
    else {
      anteckningarText.value = localStorage.anteckningarText;
    }

    sparaKnapp.addEventListener('click', function(){
        localStorage.anteckningarText = anteckningarText.value;
        alert('Sparades')
    })








const dashboardNameText = document.getElementById('dashboardNameText');
const dashboardName = document.getElementById('dashboardName');

if(localStorage.dashboardNameText == undefined || localStorage.dashboardNameText == ''){ // Kika om det inte finns i lokern
  dashboardName.textContent = 'Ahmed Tememi Dashboard'; // Gör så
}  
else{ //Om det finns
  dashboardName.textContent = localStorage.dashboardNameText; // Skriv vad som finns i lager
}

dashboardNameText.addEventListener('input', function(){
  dashboardName.textContent = dashboardNameText.value;
  localStorage.dashboardNameText = dashboardNameText.value; // Skriv i lager vad som i texten 
});





