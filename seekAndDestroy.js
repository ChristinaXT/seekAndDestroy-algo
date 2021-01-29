// From the initial array, (the first argument in the destroyer function)
// followed by one or more arguments. Remove all elements from the initial
// array that are of the same value as these arguments

function destroyer (arr) {

let args = Array.from(arguments);
 args.splice(0,1);
 let targets = args;

return arr.filter(function(num) {
  return !targets.includes(num);
});

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
