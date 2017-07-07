var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a+b);
			} else {
				reject("Arguments must be numbers.");
			}
		}, 1500);
	})
};

asyncAdd(4, '9').then((res) => {
	console.log("Result: ", res)
	return asyncAdd(res, 33);
}).then((res) => {
	console.log("Should be 46", res)
}).catch((errorMessage) => {
	console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Hey, it worked!');
// 		reject('Your promise was not kept.');
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log('Success: ', message );
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// });	





// As a promise I'm going off and fetching the web data in which it will resolve and fulfill

// Reject has come if the call is unsuccessful 