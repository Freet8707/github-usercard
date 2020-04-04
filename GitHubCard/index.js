/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const instructorsArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

class UserCard {
  constructor(user){
    this.card = document.createElement("div")
    this.cardImg = document.createElement("img")
    this.cardContent = document.createElement("div")
    this.userActualName = document.createElement("h3")
    this.userName = document.createElement("p")
    this.location = document.createElement("p")
    this.profileLink = document.createElement("p")
    this.link = document.createElement("a")
    this.followers = document.createElement("p")
    this.following = document.createElement("p")
    this.bio = document.createElement("p")

    this.cardImg.setAttribute("src", user.data.avatar_url)
    this.userActualName.textContent = user.data.name
    this.userName.textContent = user.data.login
    this.location.textContent = `Location: ${user.data.location}`
    this.profileLink.textContent = `Profile: ${this.link}`
    this.link.textContent = user.data.url
    this.link.setAttribute("href", user.data.url)
    this.followers.textContent = `Followers: ${user.data.followers}`
    this.following.textContent = `Following: ${user.data.following}`
    this.bio.textContent = `Bio: ${user.data.bio}`

    this.card.classList.add("card")
    this.cardContent.classList.add("card-info")
    this.userActualName.classList.add("name")
    this.userName.classList.add("username")

    this.profileLink.appendChild(this.link)

    this.cardContent.appendChild(this.userActualName)
    this.cardContent.appendChild(this.userName)
    this.cardContent.appendChild(this.location)
    this.cardContent.appendChild(this.profileLink)
    this.cardContent.appendChild(this.followers)
    this.cardContent.appendChild(this.following)
    this.cardContent.appendChild(this.bio)

    this.card.appendChild(this.cardImg)
    this.card.appendChild(this.cardContent)

    return this.card
  }
}


const cardsHolder = document.querySelector(".cards")
axios
  .get("https://api.github.com/users/Freet8707")
  .then(response => {
    // console.log(response)
    let userCard = new UserCard(response)
    cardsHolder.appendChild(userCard)
  })
  
instructorsArray.forEach((element) => {
  axios
  .get(`https://api.github.com/users/${element}`)
  .then(response => {
    let userCard = new UserCard(response)
    cardsHolder.appendChild(userCard)
  })
})
  
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
