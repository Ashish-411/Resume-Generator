import { useState } from "react";
import { useFormContext } from "../context/FormContext";
function ProdessionalInfo({onNext,onPrevious}){
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
        if(action === "next" ) onNext();
        else if(action === "previous") onPrevious();
    }
    return(
        <form onSubmit={handleSubmit}>
           <div className="conatiner">
                <div className="description-section">
                    <label htmlFor="description">Profile Info:</label>
                    <textarea 
                        name="description" 
                        id="description"
                        onChange={setDescription}>                      
                    </textarea>
                </div>
                <div className="work-experience-section">
                    <label htmlFor="work">Work Experience:</label>
                    <textarea 
                        name="work" 
                        id="work"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    ></textarea>
                    <button type="button" onClick={handleWork}>Add More</button>
                </div>
                <div className="skill-section">
                    <label htmlFor="skill">Skills:</label>
                    <textarea 
                        name="skill" 
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        ></textarea>
                    <button type="button" onClick={handleSkill}>Add More</button>

                </div>
                <div className="language-section">
                    <label htmlFor="language">Languages:</label>
                    <textarea 
                        name="language" 
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        ></textarea>
                    <button type="button" onClick={handleLanguage}>Add More</button>

                </div>
                <div className="education-section">
                    <label htmlFor="education">Academics:</label>
                    <textarea 
                        name="education" 
                        id="education"
                        onChange={setAcademics}>                      
                    </textarea>
                </div>
           </div>
           <button type="submit" name="action" value = "previous"> Previous</button>
           <button type="submit" name="action" value = "next"> Next</button>
        </form>
    );
}
export default ProdessionalInfo;