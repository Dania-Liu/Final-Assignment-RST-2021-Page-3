// Sets default value.
let secondAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('second-submit').addEventListener('click', secondSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('second-hint').addEventListener('click', secondHint)

// Creates function that activates when the user clicks on "Submit" for the second riddle.
function secondSubmit () {
  secondAnswer = document.getElementById('second-answer').value
  if (secondAnswer === 'short') {
    document.getElementById('second-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('second-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the second riddle.
function secondHint () {
  document.getElementById('second-picture').style.display = 'block'
}
