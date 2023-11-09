import { useEffect, useState } from 'react'
import { Box, Input, FormControl, Text, Heading, ScrollView, Button, WarningOutlineIcon, VStack, HStack } from 'native-base'
import { useForm, Controller } from "react-hook-form"

const TelaConfirmacao = ({ juntarRespostas, dispatch, respostas}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const [somaPontuacao, setSomaPontuacao] = useState('1,5')

  /*useEffect(() => {
    setSomaPontuacao({
      questao1: Number(respostas.questao1.pontuacaoPertencimento) +
      Number(respostas.questao1.pontuacaoVulnerabilidadeSocioeconomica),
      questao2: Number(respostas.questao1.pontuacaoPertencimento) +
      Number(respostas.questao1.pontuacaoVulnerabilidadeSocioeconomica),
      questao3: Number(respostas.questao3.pontuacaoExperienciaTrabalho) +
      Number(respostas.questao3.pontuacaoMembroComunidade),
      questao4: Number(respostas.questao4.pontuacaoEntendimentoProfissional) +
      Number(respostas.questao4.pontuacaoEntendimentoBeneficiosRetorno)
    })
  })*/

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <ScrollView w='100%'>
      <Box
        backgroundColor='primary.700'
        padding={10}
        borderBottomRadius={15}
        marginBottom='6'
      >
        <Heading color='white'>
          NOTA FINAL
        </Heading>
      </Box>
      
      <Box padding={2}>
        <VStack space={6} marginBottom={8}>
          
          <HStack
            background='white'
            padding={4}
            borderRadius={10}
            justifyContent='space-between'
            alignItems='center'
            space={2}
            shadow='3'
          >
            <Text flex={1} fontSize='xl' fontWeight='semibold' color='gray.500'>
              1. Questões sobre o pertencimento.
            </Text>
            <Box
              padding={4}
              borderRadius={10}
              background='gray.700'
            >
              <Text fontSize='4xl' fontWeight='semibold' color='white'>
                {somaPontuacao}
              </Text>
            </Box>
          </HStack>

          <HStack
            background='white'
            padding={4}
            borderRadius={10}
            justifyContent='space-between'
            alignItems='center'
            space={2}
            shadow='3'
          >
            <Text flex={1} fontSize='xl' fontWeight='semibold' color='gray.500'>
              2. Trajetória Escolar do Candidato.
            </Text>
            <Box
              padding={4}
              borderRadius={10}
              background='gray.700'
            >
              <Text fontSize='4xl' fontWeight='semibold' color='white'>
                {somaPontuacao}
              </Text>
            </Box>
          </HStack>

          <HStack
            background='white'
            padding={4}
            borderRadius={10}
            justifyContent='space-between'
            alignItems='center'
            space={2}
            shadow='3'
          >
            <Text flex={1} fontSize='xl' fontWeight='semibold' color='gray.500'>
              3. Experiência de Trabalho e de Participação em Atividades Junto à Comunidade Tradicional.
            </Text>
            <Box
              padding={4}
              borderRadius={10}
              background='gray.700'
            >
              <Text fontSize='4xl' fontWeight='semibold' color='white'>
                {somaPontuacao}
              </Text>
            </Box>
          </HStack>

          <HStack
            background='white'
            padding={4}
            borderRadius={10}
            justifyContent='space-between'
            alignItems='center'
            space={2}
            shadow='3'
          >
            <Text flex={1} fontSize='xl' fontWeight='semibold' color='gray.500'>
              4. Motivações e Expectativas Quanto à Universidade e ao Curso Universitário.
            </Text>
            <Box
              padding={4}
              borderRadius={10}
              background='gray.700'
            >
              <Text fontSize='4xl' fontWeight='semibold' color='white'>
                {somaPontuacao}
              </Text>
            </Box>
          </HStack>

          <VStack
            background='primary.800'
            padding={4}
            borderRadius={10}
            justifyContent='center'
            alignItems='center'
            shadow='3'
          >
            <Text
              color='white'
              fontSize='xl'
              fontWeight='medium'
            >
              Total
            </Text>
            <Box
              borderRadius={10}
            >
              <Text fontSize='4xl' fontWeight='semibold' color='white'>
                {'6,0'}
              </Text>
            </Box>
            <HStack space='1/2' mt='6'>
              <Button
                variant='ghost'
                _text={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                  margin: 0
                }}
                onPress={() => dispatch({type: 'anterior'})}
              >
                Voltar
              </Button>
              <Button
                _text={{
                  fontWeight: 'bold',
                  fontSize: 18
                }}
                onPress={handleSubmit(onSubmit)}
              >
                Salvar
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  )
}

export default TelaConfirmacao