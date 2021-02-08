const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// We are manipulating the DOM below using the querySelectors and getElementById
const cellElements = document.querySelectorAll('[data-cell]') 
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

/* We start the game with this function,
*/
function startGame() {
  circleTurn = false 
  cellElements.forEach(cell => { // we are getting EACH data-cell from the HTML 
    cell.classList.remove(X_CLASS) // We are removing X_Class when its O's turn
    cell.classList.remove(CIRCLE_CLASS) // We are removing O_Class when its X's turn
    cell.removeEventListener('click', handleClick) // We are removing the EventListner (Event listener, listens for a users event like a click or somehting)
    cell.addEventListener('click', handleClick, { once: true }) // We are adding an event lister 
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}