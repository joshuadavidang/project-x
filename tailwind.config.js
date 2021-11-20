module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "ezreal-image":
          "url(/Users/joshua-david/project-x/src/assets/images/ez.jpg)",
        "sea-image":
          "url(/Users/joshua-david/project-x/src/assets/images/sea.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    overscrollBehavior: false,
  },
};
