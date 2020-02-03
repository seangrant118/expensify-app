// object destructuring

console.log('------object desctructuring-------')

const person = {
  name: 'Sean',
  age: 26,
  location: {
    city: "East Brunswick",
    temp: 39
  }
}

const { name, age } = person;
console.log(`${name} is ${age} years old.`)

const { city, temp: temperature } = person.location
if (city && temperature) {
  console.log(`It is ${temperature} degrees in ${city}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}
const {name: publisherName = 'Self-Published'} = book.publisher
console.log(publisherName)


// Array destructuring

console.log('-----array destructuring-----')
const address = ['3 revock road', 'East Brunswick', 'New Jersey', '08816']
const [, cityArr, state] = address;
console.log(`You are in ${cityArr} ${state}`)

const menu = ['Iced Coffee', '$2.00', '$2.25', '$2.75' ]
const [item, , mediumCost] = menu

console.log(`A Medium ${item} costs ${mediumCost}`);
