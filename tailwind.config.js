/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
];
export const theme = {
  extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require('flowbite/plugin')];