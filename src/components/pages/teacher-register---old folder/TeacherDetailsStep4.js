import React, {useState} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone';
/*import { useDropzone } from "eact-dropzone";*/


function TeacherStep4(props) {
//const TeacherStep4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  /*const { getRootProps, getInputProps, acceptedFiles } =
  useDropzone({});
const files = acceptedFiles.map((file) => (
  <span key={file.path}>
    {file.path} - {file.size} bytes
  </span>
));*/

  /*const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name)); */

  return (
    <>
     <div className="row">
                     <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Teaching details</h3> 
                                             <p className="pr-4">Fusce viverra turpis quis mi mollis, ac ornare arcu commodo. Aliquam imperdiet sodales elementum. Quisque vulputate risus eu dui pellentesque volutpat.</p>      
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Position</label>
                                                            <select className="form-control" name="position">
                                                                 <option disabled selected>Select position</option>
                                                                 <option value="position-1">Position 1 </option>
                                                                 <option value="position-2">Position 2</option>
                                                                 <option value="position-3">Position 3</option>                                                                 
                                                               </select>
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-6 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Workplace</label>
                                                            <select className="form-control" name="position">
                                                                 <option disabled selected>Select workplaces</option>
                                                                 <option value="workplaces-1">Workplaces 1 </option>
                                                                 <option value="workplaces-2">Workplaces 2</option>
                                                                 <option value="workplaces-3">Workplaces 3</option>                                                                 
                                                               </select>
                                                       </div>
                                                </div>
                                                
                                                <div className="col-md-6 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>What position do you hold? (optional)</label>
                                                            <select className="form-control" name="position">
                                                                 <option disabled selected>Select position</option>
                                                                 <option value="position-1">Position 1 </option>
                                                                 <option value="position-2">Position 2</option>
                                                                 <option value="position-3">Position 3</option>                                                                 
                                                               </select>
                                                       </div>
                                                </div>
                                               
                                                <div className="col-md-6 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>How long have you been teaching? (optional)</label>
                                                            <input type="number" className="form-control" placeholder="Enter the no of years"/>
                                                            {/* <select className="form-control" name="position">
                                                                 <option disabled selected>Select number of years</option>
                                                                 <option value="1-2">1-2 year</option>
                                                                 <option value="3-5">3-5 Year</option>
                                                                 <option value="6-10">6-10 Year</option>  
                                                                 <option value="10+">10+ Year</option>                                                                 
                                                               </select> */}
                                                       </div>
                                                </div>
                                               

                                                
                                                <div className="col-md-12 col-sm-12 col-12 mb-2">
                                                  <label className="mb-2">Do you have a teaching qualification? (optional)</label>
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


                                                <div className="col-md-12 col-sm-12 col-12 mb-2">
                                                  <label className="mb-2">Do you have a degree? (optional)</label>
                                                   <div className="row justify-content-center">
					
                                                       <div className="col-12 custom-radio">
                                                            <input className="checkbox-tools" type="radio" name="degree" id="degree-1" />
                                                            <label className="for-checkbox-tools" htmlFor="degree-1">                                                            
                                                                 Yes
                                                            </label>

                                                            <input className="checkbox-tools" type="radio" name="degree" id="degree-2" />
                                                            <label className="for-checkbox-tools" htmlFor="degree-2">                                                           
                                                                 No
                                                            </label>
                                                            
                                                            
                                                       </div>                                                  
                                                  </div>
                                                </div>


                                                <div className="col-md-12 col-sm-12 col-12 mb-2">
                                                  <label className="mb-2">Are you currently an examiner?</label>
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


                                                <div className="col-md-12 col-sm-12 col-12 mb-2">
                                                  <label className="mb-2">Teaching evidence (e.g. payslip or contract):</label>
                                                   <div className="drop-box">
                                                       <Dropzone  onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                       {({getRootProps, getInputProps}) => (
                                                            <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <img src="assets/images/upload.svg" alt=" "/>
                                                            <p>Select a file or drag it here</p>
                                                            <div className="btn btn-outline-primary">Select a File</div>
                                                            </div>
                                                      
                                                       )}
                                                       </Dropzone>

                                                       

                                                      
                                                   </div>
                                                   <p className="dropbox-info">Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>

                                                   {/* <div className="">
                                                         <aside> {files}</aside>
                                                   </div> */}

                                                       <div className="row justify-content-start">
                                                           <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                                                              <ul className="files-list attached-files">
                                                                      <li><a href="javscript:void(0);">
                                                                        <img src="/assets/images/pdf-icon.svg" alt=" "/>Maths teaching payslip <span>PDF, 126.9 KB <img src="assets/images/edit.svg" className="mr-1 ml-3" /><img src="assets/images/delete.svg" /></span> </a>
                                                                        </li>
                                                                                                                                             
                                                              </ul>
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

export default TeacherStep4;
