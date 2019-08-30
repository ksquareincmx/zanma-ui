module.exports = {
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
  ).parse,
  sections: [
    {
      name: "Headers",
      components: [
        "src/components/Header.tsx",
        "src/components/MainHeader.tsx",
      ],
    },
    {
      name: "Typography",
      components: [
        "src/components/H1.tsx",
        "src/components/H2.tsx",
        "src/components/H3.tsx",
        "src/components/H4.tsx",
        "src/components/H5.tsx",
        "src/components/H6.tsx",
        "src/components/Text.tsx",
        "src/components/Caption.tsx",
        "src/components/Details.tsx",
        "src/components/Description.tsx",
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
