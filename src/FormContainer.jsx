import PersonalInfo from "./components/PersonalInfo";
import ProdessionalInfo from "./components/ProfessionalInfo";
import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import Resume from "./components/Resume";

function FormContainer(){
    const [step,setStep] = useState(1)
    const nextStep = () => setStep((prev) => prev+1);
    const prevStep = () => setStep((prev) => prev-1);
    return(
      <>
        {/* <Resume/> */}
            <Routes>
                {/* FORM PAGE */}
                <Route
                    path="/"
                    element={
                        step === 1 ? (
                        <PersonalInfo onNext={nextStep} />
                    ) : (
                        <ProdessionalInfo
                        onNext={nextStep}
                        onPrevious={prevStep}
                        />
                    )
                    }
                />

                {/* RESUME PAGE */}
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </>
    );
}
export default FormContainer;