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
    <ScrollView w="95%">
      <VStack space={6} marginBottom={8} marginTop="10">
        <Box>
          <Heading>Informação do candidato(a)</Heading>
        </Box>

        <FormControl isInvalid={errors.nomeCandidato}>
          <FormControl.Label>Nome candidato(a)</FormControl.Label>
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
                borderWidth="2"
                borderColor="gray.300"
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.inscricaoCandidato}>
          <FormControl.Label>Número de inscrição do candidato</FormControl.Label>
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
                borderWidth="2"
                borderColor="gray.300"
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.localidadeEntrevista}>
          <FormControl.Label>Localidade de realização da entrevista</FormControl.Label>
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
                placeholder="Local da entrevista"
                value={value}
                borderWidth="2"
                borderColor="gray.300"
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.selecaoCandidato}>
          <FormControl.Label>Seleção</FormControl.Label>
          <Controller
            name="selecaoCandidato"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Radio.Group onChange={onChange} value={value || ''}>
                <Radio value="indigina" my={1}>
                  Indigína
                </Radio>

                <Radio value="quilombola" my={1}>
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
        marginBottom="10%"
        _text={{
          fontWeight: 'bold',
          fontSize: 18,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        Continuar
      </Button>
    </ScrollView>
  );
};

export default InformacoesCandidato;
