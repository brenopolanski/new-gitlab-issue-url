# new-gitlab-issue-url

> Generate a URL for opening a new GitLab issue with prefilled title, description, and other fields

## Install

**Using NPM:**

```
npm install --save new-gitlab-issue-url
```

**Using Yarn:**

```
yarn add new-gitlab-issue-url
```

## Usage

```js
const newGitlabIssueUrl = require('new-gitlab-issue-url');

const url = newGitlabIssueUrl({
  user: 'brenopolanski',
  repo: 'hello-world',
  title: 'Hi',
  description: '\n\n\n---\nI\'m a human. Please be nice.'
});

//=> 'https://gitlab.com/brenopolanski/hello-world/issues/new?issue[title]=Hi&issue[description]=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'
```

[Try the URL](https://gitlab.com/brenopolanski/hello-world/issues/new?issue[title]=Hi&issue[description]=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.)<br>*(Don't click the "Submit issue" button!)*

## API

### newGitlabIssueUrl(options)

Returns a URL string.

#### options

Type: `object`

You are required to either specify the `repoUrl` option or both the `user` and `repo` options.

##### repoUrl

Type: `string`

The full URL to the repo.

##### user

Type: `string`

GitLab username or organization.

##### repo

Type: `string`

GitLab repo.

##### description

Type: `string`

The issue description.

##### title

Type: `string`

The issue title.

##### template

Type: `string`

Use an [issue template](https://gitlab.com/help/user/project/description_templates#description-templates).

For example, if you want to use a template at `.gitlab/issue_templates/Bug.md`, you would specify `Bug` here.

## License

[MIT License](https://brenopolanski.mit-license.org) © Breno Polanski
