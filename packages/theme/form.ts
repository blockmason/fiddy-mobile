import { StyleSheet, Platform, Dimensions } from 'react-native'

import { l, m, s, largePad, smallPad, mediumPad, verticalMargin, verticalMarginXS, verticalMarginXXS } from 'theme/include/spacing'
import { xlarge, large, medium, small, xsmall, bold } from 'theme/include/fonts'
import { gray, softGray, warning, warningDark, black, white, aqua, lightGray } from 'theme/include/colors'
import { attention, radius, thinSoftBorder } from 'theme/include/borders'
import { center } from 'theme/include/align'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  form: {
    ...largePad,
    backgroundColor: white
  },
  account: {
    flexDirection: 'column',
    alignItems: 'center',
    ...largePad,
    backgroundColor: white
  },
  text: {
    ...large,
    ...verticalMarginXXS,
    color: black,
    ...center,
    fontWeight: '100'
  },
  spaceBottom: {
    marginBottom: 20
  },
  spaceBottomS: {
    marginBottom: 10
  },
  spaceTopL: {
    marginTop: 30
  },
  spaceBottomL: {
    marginBottom: 30
  },
  spaceTop: {
    marginTop: 20
  },
  spaceVertical: {
    marginVertical: 15
  },
  spaceHorizontalL: {
    marginHorizontal: 40
  },
  formTitle: {
    ...xlarge,
    ...verticalMargin,
    ...center,
    color: black
  },
  horizontalView: {
    flexDirection: 'row',
    ...center
  },
  horizontalElem: {
    ...mediumPad
  },
  warningText: {
    paddingVertical: s,
    paddingHorizontal: m,
    ...medium,
    ...radius,
    ...verticalMargin,
    backgroundColor: warning,
    color: warningDark,
    overflow: 'hidden'
  },
  infoText: {
    paddingVertical: s,
    paddingHorizontal: m,
    ...medium,
    ...radius,
    ...verticalMargin,
    backgroundColor: softGray,
    color: gray,
    overflow: 'hidden'
  },
  header: {
    ...xlarge,
    ...verticalMargin,
    color: black
  },
  title: {
    ...small,
    ...bold,
    color: black,
    marginTop: s
  },
  titleLarge: {
    ...medium,
    ...bold,
    color: black,
    marginTop: m
  },
  textInputContainer: {
    width: '100%', 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: softGray, 
    flexDirection: 'row',
    alignItems: 'center', 
    ...center,
    paddingLeft: 8,
    ...verticalMarginXS
  },
  textInputContainerMinor: {
    width: '50%', 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: softGray, 
    flexDirection: 'row',
    alignItems: 'center', 
    ...center,
    paddingLeft: 8,
    ...verticalMarginXS
  },
  textInput: {
    ...small,
    ...verticalMarginXS,
    ...smallPad,
    ...center,
    width: '100%'
  },
  textInputMinor: {
    ...small,
    ...verticalMarginXS,
    ...smallPad,
    ...center
  },
  borderTextInput: {
    ...medium,
    ...verticalMargin,
    ...mediumPad,
    borderColor: gray,
    borderWidth: 1,
    width: '50%'
  },
  multilineTextInput: {
    ...small,
    minHeight: 75,
    textAlignVertical: 'top',
    paddingLeft: 35,
    paddingRight: 35,
    width: '100%',
    paddingTop: 10
  },
  displayText: {
    ...medium,
    ...verticalMargin,
    padding: m,
    ...thinSoftBorder
  },
  bold: {
    ...bold
  },
  leftButton: {
    flex: 1,
    marginRight: s
  },
  rightButton: {
    flex: 1,
    marginLeft: s
  },
  lastButton: {
    marginBottom: l - s
  },
  submitButton: {
    width: '70%',
    ...center,
    alignSelf: 'center'
  },
  center: {
    textAlign: 'center'
  },
  jumboInput: {
    fontSize: 24,
    color: black,
    fontWeight: 'bold',
    minWidth: 150,
    paddingVertical: 4,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  memoBorder: {
    borderColor: lightGray,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? s : 0
  },
  memoInput: {
    width: 300,
    ...large,
    paddingHorizontal: m
  },
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: width,
    borderTopColor: softGray,
    borderTopWidth: 1,
    borderBottomColor: softGray,
    borderBottomWidth: 1
  },
  panelText: {
    ...xlarge,
    color: black,
    marginLeft: 20
  },
  panelIconDown: {
    height: 24,
    width: 24,
    marginRight: 20,
    marginTop: 4,
    transform: [{ rotate: '90deg'}]
  },
  panelIconRight: {
    height: 24,
    width: 24,
    marginRight: 20,
    marginTop: 4
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  cameraImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10
  }
} as any)
