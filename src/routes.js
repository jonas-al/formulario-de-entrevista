import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Páginas
import Home from './pages/Home'
import Login from './pages/Login'
import Form from './pages/Form'
import ListingInterviews from './pages/ListingInterviews'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const optionsHeader = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#0e7490',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerTintColor: '#fff'
}

const PagesWithTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Entrevista'
    >
      <Tab.Screen
        name='Entrevista'
        component={Form}
        options={{
          ...optionsHeader,
          title: 'Formulário de Entrevista',
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
        component={ListingInterviews}
        options={{
          ...optionsHeader,
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

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={optionsHeader}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={optionsHeader}
        />
        <Stack.Screen
          name='PagesWithTab'
          component={PagesWithTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}