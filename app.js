
// setInterval and setTimeout are most common higher order functions

//setTimeout(() => console.log('hi'), 1000)

// ctrl + c to quit running program in terminal

const pets = [
    { name: 'Luna', age: 6, type: 'cat' },
    { name: 'Luke', age: 6, type: 'cat' },
    { name: 'Leia', age: 6, type: 'cat' },
    { name: 'Daisy', age: 4, type: 'dog' },
    { name: 'Lilly', age: 1, type: 'dog' },
    { name: 'Noodle', age: 0, type: 'cat' },
    { name: 'Nugget', age: 0, type: 'cat' },
    { name: 'Freddy', age: 2, type: 'fish' },
    { name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
    { name: 'Blake', age: 6 },
    { name: 'Avery', age: 4 },
    { name: 'Riley', age: 1 }
]

// Array Methods

// const names = [ ]
// for (let i = 0; i < pets.length; i++)
// {
//     names.push(pets[i].name)
// }
// console.log(names)

// const names = 
// pets
//     .map(p => p.name)
//     .forEach(n => console.log(n))
// console.log(names)

// const names = pets.map((pet) => p.name => {   Same as above
//     return pets.name
// })  
// console.log(names)

// pets.forEach(pet => {
//     console.log(`My pets name is ${pet.name}. They are ${pet.age} years old.` )
// })

// const babyPet = pets.find(({ age }) => age === 0)  Find the first pet with a age of zero
// console.log(babyPet)

// const babyPet = pets.filter(({ age }) => age === 0) Filter all pets with the age of zero
// console.log(babyPet)

// const babyPet = pets.every(({ age }) => age === 0) Checking to see if every pets age is equal to zero
// console.log(babyPet)

const isBaby = ({ age }) => age === 0
const isNotDog = ({type}) => type !== 'dog'
const babyPetNotDogName = pets.filter(isNotDog).find(isBaby)?.name


// const babyPet = pets.some(({ age }) => age === 0)  // some is also any and returns a bool  
// console.log(babyPet)

const instructors = [
    "Ryan D Appel",
    "Brian Foote",
    "Joe Wetzel"
]

const slugs = instructors.map(i => i.toLowerCase().replaceAll(' ', '-')) // replace just does the first instance / clear console = cls
// console.log(slugs)

// const sortedPets =  pets.sort(( a,b ) => {
//     if(a.age === b.age) return 0
//     if(a.age < b.age) return -1
//     return 1
// })

// const sortedPets =  pets.sort(( a,b ) => {
//     return a.age < b.age ? -1 : a.age > b.age ? 1 : 0
// })
// console.log(sortedPets)
// const sortedPets =  pets.toSorted(( a,b ) => {
//     return a.age < b.age ? -1 : a.age > b.age ? 1 : 0
// })

// const sortedPets =  [...pets].sort(( a,b ) => {             // Leaves original array alone and creates an new array ...
//     return a.age < b.age ? -1 : a.age > b.age ? 1 : 0
// })

// Reduce
const sumAges = pets.reduce( (x, pet) =>  x + pet.age, 0)

// console.log({ sumAges })

const sentence = 'Hi there! How are you?'

const letterCount = sentence
    .toLocaleLowerCase()
    .split('')
    .reduce((countObj, letter) => {
        if (!countObj[letter]) countObj[letter] = 1
        else countObj[letter] ++
        return countObj
    }, { })

 // console.log(letterCount)

// const bla = () => console.log('bla')
// bla()
// a(bla)

 // function currying

 const add = a => b => a + b
 const add3 = add(3)
 console.log(add3(4))

 const logWith = prefix=> message  => console.log(prefix, message)
 const eLog = logWith("Erichs code")
 const jlog = logWith("John S.")

 eLog("hi")
 jlog("what's up")