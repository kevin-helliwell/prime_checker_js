const { performance } = require('perf_hooks');
function generateNumbersArray(number) {
    let numbersArray = []
    let i = 1
    while (i <= number) {
        numbersArray.push(i)
        i++
    }
    return numbersArray
}

function generateFactorsArray(number) {
    const numbersArray = generateNumbersArray(number)
    let factorsArray = []
    numbersArray.forEach(element => {
        if (number % element === 0) {
            factorsArray.push(element)
        }
    })
    return factorsArray
}

function isPrime(number) {
    const factors = generateFactorsArray(number)
    return factors.length === 2

}

function numberOfPrimes(number) {
    let primesArray = []
    const numbersArray = generateNumbersArray(number);
    numbersArray.forEach((number) => {
        if (isPrime(number)) {
            primesArray.push(number)
        }
    })
    return primesArray.length
}
const startTimer = performance.now()
console.log("Loading...")
const primesCount = numberOfPrimes(20000)
const endTimer = performance.now()
console.log("Done!", `${primesCount} primes found in ${((endTimer-startTimer)/1000).toFixed(2)} seconds!`)