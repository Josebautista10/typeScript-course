interface Car {
  name: string
  year: number
  broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 1999,
  broken: true,
  summary():string {
    return `Name is ${this.name}`
  } 
}

const printCar = (car: Car): void => console.log(car.summary())

printCar(oldCivic)