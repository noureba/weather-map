const key = "d7a68dacd5172210169eab5f524ca7da"
const city = document.getElementById('city')
const search = document.getElementById('btn')
const Agadir = document.getElementById('Agadir')
const London = document.getElementById('London')
const Paris = document.getElementById('Paris')
const degre = document.getElementById('degre')
const cityName = document.getElementById('cityName')
const date = document.getElementById('date')
const weatherIcon = document.getElementById('wheatherIcon')
const main = document.getElementById('main')
const desc = document.getElementById('desc')
const speed = document.getElementById('speed')





const def = async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
}
def()

search.addEventListener('click', async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
})

Agadir.addEventListener('click', async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${Agadir.textContent}&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
})
London.addEventListener('click', async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${London.textContent}&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
})
Paris.addEventListener('click', async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${Paris.textContent}&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
})
New.addEventListener('click', async ()=>{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${New.textContent}&appid=${key}`
    const req = await fetch(api)
    const data = await req.json()
    degre.innerText = data.main.temp.toFixed() + "°F"
    cityName.innerText = data.name
    date.innerText = new Date().toUTCString()
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    main.innerText = data.weather[0].main
    desc.innerText = data.weather[0].description
    speed.innerText = data.wind.speed + "Km/h"
})



