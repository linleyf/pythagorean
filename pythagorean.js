var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(item, index, array){

var sum = input[index].x * input[index].x + input[index].y * input[index].y;

	return Math.sqrt(sum);

});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);



//Notes
//
// var something = function (current value, index, array)

//var numbers = [1, 4, 9];
//var roots = numbers.map(Math.sqrt);

//arr.map(callback[, thisArg])
//

