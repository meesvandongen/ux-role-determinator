const colorPalette = {
    grayD200: '#150C21',
    grayD100: '#4B4554',
    gray: '#7F7D82',
    grayL100: '#E0DFE2',
    white: '#fff',
    blueD100: '#0734DF',
    blue: '#3B63F9',
};


export const colors = {
    background: {
        dark: colorPalette.grayD200,
        default: colorPalette.white,
    },
    text: {
        dark: colorPalette.grayD200,
        default: colorPalette.grayD100,
        anchor: colorPalette.blue,
        inverted: colorPalette.white,
    },
    button: {
        primary: {
            text: colorPalette.white,
            background: colorPalette.blue,
            hover: {
                text: colorPalette.white,
                background: colorPalette.blueD100,
            }
        }
    },
    highLight: colorPalette.blue,
};