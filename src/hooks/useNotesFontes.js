const { useFonts } = require('expo-font')

const useNotesFonts = () => {
  const [loaded] = useFonts({
    InconsolataExtraLight: require('./../assets/fonts/Inconsolata-ExtraLight.ttf'),
    InconsolataLight: require('./../assets/fonts/Inconsolata-Light.ttf'),
    InconsolataRegular: require('./../assets/fonts/Inconsolata-Regular.ttf'),
    InconsolataMedium: require('./../assets/fonts/Inconsolata-Medium.ttf'),
    InconsolataSemiBold: require('./../assets/fonts/Inconsolata-SemiBold.ttf'),
    InconsolataBold: require('./../assets/fonts/Inconsolata-Bold.ttf'),
    InconsolataExtraBold: require('./../assets/fonts/Inconsolata-ExtraBold.ttf'),
  })

  return loaded
}

export default useNotesFonts
