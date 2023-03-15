// all the users are getting pushed to db.json using json-server
import { User } from './models/User'
const user = new User({ name: 'testing adding a user', age: 5 })

console.log(user.get('name'))

user.on('change' , () => {
  console.log('this is the change event on the user');
})

user.trigger('change')

user.set({name: 'newName23'})

