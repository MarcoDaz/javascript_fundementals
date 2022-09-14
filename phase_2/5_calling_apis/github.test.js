const Github = require('./github');
const GithubApi = require('./githubAPI');

// const api = new GithubApi();

// // We inject the instance of `GithubApi`:
// const github = new Github(api);

// // This method will delegate to `GithubApi.fetchRepositoryData()`
// github.fetch('sinatra/sinatra');

// // And after a few moments, this should return a JS object with the repo information.
// github.getRepoData();

describe('Github', () => {
  it('fetches sinatra/sinatra', () => {
    const mockedApi = {
      fetchRepositoryData: (repoName, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedApi);
    
    github.fetch('sinatra/sinatra')
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });
});