class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string) {}

  get(index: number): string {
    return this.collection[index]
  }
}

//  Generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])

// Example of generics with functions

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// Generic constraint

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a House')
  }
}

interface Printable {
  print(): void
}

function printCarOrHouse<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printCarOrHouse([new House(), new Car()])
