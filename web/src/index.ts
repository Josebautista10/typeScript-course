import { User } from './models/User'

const user = new User({ name: 'John', age: 26 })

user.set({ age: 55 })

user.on('change', () => {
  console.log('change 1')
})
user.on('change', () => {
  console.log('change 2')
})

user.on('save', () => {
  console.log('this is save')
})

user.trigger('save')
console.log(user.events)
