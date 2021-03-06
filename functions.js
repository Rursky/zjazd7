const helloWorld = () => {
    console.log("Hello World1")
}

const add = (a, b) => {
    console.log(a + b)
}

const someText = "Tytuł stony"

module.exports = { // export funkcji
    helloWorld,
    add,
    someText
}