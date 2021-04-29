console.clear()
const box = document.querySelector('.box')
const buttonRotation = document.querySelector('.button-rotation')
const buttonBackground = document.querySelector('.button-background')
const buttonRadius = document.querySelector('.button-radius')

buttonRotation.addEventListener('click', () => {
  changeClass('add', 'rotate')
})

buttonBackground.addEventListener('click', () => {
  changeClass('toggle', 'blue')
})

buttonRadius.addEventListener('click', () => {
  changeClass('remove', 'rotate')
})

function changeClass(action, className) {
  box.classList[action](className)
}
