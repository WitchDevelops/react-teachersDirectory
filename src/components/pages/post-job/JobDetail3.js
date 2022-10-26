import React, {useRef} from "react";
import '../../styles/signup.css' ;
import { Editor } from '@tinymce/tinymce-react';

const JobDetail3 = props => {
     const editorRef = useRef(null);
     const log = () => {
       if (editorRef.current) {
         console.log(editorRef.current.getContent());
       }
     }; 

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Job details</h3> 
                                             <p className="pr-4">Advertise your vacancy. These details will be shown to registered teachers who fit your needs.You can save your progress at any moment.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                
                                             

                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Job description</label>
                                                            <Editor  
                                                                 apiKey='xfu9g0e7vsqg39oakevhop9mmjgyuh4d7fgxfa240y73ybtw'  
                                                                 onInit={(evt, editor) => editorRef.current = editor}
                                                                 initialValue="Tell teachers more about this vacancy..."
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
                                                </div>
                                               
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <label>Application method</label>
                                                       <div className="form-group">
                                                         
                                                            <div className="row">
                                                                 <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                                      <div className="custom-checkbox-info">
                                                                           <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="inlineCheckbox4" />
                                                                                <label className="custom-control-label" for="inlineCheckbox4">Online application form</label>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-md-4 col-sm-12 col-12 pr-md-0">
                                                                      <div className="custom-checkbox-info">
                                                                           <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="inlineCheckbox5" />
                                                                                <label className="custom-control-label" htmlFor="inlineCheckbox5">CV/File attachment</label>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-md-4 col-sm-12 col-12">
                                                                      <div className="custom-checkbox-info">
                                                                           <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="inlineCheckbox6" />
                                                                                <label className="custom-control-label" htmlFor="inlineCheckbox6">Redirect to website</label>                                                                      </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                </div> 


                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Email to receive applications</label>
                                                            <input type="text" className="form-control" placeholder="contact@myschool.ac.uk" />
                                                       </div>
                                                </div>
                                               

                                               
                                            </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default JobDetail3;
