const btn = document.getElementById('show-weather')
const input = document.getElementById('zipcode')

btn.addEventListener('click', () => {
  zip = input.innerHTML
  showWeather()
})

async function showWeather(){
  const response = await fetch()
  const data = await reponse.json()
  console.log(data)
}
