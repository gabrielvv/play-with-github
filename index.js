const Octokit = require("@octokit/rest");

const octokit = Octokit({
    token: process.env.GITHUB_TOKEN
});

octokit.repos.createDeployment({
    owner: 'gabrielvv-tfm',
    repo: 'play-with-github',
    ref: 'master',
    description: 'test'
}).then(console.log)