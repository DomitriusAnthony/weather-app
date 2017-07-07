console.log('Starting App');

// when we fetch data from the google 
// api we will need to wait time for the 
// data to come back. the program needs 
// to continue on. we register a callback
// , which will fire when the data returns.
setTimeout(() => {
	console.log('Inside of callback');
}, 2000);


setTimeout(() => {
	console.log('Second setTimeout')
}, 0);


console.log("Finishing up");
