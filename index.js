// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, names) {
  return arr.filter(
    (matchingNames) => matchingNames.toLowerCase() === names.toLowerCase()
  );
}

function fuzzyMatch(arr, testString) {
  return arr.filter(
    (matchingNames) =>
      matchingNames.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(arr, namesName) {
  return arr.filter((obj) => obj.name === namesName);
}