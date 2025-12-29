import { createContext, useContext,useReducer} from "react";
import reducer from '../reducer/FormReducer';
//creating a context
const FormContext = createContext();
//initial state of variables
let initialState;
initialState = {
   personalinfo:{
        image : null,
        first_name:"",
        last_name:"",
        profession:"",
        email:"",
        contactno:"",
        location:"",
        hobby:[],
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
    const setProfession = (e) =>{
        dispatch({type:"SET_PROFESSION",payload:e.target.value});
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
    const addHobby = (hobby) =>{
        dispatch({type:"ADD_HOBBY",payload:hobby});

    }
    const setPhoto = (e) =>{
        const file = e.target.files[0];
        if (!file) return;
        
        const imageURL = URL.createObjectURL(file);
        dispatch({type:"SET_PHOTO",payload:imageURL});
        }

    console.log(state.personalinfo.image);
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
        setProfession,
        setContactNo,
        setEmail,
        setLocation,
        addHobby,
        setDescription,
        addWork,
        addSkill,
        addLanguage,
        setAcademics,
        setPhoto,
        }}>
            {children}
        </FormContext.Provider>

}