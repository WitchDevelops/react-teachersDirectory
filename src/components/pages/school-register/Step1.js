import React from "react";
import '../../styles/signup.css' ;

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Account information</h3> 
                                             <ul className="admin-instrutions">
                                                  <li><span>1</span>After the sign up process, we will send you a link to your email address to verify your account.</li>
                                                  <li><span>2</span>Your will be the <b>primary admin user.</b> This will allow you to add users from your dashboard.
</li>
                                             </ul>
                                             <p className="pr-4"></p>       
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>First name</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Surname</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Job title</label>
                                                            <input type="text" className="form-control" placeholder="Headteacher" />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" placeholder=" " />
                                                            <span className="info-text"><a href="/">Must be a valid school/organisational email address.</a></span>
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" placeholder=" " />
                                                            <span className="info-text">Must be 8 characters long and must contain at least 1 uppercase letter and 1 digit character.</span>
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
                        
    </>
  );
};

export default Step1;
