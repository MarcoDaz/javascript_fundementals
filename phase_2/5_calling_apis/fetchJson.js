const got = require('got');

const fetchJson = (url, callback) => {
  got(url).then((response) => {
    const responseObj = JSON.parse(response.body);
    callback(responseObj);
  });
};

module.exports = fetchJson;