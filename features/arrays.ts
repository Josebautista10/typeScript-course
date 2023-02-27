const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates: Date[] = [new Date(), new Date()]

const carByMake: string[][] = [['f150'], ['corolla'], ['trailblazer']]

// Help with inference when extracting values
const newCar = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatibles values
carMakers.push('0') // if it was 0 it would throw error

// Helps with mapping
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-01-01']


