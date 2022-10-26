import React, {useState} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';
import { useDropzone } from "react-dropzone";

const TeacherStep7 = props => {
  if (props.currentStep !== 7) {
    return null;
  }

  return (
    <>
     Photos & Video (optional)
         {/* <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>Photos & Video (optional)</h3> 
                                             <p className=" ">Upload a few photos that show you tutoring and/or paste in a link to a video platform of you introducing yourself.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                       

                                            <div className="row">
                                             


                                                <div className="col-md-12 col-sm-12 col-12">
                                                   <label>Upload photos</label>
                                                   <div className="form-group">
                                                       
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
                                                   <p className="dropbox-info">Accepted file formats: JPG, JPEG, PNG</p>    




                                                     <div className="row">
                                                          <div className="col-md-6 col-sm-12 col-sm-12 mb-3">
                                                                <div className="img-preview-box">
                                                                    <img src="/assets/images/photos-01.jpg" className="img-fluid w-100" alt="" />
                                                                   <div className="img-details d-flex justify-content-between">
                                                                       <h6>photos-01,jpg</h6>
                                                                       <div className="action-box">
                                                                           <img src="assets/images/delete.svg" alt=""/>
                                                                       </div>
                                                                    </div> 
                                                                </div>
                                                          </div>
                                                          <div className="col-md-6 col-sm-12 col-sm-12 mb-3">
                                                                <div className="img-preview-box">
                                                                    <img src="/assets/images/photos-02.jpg" className="img-fluid w-100" alt="" />
                                                                   <div className="img-details d-flex justify-content-between">
                                                                       <h6>photos-01,jpg</h6>
                                                                       <div className="action-box">
                                                                           <img src="assets/images/delete.svg" alt=""/>
                                                                       </div>
                                                                    </div> 
                                                                </div>
                                                          </div>
                                                          <div className="col-md-6 col-sm-12 col-sm-12 mb-3">
                                                                <div className="img-preview-box">
                                                                    <img src="/assets/images/photos-03.jpg" className="img-fluid w-100" alt="" />
                                                                   <div className="img-details d-flex justify-content-between">
                                                                       <h6>photos-01,jpg</h6>
                                                                       <div className="action-box">
                                                                           <img src="assets/images/delete.svg" alt=""/>
                                                                       </div>
                                                                    </div> 
                                                                </div>
                                                          </div>
                                                      </div>      
                                                   </div>
                                                </div>

                                                <div className="col-12">
                                                    <label>Video Link</label>
                                                      <div className="form-group">
                                                          <input type="url" className="form-control" placeholder="Paste in YouTube or Vimeo link"/>
                                                          <p className="dropbox-info">Video link must be a valid YouTube or Vimeo link</p>
                                                      </div>
                                                </div>            

                                               
                                               </div>
                                        </div>
                                   </div>

                              </div>  */}
    </>
);
};

export default TeacherStep7;