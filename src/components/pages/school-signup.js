import React, { Component } from "react";
import TopBannerSignup from './school-register/top-banner';
import Step1 from "./school-register/Step1";
import Step2 from "./school-register/Step2";
// import Step3 from "./school-register/Step3";
import MultiStepProgressBar from "./school-register/MultiStepProgressBar";
import BrandsSection from "../common/brands";
import Form from 'react-bootstrap/Form'



// function SchoolSignup (){
class SchoolSignup extends Component {   
     constructor(props) {
          super(props);
      
          // Set the intiial input values
          this.state = {
            currentStep: 1,
          //   email: "",
          //   username: "",
          //   password: ""
          };
      
          // Bind the submission to handleChange()
          this.handleChange = this.handleChange.bind(this);
      
          // Bind new functions for next and previous
          this._next = this._next.bind(this);
          this._prev = this._prev.bind(this);
        }
      
        // Use the submitted data to set the state
        handleChange(event) {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        }
      
        // Trigger an alert on form submission
        handleSubmit = event => {
          event.preventDefault();
          // const { email, username, password } = this.state;
          const {  } = this.state
          /*alert(`Your registration detail: \n 
            Email: ${email} \n 
            Username: ${username} \n
            Password: ${password}`);*/
        };
      
        // Test current step with ternary
        // _next and _previous functions will be called on button click
        _next() {
          let currentStep = this.state.currentStep;
      
          // If the current step is 1 or 2, then add one on "next" button click
          currentStep = currentStep >= 2 ? 3 : currentStep + 1;
          this.setState({
            currentStep: currentStep
          });
        }
      
        _prev() {
          let currentStep = this.state.currentStep;
          // If the current step is 2 or 3, then subtract one on "previous" button click
          currentStep = currentStep <= 1 ? 1 : currentStep - 1;
          this.setState({
            currentStep: currentStep
          });
        }
      
        // The "next" and "previous" button functions
        get previousButton() {
          let currentStep = this.state.currentStep;
      
          // If the current step is not 1, then render the "previous" button
          if (currentStep !== 1) {
            return (
              <button  className="btn btn-outline-primary"  onClick={this._prev}>
                Back
              </button>
            );
          }
      
          // ...else return nothing
          return null;
        }
      
        get nextButton() {
          let currentStep = this.state.currentStep;
          // If the current step is not 3, then render the "next" button
          if (currentStep < 2) {
            return (
              <button className="btn btn-primary" onClick={this._next}>
                Continue
              </button>
            );
          }
          // ...else render nothing
          return null;
        }
      
        get submitButton() {
          let currentStep = this.state.currentStep;
      
          // If the current step is the last step, then render the "submit" button
          if (currentStep > 1) {
            return <button className="btn btn-primary">Submit</button>;
          }
          // ...else render nothing
          return null;
        }

render() {
    return ( 

         <>
          <TopBannerSignup/>
         {/* <TopBannerSignup/> https://codesandbox.io/s/multi-step-react-form-forked-16s0g2?file=/src/index.js:489-503 */}

         
         <section className="section-padding bg-gray">
             <div className="container">
                <div className="row">
                    <div className="col-12">
                         <form onSubmit={this.handleSubmit}>
                              <div className="row justify-content-center">
                                  <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-5">
                                        <div className="progress-box mb-5">
                                        <MultiStepProgressBar currentStep={this.state.currentStep} />
                                        </div>
                                   </div>  
                              
                              </div>

                              <div className="row justify-content-center">
                                   <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                        <div className="custom-card cutsom-padding">
                                             <Step1
                                                  currentStep={this.state.currentStep}
                                                  handleChange={this.handleChange}                                                 
                                             />
                                             <Step2
                                                  currentStep={this.state.currentStep}
                                                  handleChange={this.handleChange}                                                  
                                             />
                                             {/* <Step3
                                                  currentStep={this.state.currentStep}
                                                  handleChange={this.handleChange}                                                 
                                             /> */}

                                            <div className="card-footer-button">
                                                  <div className="row">
                                                       <div className="col-6 text-left">
                                                       {this.previousButton}
                                                       </div>
                                                       <div className="col-6 text-right">
                                                       {this.nextButton}
                                                       {this.submitButton}
                                                       </div>
                                                  </div> 
                                             </div>

                                        </div>
                                   </div>
                              </div>
                              
                              

                              
                         </form>  
                    </div>
                </div>
               


             </div>
         </section>


         <section className="section-padding">
            <div className="container">
                <div className="row">
                        <div className="col-12 mb-4">
                        <div className="section_title text-left"><h2>Supported by</h2></div>
                        </div>
                    </div>	
                <div className="row">
                <div className="col-12">
                        
                    <BrandsSection/>

                </div>
                </div>
            </div>	
            </section>
         
         </>
    );
    }
}       
export default  SchoolSignup;   