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

const TerceiraQuestao = ({ handleRepostas, dispatch, respostas }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      pontuacaoExperienciaTrabalho: '',
      pontuacaoMembroComunidade: '',
    },
  });

  const [selectParticipacaoFamilia, setSelectParticipacaoFamilia] = useState('não');

  useEffect(() => {
    if (respostas.questao3) {
      const campos = Object.keys(respostas.questao3);
      campos.forEach((campo) => setValue(campo, respostas.questao3[campo]));
    }
  }, [respostas.questao3, setValue]);

  const onSubmit = (data) => {
    handleRepostas('juntar', {
      questao3: data,
    });
    dispatch({ type: 'proxima' });
  };

  return (
    <ScrollView w="95%">
      <Box marginBottom={4} marginTop="10">
        <Heading>
          3. Experiência de Trabalho e de Participação em Atividades Junto à Comunidade Tradicional.
        </Heading>
      </Box>

      <VStack space={6} marginBottom={8}>
        <FormControl isInvalid={errors.experienciaDeTrabalho}>
          <FormControl.Label>
            Você tem alguma experiência de trabalho na família, em empresa ou instituição ligada à
            sua comunidade?
          </FormControl.Label>
          <Controller
            name="experienciaDeTrabalho"
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

        <FormControl isInvalid={errors.acaoComunitaria}>
          <FormControl.Label>
            Você participa e/ou participou em sua comunidade de algum tipo de ação comunitária junto
            a igreja, associações, clubes de mães, sindicatos etc.?
          </FormControl.Label>
          <Controller
            name="acaoComunitaria"
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
            name="selectParticipacaoFamilia"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <Box>
                <FormControl.Label>
                  Sua família ou você participa ou já participaram de algum tipo de organização?
                  Qual?
                </FormControl.Label>
                <Radio.Group
                  onChange={(valueRadio) => {
                    onChange(valueRadio);
                    setSelectParticipacaoFamilia(valueRadio);
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
                      setValue('participacaoFamilia', '');
                    }}
                  >
                    Não
                  </Radio>
                </Radio.Group>
              </Box>
            )}
          />

          <FormControl isInvalid={errors.participacaoFamilia}>
            <Controller
              name="participacaoFamilia"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Qual comunidade organização?"
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  isDisabled={selectParticipacaoFamilia === 'não'}
                  isReadOnly={selectParticipacaoFamilia === 'não'}
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

        <FormControl isInvalid={errors.pontuacaoExperienciaTrabalho}>
          <FormControl.Label flexDirection="colum">
            a) Possui experiência de trabalho em instituição ligada a povos ou comunidades
            tradicionais.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 1,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoExperienciaTrabalho"
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

        <FormControl isInvalid={errors.pontuacaoMembroComunidade}>
          <FormControl.Label flexDirection="colum">
            b) Ter sido ou ser membro de organizações ligadas a povos ou comunidades tradicionais.
            <Text fontSize={16} fontWeight="bold">
              Pontuação: 0,0 a 1,0 pts.
            </Text>
          </FormControl.Label>
          <Controller
            name="pontuacaoMembroComunidade"
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

export default TerceiraQuestao;
