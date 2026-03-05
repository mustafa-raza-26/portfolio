const weather = document.getElementById('weather');
const appoinment = document.getElementById('appoinment'); 
const portfolio = document.getElementById('portfolio');
const project = document.getElementById('project');

weather.addEventListener('click', () =>{
    window.location.href = 'https://mr-weather-web.vercel.app/'
})
appoinment.addEventListener('click', () =>{
    window.location.href = 'https://mustafa-raza-26.github.io/Final-Test/'
})
portfolio.addEventListener('click', () =>{
    window.location.href = 'https://mustafa-raza-26.github.io/portfolio/'
})
project.addEventListener('click', () =>{
    window.location.href = 'https://github.com/mustafa-raza-26?tab=repositories'
})
