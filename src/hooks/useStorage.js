import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const entrevistas = await AsyncStorage.getItem(key)
      return JSON.parse(entrevistas) || []
    } catch (error) {
      console.log('ERRO AO BUSCAR ITEM ', error)
    }
  }

  const saveItem = async (key, value) => {
    try {
      const entrevistas = await getItem(key)
      entrevistas.push(value)
      
      await AsyncStorage.setItem(key, JSON.stringify(entrevistas))
    } catch (error) {
      console.log('ERRO AO SALVAR ITEM ', error)
    }
  }

  const removeItem = async (key, item) => {
    try {
      const entrevistas = getItem(key)
      const entrevistasAtual = entrevistas.filter((entrevista) => {
        return (
          entrevista !== item
        )
      })

      await AsyncStorage.setItem(key, JSON.stringify(entrevistasAtual))

      return entrevistasAtual
    } catch (error) {
      console.log('ERRO AO REMOVER ITEM ', error)
    }
  }

  return (
    getItem,
    saveItem,
    removeItem
  )
}

export default useStorage