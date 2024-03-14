
//practicing

//operations

let monthlyRent = 1000

let yearlyRent = monthlyRent * 12
console.log(yearlyRent)



//regular sentence

console.log(`Hello World`)



//string with template

let firstName = `Nasya`
let lastName = `Poliakoff`

let sentence = `Hello ${firstName} ${lastName}! How are you?`

console.log(sentence)



//if + else

let skyIsBlue = true

if (skyIsBlue) {
    console.log(`The sky is blue`)
} else {
    console.log(`The sky is not blue.`)
}



//if + else if + else

let friends = 10
if (friends === 0) {
    console.log(`Friendless`)
} else if (friends <= 4) {
    console.log(`Some Friends`)
} else {
    console.log(`Many Friends`)
}



//addition with ++

let applesIHave = 5

applesIHave++

console.log(applesIHave)



//for loop

let amigos=0
for (let i=0; i<10; i++){
    amigos++
}

console.log(amigos)




//homework from lesson, repeat emoji 10 times

let emoji = `👁`
let space = ` `

for (let i=0; i<10; i++){
    space = space + emoji
}

console.log(space)




//faster way to do it, emojis count as 2 spots sometimes

let tooth = `🦷`

console.log(``.padStart(20,tooth))




//functions

//adding up

function addTen(number) {
    return number + 10
}

let finalAnswer = addTen(9)

console.log(finalAnswer)




//function that helps with emails

function greet(firstName, lastName, honorific, greeting){
    return `${greeting} ${honorific} ${lastName}! I'm thrilled you could join us, ${firstName}! Enjoy your stay, ${honorific} ${lastName}.`
}

console.log (greet(`Nasya`, `Poliakoff`, `Miss`, `Salutations`))



//my example

function friendlyLetter (friendlyName, affectionateName, name, verb) {
    return `${friendlyName}, I ${verb} you. You are ${affectionateName}! This letter is for ${name}.`
}

console.log (friendlyLetter(`My Friend`, `My Best Friend`, `Alex`, `appreciate`))




//new way of writing functions

let squik = (squirrelNoise) => {
    console.log(`squik, squik`)
}

console.log (squik)

squik ( )



//scope doesn't let you console.log a function outside of their curly brackets block

//you have to define the `let`s before the bracket opens otherwise they're gonna get lost

function addTwo(number) {
    let someVariable = "huh"
    console.log(someVariable)
    return number + 2
}

let amigos2=0
for (let i=0; i<10; i++){
    amigos2++
}

console.log(i) //doesn't log
