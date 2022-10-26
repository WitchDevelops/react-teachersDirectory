import React from "react";
import '../../styles/signup.css' ;

const TeacherStepfirstHalf = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
          <div className="stepfirst-half" id="stepfirst-half">
          <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Address</h3> 
                                             <p className="pr-4">This won’t be displayed but we use your postcode to calculate distances to potential schools.Also, if you add your mobile number, we can text you if you have a job application.</p>       
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-8 col-8">
                                                       <div className="form-group">
                                                            <label>Address <a href="#" className=""><img src="assets/images/require-info.svg" alt="" className="mr-1" /></a></label>
                                                            <input type="text" className="form-control" placeholder="School address" />
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-4 pt-1">
                                                       <div className="form-group mt-4">
                                                            <a href="#" className="btn btn-primary">Add manually</a>
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>School / Organisation name</label>
                                                            <input type="text" className="form-control" placeholder="Business School of London" />
                                                            
                                                       </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                   </div>

                              </div>   
          </div>          
    </>
  );
};

export default TeacherStepfirstHalf;
