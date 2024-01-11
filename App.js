/* eslint-disable camelcase */
import { NativeBaseProvider, extendTheme } from 'native-base';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_100Thin',
        italic: 'Poppins_100Thin',
      },
      200: {
        normal: 'Poppins_200ExtraLight',
        italic: 'Poppins_200ExtraLight',
      },
      300: {
        normal: 'Poppins_300Light',
        italic: 'Poppins_300Light',
      },
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular',
      },
      500: {
        normal: 'Poppins_500Medium',
      },
      600: {
        normal: 'Poppins_600SemiBold',
        italic: 'Poppins_600SemiBold',
      },
      700: {
        normal: 'Poppins_700Bold',
        italic: 'Poppins_700Bold',
      },
      800: {
        normal: 'Poppins_800ExtraBold',
        italic: 'Poppins_800ExtraBold',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
