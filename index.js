// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver (name) {drivers.push(name);}
function destructivelyPrependDriver (name) {drivers.unshift(name);}
function destructivelyRemoveLastDriver (name) {drivers.pop(name);}
function destructivelyRemoveFirstDriver (name) {drivers.shift(name);}
function appendDriver (name) {var car = drivers.slice()
car.push(name)
return car}
function prependDriver (name) {var car = drivers.slice()
car.unshift(name)
return car}
function removeLastDriver (name) {var car = drivers.slice()
car.pop(name)
return car}
function removeFirstDriver (name) {var car = drivers.slice()
car.shift(name)
return car}