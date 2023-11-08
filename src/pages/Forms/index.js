import { StyleSheet, Text, View } from 'react-native'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

const Forms = () => {
  const { getItem, removeItem } = useStorage()
  const focused = useIsFocused()
  

  useEffect(() => {
    const getForms = async () => {
      console.log(123)
    }

    getForms()
  }, [focused])

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default Forms