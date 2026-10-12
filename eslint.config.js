import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['.vitepress/cache/**', '.vitepress/build/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
)
