import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('eslint-config-next'),
  ...compat.extends('airbnb'),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ignores: [
      '**/.*', // ignore dot files
      '**/node_modules/**',
      '**/dist/**',
      '**/.git/**',
      '**/.next/**',
      '**/out/**',
      'next.config.mjs',
      'next-env.d.ts',
      'postcss.config.js',
      'tailwind.config.js',
      'package.json',
      'package-lock.json',
      'public/**',
      '*.config.{js,mjs}',
    ],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        project: './tsconfig.json',
        jsx: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['ts', 'tsx'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-quotes': 'off',
      'linebreak-style': 'off',
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
