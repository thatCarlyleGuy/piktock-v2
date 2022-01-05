const chroma = require("chroma-js");
const zipObject = require("lodash/zipObject");

const colorTheme = (colorObj) => {
  const hello = Object.entries(colorObj).reduce((acc, [name, hex]) => {
    const lightScale = chroma.scale([hex, "white"]).mode("hsl").colors(7);
    const darkScale = chroma.scale([hex, "black"]).mode("hsl").colors(7);

    const lightest = chroma.scale([hex, "white"]).mode("hsl").colors(100)[90];
    const darkest = chroma.scale([hex, "black"]).mode("hsl").colors(100)[90];
    const colorObject = zipObject(
      [50, 100, 200, 300, 400, "DEFAULT", 600, 700, 800, 900],
      [...lightScale.slice(0, 5).reverse(), ...darkScale.slice(1, 6)]
    );

    const keyedColors =
      name !== "neutral"
        ? {
            [`on-${name}`]: "#fff",
            [`${name}-container`]: colorObject[50],
            [`on-${name}-container`]: colorObject[800],

            [`${name}-dark`]: colorObject[100],
            [`on-${name}-dark`]: colorObject[800],
            [`${name}-container-dark`]: colorObject[700],
            [`on-${name}-container-dark`]: colorObject[50],
          }
        : {
            "neutral-background": lightest,
            "on-neutral-background": darkest,
            "neutral-surface": lightest,
            "on-neutral-surface": darkest,

            "neutral-background-dark": darkest,
            "on-neutral-background-dark": lightest,
            "neutral-surface-dark": darkest,
            "on-neutral-surface-dark": lightest,

            "surface-variant": colorObject[50],
            "on-surface-variant": colorObject[700],
            outline: colorObject["DEFAULT"],

            "surface-variant-dark": colorObject[700],
            "on-surface-variant-dark": colorObject[100],
            "outline-dark": colorObject[400],
          };

    return {
      ...acc,
      [name]: colorObject,
      ...keyedColors,
    };
  }, {});

  console.log("HELLO", hello);

  return hello;
};

module.exports = {
  colorTheme,
};
