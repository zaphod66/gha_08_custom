const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
  core.notice('Deploying to AWS S3 using JS');
}

run();
