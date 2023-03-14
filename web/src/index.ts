import { User } from './models/User'

const user = new User({ name: 'John', age: 26 })

user.set({ age: 55 })

user.on('click', () => {})

console.log(user.events);
