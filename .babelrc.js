module.exports = {
  presets: [['next/babel']],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '~': './',
          client: './client/',
          modules: './client/modules',
        },
      },
    ],
  ],
}
