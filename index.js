'use strict';

module.exports = (options = {}) => {
  let repoUrl;

  if (options.repoUrl) {
    repoUrl = options.repoUrl;
  } else if (options.user && options.repo) {
    repoUrl = `https://gitlab.com/${options.user}/${options.repo}`;
  } else {
    throw new Error('You need to specify either the `repoUrl` option or both the `user` and `repo` options');
  }

  const url = new URL(`${repoUrl}/issues/new`);

  const types = ['title', 'description', 'template'];

  for (let type of types) {
    let value = options[type];

    if (value === undefined) {
      continue;
    }

    if (type === 'title' || type === 'description') {
      type = `issue[${type}]`;
    }

    if (type === 'template') {
      type = 'issuable_template';
    }

    url.searchParams.set(type, value);
  }

  return url.toString();
};

module.exports.default = module.exports;
