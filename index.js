// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  return newdriver = [...drivers, name]
}

function prependDriver(name){
  return newdriver = [name,...drivers]
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
