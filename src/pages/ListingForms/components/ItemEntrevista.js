
import { Text, Box, HStack, AlertDialog, Badge } from 'native-base'

const ItemEntrevista = ({ entrevista }) => {
  return (
    <Box>
      <Box
        onPress={() => setCaixaDialogoAberta(true)}
        backgroundColor='gray.900'
        padding='3'
        marginBottom='6'
        borderRadius='10'
      >
        <Badge
          colorScheme="darkBlue"
          _text={{
            color: "white"
          }}
          variant="solid"
          rounded="4"
          width='1/4'
        >
          Entrevista
        </Badge>

        <HStack
          justifyContent='space-between'
          alignItems='center'
        >
          
          <Box>
            <Text color='white' fontSize='xl' fontWeight='bold'>
              {entrevista.nomeCandidato}
            </Text>
            <Text color='white' fontSize='md'>
              Inscrição: {entrevista.inscricaoCandidato}
            </Text>
          </Box>

          <Box
            backgroundColor='gray.100'
            borderRadius='10'
            padding='4'
          >
            <Text
              color='black'
              fontSize='3xl'
              fontWeight='bold'
            >
              {entrevista.pontuacaoTotal? entrevista.pontuacaoTotal : entrevista.totalPontuacao}
            </Text>
          </Box>

        </HStack>
      </Box>
    </Box>
  )
}

export default ItemEntrevista