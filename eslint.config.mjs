import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier, {
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  rules: {
    // to enforce using type for object type definitions, can be type or interface
    // 'consistent-type-definitions': ['error', 'type'],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-constant-condition': 'warn',
    'no-empty': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unexpected-multiline': 'warn',
    'prefer-const': 'error',
  },
});
