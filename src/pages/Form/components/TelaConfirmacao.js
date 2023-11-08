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

  const [somaPontuacao, setSomaPontuacao] = useState(10)

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
    <ScrollView w='95%'>
      <VStack space={6} marginBottom={8}>
        <Heading>
          Nota Final
        </Heading>

        <Text fontSize='xl' fontWeight='semibold' color='gray.600'>
          1. Questões sobre o pertencimento.
        </Text>

        <Text fontSize='2xl' fontWeight='semibold' color='primary.600'>
          Nota: {somaPontuacao}
        </Text>

        <Text fontSize='xl' fontWeight='semibold' color='gray.600'>
          2. Trajetória Escolar do Candidato.
        </Text>

        <Text fontSize='2xl' fontWeight='semibold' color='primary.600'>
          Nota: {somaPontuacao}
        </Text>

        <Text fontSize='xl' fontWeight='semibold' color='gray.600'>
          3. Experiência de Trabalho e de Participação em Atividades Junto à Comunidade Tradicional.
        </Text>

        <Text fontSize='2xl' fontWeight='semibold' color='primary.600'>
          Nota: {somaPontuacao}
        </Text>

        <Text fontSize='xl' fontWeight='semibold' color='gray.600'>
          4. Motivações e Expectativas Quanto à Universidade e ao Curso Universitário.
        </Text>

        <Text fontSize='2xl' fontWeight='semibold' color='primary.600'>
          Nota: {somaPontuacao}
        </Text>

        <Text fontSize='2xl' fontWeight='semibold' color='indigo.700'>
          Nota final: {somaPontuacao}
        </Text>

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
            Salvar
          </Button>
        </HStack>
    </ScrollView>
  )
}

export default TelaConfirmacao