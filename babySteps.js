//take into account first two arguments
var argumentsArr = process.argv.slice(2,process.argv.length);

var sum = argumentsArr.reduce(function(sum,num){
	return Number(sum) + Number(num);
})

console.log(sum);