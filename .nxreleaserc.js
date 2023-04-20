module.exports = {
  npm: false,
  repositoryUrl: 'https://github.com/jacobtipp/monorepo-release-demo.git',
  preset: 'conventionalcommits',
  releaseRules: [
    { type: 'docs', scope: 'readme', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'style', release: 'patch' },
    { type: 'build', scope: 'deps', release: 'patch' },
    { type: 'revert', release: 'patch' },
    { type: 'perf', release: 'patch' },
  ],
  plugins: [
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
  ],
  branches: [
    'main',
    {
      name: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'rc',
      prerelease: true,
    },
    {
      name: 'fix-*',
      prerelease: true,
    },
    {
      name: 'feat-*',
      prerelease: true,
    },
  ],
};
