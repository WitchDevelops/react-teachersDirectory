import React from "react";
import '../../styles/signup.css' ;

const JobDetail1 = props => {
  if (props.currentStep !== 1) {
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
                                                       <div className="form-group">
                                                            <label>Job Title</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Start date</label>
                                                            <input type="date" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Advert expiry date</label>
                                                            <input type="date" className="form-control" placeholder="Headteacher" />
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>&nbsp;</label>
                                                            <input type="time" className="form-control" placeholder="Headteacher" />
                                                       </div>
                                                </div>

                                            </div>
                                        </div>
                                   </div>

                              </div>    
                        
    </>
  );
};

export default JobDetail1;
