import { useEffect, useState } from 'react'
import {Text, Heading, ScrollView, Button, VStack, HStack, Box, AlertDialog } from 'native-base'
import { useNavigation } from '@react-navigation/native';

import useStorage from '../../../hooks/useStorage'

const TelaConfirmacao = ({ handleRepostas, dispatch, respostas }) => {
  const navigation = useNavigation()
  const { saveItem } = useStorage()
  
  const [pontuacaoQuestao1, setPontuacaoQuestao1] = useState(0)
  const [pontuacaoQuestao2, setPontuacaoQuestao2] = useState(0)
  const [pontuacaoQuestao3, setPontuacaoQuestao3] = useState(0)
  const [pontuacaoQuestao4, setPontuacaoQuestao4] = useState(0)
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0)

  const [caixaDialogoAberta, setCaixaDialogoAberta] = useState(false)

  


  useEffect(() => {
    setPontuacaoQuestao1(
      Number(respostas.questao1.pontuacaoPertencimento.replace(',', '.')) +
      Number(respostas.questao1.pontuacaoVulnerabilidadeSocioeconomica.replace(',', '.'))
    )

    setPontuacaoQuestao2(
      Number(respostas.questao1.pontuacaoPertencimento.replace(',', '.')) +
      Number(respostas.questao1.pontuacaoVulnerabilidadeSocioeconomica.replace(',', '.'))
    )

    setPontuacaoQuestao3(
      Number(respostas.questao3.pontuacaoExperienciaTrabalho.replace(',', '.')) +
      Number(respostas.questao3.pontuacaoMembroComunidade.replace(',', '.'))
    )

    setPontuacaoQuestao4(
      Number(respostas.questao4.pontuacaoEntendimentoProfissional.replace(',', '.')) +
      Number(respostas.questao4.pontuacaoEntendimentoBeneficiosRetorno.replace(',', '.'))
    )
  }, [])

  useEffect(() => {
    setPontuacaoTotal(
      (pontuacaoQuestao1 + pontuacaoQuestao2 + pontuacaoQuestao3 + pontuacaoQuestao4).toFixed(1).replace('.', ',')
    )
  }, [pontuacaoQuestao1, pontuacaoQuestao2, pontuacaoQuestao3, pontuacaoQuestao4])

  const onSubmit = async () => {
    await saveItem('@entrevistas', {
      nomeCandidato: respostas.nomeCandidato,
      inscricaoCandidato: respostas.inscricaoCandidato,
      pontuacaoQuestao1,
      pontuacaoQuestao2,
      pontuacaoQuestao3,
      pontuacaoQuestao4,
      pontuacaoTotal
    })

    handleRepostas('resetar')

    setCaixaDialogoAberta(true)
  }

  return (
    <ScrollView w='100%'>
      <AlertDialog
        isOpen={caixaDialogoAberta}
      >

        <AlertDialog.Content>

          <AlertDialog.Header>
            Entrevista salva com sucesso
          </AlertDialog.Header>

          <AlertDialog.Body>
            Você deseja cadastra uma nova entrevista?
          </AlertDialog.Body>

          <AlertDialog.Footer>

            <Button 
              variant='unstyled'
              onPress={() => navigation.navigate('Lista de Entrevistas')}  
            >
              Não
            </Button>

            <Button
              onPress={() => dispatch({ type: 'resetar' })}
            >
              Sim
            </Button>

          </AlertDialog.Footer>

        </AlertDialog.Content>

      </AlertDialog>

      <VStack
        backgroundColor='primary.700'
        padding={10}
        borderBottomRadius={15}
        marginBottom='6'
        space={4}
      >
        <Heading color='white' textAlign='center'>
          NOTA FINAL
        </Heading>

        <VStack
          backgroundColor='white' 
          padding={3}
          borderRadius={10}
          shadow='3'
        >

          <Text color='gray.600' fontSize={20} fontWeight='bold'>
            Nome
          </Text>
          <Text color='gray.600' fontSize={18}>
            {respostas.nomeCandidato}
          </Text>

        </VStack>

        <VStack
          backgroundColor='white' 
          padding={3}
          borderRadius={10}
          shadow='3'
        >

          <Text color='gray.600' fontSize={20} fontWeight='bold'>
            Inscrição
          </Text>
          <Text color='gray.600' fontSize={18}>
            {respostas.inscricaoCandidato}
          </Text>

        </VStack>

      </VStack>
      
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
                {pontuacaoQuestao1.toFixed(1).replace('.', ',')}
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
                {pontuacaoQuestao2.toFixed(1).replace('.', ',')}
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
                {pontuacaoQuestao3.toFixed(1).replace('.', ',')}
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
                {pontuacaoQuestao4.toFixed(1).replace('.', ',')}
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
                {pontuacaoTotal}
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
                onPress={onSubmit}
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