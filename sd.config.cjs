module.exports = {
  source: ['sd-input/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      prefix: 'bs',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
  scss: {
    transformGroup: 'scss',
    buildPath: 'tokens/',
    prefix: 'bs',
    files: [
      {
        destination: 'variables.css',
        format: 'scss/variables',
        options: {
          fileHeader: 'autoGeneratedFileHeader',
        },
      },
    ],
  }
};
