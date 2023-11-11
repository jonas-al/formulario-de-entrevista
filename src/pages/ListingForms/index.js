import { ScrollView, Box, Heading, Pressable, AlertDialog, Button} from 'native-base'
import useStorage from '../../hooks/useStorage'
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import ItemEntrevista from './components/ItemEntrevista'

const ListingForms = () => {
  const { getItem, removeItem } = useStorage()
  const focused = useIsFocused()

  const [listaEntrevistas, setListaEntrevistas] = useState([])
  const [caixaDialogoAberta, setCaixaDialogoAberta] = useState(false)
  const [indexEntrevista, setIndexEntrevista] = useState(null)
  

  useEffect(() => {
    const getForms = async () => {
      const entrevistas = await getItem('@entrevistas')
      setListaEntrevistas(entrevistas)
    }

    getForms()
  }, [focused])

  const handleEntrevista = async () => {
    const entrevistas = await removeItem('@entrevistas', listaEntrevistas[indexEntrevista])
    setListaEntrevistas(entrevistas)
  }

  return (
    <ScrollView w='100%'>
      <AlertDialog
        isOpen={caixaDialogoAberta}
      >
        <AlertDialog.Content>

          <AlertDialog.Header>
            Entrevista
          </AlertDialog.Header>

          <AlertDialog.Body>
            Você apagar essa entrevista?
          </AlertDialog.Body>

          <AlertDialog.Footer>

            <Button 
              variant='unstyled'
              onPress={() => setCaixaDialogoAberta(false)}  
            >
              Não
            </Button>

            <Button
              colorScheme='danger'
              onPress={async () => {
                await handleEntrevista()
                setCaixaDialogoAberta(false)
              }}
            >
              Sim
            </Button>

          </AlertDialog.Footer>

        </AlertDialog.Content>

      </AlertDialog>
      
      <Box
        backgroundColor='primary.700'
        padding={10}
        borderBottomRadius={15}
      >
        <Heading color='white' textAlign='center'>
          Entrevistas Armazenadas
        </Heading>
      </Box>

      <Box
        padding='3'
      >
        {listaEntrevistas.map((entrevista, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setCaixaDialogoAberta(true)
                setIndexEntrevista(index)
              }}
            >
              <ItemEntrevista
                entrevista={entrevista}
              />
            </Pressable>
          )
        })}
      </Box>

    </ScrollView>
  )
}

export default ListingForms