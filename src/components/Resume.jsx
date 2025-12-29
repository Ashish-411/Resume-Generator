import {useFormContext} from "../context/FormContext";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


import "../styles/Resume.css";
function Resume(){
    const {personalinfo,professionalinfo} = useFormContext();
    
    return(
        <div className="container">
            <div className="PersonalInfo">
                <div className="picture-section">
                    <figure>
                        <img src={personalinfo.image} alt="Profile Picture" />
                    </figure>
                </div>
                <div className="name-section">
                    <h2>{personalinfo.first_name +" "+ personalinfo.last_name}</h2>
                    <h3>{personalinfo.profession}</h3>
                </div>
                <div className="contact-section">
                    <h2>CONTACT</h2>
                    <p><BsFillTelephoneFill /> {personalinfo.contactno}</p>
                    <p><MdEmail/> {personalinfo.email}</p>
                    <p><FaLocationDot /> {personalinfo.location}</p>
                </div>
                <div className="skills-section">
                    <h2>SKILLS</h2>
                    <ul>
                        {
                            professionalinfo.skills.map((elem,index)=>{
                                return(<li key={index}>{elem}</li>);
                            })
                        }
                    </ul>
                </div>
                <div className="language-section">
                    <h2>LANGUAGES</h2>
                    <ul>
                        {
                            professionalinfo.language.map((elem,index)=>{
                                return(<li key={index}>{elem}</li>);
                            })
                        }
                    </ul>
                </div>
                <div className="hobby-section">
                    <h2>HOBBY</h2>
                    <ul>
                        {
                            personalinfo.hobby.map((elem,index)=>{
                                return(<li key={index}>{elem}</li>);
                            })
                        }
                    </ul>
                </div>

            </div>
            <div className="ProfessionalInfo">
                 <div className="description-section">
                    <h2>PROFILE</h2>
                    <p>{professionalinfo.description}</p>
                </div>
                 <div className="work-experience-section">
                    <h2>WORK EXPERIENCE</h2>
                    <ul>
                        {
                            professionalinfo.workExp.map((elem,index)=>{
                                return(<li key={index}>{elem}</li>);
                            })
                        }
                    </ul>
                </div>
                <div className="education-section">
                    <h2>EDUCATION</h2>
                    <p>{professionalinfo.academics}</p>
                </div>
            </div>
        
        </div>
    );
}
export default Resume;