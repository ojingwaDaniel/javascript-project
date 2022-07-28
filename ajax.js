let buttom = document.querySelector('.buttomClass')
const Name = document.getElementById('name')
const gender = document.getElementById('gender')
const skinColor = document.getElementById('skinColor')
buttom.addEventListener('click',(a) =>{
   a.preventDefault()
   let random = Math.ceil(Math.random() * 83)
   fetch(`https://swapi.dev/api/people/${random}/`)
       .then(data => data.json())
       .then(character =>{
         console.log(character)
         Name.innerHTML = character['name']
         gender.innerHTML = character['gender']
         skinColor.innerHTML = character['skin_color']
      })


})

