import test from 'ava';
import newGitlabIssueUrl from '.';

test('main', t => {
  const user = 'brenopolanski';
  const repo = 'hello-world';
  const title = 'Hi';
  const description = '\n\n\n---\nI\'m a human. Please be nice.';

  const urlString = newGitlabIssueUrl({
    user,
    repo,
    title,
    description
  });

  const { searchParams } = new URL(urlString);

  t.true(urlString.includes(user));
  t.true(urlString.includes(repo));
  t.is(searchParams.get('issue[title]'), title);
  t.is(searchParams.get('issue[description]'), description);
});

test('repoUrl option', t => {
  const repoUrl = 'https://gitlab.com/brenopolanski/hello-world';
  const title = 'Hi';
  const description = '\n\n\n---\nI\'m a human. Please be nice.';

  const urlString = newGitlabIssueUrl({
    repoUrl,
    title,
    description
  });

  const { searchParams } = new URL(urlString);

  t.true(urlString.startsWith(repoUrl));
  t.is(searchParams.get('issue[title]'), title);
  t.is(searchParams.get('issue[description]'), description);
});

test('throws when required options are not specified', t => {
  t.throws(() => {
    newGitlabIssueUrl();
  }, /need to specify either/);
});
