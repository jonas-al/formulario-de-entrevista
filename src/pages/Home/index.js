import { VStack, Button } from 'native-base';

const Home = ({ navigation }) => (
  <VStack flex={1} justifyContent="center" padding="20">
    <Button onPress={() => navigation.navigate('Login')} colorScheme="muted">
      Ir para login
    </Button>
  </VStack>
);

export default Home;
