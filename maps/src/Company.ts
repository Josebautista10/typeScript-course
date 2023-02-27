import { faker } from '@faker-js/faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company name is ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `
  }
}
