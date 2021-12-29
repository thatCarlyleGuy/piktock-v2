const fontWeight = {
  regular: "400",
  medium: "500",
};

const typeScale = ({ brandFont, plainFont }) => {
  return {
    ".display-lg": {
      fontSize: "3.5rem",
      fontWeight: fontWeight.regular,
      lineHeight: "4rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },
    ".display-md": {
      fontSize: "2.8rem",
      fontWeight: fontWeight.regular,
      lineHeight: "3.3rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },
    ".display-sm": {
      fontSize: "2.25rem",
      fontWeight: fontWeight.regular,
      lineHeight: "2.7rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },

    ".headline-lg": {
      fontSize: "2rem",
      fontWeight: fontWeight.regular,
      lineHeight: "2.5rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },
    ".headline-md": {
      fontSize: "1.75rem",
      fontWeight: fontWeight.regular,
      lineHeight: "2.25rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },
    ".headline-sm": {
      fontSize: "1.5rem",
      fontWeight: fontWeight.regular,
      lineHeight: "2rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },

    ".title-lg": {
      fontSize: "1.37rem",
      fontWeight: fontWeight.regular,
      lineHeight: "1.7rem",
      letterSpacing: "0",
      fontFamily: brandFont,
    },
    ".title-md": {
      fontSize: "1.37rem",
      fontWeight: fontWeight.medium,
      lineHeight: "1.5rem",
      letterSpacing: "0.015rem",
      fontFamily: plainFont,
    },
    ".title-sm": {
      fontSize: "0.875rem",
      fontWeight: fontWeight.medium,
      lineHeight: "1.25rem",
      letterSpacing: "0.01rem",
      fontFamily: plainFont,
    },

    ".label-lg": {
      fontSize: "0.875rem",
      fontWeight: fontWeight.medium,
      lineHeight: "1.25rem",
      letterSpacing: "0.01rem",
      fontFamily: plainFont,
    },
    ".label-md": {
      fontSize: "0.75rem",
      fontWeight: fontWeight.medium,
      lineHeight: "1rem",
      letterSpacing: "0.05rem",
      fontFamily: plainFont,
    },
    ".label-sm": {
      fontSize: "0.68rem",
      fontWeight: fontWeight.medium,
      lineHeight: "0.375rem",
      letterSpacing: "0.05rem",
      fontFamily: plainFont,
    },

    ".body-lg": {
      fontSize: "0.875rem",
      fontWeight: fontWeight.regular,
      lineHeight: "1.5rem",
      letterSpacing: "0.015rem",
      fontFamily: plainFont,
    },
    ".body-md": {
      fontSize: "0.875rem",
      fontWeight: fontWeight.medium,
      lineHeight: "1.25rem",
      letterSpacing: "0.025rem",
      fontFamily: plainFont,
    },
    ".body-sm": {
      fontSize: "0.75rem",
      fontWeight: fontWeight.regular,
      lineHeight: "1rem",
      letterSpacing: "0.04rem",
      fontFamily: plainFont,
    },
  };
};

module.exports = {
  fontWeight,
  typeScale,
};
