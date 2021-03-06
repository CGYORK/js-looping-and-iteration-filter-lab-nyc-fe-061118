// Code your solution in this file

function findMatching(drivers, names) {
  return drivers.filter( drivers => drivers.toLowerCase() === names.toLowerCase());  
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter( drivers => drivers.slice(0,letters.length) === letters); 
}

function matchName(drivers, names) {
  return drivers.filter( drivers => drivers.name === names);  
}