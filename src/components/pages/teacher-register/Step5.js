import React ,   {useRef, PropTypes} from "react";
import '../../styles/signup.css' ;
import Dropzone from 'react-dropzone';
import { Editor } from '@tinymce/tinymce-react';

//const TeacherStep5 = props => {
 
//class TeacherStep5 extends Component {
function TeacherStep5(props){  
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };     
if (props.currentStep !== 5) {
    return null;
}




  return (
    <>
{/* https://www.tiny.cloud/docs/integrations/react/ */}

      
                              <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info pr-lg-4">
                                             <h3>Qualification & Achievements</h3> 
                                             <p className=" ">Etiam gravida, massa sit amet interdum finibus, metus felis tincidunt enim, id lacinia eros elit ut quam. Mauris tristique eget nisl at semper. Curabitur vestibulum et lacus at lacinia. Vestibulum sed varius turpis.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <h5>Qualifications (optional)</h5>
                                                       <div className="form-group">
                                                         
   
                                                           <table className="table table-bordered">
                                                                 <thead>
                                                                      <tr>
                                                                           <th width="270">University</th>
                                                                           <th>Course</th>
                                                                           <th>Grade</th>
                                                                           <th className="action-table-box"></th>
                                                                      </tr>                                                                      
                                                                 </thead>
                                                                 <tbody>
                                                                      <tr><td>Brunel University London</td>
                                                                      <td>BSc (Hons) Mathematics and Statistics with Management</td>
                                                                      <td>Degree</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/delete.svg"  alt=""/></td>
                                                                      </tr>  
                                                                      <tr><td>London University</td>
                                                                      <td>Advanced Sciences</td>
                                                                      <td>A</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/delete.svg" alt="" /></td>
                                                                      </tr>  
                                                                                                                                      
                                                                 </tbody>
                                                           </table>

                                                           
                                                       </div>
                                                </div>
                                               
                                                
                                                <div className="col-md-12 col-sm-12 col-12">
                                                   <div className="form-group">
                                                     <div className="row">
                                                           <div className="col-lg-4 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                           <div className="selectBox form-dropdown" id="choose-university">
                                                                 <div className="selectBox__value">Type/Choose university</div>
                                                                 <div className="dropdown-menu custom-dropdown">
                                                                 <a href="#" className="dropdown-item active">Type/Choose university</a>
                                                                 <a href="#" className="dropdown-item">Math</a>
                                                                 <a href="#" className="dropdown-item">Science</a>
                                                                 </div>
                                                            </div>
                                                              {/* <select className="form-control " name="subjname">
                                                                 <option disabled selected>Type/Choose university</option>
                                                                 <option value="math">Math</option>
                                                               </select> */}
                                                           </div>
                                                           <div className="col-lg-3 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                               <input type="text" className="form-control" placeholder="Type course" />
                                                           </div>
                                                           <div className="col-lg-3 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                              <div className="selectBox form-dropdown" id="hold-grade">
                                                                 <div className="selectBox__value">Grade</div>
                                                                 <div className="dropdown-menu custom-dropdown">
                                                                 <a href="#" className="dropdown-item active">Degree</a>
                                                                 <a href="#" className="dropdown-item">Masters</a>
                                                                 <a href="#" className="dropdown-item">PHD</a>
                                                                 <a href="#" className="dropdown-item">Others</a>
                                                                 </div>
                                                            </div>
                                                               {/* <select className="form-control" name="typecourse">
                                                                 <option disabled selected>Grade</option>
                                                                 <option value="degree">Degree</option>
                                                                 <option value="master">Masters</option>
                                                                 <option value="phd">PHD</option>     
                                                                 <option value="others">others</option>                                                            
                                                               </select> */}
                                                           </div>
                                                           <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                                                               <a href="#" className="btn btn-outline-primary w-100">Add</a>
                                                           </div>
                                                     </div>

                                                   </div>
                                                </div>


                                            </div>



                                            <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <h5>Other relevant achievements (optional)</h5>
                                                       <div className="form-group">
                                                       
                                                           <table className="table table-bordered">
                                                                 <thead>
                                                                      <tr>
                                                                           <th width="270">Title</th>
                                                                           <th>Description</th>
                                                                           <th>Grade</th>
                                                                           <th className="action-table-box"></th>
                                                                      </tr>                                                                      
                                                                 </thead>
                                                                 <tbody>
                                                                      <tr><td>Brunel University London</td>
                                                                      <td>Vivamus diam est, suscipit nec sagittis id, sodales id purus.</td>
                                                                      <td>B</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1" alt=""/><img src="assets/images/delete.svg" alt="" /></td>
                                                                      </tr>  
                                                                        
                                                                                                                                      
                                                                 </tbody>
                                                           </table>

                                                           
                                                       </div>
                                                </div>
                                               
                                                
                                                <div className="col-md-12 col-sm-12 col-12">
                                                   <div className="form-group">
                                                     <div className="row">
                                                           <div className="col-lg-3 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                              <input type="text" className="form-control" placeholder="Type title" />
                                                           </div>
                                                           <div className="col-lg-4 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                               <input type="text" className="form-control" placeholder="Type description" />
                                                           </div>
                                                           <div className="col-lg-3 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                              <input type="text" className="form-control" placeholder="Type grade" />
                                                           </div>
                                                           <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                                                               <a href="#" className="btn btn-outline-primary w-100">Add</a>
                                                           </div>
                                                     </div>

                                                   </div>
                                                </div>


                                            </div>

                                            <div className="row">
                                            


                                                <div className="col-md-12 col-sm-12 col-12">
                                                   <h5>Documents</h5>
                                                   <p>Add certificates (CV, DBS) or any work to showcase!</p>
                                                   <div className="form-group">
                                                       
                                                   <div className="drop-box doc_div">
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


                                                     <div className="row justify-content-start">
                                                           <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                                                              <ul className="files-list attached-files">
                                                                      <li><a href="javscript:void(0);">
                                                                        <img src="/assets/images/pdf-icon.svg" alt=""/>Academic certificate <span>PDF, 126.9 KB <img src="assets/images/edit.svg" className="mr-1 ml-3" alt=""/><img src="assets/images/delete.svg" alt=""/></span> </a>
                                                                        </li>
                                                                        <li><a href="javscript:void(0);">
                                                                          <img src="/assets/images/doc-icon.svg" alt=""/>Maths teaching certificate...<span>DOC, 48.1 KB <img src="assets/images/edit.svg" className="mr-1 ml-3" alt=""/><img src="assets/images/delete.svg" alt=""/></span></a>
                                                                        </li>
                                                                        
                                                              </ul>
                                                           </div>
                                                      </div> 
                                                </div>


                                                <div className="col-md-12 col-sm-12 col-12 doc_depend_div">
                                                <h5>Certificates and showcase work (optional)</h5>
                                                   <div className="form-group">
                                                       
                                                    <label>Description</label>
                                                     <Editor  
                                                        apiKey='xfu9g0e7vsqg39oakevhop9mmjgyuh4d7fgxfa240y73ybtw'  
                                                        onInit={(evt, editor) => editorRef.current = editor}
                                                        placeholder= 'Type here...'
                                                        initialValue=" "
                                                        init={{
                                                          height: 250,
                                                          menubar: false,
                                                          plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount'
                                                          ],
                                                          toolbar: 'undo redo | formatselect | ' +
                                                          'bold italic backcolor | alignleft aligncenter ' +
                                                          'alignright alignjustify | checklist bullist numlist indent outdent | ' +
                                                          'removeformat | help',
                                                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                        }}
                                                      />
                                                           
                                                   </div>
                                                </div> 
                                               
                                               </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default TeacherStep5;
