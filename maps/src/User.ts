import { faker } from '@faker-js/faker'

export class User {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `
    <div>
    <h1>User name is ${this.name}</h1>
    </div>
    `
  }
}

// export default User
