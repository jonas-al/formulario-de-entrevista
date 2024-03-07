import { useState } from 'react';
import {
  VStack,
  FormControl,
  Input,
  Button,
  Icon,
  Heading,
  WarningOutlineIcon,
  Pressable,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    if (data.email && data.senha) navigation.navigate('PagesWithTab');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex="1" bgColor="#AD550B" pt="20">
        <VStack
          flex={1}
          paddingX="4"
          bgColor="white"
          borderTopRadius="56"
          pt="10"
          mt="6"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Heading size="xl" color="#393939" mb="6">
            Entrar
          </Heading>
          <VStack flex="1" justifyContent="space-between">
            <VStack space="4">
              <FormControl isInvalid={errors.email}>
                <FormControl.Label>
                  <Heading size="md" color="#737373" fontWeight="semibold">
                    E-mail
                  </Heading>
                </FormControl.Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      variant="filled"
                      placeholder="Digite seu e-mail"
                      InputLeftElement={
                        <Icon as={<MaterialIcons name="mail" />} size={6} ml="3" color="#737373" />
                      }
                      rounded="full"
                      size="2xl"
                      fontWeight="semibold"
                      fontSize="md"
                      h="12"
                      _focus={{ backgroundColor: 'gray.100', borderColor: 'gray.500' }}
                    />
                  )}
                />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Campo obrigatório
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.senha}>
                <FormControl.Label>
                  <Heading size="md" color="#737373" fontWeight="semibold">
                    Senha
                  </Heading>
                </FormControl.Label>
                <Controller
                  name="senha"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      variant="filled"
                      placeholder="Digite sua senha"
                      InputLeftElement={
                        <Icon as={<MaterialIcons name="lock" />} size={6} ml="3" color="#737373" />
                      }
                      rounded="full"
                      size="2xl"
                      fontWeight="semibold"
                      fontSize="md"
                      h="12"
                      _focus={{ backgroundColor: 'gray.100', borderColor: 'gray.500' }}
                      type={show ? 'text' : 'password'}
                      InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          <Icon
                            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                            size={5}
                            mr="2"
                            color="muted.400"
                          />
                        </Pressable>
                      }
                    />
                  )}
                />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Campo obrigatório
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <VStack mb="4" mt="4" space="3">
              <Button
                onPress={handleSubmit(onSubmit)}
                colorScheme="emerald"
                _text={{
                  fontWeight: 'semibold',
                  fontSize: 18,
                }}
                rounded="full"
                bgColor="#AD550B"
                size="lg"
              >
                Entrar
              </Button>
              <Heading size="sm" fontWeight="semibold" textAlign="center">
                Esqueceu sua senha?{' '}
                <Heading
                  size="sm"
                  fontWeight="semibold"
                  color="#AD550B"
                  onPress={() => console.log(123)}
                >
                  Clique aqui
                </Heading>
              </Heading>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default Login;
