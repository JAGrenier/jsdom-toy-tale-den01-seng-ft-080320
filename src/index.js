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
});


fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {
    const toysCard = document.querySelector('#toy-collection')
      
    toys.forEach(toy => {
      const toyName = document.createElement('h2')
      const toyImg = document.createElement('img') 
      const likes = document.createElement('p')
      
      toyName.textContent = toy.name
      toyImg.src = toy.image
      likes.textContent = toy.likes
      
      
      const likeButton = document.createElement('button')
      likeButton.setAttribute('class', 'like-btn')
      likeButton.setAttribute('id', toy.id)
      likeButton.innerText = "like"
      likeButton.addEventListener('click', (event) => {
        console.log(event.target.dataset);
        likes(event)
      })

      const divCard = document.createElement('div')
      divCard.setAttribute('class', 'card')
      toysCard.append(divCard)

      divCard.append(toyName, toyImg, likes, likeButton)
    })
    })


    fetch('http://localhost:3000/toys',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({name: ,image:,likes:})
    })