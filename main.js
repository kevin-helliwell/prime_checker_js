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

function generatePrimesArray(number) {
    let primesArray = []
    const numbersArray = generateNumbersArray(number);
    numbersArray.forEach((number) => {
        if (isPrime(number)) {
            primesArray.push(number)
        }
    })
    return primesArray
}

function countPrimes(number) {
    let numberOfPrimes = 0
    const numbersArray = generateNumbersArray(number);
    numbersArray.forEach((number) => {
        if (isPrime(number)) {
            numberOfPrimes++
        }
    })
    return numberOfPrimes
}

const testNumber = 30000
const startTimer = performance.now()
console.log("Loading...")
const testCount = countPrimes(testNumber)
const endTimer = performance.now()
console.log("Done!", `${testCount} primes found in ${((endTimer-startTimer)/1000).toFixed(2)} seconds!`)
console.log(generatePrimesArray(testNumber))