// import type { StorybookViteConfig } from '@storybook/builder-vite';
const tsconfigPaths = require('vite-tsconfig-paths');

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-console',
    'storybook-tailwind-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    };
  },
};

module.exports = config