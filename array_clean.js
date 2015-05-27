// Clean Array

function squeakyClean(arr) {
	
	for (var i=0; i < arr.length; i++) {
		
		if (arr[i] === null) {
			arr.splice(i,1);
			console.log("I Am Null");
			console.log(arr);
			console.log(i);
			i--;
			
		} else if (arr[i] === 0)  {
			arr.splice(i,1);
			console.log("I Am Zero");
			console.log(arr);
			console.log(i);
			i--;
			
		} else if (arr[i] === "") {
			arr.splice(i,1);
			console.log("I Am Empty");
			console.log(arr);
			console.log(i);
			i--;
		
		} else if (arr[i] === undefined) {
			arr.splice(i,1);
			console.log("I Am Undefined");
			console.log(arr);
			console.log(i);
			i--; 
		}
		
		
	}
	return arr; // this works because for loops don't have a block scope, hence the arr is available outside of the scope.
}

var originalArray = ['click1','click2',null,'','','submitForm'];

squeakyClean(originalArray);