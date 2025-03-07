// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader"
      }
    ]
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./src'),
  ];

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
