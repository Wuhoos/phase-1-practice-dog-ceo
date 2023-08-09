const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(dogs => {
    dogs.message.forEach(dogMessage => renderMessage(dogMessage))
})

function renderMessage(dogMessage){
    const imageContainer = document.getElementById('dog-image-container')
    const image = document.createElement('img')
    image.src = dogMessage
    imageContainer.appendChild(image)
}


const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
.then(response => response.json())
.then(dogBreed => {
    breeds = Object.keys(dogBreed.message)
    renderBreed(breeds)
    breedLetterList(breeds)
})

function renderBreed(allBreeds){
    const breedList = document.getElementById('dog-breeds')
    breedList.innerHTML = ''
    allBreeds.forEach(eachBreed => {
        const breedItem = document.createElement('li')
        breedItem.textContent = eachBreed
        breedList.appendChild(breedItem)
        breedItem.addEventListener('click', e => {
            //console.log(e.target.style)
            e.target.style.color = 'green'
        })
    })
}

function breedLetterList(breeds){
    //console.log(breeds)
    const breedDropDown = document.getElementById('breed-dropdown')
    breedDropDown.addEventListener('change', e => {
        //console.log(e.target.value)
        const filterBreed = breeds.filter(breed => {
            return e.target.value === breed[0] 
        })
        renderBreed(filterBreed)
    })
}