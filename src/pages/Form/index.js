import { useState, useReducer } from 'react';
import { VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import InformacoesCandidato from './components/InformacoesCandidato';
import PrimeiraQuestao from './components/PrimeiraQuestao';
import SegundaQuestão from './components/SegundaQuestão';
import TerceiraQuestao from './components/TerceiraQuestao';
import QuartaQuestao from './components/QuartaQuestao';
import TelaConfirmacao from './components/TelaConfirmacao';

const reducer = (state, action) => {
  switch (action.type) {
    case 'proxima':
      return {
        numeroForm: state.numeroForm + 1,
      };

    case 'anterior':
      return {
        numeroForm: state.numeroForm - 1,
      };

    case 'resetar':
      return {
        numeroForm: 0,
      };

    default:
      return 0;
  }
};

const Form = () => {
  const modeloRespostas = {
    nomeCandidato: null,
    inscricaoCandidato: null,
    localidadeEntrevista: null,
    selecaoCandidato: null,
    questao1: null,
    questao2: null,
    questao3: null,
    questao4: null,
  };

  const [respostas, setRespostas] = useState(modeloRespostas);

  const [state, dispatch] = useReducer(reducer, { numeroForm: 0 });

  const handleRepostas = async (acao, resposta) => {
    if (acao === 'juntar') {
      setRespostas(Object.assign(respostas, resposta));
    } else if (acao === 'resetar') {
      setRespostas(modeloRespostas);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
      scrollEnabled={false}
    >
      <VStack flex="1" p="5" pb="20" safeArea>
        {state.numeroForm === 0 && (
          <InformacoesCandidato
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
        {state.numeroForm === 1 && (
          <PrimeiraQuestao
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
        {state.numeroForm === 2 && (
          <SegundaQuestão
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
        {state.numeroForm === 3 && (
          <TerceiraQuestao
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
        {state.numeroForm === 4 && (
          <QuartaQuestao
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
        {state.numeroForm === 5 && (
          <TelaConfirmacao
            handleRepostas={handleRepostas}
            dispatch={dispatch}
            respostas={respostas}
          />
        )}
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default Form;
