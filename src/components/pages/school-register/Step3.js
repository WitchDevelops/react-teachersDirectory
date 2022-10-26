import React from "react";
import '../../styles/signup.css' ;

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Admin users</h3> 
                                             <p className="pr-4">What happens next:</p>       
                                             <ul className="admin-instrutions">
                                                  <li><span>1</span>Teachers’ Directory administration staff will contact the school to confirm the details and add the school on the system.</li>
                                                  <li><span>2</span>By default the principal is created as the school <b>primary</b> user. This will allow the principal to add and manage school users later on.</li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Administrator's full name</label>
                                                            <input type="text" className="form-control" placeholder="Jane Doe" />
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-8 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Address</label>
                                                            <input type="text" className="form-control" placeholder="School address" />
                                                       </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12">
                                                       <div className="form-group pt-1">
                                                            <a href="#" className="btn btn-outline-primary mt-4">Add manually</a>
                                                            
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Administrator's email</label>
                                                            <input type="text" className="form-control" placeholder="admin@myschool.ac.uk" /> 
                                                            <span>Must be a valid school / organisational email address.</span>
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Phone number (optional)</label>
                                                            <input type="text" className="form-control" placeholder="Phone number" />                                                            
                                                       </div>
                                                </div>


                                            </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default Step3;
