import { Box, Input, FormControl, Radio, TextArea, Heading, Text, ScrollView, Button, WarningOutlineIcon, VStack, HStack } from 'native-base'
import { useForm, Controller } from "react-hook-form"

const PrimeiraQuestao = ({ juntarRespostas, dispatch }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    juntarRespostas({
      questao1: data
    })
  }


  return (
    <ScrollView w='95%'>
        <Box marginBottom={4}>
          <Heading>
            1. Questões sobre o pertencimento.
          </Heading>
          <Text fontSize="md">
            LER A DECLARAÇÃO DE PERTENCIMENTO, que poderá trazer informações sobre pertencimento.
          </Text>
          <Text fontWeight='bold' fontSize="md">
              a) Vínculo e a experiência do candidato com a comunidade tradicional.
          </Text>
        </Box>


        <VStack space={6} marginBottom={8}>
          <FormControl isInvalid={errors.localNascimento ? true : false}>
            <FormControl.Label>
              Onde você nasceu?
            </FormControl.Label>
            <Controller
              name='localNascimento'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.localCriacao}>
            <FormControl.Label>
              Onde foi criado?
            </FormControl.Label>
            <Controller
              name='localCriacao'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.localPais}>
            <FormControl.Label>
              De onde são seus pais?
            </FormControl.Label>
            <Controller
              name='localPais'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
          
          <Controller
              name='informacoesComunidade'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Box>
                  <FormControl.Label>
                    Mora (ou morou) em uma comunidade tradicional? Qual?
                  </FormControl.Label>
                  <Radio.Group
                    onChange={onChange}
                  >
                    <Radio value="sim" my={1}>
                      Sim
                    </Radio>
                    
                    <Radio value="não" my={1}>
                      Não
                    </Radio>
                  </Radio.Group>
                  <Input
                    placeholder='Informações sobre a comunidade'
                    variant="filled"
                    isDisabled={value === 'não' || value === undefined ? true : false}
                    onChangeText={onChange}
                  />
                </Box>
              )}
            />
          
          <FormControl isInvalid={errors.caracterizacaoComunidade}>
            <FormControl.Label>
              Caracterize a comunidade, sua estrutura sócio-política (a liderança).
            </FormControl.Label>
            <Controller
              name='caracterizacaoComunidade'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextArea
                  placeholder='Informações sobre a comunidade'
                  variant="filled"
                  onChangeText={onChange}
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.pontuacaoPertencimento}>
            <FormControl.Label>
              Pontuação: 0,0 a 3,0 pts.
            </FormControl.Label>
            <Controller
              name='pontuacaoPertencimento'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="underlined"
                  placeholder='0,0 a 3,0 pts.'
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={onChange}
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        


        <Box>
          <Text fontWeight='bold' fontSize="md">
            b) Condição de vulnerabilidade socioeconômica do candidato e da família.
          </Text>
        </Box>

        <VStack space={6} marginBottom={8}>
          <Controller
              name='informacoesProgramaSocial'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Box>
                  <FormControl.Label>
                    Você ou sua família estão cadastrados em algum programa social do governo federal? Caso sim, qual?
                  </FormControl.Label>
                  <Radio.Group
                    onChange={onChange}
                  >
                    <Radio value="sim" my={1}>
                      Sim
                    </Radio>
                    <Radio value="não" my={1}>
                      Não
                    </Radio>
                  </Radio.Group>
                  <Input
                    placeholder='Informa o programa social'
                    variant="filled"
                    isDisabled={value === 'não' || value === undefined ? true : false}
                    onChangeText={onChange}
                  />
                </Box>
              )}
            />
          <FormControl isInvalid={errors.disponibilidadeDeTempo}>
            <FormControl.Label>
              Qual a sua disponibilidade de tempo para fazer o curso pretendido?
            </FormControl.Label>
            <Controller
              name='disponibilidadeDeTempo'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.condiçõesDeMorarNoLocalDoCurso}>
            <FormControl.Label>
              Caso você seja aprovado no curso, quais as condições de morar no local onde o curso está sendo ofertado?
            </FormControl.Label>
            <Controller
              name='condiçõesDeMorarNoLocalDoCurso'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  variant="filled"
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
          
          <FormControl isInvalid={errors.pontuacaoVulnerabilidadeSocioeconomica}>
            <FormControl.Label>
              Pontuação: 0,0 a 2,0 pts.
            </FormControl.Label>
            <Controller
              name='pontuacaoVulnerabilidadeSocioeconomica'
              control={control}
              rules={{
                required: false
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="underlined"
                  placeholder='0,0 a 2,0 pts.'
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={onChange}
                />
              )}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>


        <HStack justifyContent='center' space={8}>
          <Button
            variant='outline'
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

export default PrimeiraQuestao