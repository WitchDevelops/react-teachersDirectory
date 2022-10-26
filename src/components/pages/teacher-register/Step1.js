import React from "react";
import '../../styles/signup.css' ;

const TeacherStep1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>  

     

          <div className="stepfirst" id="stepfirst">
                              <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Account information</h3> 
                                             <p className="pr-4">After the sign up process, we will send a link to your email address. You need to click it to verify your account.</p>       
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>First name</label>
                                                            <input type="text" className="form-control" placeholder="John" />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Surname</label>
                                                            <input type="text" className="form-control" placeholder="deo" />
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" placeholder="contact@myschool.ac.uk" />
                                                            
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" placeholder="deo" />                                                            
                                                       </div>
                                                </div>

                                                <div className="col-md-12 col-sm-12 col-12 mt-2">
                                                       <div className="form-group">
                                                       <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="terms" />
                                                            <label className="custom-control-label" htmlFor="terms">I have read and accept the <a href="#">terms and conditions.</a></label></div>
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

export default TeacherStep1;
