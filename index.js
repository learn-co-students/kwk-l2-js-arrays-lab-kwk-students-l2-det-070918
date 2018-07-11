// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  var newArr = drivers.slice()
  newArr.push(name)
  return newArr
}

function prependDriver(name){
  var newArr = drivers.slice()
  newArr.unshift(name)
  return newArr
}

function removeLastDriver(){
  var newArr = drivers.slice()
  newArr.pop()
  return newArr
}

function removeFirstDriver(){
  var newArr = drivers.slice()
  newArr.shift()
  return newArr
}

