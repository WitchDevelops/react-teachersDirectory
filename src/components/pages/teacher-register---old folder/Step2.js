import React from "react";
import '../../styles/signup.css' ;

const TeacherStep2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
     
          <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Address</h3> 
                                             <p className="pr-4">This won’t be displayed but we use your postcode to calculate distances to potential schools. Also, if you add your mobile number, we can text you if you have a job application.</p>       
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                  <div className="col-md-8 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Address</label>
                                                            <input type="text" className="form-control" placeholder="Location or postcode" />
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12">
                                                       <div className="form-group pt-1">
                                                            <a href="#" className="btn btn-outline-primary mt-4">Add manually</a>
                                                            
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
                        
    </>
  );
};

export default TeacherStep2;
