import { useState } from "react";
import { useFormContext } from "../context/FormContext";
import "../styles/PersonalInfo.css";
function PersonalInfo({onNext}){
    const [hobby,setHobby] = useState("");
    const {personalinfo,setFirstName,
            setLastName,setContactNo,setEmail,
            setLocation,addHobby,setProfession,setPhoto} = useFormContext();
    function handleHobby(){
    if (hobby.trim() === "") return;
    addHobby(hobby);
    setHobby("");
   }


    function handleSubmit(e){
        e.preventDefault();
        onNext();
    }
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Personal Information</h2>
            <div className="photo-section">
                <p>UPLOAD PHOTO:</p>
                <input type="file"
                accept="image/*"
                onChange={setPhoto}
                />
            </div>
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
                <label htmlFor="profession">Profession:</label>
                <input 
                    type="text" 
                    id="profession"
                    name="profession"
                    value={personalinfo.profession}
                    onChange={setProfession}
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
            <div className="form-group">
                    <label htmlFor="hobby">Hobby:(Write in one Word)</label>
                    <input 
                        name="hobby" 
                        id="hobby"
                        value={hobby}
                        onChange={(e) => setHobby(e.target.value)}
                        ></input>
                    <button type="button"className="add-btn" onClick={handleHobby}>Add More</button>
            </div>
            <div className="form-actions">
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
export default PersonalInfo;