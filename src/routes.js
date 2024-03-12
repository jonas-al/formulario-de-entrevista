/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Iconify } from 'react-native-iconify';

// Páginas
import LaunchScreen from './pages/LaunchScreen';
import Login from './pages/Login';
import Form from './pages/Form';
import ListingInterviews from './pages/ListingInterviews';
import PasswordRecovery from './pages/PasswordRecovery';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const optionsHeader = {
  headerShown: false,
  headerStyle: {
    backgroundColor: '#0e7490',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#fff',
};

const PagesWithTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFFFFF',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: {
        backgroundColor: '#AD550B',
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        height: 96,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        ...optionsHeader,
        title: 'Home',
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <Iconify icon="ant-design:home-filled" size={28} color={color} />;
          }
          return <Iconify icon="ant-design:home-filled" size={28} color="hsla(0, 0%, 100%, 0.6)" />;
        },
      }}
    />
    <Tab.Screen
      name="Form"
      component={Form}
      options={{
        ...optionsHeader,
        title: 'Form',
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <Iconify icon="fluent:form-new-24-filled" size={28} color={color} />;
          }
          return (
            <Iconify icon="fluent:form-new-24-filled" size={28} color="hsla(0, 0%, 100%, 0.6)" />
          );
        },
      }}
    />
    <Tab.Screen
      name="Lista de Entrevistas"
      component={ListingInterviews}
      options={{
        ...optionsHeader,
        tabBarIcon: ({ focused, color }) => {
          if (focused) {
            return <Iconify icon="fluent:list-16-regular" size={28} color={color} />;
          }
          return <Iconify icon="fluent:list-16-regular" size={28} color="hsla(0, 0%, 100%, 0.6)" />;
        },
      }}
    />
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={optionsHeader} />
      <Stack.Screen name="Login" component={Login} options={optionsHeader} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={optionsHeader} />
      <Stack.Screen name="PagesWithTab" component={PagesWithTab} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
