import FormContainer from "./FormContainer";
import { FormContextProvider } from "./context/FormContext";
function App() {
  return (
    <FormContextProvider>
      <FormContainer/>
    </FormContextProvider>
  )
}

export default App;
