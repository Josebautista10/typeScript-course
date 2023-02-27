const apples: number = 5
let speed: string = 'fast'
let hasName: boolean = false

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumber: number[] = [1, 2, 3, 4]
let truths: boolean[] = [true, false, true]

// Classes
class Car {}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 20,
  y: 10
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations
// 1. Function that returns 'any' type
const json = '{"x":10, "y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2. When we declare variable on one line then initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean
words.forEach((word) => {
  if (word === 'green') {
    foundWord = true
  }
})

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12]
let numberAboveZero: boolean | number = false
numbers.forEach((number) => {
  if (number > 0) {
    numberAboveZero = number
  }
})
