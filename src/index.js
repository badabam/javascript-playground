import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

const terms = getAllElements('[data-js="term"]')

terms.forEach(term => {
  term.addEventListener('click', () => {
    const textElement = getElement('[data-js="text"]', term)
    textElement.classList.toggle('hidden')
  })
})
