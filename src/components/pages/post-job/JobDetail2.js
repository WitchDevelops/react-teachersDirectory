import React from "react";
import '../../styles/signup.css' ;
import Multiselect from 'multiselect-react-dropdown';

const JobDetail2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }


  return (
    <>     
          <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Job details</h3> 
                                             <p className="pr-4">
                                             Advertise your vacancy. These details will be shown to registered teachers who fit your needs.You can save your progress at any moment.
                                             </p> 
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <label>Position</label>
                                                       <div className="row">
                                                            <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                                 <div className="custom-checkbox-info">
                                                                      <div className="custom-control custom-checkbox">
                                                                           <input type="checkbox" className="custom-control-input" id="inlineCheckbox1" />
                                                                           <label className="custom-control-label" Htmlfor="inlineCheckbox1">Leadership/Management</label>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                                 <div className="custom-checkbox-info">
                                                                      <div className="custom-control custom-checkbox">
                                                                           <input type="checkbox" className="custom-control-input" id="inlineCheckbox2" />
                                                                           <label className="custom-control-label" htmlFor="inlineCheckbox2">Teaching/Lecturing</label>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-12">
                                                                 <div className="custom-checkbox-info">
                                                                      <div className="custom-control custom-checkbox">
                                                                           <input type="checkbox" className="custom-control-input" id="inlineCheckbox3" />
                                                                           <label className="custom-control-label" htmlFor="inlineCheckbox3">Non-teaching/Support</label>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                        
                                                </div>
                                               
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Address</label>
                                                            <Multiselect
                                                                 options={[
                                                                      { value: "math", name: "Math", id: 1 },
                                                                      { value: "science", name: "Science", id: 2 },
                                                                      { value: "computer", name: "Computer", id: 3 }
                                                                    ]} // Options to display in the dropdown
                                                                 //    onSelect={(selected, item) => {
                                                                 //      setValue("selectfield", selected);
                                                                 //    }}
                                                                 //    onRemove={(selected, item) => {
                                                                 //      setValue("selectfield", selected);
                                                                 //    }}   
                                                                 /*selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                                 onSelect={this.onSelect} // Function will trigger on select event
                                                                 onRemove={this.onRemove} // Function will trigger on remove event*/
                                                                 displayValue="name" // Property name to display in the dropdown options
                                                            />
                                                            
                                                            
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Contract type</label>
                                                            <select className="form-control">
                                                               <option selected disabled>Select contract type</option>
                                                               <option>Option 1</option>
                                                               <option>Option 2</option>
                                                           </select>
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-8 col-8">
                                                       <div className="form-group">
                                                            <label>Working hours</label>
                                                           <select className="form-control">
                                                               <option selected disabled>Working Hours</option>
                                                               <option>Option 1</option>
                                                               <option>Option 2</option>
                                                           </select>
                                                            
                                                       </div>
                                                </div>

                                                <div className="col-md-2 col-sm-4 col-4">
                                                       <div className="form-group">
                                                            <label>&nbsp;</label>
                                                            <input type="number" name="" className="form-control" />                                                            
                                                       </div>
                                                </div>


                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Salary range (optional)</label>
                                                            <select className="form-control">
                                                               <option selected disabled>Select salary range</option>
                                                               <option>Option 1</option>
                                                               <option>Option 2</option>
                                                           </select>
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-8 col-8">
                                                       <div className="form-group">
                                                            <label>Grade (optional)</label>
                                                           <select className="form-control">
                                                               <option selected disabled>Select grade</option>
                                                               <option>Option 1</option>
                                                               <option>Option 2</option>
                                                           </select>
                                                            
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Job title</label>
                                                            <input type="text" className="form-control" placeholder="Job title" />                                                            
                                                       </div>
                                                </div>

                                                {/* <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>First Local authority</label>
                                                            <select className="form-control">
                                                                 <option selected disabled>Select</option>
                                                                 <option>option 01</option>
                                                                 <option>option 02</option>
                                                                 <option>option 03</option>
                                                            </select>
                                                            
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>First Local authority</label>
                                                            <input type="text" className="form-control" placeholder="https://myschool.ac.uk" />                                                            
                                                       </div>
                                                </div>

                                                
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>School Unique Reference Number (URN)</label>
                                                            <input type="text" className="form-control" placeholder="GLS895" />                                                            
                                                            <span><img src="assets/images/require-info.svg" alt="" className="mr-1"/>6 digit number used by the government to identify educational establishments.</span>
                                                       </div>
                                                </div> */}

                                                


                                            </div>
                                        </div>
                                   </div>

          </div>    
                        
    </>
  );
};

export default JobDetail2;
