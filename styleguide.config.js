var createNwbWebpackConfig = require("create-nwb-webpack-config");

module.exports = {
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
  ).parse,
  webpackConfig: createNwbWebpackConfig(),
  sections: [
    {
      name: "Headers",
      components: ["src/Header.tsx"],
    },
    {
      name: "Typography",
      components: [
        "src/H1.tsx",
        "src/H2.tsx",
        "src/H3.tsx",
        "src/H4.tsx",
        "src/H5.tsx",
        "src/H6.tsx",
        "src/Text.tsx",
        "src/Caption.tsx",
        "src/Description.tsx",
      ],
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,900&display=swap",
        },
      ],
    },
  },
};
