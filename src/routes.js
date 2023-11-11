import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Páginas
import Home from './pages/Home'
import Form from './pages/Form'
import ListingForms from './pages/ListingForms'

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Entrevista'
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
        name='Lista de Entrevistas'

        component={ListingForms}
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