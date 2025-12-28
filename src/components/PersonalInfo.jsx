import { useFormContext } from "../context/FormContext";
import "../styles/PersonalInfo.css";
function PersonalInfo({onNext}){
    const {personalinfo,setFirstName,setLastName,setContactNo,setEmail,setLocation} = useFormContext();
    function handleSubmit(e){
        e.preventDefault();
        onNext();
    }
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Personal Information</h2>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input 
                    type="text" 
                    id="first_name"
                    name="first_name"
                    value={personalinfo.first_name}
                    onChange={setFirstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input 
                    type="text" 
                    id="last_name"
                    name="last_name"
                    value={personalinfo.last_name}
                    onChange={setLastName}
                />
            </div>
            <div className="form-group">     
               <label htmlFor="phone">Contact no:</label>
                <input 
                    type="tel" 
                    id="phone" 
                    pattern="[0-9]{10}"
                    value={personalinfo.contactno}
                    onChange={setContactNo}/>
            </div>
            <div className="form-group">                
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    value={personalinfo.email}
                    onChange={setEmail} />
            </div>
         <div className="form-group">
                <label htmlFor="location">Current Location:</label>
                <input 
                    type="text" 
                    id="location"
                    value={personalinfo.location}
                    onChange={setLocation} />
            </div>
            <div className="form-actions">
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
export default PersonalInfo;