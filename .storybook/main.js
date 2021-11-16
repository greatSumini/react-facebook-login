module.exports = {
  stories: ['../@(docs|src)/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  typescript: {
    reactDocgen: 'none',
  },
};
