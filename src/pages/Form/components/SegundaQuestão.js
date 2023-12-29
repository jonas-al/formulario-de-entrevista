import { useEffect, useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  Heading,
  Text,
  ScrollView,
  Button,
  WarningOutlineIcon,
  VStack,
  HStack,
  Radio,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

const SegundaQuestão = ({ handleRepostas, dispatch, respostas }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      pontuacaoDificuldades: '',
      pontuacaoVunerabilidade: '',
    },
  });

  useEffect(() => {
    if (respostas.questao2) {
      const campos = Object.keys(respostas.questao2);
      campos.forEach((campo) => setValue(campo, respostas.questao2[campo]));
    }
  }, [respostas.questao2, setValue]);

  const [selectSofreuDescriminacao, setSelectSofreuDescriminacao] = useState('não');

  const onSubmit = (data) => {
    handleRepostas('juntar', {
      questao2: data,
    });
    dispatch({ type: 'proxima' });
  };

  return (
    <ScrollView w="95%">
      <Box marginBottom={4} marginTop="10">
        <Heading>2. Trajetória Escolar do Candidato.</Heading>
      </Box>

      <VStack space={6} marginBottom={8}>
        <FormControl isInvalid={errors.localEnsinoMedio}>
          <FormControl.Label>Onde e como fez o Ensino Médio?</FormControl.Label>
          <Controller
            name="localEnsinoMedio"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
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

        <FormControl isInvalid={errors.dificuldadesEnfrentadas}>
          <FormControl.Label>Quais as dificuldades enfrentadas?</FormControl.Label>
          <Controller
            name="dificuldadesEnfrentadas"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
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

        <FormControl isInvalid={errors.apoioDificuldades}>
          <FormControl.Label>Teve apoio para superá-las?</FormControl.Label>
          <Controller
            name="apoioDificuldades"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
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

        <VStack space={4}>
          <Controller
            name="selectSofreuDescriminacao"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Box>
                <FormControl.Label>
                  Sofreu discriminação devido sua pertença étnica? Como procedeu?
                </FormControl.Label>
                <Radio.Group
                  onChange={(valueRadio) => {
                    onChange(valueRadio);
                    setSelectSofreuDescriminacao(valueRadio);
                  }}
                  value={value || ''}
                >
                  <Radio value="sim" my={1}>
                    Sim
                  </Radio>

                  <Radio
                    value="não"
                    my={1}
                    onPress={() => {
                      setValue('sofreuDescriminacao', '');
                    }}
                  >
                    Não
                  </Radio>
                </Radio.Group>
              </Box>
            )}
          />

          <FormControl isInvalid={errors.sofreuDescriminacao}>
            <Controller
              name="sofreuDescriminacao"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Como procedeu?"
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  isDisabled={selectSofreuDescriminacao === 'não'}
                  isReadOnly={selectSofreuDescriminacao === 'não'}
                  borderWidth="2"
                  borderColor="gray.300"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>

        <FormControl isInvalid={errors.afinidadeDisciplinas}>
          <FormControl.Label>
            Quais disciplinas você tem/teve maior afinidade durante sua vida escolar.
          </FormControl.Label>
          <Controller
            name="afinidadeDisciplinas"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                variant="filled"
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

        <FormControl isInvalid={errors.pontuacaoDificuldades}>
          <FormControl.Label flexDirection="colum">
            a) Dificuldades enfrentadas no percurso escolar. Analisar considerando o Histórico
            Escolar do Ensino Médio.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 1,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoDificuldades"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                variant="underlined"
                placeholder="0,0 a 1,0 pts."
                keyboardType="numeric"
                maxLength={3}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.pontuacaoVunerabilidade}>
          <FormControl.Label flexDirection="colum">
            b) Dificuldades e presença de discriminações que agravem sua situação de
            vulnerabilidade.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 1,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoVunerabilidade"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                variant="underlined"
                placeholder="0,0 a 1,0 pts."
                keyboardType="numeric"
                maxLength={3}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>

      <HStack justifyContent="space-between" paddingX={10}>
        <Button
          variant="unstyled"
          colorScheme="secondary"
          marginBottom="10%"
          _text={{
            fontWeight: 'bold',
            fontSize: 18,
          }}
          onPress={() => dispatch({ type: 'anterior' })}
        >
          Voltar
        </Button>

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
      </HStack>
    </ScrollView>
  );
};

export default SegundaQuestão;
