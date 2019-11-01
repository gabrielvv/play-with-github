const Octokit = require("@octokit/rest");

const octokit = Octokit({
    auth: process.env.GITHUB_TOKEN
});

// octokit.projects.listForOrg({
//     org: 'gabrielvv-tfm'
//   }).then(console.log)
// .catch(console.error)


// octokit.repos.createDeployment({
//     owner: 'gabrielvv-tfm',
//     repo: 'play-with-github',
//     ref: 'master',
//     description: 'test'
// })
// .then(console.log)
// .catch(console.error)

octokit.repos.createDeploymentStatus({
    owner: 'gabrielvv-tfm',
    repo: 'play-with-github',
    deployment_id: 179287269,
    description: 'lol',
    environment_url: '',
    log_url: 'https://github.com/gabrielvv-tfm/play-with-github',
    state: 'success',
    mediaType: {
        previews: ["flash"]
      }
  })