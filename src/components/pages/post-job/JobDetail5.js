import React, {useRef} from "react";
import '../../styles/signup.css' ;

const JobDetail5 = props => {
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
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Contact details</h3> 
                                             <p className="pr-4">Aenean finibus risus a sodales tincidunt. Mauris fringilla varius ex sed imperdiet. Donec blandit, nibh quis sagittis vulputate, quam sapien vulputate odio.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">                                      
                                               <div className="col-md-6 col-sm-12 col-12 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Title</label>
                                                            <select className="form-control">
                                                                 <option selected disabled>Select</option>
                                                                 <option>Title 1</option>
                                                                 <option>Title 2</option>
                                                                 <option>Title 3</option>
                                                                 <option>Title 4</option>
                                                            </select>
                                                       </div>
                                                </div>

                                                <div className="col-md-6 col-sm-8 col-7">
                                                       <div className="form-group">
                                                            <label>Job title (optional)</label>
                                                            <input type="text" className="form-control" placeholder="Principal" />
                                                       </div>
                                                </div>

                                                <div className="col-md-6 col-sm-8 col-7 pr-md-0">
                                                       <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-8 col-7">
                                                       <div className="form-group">
                                                            <label>Surname</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>

                                                <div className="col-md-6 col-sm-8 col-7 pr-md-0">
                                                       <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>
                                                <div className="col-md-6 col-sm-8 col-7">
                                                       <div className="form-group">
                                                            <label>Phone number (optional)</label>
                                                            <input type="text" className="form-control" placeholder=" " />
                                                       </div>
                                                </div>

                                              

                                                <div className="col-md-12 col-sm-12 col-12">
                                                    <p className="text-danger mb-1">By posting this vacancy, you are agreeing to the following:</p>
                                                    <ul className="circle-list">
                                                       <li><i className="fa-solid fa-circle text-primary"></i>You have read and accept our <a href="#">terms and conditions.</a></li>
                                                       <li><i className="fa-solid fa-circle text-primary"></i>You acknowledge and take responsibility for the co-ntents and accuracy of this advert.</li>
                                                    </ul>   
                                                </div> 
                                                    
                                                


                                                
                                               

                                               
                                            </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default JobDetail5;
