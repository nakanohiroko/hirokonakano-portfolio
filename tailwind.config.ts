import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-0': {
          flex: '0 0 auto',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    /**
     * カラーを定義
     * ※Tailwindデフォルトカラーは使用しないで、ここで定義されたカラーのみ使用する
     * @example
     * `DEFAULT`：`text-gray`や`text-alert`で呼び出す
     * それ以外：`text-gray-500`や`text-alert-100`で呼び出す
     */
    /*
    colors: {
      alert: {
        100: '#FFEBEE',
        DEFAULT: '#C62828',
      },
      black: '#111',
      current: 'currentColor',
      gray: {
        100: '#F5F5F5',
        200: '#E8E8E8',
        300: '#BBB',
        400: '#777',
        500: '#444',
        DEFAULT: '#272727',
      },
      primary: {
        100: '#E5F7FF',
        DEFAULT: '#20A9E7',
      },
      transparent: 'transparent',
      white: '#FFF',
    },
    */
    extend: {},
  },
};
export default config;
