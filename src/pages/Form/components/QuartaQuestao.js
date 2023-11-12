import { useEffect } from 'react'
import { Box, Input, FormControl, Heading, Text, ScrollView, Button, WarningOutlineIcon, VStack, HStack } from 'native-base'
import { useForm, Controller } from "react-hook-form"

const QuartaQuestao = ({ handleRepostas, dispatch, respostas}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      pontuacaoEntendimentoProfissional: '',
      pontuacaoEntendimentoBeneficiosRetorno: ''
    }
  })

  useEffect(() => {
    if (respostas.questao4) {
      const campos = Object.keys(respostas.questao4)
      campos.forEach((campo) => setValue(campo, respostas.questao4[campo]))
    }
  }, [])

  const onSubmit = (data) => {
    handleRepostas('juntar', {
      questao4: data
    })
    dispatch({ type: 'proxima' })
  }


  return (
    <ScrollView w='95%'>
        <Box marginBottom={4} marginTop='10'>
          <Heading>
            4. Motivações e Expectativas Quanto à Universidade e ao Curso Universitário.
          </Heading>
        </Box>

        <VStack space={6} marginBottom={8}>
          <FormControl isInvalid={errors.reazoesCurso}>
            <FormControl.Label>
              Indique as razões pelas quais você se interessou por fazer o curso?
            </FormControl.Label>
            <Controller
              name='reazoesCurso'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.primeiraOpcaoCurso}>
            <FormControl.Label>
              O curso escolhido foi sua primeira opção?
            </FormControl.Label>
            <Controller
              name='primeiraOpcaoCurso'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          
          <FormControl isInvalid={errors.conhecimentoProfissaoEscolhida}>
            <FormControl.Label>
              O que você sabe sobre a profissão escolhida em termos de área de atuação, mercado de trabalho?
            </FormControl.Label>
            <Controller
              name='conhecimentoProfissaoEscolhida'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.expectativasIngresso}>
            <FormControl.Label>
              Quais as suas expectativas em relação ao seu ingresso na UFPA?
            </FormControl.Label>
            <Controller
              name='expectativasIngresso'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.beneficioOferecidoAComunidade}>
            <FormControl.Label>
              Qual benefício / retorno poderá ser oferecido ao seu povo ou à comunidade tradicional a que você pertence?
            </FormControl.Label>
            <Controller
              name='beneficioOferecidoAComunidade'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.expectativaFuturoProfissional}>
            <FormControl.Label>
              Quais as suas expectativas como futuro profissional após sua formação?
            </FormControl.Label>
            <Controller
              name='expectativaFuturoProfissional'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                  value={value}
                  borderWidth='2'
                  borderColor='gray.300'
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          
          <FormControl isInvalid={errors.pontuacaoEntendimentoProfissional}>
            <FormControl.Label flexDirection='colum'>
              a) Entendimento da relação entre sua escolha profissional e a as suas motivações, interesses pessoais e coletivos para indicação ao curso.
     
              <Text
                fontSize={16}
                fontWeight='bold'
              >
                Pontuação: 0,0 a 0,5 pts.
              </Text>
            </FormControl.Label>
            <Controller
              name='pontuacaoEntendimentoProfissional'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="underlined"
                  placeholder='0,0 a 0,5 pts.'
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

          <FormControl isInvalid={errors.pontuacaoEntendimentoBeneficiosRetorno}>
            <FormControl.Label flexDirection='colum'>
              b) Entendimento quanto aos benefícios/retorno a serem oportunizados aos povos e às comunidades tradicionais..

              <Text
                fontSize={16}
                fontWeight='bold'
              >
                Pontuação: 0,0 a 0,5 pts.
              </Text>
            </FormControl.Label>
            <Controller
              name='pontuacaoEntendimentoBeneficiosRetorno'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="underlined"
                  placeholder='0,0 a 0,5 pts.'
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
        

        <HStack justifyContent='space-between' paddingX={10}>
          <Button
            variant='ghost'
            colorScheme='secondary'
            marginBottom='10%'
            _text={{
              fontWeight: 'bold',
              fontSize: 18
            }}
            onPress={() => dispatch({type: 'anterior'})}
          >
            Voltar
          </Button>

          <Button
            marginBottom='10%'
            _text={{
              fontWeight: 'bold',
              fontSize: 18
            }}
            onPress={handleSubmit(onSubmit)}
          >
            Continuar
          </Button>
        </HStack>
    </ScrollView>
  )
}

export default QuartaQuestao