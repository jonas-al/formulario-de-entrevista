import { useState } from 'react';
import {
  VStack,
  FormControl,
  WarningOutlineIcon,
  Input,
  Button,
  Pressable,
  Icon,
  KeyboardAvoidingView,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

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
    <KeyboardAvoidingView flex={1}>
      <VStack flex={1} paddingX="12" space="6" justifyContent="center" marginBottom="4">
        <FormControl isInvalid={errors.email}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
                placeholder="Digite seu e-mail"
                value={value}
                borderWidth="2"
                borderColor="gray.300"
                InputLeftElement={
                  <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                }
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.senha}>
          <FormControl.Label>Senha</FormControl.Label>
          <Controller
            name="senha"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
                placeholder="Digite a sua senha"
                value={value}
                borderWidth="2"
                borderColor="gray.300"
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
        <Button
          onPress={handleSubmit(onSubmit)}
          colorScheme="emerald"
          _text={{
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Entrar
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default Login;
