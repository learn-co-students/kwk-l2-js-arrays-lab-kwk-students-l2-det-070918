// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph")
  drivers
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob")
  drivers
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver (name) {
  var car = drivers.slice()
  car.push(name)
  return car}
  
function prependDriver(name) {
  var car = drivers.slice()
  car.unshift(name)
  return car}
  
function removeLastDriver(name) {
 var car = drivers.slice()
  car.pop(name)
  return car}
  
  function removeFirstDriver(name) {
 var car = drivers.slice()
  car.shift(name)
  return car}


