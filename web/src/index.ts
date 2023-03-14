// all the users are getting pushed to db.json using json-server
import { User } from './models/User'
// axios.get(`http://localhost:3000/users/${this.get('id')}`)
const user = new User({ name: 'testing adding a user', age: 5 })
user.save()
console.log(user)
