import '../src/index.css';
import { setConsoleOptions } from '@storybook/addon-console';

import AppContextProvider from '../src/context';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFF',
      },
      {
        name: 'dark',
        value: '#1e293b',
      },
    ],
  },
};

export const decorators = [
  (story) => (
    <AppContextProvider>
      <div className="mx-auto w-screen dark:bg-slate-800 dark:text-white">
        {story()}
      </div>
    </AppContextProvider>
  ),
];

setConsoleOptions({
  panelExclude: [],
});
