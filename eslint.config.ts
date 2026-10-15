import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['.astro/**', 'dist/**'] },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
