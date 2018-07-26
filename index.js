// Code your solution in this file

function findMatching(drivers, names) {
  return drivers.filter( drivers => drivers.toLowerCase() === names.toLowerCase());  
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter( drivers.slice(0,2) => drivers === letters); 
}
