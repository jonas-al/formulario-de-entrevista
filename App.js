import { NativeBaseProvider } from 'native-base';
import Routes from './src/routes';

const App = () => (
  <NativeBaseProvider>
    <Routes />
  </NativeBaseProvider>
);

export default App;
