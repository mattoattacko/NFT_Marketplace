import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused() //are we currently focusing the status bar

  return isFocused ? <StatusBar animated={true} {...props} /> : null; //props contain the BG color of the statusbar
}

export default FocusedStatusBar