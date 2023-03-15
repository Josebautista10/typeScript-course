// all the users are getting pushed to db.json using json-server
import { User } from './models/User'
const user = new User({ id: 1, name: 'newername', age: 21 })

console.log(user.get('name'))

user.on('save', () => {
  console.log(user)
})

user.save()
