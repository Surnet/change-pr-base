const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get parameters
  const [owner, repo] = core.getInput('repo').split('/');
  const pullNumber = core.getInput('pull-number');
  const newBase = core.getInput('new-base');
  const token = core.getInput('token');
  // API Request
  const octokit = github.getOctokit(token);
  octokit.rest.pulls.update({
    owner: owner,
    repo: repo,
    pull_number: pullNumber,
    base: newBase
  });
} catch (error) {
  core.setFailed(error.message);
}
