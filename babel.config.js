/* eslint-env node */
const presets =
  process.env['NODE_ENV'] !== 'production'
    ? [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        ['babel-preset-vite'],
        ['@babel/preset-typescript'],
      ]
    : null;

const plugins = ['babel-plugin-transform-vite-meta-env'];

module.exports = {
  presets,
  plugins,
};
