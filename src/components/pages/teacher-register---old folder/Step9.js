import React, {useState} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';

const TeacherStep9 = props => {
  if (props.currentStep !== 8) {
    return null;
  }

  return (
    <>
      
                             <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>Become a Verified Teacher</h3> 
                                             <p className=" ">If you are a teacher, you can have a ‘Verified Teacher’ tab on your profile by providing evidence.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                       <label>Please select one of the following:</label>
                                        <div className="row">
                                              <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                  <div className="custom-checkbox-info">
                                                       <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="inlineCheckbox1" />
                                                            <label className="custom-control-label" htmlFor="inlineCheckbox1">Teaching certificate</label>
                                                        </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                  <div className="custom-checkbox-info">
                                                       <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="inlineCheckbox2" />
                                                            <label className="custom-control-label" htmlFor="inlineCheckbox2">Past payslip</label>
                                                        </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                  <div className="custom-checkbox-info">
                                                       <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="inlineCheckbox3" />
                                                            <label className="custom-control-label" htmlFor="inlineCheckbox3">Email address <img src="assets/images/require-info.svg" className="mr-1" data-toggle="tooltip" data-placement="top" title="Needs to be an education email address" /></label>
                                                        </div>
                                                  </div>
                                              </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-12 mt-3">
                                             <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Needs to be an education email address only" />
                                             </div>
                                          </div>
                                        </div>

                                         <div className="row">
                                             <div className="col-md-12 col-sm-12 col-12 mt-1">
                                                <div className="drop-box">
                                                          <Dropzone  onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                          {({getRootProps, getInputProps}) => (
                                                                <div {...getRootProps()}>
                                                                <input {...getInputProps()} />
                                                                <img src="assets/images/upload.svg"/>
                                                                <p>Select a file or drag it here</p>
                                                                <div className="btn btn-outline-primary">Select a File</div>
                                                                </div>
                                                          
                                                          )}
                                                          </Dropzone>

                                                          
                                                      </div>
                                                      <p className="dropbox-info mb-4">Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>    
                                                      <div className="row justify-content-start">
                                                           <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                                                              <ul className="files-list attached-files">
                                                                      <li><a href="javscript:void(0);">
                                                                        <img src="/assets/images/pdf-icon.svg" alt=""/>Academic certificate <span>PDF, 126.9 KB <img src="assets/images/edit.svg" className="mr-1 ml-3" /><img src="assets/images/delete.svg" /></span> </a>
                                                                        </li>
                                                                        <li><a href="javscript:void(0);">
                                                                          <img src="/assets/images/doc-icon.svg" alt=""/>Maths teaching certificate...<span>DOC, 48.1 KB <img src="assets/images/edit.svg" className="mr-1 ml-3" /><img src="assets/images/delete.svg" /></span></a>
                                                                        </li>
                                                                        
                                                              </ul>
                                                           </div>
                                                      </div>
                                                     
                                             </div>
                                         </div>

                                         {/* <div className="row justify-content-start">
                                             <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                                  <div className="custom-checkbox-info">
                                                       <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="school-email" />
                                                            <label className="custom-control-label" htmlFor="school-email">School’s/educational email address</label>
                                                        </div>
                                                  </div>           

                                             </div>
                                          </div>    */}
                                                
                                    </div>

                              </div> 
                            <hr className="mt-4 mb-4"/>
                              <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>DBS</h3> 
                                             <p className=" ">If you can upload your Disclosure and Barring
Service (DBS), this will show on your profile as a verified tag,
which will increase trust from schools and supply agency.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Do you have a enhanced DBS certificate that you upload?</label>
                                            <div className="row justify-content-center">
					
                                                       <div className="col-12 custom-radio">
                                                            <input className="checkbox-tools" type="radio" name="tools" id="tool-1" />
                                                            <label className="for-checkbox-tools" htmlFor="tool-1">                                                            
                                                                 Yes
                                                            </label>

                                                            <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
                                                            <label className="for-checkbox-tools" htmlFor="tool-2">                                                           
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

export default TeacherStep9;