import getAllElements from './utils/getAllElements'
const boxes = getAllElements('.box')

console.log(boxes)

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active')
  })
})
