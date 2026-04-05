import init from 'eslint-config-metarhia';

export default [
  ...init,
  {
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      'max-len': [
        'error',
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
    },
  },
];
