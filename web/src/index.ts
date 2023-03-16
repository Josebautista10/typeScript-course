// all the users are getting pushed to db.json using json-server
import { User } from './models/User'
import { UserForm } from './views/UserForm'
const user = User.buildUser({ name: 'hey', age: 20 })
const userForm = new UserForm(document.getElementById('root')!, user)

console.log(userForm)
userForm.render()
