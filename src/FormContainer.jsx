import PersonalInfo from "./components/PersonalInfo";
import ProdessionalInfo from "./components/ProfessionalInfo";
import { useState } from "react";

function FormContainer(){
    const [step,setStep] = useState(1)
    const nextStep = () => setStep((prev) => prev+1);
    const prevStep = () => setStep((prev) => prev-1);
;    return(
        <>
            { step === 1 && <PersonalInfo  onNext = {nextStep}/>}
            {step === 2 && <ProdessionalInfo onNext ={nextStep} onPrevious = {prevStep}/>}
            {/* <ProdessionalInfo/> */}
        </>
    );
}
export default FormContainer;