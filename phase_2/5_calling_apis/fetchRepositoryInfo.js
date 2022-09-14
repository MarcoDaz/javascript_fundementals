const got = require('got');
// Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which

// fetches repository data from Github's API
// calls the given callback with the received data (as a JS object):

const fetchRepositoryInfo = (path, callback) => {
  const url = 'https://api.github.com/repos/' + path;
  got(url).then((response) => {
    const responseObj = JSON.parse(response.body);
    callback(responseObj);
  });
};

// In node

// const url = 'https://api.github.com/repos/sinatra/sinatra';
fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse.id);
});

// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }