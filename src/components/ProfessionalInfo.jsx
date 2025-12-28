import { useState } from "react";
import { useFormContext } from "../context/FormContext";
import "../styles/ProfessionalInfo.css";
import { NavLink } from "react-router-dom";
function ProdessionalInfo({onPrevious}){
    //useState
    const [work,setWork] = useState("");
    const [skill,setSkill] = useState("");
    const [language,setLanguage] = useState("");
    //UseContext
     const {addWork,addSkill,addLanguage,setDescription,setAcademics} = useFormContext();

     
   function handleWork(){
    if (work.trim() === "") return;
    addWork(work);
    setWork("");
   }
   function handleSkill(){
     if (skill.trim() === "") return;
        addSkill(skill);
        setSkill("");
   }
   function handleLanguage(){
    if (language.trim() === "") return;
        addLanguage(language);
        setLanguage("");
   }
    //Handle submit
    function handleSubmit(e){
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if(action === "previous") onPrevious();
    }
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Professional Information</h2>
                <div className="form-section">
                    <label htmlFor="description">Profile Summary:</label>
                    <textarea 
                        name="description" 
                        id="description"
                        onChange={setDescription}>                      
                    </textarea>
                </div>
                <div className="form-section">
                    <label htmlFor="work">Work Experience:</label>
                    <textarea 
                        name="work" 
                        id="work"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    ></textarea>
                    <button type="button" className="add-btn" onClick={handleWork}>Add More</button>
                </div>
                <div className="form-section">
                    <label htmlFor="skill">Skills:(Write in one Word)</label>
                    <textarea 
                        name="skill" 
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        ></textarea>
                    <button type="button"className="add-btn" onClick={handleSkill}>Add More</button>

                </div>
                <div className="form-section">
                    <label htmlFor="language">Languages:</label>
                    <textarea 
                        name="language" 
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        ></textarea>
                    <button type="button" className="add-btn" onClick={handleLanguage}>Add More</button>

                </div>
                <div className="form-section">
                    <label htmlFor="education">Academics:</label>
                    <textarea 
                        name="education" 
                        id="education"
                        onChange={setAcademics}>                      
                    </textarea>
                </div>
           <div className="form-actions">
                <button type="submit" name="action" value = "previous"> Previous</button>
                <NavLink to ="/resume">
                    <button name="action" value = "next"> Next</button>
                </NavLink>
            </div>
        </form>
    );
}
export default ProdessionalInfo;