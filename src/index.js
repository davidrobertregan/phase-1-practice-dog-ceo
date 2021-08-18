console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// Add JavaScript that:
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => {
        const dogArr = dogs.message
        const imgContainer = document.querySelector("div#dog-image-container")
        // console.log(imgContainer)
        // console.log(dogArr)
        for(item in dogArr){
            const img = document.createElement('img');
            img.src = dogArr[item];
            // console.log(img)
            imgContainer.append(img)
        }
    });

    // After the first challenge is completed, add JavaScript that:

    // on page load, fetches all the dog breeds using the url above ⬆️
    // adds the breeds to the page in the <ul> provided in index.html

    // had trouble with the sub-breeds...

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(breedsObj => {
            
            const breedsList = document.querySelector('ul#dog-breeds')
            const breeds = breedsObj.message
            const genBreeds = Object.keys(breeds)
            
            addList(genBreeds, breedsList)


        })

        function addList(genBreeds, breedsList){
            for(i = 0; i < genBreeds.length; i++){
                const li = document.createElement('li')
                li.textContent = genBreeds[i] 
                breedsList.append(li)
                li.addEventListener('click', event => {
                    li.style.color = "green";
                })
            }
        
            const dropDown = document.querySelector("select#breed-dropdown")

            const lis = document.querySelectorAll("#dog-breeds li")

            // const lisArray = Array.from(lis)

            console.log(lis)
        
            const dropDownA = dropDown[0].value
            const dropDownB = dropDown[1].value
            const dropDownC = dropDown[2].value
            const dropDownD = dropDown[3].value

            dropDown.addEventListener('change', event => {
               if(dropDown.value === 'a') {
                   const aList = lis.slice(0, 6);
                   console.log(aList)
               }
            })


        }


// Once we are able to load all of the dog breeds onto the page,
//  add JavaScript so that the user can filter breeds that start 
//  with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only 
// show the breeds with names that start with the letter a. For
//  simpli dropdown only inclucity, thedes the letters a-d. However, 
//  we can imagine expanding this to include the entire alphabet.