// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.querySelector("#modal")
modal.className = "hidden"

mimicServerCall()
.then()
.then(changeTheHeart())
.catch(() => {
  modal.className = " "
  modal.setTimeout((modal) => {modal.className = "hidden"}, 3000)
})

let heart = document.querySelectorAll(".like span")

function changeTheHeart() {
  
  heart.className = "activated-heart"
}

heart.addEventListener("click", () => {
  heart.className = "like-glyph"
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
