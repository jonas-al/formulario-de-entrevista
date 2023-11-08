import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const formularios = await AsyncStorage.getItem(key)

      return JSON.parse(formularios) || []
    } catch (error) {
      console.log('ERRO AO BUSCAR ITEM ', error)
    }
  }

  const saveItem = async (key, value) => {
    try {
      const formularios = await getItem(key)
      formularios.push(value)
      
      await AsyncStorage.setItem(key, JSON.stringify(formularios))
    } catch (error) {
      console.log('ERRO AO SALVAR ITEM ', error)
    }
  }

  const removeItem = async (key, item) => {
    try {
      const formularios = await getItem(key)
      const formulariosAtual = formularios.filter((formulario) => {
        console.log(JSON.stringify(formulario), JSON.stringify(item), 123)
        return (
          JSON.stringify(formulario) !== JSON.stringify(item)
        )
      })

      await AsyncStorage.setItem(key, JSON.stringify(formulariosAtual))

      return formulariosAtual
    } catch (error) {
      console.log('ERRO AO REMOVER ITEM ', error)
    }
  }

  return {
    getItem,
    saveItem,
    removeItem
  }
}

export default useStorage