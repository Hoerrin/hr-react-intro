import { data } from './data.js'
import { renderAge, combineAge } from './helpers.js'

console.log(combineAge(data))
const container = document.querySelector('#age')
renderAge(container, data)