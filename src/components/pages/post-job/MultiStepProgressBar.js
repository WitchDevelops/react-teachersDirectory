import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import '../../assets/css/style.css';

const MultiStepProgressBar = props => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 15;
  } else if (props.currentStep === 2) {
    stepPercentage = 30;
   } else if (props.currentStep === 3) {
    stepPercentage = 45;
  } else if (props.currentStep === 4) {
    stepPercentage = 60;
  } else if (props.currentStep === 5) {
    stepPercentage = 75;
  } else if (props.currentStep === 6) {
    stepPercentage = 90;  
  } 
  else {
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
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>School address & info</h3>
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
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Admin users</h3>
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
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Admin users</h3>
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
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Admin users</h3>
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
            <h3 className={`stepname indexedStep ${accomplished ? "accomplished" : null}`}>Admin users</h3>
          </>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
