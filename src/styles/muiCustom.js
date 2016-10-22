
import * as colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import * as spacing from 'material-ui/styles/spacing';

let muiCustom = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.teal600,
    primary2Color: colors.cyan700,
    primary3Color: colors.grey400,
    accent1Color: colors.deepOrange700,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.fullWhite,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: fade(colors.darkBlack, 0.075),
    shadowColor: colors.fullBlack
  },
  overlay:{
    backgroundColor: fade(colors.fullBlack, 0.57)
  },
  appBar: {
    color: colors.blueGrey800,
    textColor: colors.white
  },
  ripple: {
    color: colors.fullWhite,
    backgroundColor: colors.fullWhite
  },
  baseTheme: {
    canvasColor: colors.blueGrey50
  },
  zIndex: {
    appBar: 1250,
    drawer: 1200
  },
  actionButton: {
    flat: {
      backgroundColor: colors.fullWhite
    },
    raised: {
      labelColor: colors.fullWhite
    },
    edit: colors.indigo800,
    save: colors.lightGreen800,
    create: colors.lime900,
    cancel: colors.deepOrange800,
    delete: colors.red800,
    search: colors.cyan800,
    link: colors.blueGrey800,
    submit: colors.teal800
  }
};
export default muiCustom
