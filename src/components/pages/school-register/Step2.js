import React from "react";
import '../../styles/signup.css' ;

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
     
          <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>School / Organisation address & information</h3> 
                                             <p className="pr-4">This address will be displayed, and we will use your postcode to calculate distances to potential teachers.</p>       
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>School / Organisation name</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Address</label>
                                                            <input type="text" className="form-control" placeholder="School address" />
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Post Code</label>
                                                            <input type="text" className="form-control" placeholder="Post code" />
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12">
                                                       <div className="form-group pt-1">
                                                            <a href="#" className="btn btn-outline-primary mt-4">Add manually</a>
                                                            
                                                       </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Phone Number</label>
                                                            <input type="text" className="form-control" placeholder="Phone Number" />                                                            
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

export default Step2;
