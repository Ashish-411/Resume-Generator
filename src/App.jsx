import PersonalInfo from "./components/PersonalInfo";
import { FormContextProvider } from "./context/FormContext";
function App() {
  return (
    <FormContextProvider>
      <PersonalInfo/>
    </FormContextProvider>
  )
}

export default App;
