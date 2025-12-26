import { createContext, useContext,useReducer} from "react";
import reducer from '../reducer/FormReducer';
//creating a context
const FormContext = createContext();
//initial state of variables
let initialState;
initialState = {
   personalinfo:{
        first_name:"",
        last_name:"",
        email:"",
        contactno:"",
        location:"",
    },
};

//creating a custom hook of context
export const useFormContext = () => useContext(FormContext);


//context provider
export function FormContextProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState);

    //----------PERSONAL INTO SECTION
    const setFirstName = (e) =>{
        dispatch({type:"SET_FIRST_NAME",payload:e.target.value});
    }
    const setLastName = (e) =>{
        dispatch({type:"SET_LAST_NAME",payload:e.target.value});
    }
    const setContactNo = (e) =>{
        dispatch({type:"SET_CONTACT_NO",payload:e.target.value});
    }
    const setEmail = (e) =>{
        dispatch({type:"SET_EMAIL",payload:e.target.value});
    }
    const setLocation = (e) =>{
        dispatch({type:"SET_LOCATION",payload:e.target.value});
    }
        //----------</PERSONAL INTO SECTION



    //returning a provider for context
    return<FormContext.Provider value={{
        ...state,
        setFirstName,
        setLastName,
        setContactNo,
        setEmail,
        setLocation,
        }}>
            {children}
        </FormContext.Provider>
}
