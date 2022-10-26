import React, {useState, useRef} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';
import { Editor } from '@tinymce/tinymce-react';

const TeacherStep6 = props => {
const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };   
  if (props.currentStep !== 6) {
    return null;
  }

  return (
    <>
          <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>Your profile</h3> 
                                             <p className=" ">Upload a profile photo that is professional looking.Tell the schools about yourself.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                            <div className="col-md-8 col-sm-8 col-7">
                                                <h5>Upload your profile picture</h5>
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
                                                   <p className="dropbox-info">Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>    

                                                       
                                            </div>
                                               
                                                
                                                <div className="col-md-4 col-sm-4 col-5">
                                                   <div className="img-previw mt-4">
                                                      <img src="/assets/images/photo.png" className="img-fluid w-100" alt="" />
                                                   </div>
                                                </div>


                                            </div>



                                            <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                               <label>Gender</label>
                                                <div className="form-group">
                                                    <div className="d-flex">
                                                    <div className="custom-control custom-checkbox mr-4">
                                                                <input type="checkbox" className="custom-control-input" id="inlineCheckbox1" />
                                                                <label className="custom-control-label" htmlFor="inlineCheckbox1">Male
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="inlineCheckbox2" />
                                                                <label className="custom-control-label" htmlFor="inlineCheckbox2">Female
                                                                </label>
                                                            </div>
                                                    </div>
                                                    
                                                    {/* <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                            <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                                                    </div> */}
                                                </div>
                                            </div>
                                               
                                                
                                                {/* <div className="col-md-12 col-sm-12 col-12">
                                                   <div className="form-group">
                                                     <label>Summary</label>
                                                     

                                                     <Editor  
                                                        apiKey='xfu9g0e7vsqg39oakevhop9mmjgyuh4d7fgxfa240y73ybtw'  
                                                        onInit={(evt, editor) => editorRef.current = editor}
                                                        initialValue="Write a short introduction or summary..."
                                                        init={{
                                                          height: 200,
                                                          menubar: false,
                                                          plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount'
                                                          ],
                                                          toolbar: 'undo redo | formatselect | ' +
                                                          'bold italic backcolor | alignleft aligncenter ' +
                                                          'alignright alignjustify | bullist numlist outdent indent | ' +
                                                          'removeformat | help',
                                                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                      />

                                                   </div>
                                                </div> */}
                                                <div className="col-md-12 col-sm-12 col-12">
                                                   <div className="form-group">
                                                     <label>About you</label>
                                                     <Editor  
                                                        apiKey='xfu9g0e7vsqg39oakevhop9mmjgyuh4d7fgxfa240y73ybtw'  
                                                        onInit={(evt, editor) => editorRef.current = editor}
                                                        initialValue="Write a description about you, your background, and what you offer..."
                                                        init={{
                                                          height: 200,
                                                          menubar: false,
                                                          plugins: [
                                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'anchor', 'searchreplace',   'help', 'wordcount', 'image'
                                                          ],
                                                          toolbar: 'undo redo | bold italic underline  | ' +
                                                            'alignleft aligncenter alignright alignjustify | ' +
                                                            'bullist numlist | outdent indent | ' +
                                                             'removeformat | help',
                                                          // plugins: [
                                                          //   'advlist autolink lists link image charmap print preview anchor',
                                                          //   'searchreplace visualblocks code fullscreen',
                                                          //   'insertdatetime media table paste code help wordcount'
                                                          // ],
                                                          // toolbar: 'undo redo | formatselect | ' +
                                                          // 'bold italic backcolor | alignleft aligncenter ' +
                                                          // 'alignright alignjustify | bullist numlist outdent indent | ' +
                                                          // 'removeformat | help',
                                                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                      />

                                                   </div>
                                                </div>                     

                                            </div>

                                            <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <h5>Qualifications (optional)</h5>
                                                       <div className="form-group">
                                                         
   
                                                           <table className="table table-bordered">
                                                                 <thead>
                                                                      <tr>
                                                                           <th>Platform</th>
                                                                           <th>Link</th>
                                                                           
                                                                           <th className="action-table-box"></th>
                                                                      </tr>                                                                      
                                                                 </thead>
                                                                 <tbody>
                                                                      <tr><td>Website</td>
                                                                      <td>https://mywebsite.co.uk/</td>
                                                                     
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/delete.svg" /></td>
                                                                      </tr>  
                                                                      <tr><td>LinkedIn</td>
                                                                      <td>www.linkedin.com/in/johndoe/</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/delete.svg" /></td>
                                                                      </tr>  
                                                                                                                                      
                                                                 </tbody>
                                                           </table>

                                                           
                                                       </div>
                                                </div>               

                                            <div className="col-md-12 col-sm-12 col-12">
                                                   <div className="form-group">
                                                     <div className="row">
                                                           <div className="col-lg-5 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                              <select className="form-control " name="subjname">
                                                                 <option disabled selected>Select platform</option>
                                                                 <option value="plateform-1">Plateform 1</option>
                                                               </select>
                                                           </div>
                                                           <div className="col-lg-5 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                               <input type="text" className="form-control" placeholder="Type URL" />
                                                           </div>
                                                           
                                                           <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                                                               <a href="#" className="btn btn-outline-primary w-100">Add</a>
                                                           </div>
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

export default TeacherStep6;