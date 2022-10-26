import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import '../../assets/css/style.css';

const TeacherMultiStepProgressBar = props => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
   } else if (props.currentStep === 2) {
    stepPercentage = 12;
  } else if (props.currentStep === 3) {
    stepPercentage = 24;
  } else if (props.currentStep === 4) {
    stepPercentage = 36;
  } else if (props.currentStep === 5) {
    stepPercentage = 48;
  } else if (props.currentStep === 6) {
    stepPercentage = 60;
    
  } else if (props.currentStep === 7) {
    stepPercentage = 72;
  } else if (props.currentStep === 8) {
    stepPercentage = 84;  
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
           <>
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
           <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
           <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
           
          </div>
          <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Account information</h3>
          </>
        )}
        
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
             <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
             <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 


          </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Subjects & Teaching details</h3>
          </>
          
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
           <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>           
                <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
                <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
            </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Qualifications & achievements</h3>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
           <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>           
                <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
                <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
            </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Your profile</h3>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
           <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>           
                <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
                <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
            </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Photos & videos</h3>
          </>
        )}
      </Step>

      <Step>
        {({ accomplished, index }) => (
           <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>           
                <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
                <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
            </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Availability</h3>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
           <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>           
                <div className={`circlebox indexedStep ${accomplished ? "accomplished" : null}`}> <span className="icon-circle-o"></span>
                <span className={`indexing_number indexedStep ${accomplished ? "accomplished" : null}`}>{index + 1}</span></div> 
            </div>
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Availability</h3>
          </>
        )}
      </Step>
      
    </ProgressBar>
  );
};

export default TeacherMultiStepProgressBar;
