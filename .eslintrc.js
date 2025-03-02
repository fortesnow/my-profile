module.exports = {
  // ...既存の設定
  overrides: [
    {
      files: ['.next/types/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ],
  ignorePatterns: [
    "node_modules/",
    ".next/"
  ]
} 