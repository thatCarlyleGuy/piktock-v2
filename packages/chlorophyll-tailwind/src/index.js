const Color = require("color");
const plugin = require("tailwindcss/plugin");
const { typeScale } = require("./typography");
const { colorTheme } = require("./colors");

// // https://material.io/design/typography/the-type-system.html#type-scale
// const fontWeight = {
//   light: "300",
//   regular: "400",
//   medium: "500",
// };
// const typeScale = {
//   h1: {
//     fontSize: "8rem",
//     fontWeight: fontWeight.light,
//     letterSpacing: "-1.5px",
//   },
//   h2: {
//     fontSize: "3.5rem",
//     fontWeight: fontWeight.light,
//     letterSpacing: "-0.5px",
//   },
//   h3: {
//     fontSize: "3rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0",
//   },
//   h4: {
//     fontSize: "2rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0.25px",
//   },
//   h5: {
//     fontSize: "1.5rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0px",
//   },
//   h6: {
//     fontSize: "1.25rem",
//     fontWeight: fontWeight.medium,
//     letterSpacing: "0.15px",
//   },
//   s1: {
//     fontSize: "1rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0.15px",
//   },
//   s2: {
//     fontSize: "0.875rem",
//     fontWeight: fontWeight.medium,
//     letterSpacing: "0.1px",
//   },
//   b1: {
//     fontSize: "0.875rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0.5px",
//   },
//   b2: {
//     fontSize: "0.875rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0.25px",
//   },
//   btn: {
//     fontSize: "0.875rem",
//     fontWeight: fontWeight.medium,
//     letterSpacing: "1.25px",
//   },
//   cap: {
//     fontSize: "0.75rem",
//     fontWeight: fontWeight.regular,
//     letterSpacing: "0.4px",
//   },
//   over: {
//     fontSize: "0.5rem",
//     fontWeight: fontWeight.regular,
//     textTransform: "uppercase",
//     letterSpacing: "1.5px",
//   },
// };

module.exports = plugin.withOptions(
  (options) => {
    return ({ addComponents, theme }) => {
      const defaultFont = theme("fontFamily.sans");
      const brandFont = theme("fontFamily.brand") || defaultFont;
      const plainFont = theme("fontFamily.plain") || defaultFont;

      // const patterns = {
      //   ".typo-h1": {
      //     ...typeScale.h1,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-h2": {
      //     ...typeScale.h2,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-h3": {
      //     ...typeScale.h3,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-h4": {
      //     ...typeScale.h4,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-h5": {
      //     ...typeScale.h5,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-h6": {
      //     ...typeScale.h6,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-s1": {
      //     ...typeScale.s1,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-s2": {
      //     ...typeScale.s2,
      //     fontFamily: headlineFont,
      //   },
      //   ".typo-b1": {
      //     ...typeScale.b1,
      //     fontFamily: bodyFont,
      //   },
      //   ".typo-b2": {
      //     ...typeScale.b2,
      //     fontFamily: bodyFont,
      //   },
      //   ".typo-btn": {
      //     ...typeScale.btn,
      //     fontFamily: bodyFont,
      //   },
      //   ".typo-cap": {
      //     ...typeScale.cap,
      //     fontFamily: bodyFont,
      //   },
      //   ".typo-over": {
      //     ...typeScale.over,
      //     fontFamily: bodyFont,
      //   },
      // };

      addComponents(typeScale({ brandFont, plainFont }));
    };
  },
  (options) => {
    const colors = options?.colors;

    const generatePalette = (hexColor, name) => {
      if (hexColor) {
        const color = Color(hexColor);
        return {
          [name]: {
            50: color.lighten(2.5).hex(),
            100: color.lighten(2).hex(),
            200: color.lighten(1.5).hex(),
            300: color.lighten(1).hex(),
            400: color.lighten(0.5).hex(),
            DEFAULT: hexColor,
            600: color.darken(0.15).hex(),
            700: color.darken(0.3).hex(),
            800: color.darken(0.45).hex(),
            900: color.darken(0.6).hex(),
          },
        };
      } else {
        return {};
      }
    };

    const colorsTheme = Object.entries(colors || {}).reduce(
      (acc, [name, hex]) => {
        return {
          ...acc,
          ...generatePalette(hex, name),
        };
      },
      {}
    );

    return {
      theme: {
        extend: {
          colors: {
            ...colorsTheme,
            ...colorTheme(options?.colors || {}),
          },
        },
      },
    };
  }
);
