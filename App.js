import { NativeBaseProvider } from "native-base";
import Forms from "./src/pages/Forms";

export default function App() {
  return (
    <NativeBaseProvider>
      <Forms />
    </NativeBaseProvider>
  );
}