function FormReducer(state,action){
    switch(action.type){
        case "SET_PHOTO":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    image: action.payload,
                }
            }
        case "SET_FIRST_NAME":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    first_name: action.payload,
                }
            }
        case "SET_LAST_NAME":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    last_name: action.payload,
                }

            }
        case "SET_PROFESSION":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    profession: action.payload,
                }

            }
        case "SET_CONTACT_NO":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    contactno: action.payload,
                }
            }
        case "SET_EMAIL":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    email: action.payload,
                }
            }
        case "SET_LOCATION":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    location: action.payload,
                }
            }
        case "ADD_HOBBY":
            return{
                ...state,
                personalinfo:{
                    ...state.personalinfo,
                    hobby:[...state.personalinfo.hobby,action.payload],
                }
            }
        case "SET_DESCRIPTION":
            return{
                ...state,
                professionalinfo:{
                    ...state.professionalinfo,
                    description: action.payload,
                }
            }
        case "SET_ACADEMICS":
            return{
                ...state,
                professionalinfo:{
                    ...state.professionalinfo,
                    academics: action.payload,
                }
            }

        case "ADD_WORK":
            return{
                ...state,
                professionalinfo:{
                    ...state.professionalinfo,
                    workExp:[...state.professionalinfo.workExp,action.payload],
                }
            }
        case "ADD_SKILL":
            return{
                ...state,
                professionalinfo:{
                    ...state.professionalinfo,
                    skills:[...state.professionalinfo.skills,action.payload],
                }
            }
        case "ADD_LANGUAGE":
            return{
                ...state,
                professionalinfo:{
                    ...state.professionalinfo,
                    language:[...state.professionalinfo.language,action.payload],
                }
            }
            
            default:
                return state;
            }

}
export default FormReducer;