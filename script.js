//your JS code here. If required.

let element = document.getElementById("output");
let promise = new Promise(function(resolve,reject){
	setTimeout(
		resolve("Hello, world!")
		,1000)
})
promise.then((val)=>{
	element.value = val;
})
