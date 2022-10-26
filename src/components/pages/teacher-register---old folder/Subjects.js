import React,  { useState, Fragment } from "react";
import '../../styles/signup.css' ;


const TeacherStep3 = props => {
     if (props.currentStep !== 3) {
          return null;
        }
      

  /*   const [subjects, setSubjects] = useState(null);
     const [addFormData, setAddFormData] = useState({
          subjname: "",
          leveltaught: "",
          
        });
     
     const [editFormData, setEditFormData] = useState({
          subjname: "",
          leveltaught: "",
         
     });   

     const [editSubjectId, seteditSubjectId] = useState(null);      

 
  const handleAddFormChange = (event) => {
     event.preventDefault();
 
     const fieldName = event.target.getAttribute("subjname");
     const fieldValue = event.target.value;
 
     const newFormData = { ...addFormData };
     newFormData[fieldName] = fieldValue;
 
     setAddFormData(newFormData);
   };
  
   const handleEditFormChange = (event) => {
     event.preventDefault();
 
     const fieldName = event.target.getAttribute("subjname");
     const fieldValue = event.target.value;
 
     const newFormData = { ...editFormData };
     newFormData[fieldName] = fieldValue;
 
     setEditFormData(newFormData);
   };

   const handleAddFormSubmit = (event) => {
     event.preventDefault();
 
     const newSubject = {
       subjname: addFormData.subjname,
       leveltaught: addFormData.leveltaught,
       
     };
 
     const newSubjects = [...subjects, newSubject];
     setSubjects(newSubjects);
   };


   const handleEditFormSubmit = (event) => {
     event.preventDefault();
 
     const editedSubject = {
          subjname: addFormData.subjname,
          leveltaught: addFormData.leveltaught,
     };
 
     const newSubjects = [...subjects];
 
     const index = subjects.findIndex((subject) => subject.id === editSubjectId);
 
     newSubjects[index] = editedSubject;
 
     setSubjects(newSubjects);
     seteditSubjectId(null);
   };
 
   const handleEditClick = (event, subject) => {
     event.preventDefault();
     seteditSubjectId(subject.id);
 
     const formValues = {
          subjname: addFormData.subjname,
          leveltaught: addFormData.leveltaught,
     };
 
     setEditFormData(formValues);
   };
 
   const handleCancelClick = () => {
     seteditSubjectId(null);
   };
 
   const handleDeleteClick = (subjectId) => {
     const newSubjects = [...subjects];
 
     const index = subjects.findIndex((subject) => subject.id === subjectId);
 
     newSubjects.splice(index, 1);
 
     setSubjects(newSubjects);
   };*/
 


  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-4 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Other services</h3> 
                                             <p className="pr-4">Add the subject(s) you teach. You must select one or two main subjects that will appear on your profile.</p>       
                                        </div>
                                   </div>
                                   <div className="col-md-8 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                            <label>Title</label>
                                                            <input type="text" className="form-control" placeholder="Write your main title for your profile (e.g. Maths Teacher)" />
                                                       </div>
                                                </div>
                                               
                                           
                                                <div className="col-md-12 col-sm-12 col-12">
                                                       <div className="form-group">
                                                         
   
                                                           <table className="table table-bordered">
                                                                 <thead>
                                                                      <tr>
                                                                           <th>Services I offer</th>
                                                                           <th>Description</th>
                                                                           <th></th>
                                                                      </tr>                                                                      
                                                                 </thead>
                                                                 <tbody>
                                                                      <tr><td>Maths</td>
                                                                      <td>Primary, Secondary, GCSE</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/star.svg" className="mr-1"/><img src="assets/images/delete.svg" /></td>
                                                                      </tr>  
                                                                      <tr><td>Science</td>
                                                                      <td>Degree (or higher)  </td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/star-empty.svg" className="mr-1"/><img src="assets/images/delete.svg" /></td>
                                                                      </tr>  
                                                                      <tr><td>Computing</td>
                                                                      <td>Further education</td>
                                                                      <td><img src="assets/images/edit.svg" className="mr-1"/><img src="assets/images/star.svg" className="mr-1"/><img src="assets/images/delete.svg" /></td>
                                                                      </tr>  
                                                                                                                                      
                                                                 </tbody>
                                                           </table>

                                                           
                                                       </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12">
                                                


                                                   
                                                     <div className="row">
                                                           <div className="col-lg-4 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                             <input type="text" className="form-control" placeholder="Title e.g. Proof Reading" />
                                                              {/* <select className="form-control " name="subjname">
                                                                 <option disabled selected>Type/Choose subject</option>
                                                                 <option value="math">Math</option>
                                                               </select> */}
                                                           </div>
                                                           <div className="col-lg-5 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                              <input type="text" className="form-control" placeholder="E.g. I can proof reading your work" />
                                                               {/* <select className="form-control" name="leveltaught">
                                                                 <option disabled selected>Level</option>
                                                                 <option value="primary">Primary</option>
                                                                 <option value="secondary">Secondary</option>
                                                                 <option value="gcse">GCSE</option>                                                                 
                                                               </select> */}
                                                           </div>
                                                           <div className="col-lg-3 col-md-3 col-sm-12 col-12 pr-lg-0">
                                                               <a href="#" className="btn btn-outline-primary">Add Service</a>
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

export default TeacherStep3;
