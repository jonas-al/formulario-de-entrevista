import { Box } from 'native-base'
import InformacoesCandidato from './components/InformacoesCandidato'
import PrimeiraQuestao from './components/PrimeiraQuestao'
import { useState, useReducer } from 'react'

import useStorage from '../../hooks/useStorage'

const reducer = (state, action) => {
    if (action.type === 'proxima') {
      return {
        numeroForm: state.numeroForm + 1
      }
    }

    if (action.type === 'anterior') {
      return {
        numeroForm: state.numeroForm - 1
      }
    }
}

const Form = () => {
  const { saveItem } = useStorage()

  const [state, dispatch] = useReducer(reducer, {numeroForm: 0})

  const [respostas, setRespostas] = useState({
    nomeCandidato: null,
    inscricaoCandidato: null,
    localidadeEntrevista: null,
    selecaoCandidato: null,
    questao1: null
  })


  const juntarRespostas = async (resposta) => {
    setRespostas(
      Object.assign(respostas, resposta)
    )
    if(state.numeroForm === 1){
      await saveItem('@formularios', respostas)
      alert("Formulário salvo com sucesso")
    }
  }

  return (
    <Box flex={1} alignItems='center' justifyContent='center' marginTop='10%'>
      {state.numeroForm === 0 && <InformacoesCandidato juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 1 && <PrimeiraQuestao juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
    </Box>
  )
}

export default Form
