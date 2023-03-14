import { User } from './models/User'

const user = new User({ name: 'John', age: 26 })

user.set({ age: 55 })

console.log(user.get('name'))
console.log(user.get('age'))
