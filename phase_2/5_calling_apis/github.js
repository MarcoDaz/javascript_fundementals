const GithubApi = require('./githubAPI');

class Github {
  constructor(api) {
    this.api = api;
    this.data = null;
  }

  fetch(path) {
    this.api.fetchRepositoryData(path, (response) => {
      this.data = response;
    });
  }

  getRepoData() {
    return this.data
  }
}


const api = new GithubApi();
const github = new Github(api);

github.fetch('sinatra/sinatra')
github.getRepoData()

module.exports = Github;
