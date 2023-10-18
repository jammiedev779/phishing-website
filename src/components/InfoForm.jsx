import { useState } from "react";
import Stepper from "./stepper/Stepper";
import StepperControl from "./stepper/StepperControl";
import Account from "./stepper/steps/Account";
import Complete from "./stepper/steps/Complete";
import Details from "./stepper/steps/Details";
import { StepperContext } from "./stepper/context";

function InfoForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Account Information", "Person Details", "Certificate"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account></Account>;
      case 2:
        return <Details></Details>;
      case 3:
        return <Complete handleClick={handleClick}></Complete>;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="shadow-xl rounded-2xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep}></Stepper>
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* Display Steps */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        ></StepperControl>
      )}
    </div>
  );
}

export default InfoForm;
