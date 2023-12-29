import { useEffect, useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  Radio,
  TextArea,
  Heading,
  Text,
  ScrollView,
  Button,
  WarningOutlineIcon,
  VStack,
  HStack,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

const PrimeiraQuestao = ({ handleRepostas, dispatch, respostas }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      pontuacaoPertencimento: '',
      pontuacaoVulnerabilidadeSocioeconomica: '',
    },
  });

  const [selectInformacoesComunidade, setSelectInformacoesComunidade] = useState('não');
  const [selectProgramaSocial, setSelectProgramaSocial] = useState('não');

  useEffect(() => {
    if (respostas.questao1) {
      const campos = Object.keys(respostas.questao1);
      campos.forEach((campo) => setValue(campo, respostas.questao1[campo]));
    }
  }, [respostas.questao1, setValue]);

  const onSubmit = (data) => {
    handleRepostas('juntar', {
      questao1: data,
    });
    dispatch({ type: 'proxima' });
  };

  return (
    <ScrollView w="95%">
      <Box marginBottom={4} marginTop="10">
        <Heading>1. Questões sobre o pertencimento.</Heading>
        <Text fontSize="md">
          LER A DECLARAÇÃO DE PERTENCIMENTO, que poderá trazer informações sobre pertencimento.
        </Text>
      </Box>

      <VStack space={6} marginBottom={8}>
        <FormControl isInvalid={errors.localNascimento}>
          <FormControl.Label>Onde você nasceu?</FormControl.Label>
          <Controller
            name="localNascimento"
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

        <FormControl isInvalid={errors.localCriacao}>
          <FormControl.Label>Onde foi criado?</FormControl.Label>
          <Controller
            name="localCriacao"
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

        <FormControl isInvalid={errors.localPais}>
          <FormControl.Label>De onde são seus pais?</FormControl.Label>
          <Controller
            name="localPais"
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
            name="selectInformacoesComunidade"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Box>
                <FormControl.Label>
                  Mora (ou morou) em uma comunidade tradicional? Qual?
                </FormControl.Label>
                <Radio.Group
                  onChange={(valueRadio) => {
                    onChange(valueRadio);
                    setSelectInformacoesComunidade(valueRadio);
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
                      setValue('informacoesComunidade', '');
                    }}
                  >
                    Não
                  </Radio>
                </Radio.Group>
              </Box>
            )}
          />

          <FormControl isInvalid={errors.informacoesComunidade}>
            <Controller
              name="informacoesComunidade"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Qual comunidade tradicional?"
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  isDisabled={selectInformacoesComunidade === 'não'}
                  isReadOnly={selectInformacoesComunidade === 'não'}
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

        <FormControl isInvalid={errors.caracterizacaoComunidade}>
          <FormControl.Label>
            Caracterize a comunidade, sua estrutura sócio-política (a liderança).
          </FormControl.Label>
          <Controller
            name="caracterizacaoComunidade"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextArea
                placeholder="Informações sobre a comunidade"
                variant="filled"
                value={value}
                onChangeText={onChange}
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
            name="selectProgramaSocial"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Box>
                <FormControl.Label>
                  Mora (ou morou) em uma comunidade tradicional? Qual?
                </FormControl.Label>
                <Radio.Group
                  onChange={(valueRadio) => {
                    onChange(valueRadio);
                    setSelectProgramaSocial(valueRadio);
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
                      setValue('informacoesProgramaSocial', '');
                    }}
                  >
                    Não
                  </Radio>
                </Radio.Group>
              </Box>
            )}
          />

          <FormControl isInvalid={errors.informacoesProgramaSocial}>
            <Controller
              name="informacoesProgramaSocial"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Qual programa social?"
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  isDisabled={selectProgramaSocial === 'não'}
                  isReadOnly={selectProgramaSocial === 'não'}
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>

        <FormControl isInvalid={errors.disponibilidadeDeTempo}>
          <FormControl.Label>
            Qual a sua disponibilidade de tempo para fazer o curso pretendido?
          </FormControl.Label>
          <Controller
            name="disponibilidadeDeTempo"
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

        <FormControl isInvalid={errors.condiçõesDeMorarNoLocalDoCurso}>
          <FormControl.Label>
            Caso você seja aprovado no curso, quais as condições de morar no local onde o curso está
            sendo ofertado?
          </FormControl.Label>
          <Controller
            name="condiçõesDeMorarNoLocalDoCurso"
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

        <FormControl isInvalid={errors.pontuacaoPertencimento}>
          <FormControl.Label flexDirection="colum">
            a) Vínculo e a experiência do candidato com a comunidade tradicional.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 3,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoPertencimento"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                variant="underlined"
                placeholder="0,0 a 3,0 pts."
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

        <FormControl isInvalid={errors.pontuacaoVulnerabilidadeSocioeconomica}>
          <FormControl.Label flexDirection="colum">
            b) Condição de vulnerabilidade socioeconômica do candidato e da família.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 1,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoVulnerabilidadeSocioeconomica"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                variant="underlined"
                placeholder="0,0 a 2,0 pts."
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

export default PrimeiraQuestao;
