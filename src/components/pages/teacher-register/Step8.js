import React from "react";
import '../../styles/signup.css' ;

const TeacherStep8 = props => {
  if (props.currentStep !== 7) {
    return null;
  }

  return (
    <>
                           <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>Availability</h3> 
                                             <p className=" ">Select any dates that are you are free for additional services (e.g. proof reading) or for teaching.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <table className="table availability-table mb-0"><thead><tr><th></th>
                                                       <th>Mon</th>
                                                       <th>Tue</th>
                                                       <th>Wed</th>
                                                       <th>Thur</th>
                                                       <th>Fri</th>
                                                       <th>Sat</th>
                                                       <th>Sun</th>
                                                  </tr>
                                             </thead>
                                             <tbody><tr><td><b>Morning</b> Pre 12 am</td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                 <label className="custom-control-label" htmlFor="customCheck1">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                 <label className="custom-control-label" htmlFor="customCheck2">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                 <label className="custom-control-label" htmlFor="customCheck3">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                                                 <label className="custom-control-label" htmlFor="customCheck4">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                 <label className="custom-control-label" htmlFor="customCheck5">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                                                 <label className="custom-control-label" htmlFor="customCheck6">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                                                 <label className="custom-control-label" htmlFor="customCheck7">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                  </tr>
                                                  <tr><td><b>Afternoon</b> 1-5 pm </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                 <label className="custom-control-label" htmlFor="customCheck8">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                                 <label className="custom-control-label" htmlFor="customCheck9">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck10"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck10">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck11"/>
                                                                 <label className="custom-control-label" htmlFor="customCheck11">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                                                 <label className="custom-control-label" htmlFor="customCheck12">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck13"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck13">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck14"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck14">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                  </tr>
                                                  <tr><td><b>Evening</b> 5pm +</td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                                                 <label className="custom-control-label" htmlFor="customCheck15">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck16" />
                                                                 <label className="custom-control-label" htmlFor="customCheck16">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck17"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck17">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck18"/>
                                                                 <label className="custom-control-label" htmlFor="customCheck18">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck19" />
                                                                 <label className="custom-control-label" htmlFor="customCheck19">
                                                                 </label>
                                                            </div>
                                                       </td>
                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck20"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck20">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                       <td><div className="custom-control custom-checkbox">
                                                                 <input type="checkbox" className="custom-control-input" id="customCheck21"  />
                                                                 <label className="custom-control-label" htmlFor="customCheck21">
                                                                 </label>
                                                            </div>
                                                       </td>

                                                  </tr>
                                                  </tbody>
                                        </table>
                                                  {/* <label className="mb-2">Are you available for work now (e.g. teaching, supply work)?</label>
                                                   <div className="row justify-content-center">
					
                                                       <div className="col-12 custom-radio">
                                                            <input className="checkbox-tools" type="radio" name="examiner" id="examiner-1" />
                                                            <label className="for-checkbox-tools" htmlFor="examiner-1">                                                            
                                                                 Yes
                                                            </label>

                                                            <input className="checkbox-tools" type="radio" name="examiner" id="examiner-2" />
                                                            <label className="for-checkbox-tools" htmlFor="examiner-2">                                                           
                                                                 No
                                                            </label>
                                                            
                                                            
                                                       </div>                                                  
                                                  </div> */}
                                                
                                    </div>

                              </div> 

                              <div className="row mt-4">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             
                                             <p className=" ">Are you available for work now (e.g.
teaching, supply work)?. By selecting ‘Yes’ this will be
shown on your profile as ‘Available’ for work</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                        <label className="mb-2">Are you available for work now?</label>
                                                   <div className="row justify-content-center">
					
                                                       <div className="col-12 custom-radio">
                                                            <input className="checkbox-tools" type="radio" name="examiner" id="examiner-1" />
                                                            <label className="for-checkbox-tools" htmlFor="examiner-1">                                                            
                                                                 Yes
                                                            </label>

                                                            <input className="checkbox-tools" type="radio" name="examiner" id="examiner-2" />
                                                            <label className="for-checkbox-tools" htmlFor="examiner-2">                                                           
                                                                 No
                                                            </label>
                                                            
                                                            
                                                       </div>                                                  
                                                  </div>
                                        </div>
                                    </div>
                             </div>     
    </>
);
};

export default TeacherStep8;