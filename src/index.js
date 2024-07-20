let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  function fetchToys() {
    //step 2. use fetch() to make a Get Request to the API
    fetch('http://localhost:3000/toys')
    .then(response =>response.json())//Parse the json from the response
    .then(toys => 
      //iterate over the array of toy objects
      toys.forEach(toy => {
        //create a card for each toy abd add it to the dom
        creatToyCard(toy)
      })
    ).catch(error => console.error('Error fecthong toys:', error))
  }
  
  function creatToyCard(toy) {
    //Get the element with the ID 'toy-collection' to add the toy card to it
    const toyCollection = document.getElementById('toy-collection')

    //create a div element to serve as the toy card
    const toyCard = document.createElement('div')
    toyCard.className = 'card' //add the 'card' class to the div
    
    //add the 'card' class to the div
    const toyName = document.createElement('h2');
    toyName.textContent = toy.name // Set the text content to the toy's name

    //create an image element for the for the toy's image
    const toyimage = document.createElement('p')
    toyimage.src = toy.image //set the src attribute for the image url
    toyimage.className = 'toy-avatar'; // Add the 'toy-avatar' class to the img

    //create a p element for the toy's likes
    const toyLikes = document.createElement('p')
    toyLikes.textContent = `${toy.likes} likes` //ste the textcontent to the toys likes

    //create a button elemnt for the like button
    const likeButton = document.createElement('button')
    likeButton.className = 'like-btn' // Add the 'like-btn' class to the button
    likeButton.id = toy.id //Set the id attribute to the toy's id
    likeButton.textContent = 'Like ❤️'// Set the text content to 'Like ❤️'

    //Append all the elemts (name, image, likes, buttons) to the toycard
    toyCard.appendChild(toyName)
    toyCard.appendChild(toyimage)
    toyCard.appendChild(toyLikes)
    toyCard.appendChild(likeButton)

    //append the toy card to the toy collection
    toyCollection.appendChild(toyCard)


})

fetchToys();
