import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Páginas
import Home from './pages/Home'
import Form from './pages/Form'
import Forms from './pages/Forms'

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Novo Cadastro'
        component={Form}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons
                size={size} 
                color={color}
                name='clipboard'
              />
            }

            return <Ionicons
              size={size} 
              color={color}
              name='clipboard-outline'
            />
          }
        }}
      />

    <Tab.Screen
        name='Formulários Cadastrados'
        component={Forms}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons
                size={size} 
                color={color}
                name='list'
              />
            }

            return <Ionicons
              size={size} 
              color={color}
              name='list-outline'
            />
          }
        }}
      />
    </Tab.Navigator>
  )
}