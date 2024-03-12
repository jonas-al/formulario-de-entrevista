import { VStack, Image, Heading, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';
// borderColor='amber.500' borderWidth='8'
const logoUFPA = require('../../../assets/logo-ufpa.png');

const LaunchScreen = ({ navigation }) => (
  <VStack flex={1} justifyContent="center" bgColor="#AD550B">
    <VStack flex={1} paddingX="8" paddingTop="20" paddingBottom="8">
      <VStack>
        <Image source={logoUFPA} w="100px" h="118px" alt="Icone UFPA" />
        <VStack space="5">
          <VStack>
            <Heading fontWeight="semibold" size="2xl">
              PSE UFPA
            </Heading>
            <Heading fontWeight="semibold" size="xl" color="white">
              Indíginas e Quilombolas
            </Heading>
          </VStack>
          <Heading fontWeight="semibold" size="md" color="white">
            Formulário de Entrevista
          </Heading>
        </VStack>
      </VStack>
      <VStack flex={1} alignItems="center" justifyContent="center" space="4">
        <Heading fontWeight="semibold" size="xl" color="white">
          Ir para o login
        </Heading>
        <Button
          rightIcon={<Entypo name="chevron-right" size={24} color="#393939" />}
          size="16"
          bgColor="white"
          borderRadius="full"
          onPress={() => navigation.navigate('Login')}
          _pressed={{
            bgColor: 'gray.300',
            disabled: true,
          }}
        />
      </VStack>
    </VStack>
  </VStack>
);

export default LaunchScreen;
