// Code your solution here:
function driversWithRevenueOver(collection, number) {
  let newCollection = collection.filter(function(individual) {return individual.revenue > number})
  return newCollection
}

function driverNamesWithRevenueOver(collection, number) {
  let newCollection = driversWithRevenueOver(collection, number).map(function(i) {return i.name})
}

function exactMatch() {

}

function exactMatchToList() {

}
