function FormReducer(state,action){
    switch(action.type){
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
            
            default:
                return state;
            }

}
export default FormReducer;