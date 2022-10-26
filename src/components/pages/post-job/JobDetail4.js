import React, {useRef} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';

const JobDetail4 = props => {
const editorRef = useRef(null);
     const log = () => {
       if (editorRef.current) {
         console.log(editorRef.current.getContent());
       }
     }; 

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>School / Organisation details</h3> 
                                             <p className="pr-4">Give more details about your school/organisation. This will be used to create a school profile.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">                                      
                                               <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Name of the school/organisation</label>
                                                            <input type="text" className="form-control" placeholder="My School" />
                                                       </div>
                                                </div>

                                                <div className="col-md-9 col-sm-8 col-7 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Location</label>
                                                            <input type="text" className="form-control" placeholder="School address" />
                                                       </div>
                                                </div>

                                                <div className="col-md-3 col-sm-4 col-5 pt-1"> 
                                                     <a href="#" className="btn btn-outline-primary mt-4">Add manually</a>
                                                </div>

                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>School type/education phase  </label>
                                                            <select className="form-control">
                                                                 <option selected disabled>Select School type/education phase</option>
                                                                 <option>Phase 1</option>
                                                                 <option>Phase 2</option>
                                                                 <option>Phase 3</option>
                                                                 <option>Phase 4</option>
                                                            </select>
                                                       </div>
                                                </div> 
                                                    
                                                


                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>School website (optional)</label>
                                                            <input type="url" className="form-control" placeholder="https://myschool.ac.uk/" />
                                                       </div>
                                                </div>

                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Email to receive applications</label>
                                                            <input type="text" className="form-control" placeholder="contact@myschool.ac.uk" />
                                                       </div>
                                                </div>

                                                <div className="col-md-8 col-sm-8 col-7">
                                                <h5>School logo (optional)</h5>
                                                <div className="drop-box">
                                                       <Dropzone  onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                       {({getRootProps, getInputProps}) => (
                                                            <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <img src="assets/images/upload.svg" alt=""/>
                                                            <p>Select a file or drag it here</p>
                                                            <div className="btn btn-outline-primary">Select a File</div>
                                                            </div>
                                                      
                                                       )}
                                                       </Dropzone>                                                      
                                                   </div>
                                                   <p className="dropbox-info">Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>    

                                                       
                                            </div>
                                               
                                                
                                                <div className="col-md-4 col-sm-4 col-5">
                                                  <label>Preview</label>
                                                   <div className="img-previw">
                                                      <img src="/assets/images/school-logo.jpg" className="img-fluid w-100" alt="" />
                                                   </div>
                                                </div>   
                                                {/* <div className="col-md-8 col-sm-7 col-12">
                                                       <div className="form-group">
                                                          
                                                       </div>
                                                </div>

                                                <div className="col-md-4 col-sm-5 col-12">
                                                       <div className="form-group">
                                                            
                                                       </div>
                                                </div> */}
                                               

                                               
                                            </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default JobDetail4;
