// // Load the `got` function.
const got = require('got');

// // Create a "handler" callback function.
// const handleReceivedResponse = (response) => {
//   console.log(response.body);
// }

const url = 'https://api.github.com/repos/sinatra/sinatra';

// // Call `got` and provide the handler callback function.
// // This will get called by `got` when the response is received.
// got(url).then(handleReceivedResponse);

// We can also rewrite the above using a shorter version,
// by defining the "handler" function as an anonymous function
got(url)
  .then((response) => {
    const responseObj = JSON.parse(response.body)
    console.log(responseObj);
  });