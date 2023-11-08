import { useState, useReducer } from 'react'
import { Box } from 'native-base'

import InformacoesCandidato from './components/InformacoesCandidato'
import PrimeiraQuestao from './components/PrimeiraQuestao'
import SegundaQuestão from './components/SegundaQuestão'
import TerceiraQuestao from './components/TerceiraQuestao'
import QuartaQuestao from './components/QuartaQuestao'
import TelaConfirmacao from './components/TelaConfirmacao'


import useStorage from '../../hooks/useStorage'

const reducer = (state, action) => {
    if (state.numeroForm > 5) return

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

  const [state, dispatch] = useReducer(reducer, {numeroForm: 5})

  const [respostas, setRespostas] = useState({
    nomeCandidato: null,
    inscricaoCandidato: null,
    localidadeEntrevista: null,
    selecaoCandidato: null,
    questao1: null,
    questao2: null,
    questao3: null,
    questao4: null
  })


  const juntarRespostas = async (resposta) => {
    setRespostas(
      Object.assign(respostas, resposta)
    )
    /*if(state.numeroForm === 1){
      await saveItem('@formularios', respostas)
      alert("Formulário salvo com sucesso")
    }*/
  }

  return (
    <Box flex={1} alignItems='center' justifyContent='center' marginTop='10%'>
      {state.numeroForm === 0 && <InformacoesCandidato juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 1 && <PrimeiraQuestao juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 2 && <SegundaQuestão juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 3 && <TerceiraQuestao juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 4 && <QuartaQuestao juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
      {state.numeroForm === 5 && <TelaConfirmacao juntarRespostas={juntarRespostas} dispatch={dispatch} respostas={respostas} />}
    </Box>
  )
}

export default Form
