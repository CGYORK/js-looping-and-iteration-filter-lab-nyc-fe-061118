// Code your solution in this file

function findMatching(drivers, names) {
  return drivers.filter( drivers => drivers.toLowercase() === names.toLowercase());  
}
