import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
      <Image  
        source={imgUrl}
        style={{ width: 24,height: 24 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}
export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  )
}