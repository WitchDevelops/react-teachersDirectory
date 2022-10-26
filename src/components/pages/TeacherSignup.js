import React, { Component } from "react";
import TeacherTopBannerSignup from "./teacher-register/top-banner";
import TeacherMultiStepProgressBar from "./teacher-register/MultiStepProgressBar";
import TeacherStep1 from "./teacher-register/Step1";
import TeacherStep2 from "./teacher-register/Step2";
import TeacherStep3 from "./teacher-register/Subjects";
import TeacherStep4 from "./teacher-register/TeacherDetailsStep4";
import TeacherStep5 from "./teacher-register/Step5";
import TeacherStep6 from "./teacher-register/Step6";
// import TeacherStep7 from "./teacher-register/Step7";
import TeacherStep8 from "./teacher-register/Step8";
import TeacherStep9 from "./teacher-register/Step9";
import BrandsSection from "../common/brands";


 
// function SchoolSignup (){
class TeacherSignup extends Component {   
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
         currentStep = currentStep >= 7 ? 8 : currentStep + 1;
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
         if (currentStep < 8) {
           return (
            <>
            <button className="btn btn-outline-primary mr-3" >Save as a draft</button> 
             <button className="btn btn-primary" onClick={this._next}>Continue</button>
             </>
           );
         }
         // ...else render nothing
         return null;
       }
     
       get submitButton() {
         let currentStep = this.state.currentStep;
     
         // If the current step is the last step, then render the "submit" button
         if (currentStep > 7) {
           return <button className="btn btn-primary">Submit</button>;
         }
         // ...else render nothing
         return null;
       }

render() {
   return ( 

        <>
         <TeacherTopBannerSignup/>
        {/* <TopBannerSignup/> https://codesandbox.io/s/multi-step-react-form-forked-16s0g2?file=/src/index.js:489-503 */}

        
         
        <section className="section-padding bg-gray">
            <div className="container">
               <div className="row">
                   <div className="col-12">
                        <form onSubmit={this.handleSubmit}>
                             {/* <div className="row justify-content-center">
                                 <div className="col-lg-10 col-md-12 col-sm-12 col-12 mb-5">
                                       <div className="progress-box mb-5">
                                       <TeacherMultiStepProgressBar currentStep={this.state.currentStep} />
                                       </div>
                                  </div>  
                             
                             </div> */}

                             <div className="row justify-content-center">
                                  <div className="col-lg-12 col-md-10 col-sm-12 col-12">
                                       <div className="custom-card cutsom-padding">
                                            <TeacherStep1
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />
                                            <TeacherStep2
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                  
                                            />
                                            <TeacherStep3
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />

                                            <TeacherStep4
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />
                                            <TeacherStep5
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />

                                             <TeacherStep6
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />
                                            {/* <TeacherStep7
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />  */}
                                            <TeacherStep8
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            />
                                             <TeacherStep9
                                                 currentStep={this.state.currentStep}
                                                 handleChange={this.handleChange}                                                 
                                            /> 
                                            

                                            <div className="card-footer-button mt-4">
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
export default  TeacherSignup;   