const inputSearch = document.getElementById('inputCity')

//adicionar valores a tela
const resultT = document.getElementById('resultTemp')
const grausC = document.getElementById('txtC')
const iconImg = document.getElementById('nuvens')
const climaTxt = document.getElementById('txtclima')


//chave api
const apiKey = "8caa89d30b8fd49faaf77eb1539ceabc"


const getApidata = async (cityValue) => {
    const showData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&lang=pt_br&units=metric`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        console.log(data.weather[0].icon)//icone
        console.log(data.weather[0].main)//nuvens
        console.log(data.weather[0].description)//nublado
        console.log(data.name)//nome cidade
        console.log(data.main.temp)
        console.log(data.main.temp_max)//temperatura maxima 
        console.log(data.main.temp_min)//temperatura mininma
        resultT.innerHTML = `
        
        <div class="grausC">
        <p>${data.name}</p> -
        <p>Temp: ${Math.floor(data.main.temp)}°C</p>
        </div>
        
        
        <div class="nuvensClima">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="nuvem">
        <p id="txtclima">${data.weather[0].description}</p>
        </div>

        <div id="tempMaxeMin">
        <p>Temp Maxima: ${Math.floor(data.main.temp_max)}°C | Temp Min: ${Math.floor(data.main.temp_min)}°C </p>
        
        </div>
        

        `
    })
}
const btnSearch = () => {
    if(inputSearch.value.trim() == ''){
        return alert('Cidade não definida')
    } else{
        let cityValue = inputSearch.value
        
        getApidata(cityValue)
    }
    inputSearch.value = ''
}




    



