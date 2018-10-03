export const getReleases = versionsUrl => {
  return fetch(versionsUrl)
    .then(res => res.json())
    .then(data => data.filter(d => d.type == "dir"))
    .then(data => data.map(d => d.name));
};

export const getRemoteYml = url => {
  //return fetch(url).then(res => res.blob());
  // return fetch(url).then(res => res.text());
  return fetch(url)
    .then(res => res.json())
    .then(data => atob(data.content));
};

/* TODO transform rawgit to api url */
/*SAMPLE /repos/:owner/:repo/contents/:path*/
export const getRemoteYmlFromIssue = (owner,repo,path) => {
  const generated = `https://api.github.com/repos/${owner}/${repo}/contents/${path}}`;
  return getRemoteYml(generated);
};
