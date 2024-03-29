const colorPalette = {
  grayD200: "#150C21",
  grayD100: "#4B4554",
  gray: "#7F7D82",
  grayL100: "#E0DFE2",
  white: "#fff",
  blueD100: "#0734DF",
  blue: "#3B63F9",
  green: "#2DDAA5",
};

export const colors = {
  background: {
    dark: colorPalette.grayD200,
    base: colorPalette.white,
    light: colorPalette.grayL100,
  },
  text: {
    dark: colorPalette.grayD200,
    default: colorPalette.grayD100,
    anchor: colorPalette.blue,
    inverted: colorPalette.white,
  },
  icon: {
    default: colorPalette.grayD200,
    hover: colorPalette.blue,
    inverted: colorPalette.white,
  },
  border: {
    inverted: colorPalette.white,
  },
  button: {
    primary: {
      text: colorPalette.white,
      background: colorPalette.blue,
      hover: {
        text: colorPalette.white,
        background: colorPalette.blueD100,
      },
    },
  },
  statuses: {
    progress: colorPalette.green,
  },
  highLight: colorPalette.blue,
};
