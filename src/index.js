 
document.addEventListener('DOMContentLoaded', () =>{
    let allBreeds = []
    //fetches
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => eachMessage(data.message))

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        allBreeds = Object.keys(data.message)
        eachBreed(allBreeds)
    })



    
    console.log('%c HI', 'color: firebrick')
    const dogImageContainer = document.getElementById('dog-image-container')
    const dogBreeds = document.querySelector("#dog-breeds")
    
    //fetch functions
    function eachMessage(dogImgs){
        dogImgs.forEach(dogImg => {
           // console.log(dogImg)
           const imgElement = document.createElement('img')
           //console.log(imgElement)
            imgElement.src = dogImg
           dogImageContainer.appendChild(imgElement)
           
        })
    }

    function eachBreed(breedArray){
        dogBreeds.innerHTML = ''
        breedArray.forEach(breed => {
            

            oneBreed(breed)
            
        })
        
        
    } 

    function oneBreed(breed){
        console.log(breed)
         const breedLi = document.createElement('li')
    
        breedLi.innerText = breed
        dogBreeds.appendChild(breedLi)
    //    console.log(split(breedArray))
    

        breedLi.addEventListener('click', () => {
            breedLi.style.color = 'red'
        })
    }
        const dropDown = document.querySelector('#breed-dropdown')
        dropDown.addEventListener('change', (e) =>{
            
            const filteredBreeds = allBreeds.filter(breed => breed[0] === e.target.value)
            eachBreed(filteredBreeds)
          }) 
})

