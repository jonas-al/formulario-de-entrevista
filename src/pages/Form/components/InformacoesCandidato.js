import { useEffect } from 'react';
import {
  Box,
  Input,
  FormControl,
  Radio,
  Heading,
  ScrollView,
  Button,
  WarningOutlineIcon,
  VStack,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

const InformacoesCandidato = ({ handleRepostas, dispatch, respostas }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const campos = [
      'nomeCandidato',
      'inscricaoCandidato',
      'localidadeEntrevista',
      'selecaoCandidato',
    ];
    campos.forEach((campo) => setValue(campo, respostas[campo]));
  }, [respostas, setValue]);

  const onSubmit = async (data) => {
    handleRepostas('juntar', data);
    dispatch({ type: 'proxima' });
  };

  return (
    <ScrollView w="100%" pt="24" px="7" contentContainerStyle={{ flexGrow: 1 }} bgColor="white">
      <VStack flex="1" space="6">
        <Box>
          <Heading size="2xl" fontWeight="semibold">
            Nova Entrevista
          </Heading>
        </Box>

        <FormControl isInvalid={errors.nomeCandidato}>
          <FormControl.Label>
            <Heading size="md" color="#737373" fontWeight="semibold">
              Nome candidato(a)
            </Heading>
          </FormControl.Label>
          <Controller
            name="nomeCandidato"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
                placeholder="Nome do canditado(a)"
                value={value}
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

        <FormControl isInvalid={!!errors.inscricaoCandidato}>
          <FormControl.Label>
            <Heading size="md" color="#737373" fontWeight="semibold">
              Número de inscrição
            </Heading>
          </FormControl.Label>
          <Controller
            name="inscricaoCandidato"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
                placeholder="Nº de Inscrição"
                value={value}
                keyboardType="numeric"
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

        <FormControl isInvalid={!!errors.localidadeEntrevista}>
          <FormControl.Label>
            <Heading size="md" color="#737373" fontWeight="semibold">
              Local da entrevista
            </Heading>
          </FormControl.Label>
          <Controller
            name="localidadeEntrevista"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
                placeholder="Ex. Belém"
                value={value}
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

        <FormControl isInvalid={!!errors.selecaoCandidato}>
          <FormControl.Label>
            <Heading size="md" color="#737373" fontWeight="semibold">
              Seleção
            </Heading>
          </FormControl.Label>
          <Controller
            name="selecaoCandidato"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Radio.Group onChange={onChange} value={value || ''}>
                <Radio
                  borderColor="brown"
                  colorScheme="brown"
                  _pressed={{ borderColor: 'brown' }}
                  value="indigina"
                  my={1}
                >
                  Indigína
                </Radio>

                <Radio
                  borderColor="brown"
                  colorScheme="brown"
                  _pressed={{ borderColor: 'brown' }}
                  value="quilombola"
                  my={1}
                >
                  Quilombola
                </Radio>
              </Radio.Group>
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>

      <Button
        onPress={handleSubmit(onSubmit)}
        marginBottom="10%"
        _text={{
          fontWeight: 'semibold',
          fontSize: 18,
        }}
        rounded="full"
        bgColor="#AD550B"
        size="lg"
      >
        Continuar
      </Button>
    </ScrollView>
  );
};

export default InformacoesCandidato;
