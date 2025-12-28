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
    professionalinfo:{
        description:"",
        workExp:[],
        skills:[],
        language:[],
        academics:"",

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
    
    
    //----------PROFESSIONAL INFO SECTION

    const setDescription =(e) =>{
        dispatch({type:"SET_DESCRIPTION",payload:e.target.value});

    }
    const setAcademics =(e) =>{
        dispatch({type:"SET_ACADEMICS",payload:e.target.value});

    }

    const addWork = (work) =>{
        dispatch({type:"ADD_WORK",payload:work});
    }
    const addSkill = (skill) =>{
        dispatch({type:"ADD_SKILL",payload:skill});

    }
    const addLanguage = (language) =>{
        dispatch({type:"ADD_LANGUAGE",payload:language});

    }
    //----------</PROFESSIONAL INFO SECTION



    //returning a provider for context
    return<FormContext.Provider value={{
        ...state,
        setFirstName,
        setLastName,
        setContactNo,
        setEmail,
        setLocation,
        setDescription,
        addWork,
        addSkill,
        addLanguage,
        setAcademics,
        }}>
            {children}
        </FormContext.Provider>
}
