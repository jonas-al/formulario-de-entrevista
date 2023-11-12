import { VStack, FormControl, WarningOutlineIcon, Input, Button, Pressable, Icon, KeyboardAvoidingView } from 'native-base'

const Home = ({ navigation }) => {
  return (
    <VStack
      flex={1}
      justifyContent='center'
      padding='20'
    >
      <Button
        onPress={() => navigation.navigate('Login')}
        colorScheme='muted'
      >
        Ir para login
      </Button>
    </VStack>
  )
}

export default Home
