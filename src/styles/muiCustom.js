import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500, blueGrey50, teal600,grey50,
  white, darkBlack, fullBlack, blueGrey900
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import * as spacing from 'material-ui/styles/spacing';

let muiCustom = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: teal600,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.075),
    shadowColor: fullBlack,
    //boxShadow:
  },
  overlay:{
    backgroundColor: "rgba(0, 0, 0, 0.70)"
  },
  appBar: {
    color: blueGrey900,
    textColor: white
  },
  ripple: {
    color: white,
    backgroundColor:white
  },
  baseTheme: {
    canvasColor: blueGrey50
  },
  zIndex: {
    appBar: 1250,
    drawer: 1200
  }
};
export default muiCustom
