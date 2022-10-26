import React from "react";
import { Link } from 'react-router-dom';
import TopBannerSignup from './school-register/top-banner';
import '../styles/signup.css' ;

function SignupSelection (){

    return ( 

         <>
          <TopBannerSignup/>
         {/* <TopBannerSignup/> */}

         <section className="section-padding bg-gray">
             <div className="container">
                 <div className="row">
                    <div className="col-12">
                         <div className="signup-section-title"><h4>Sign up</h4>
                              <p >Please choose one of these options</p>
                         </div>
                    </div>
                 </div>
                  <div className="row justify-content-center">
                       <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                           <div className="custom-card h-100">
                              <div className="mainbox-signup pb-4">                              
                                   <h4>I am a <span>Teacher</span></h4>
                                   <hr />
                                   <div className="box-content">
                                            <h5 className="mb-3"><img src="assets/images/require-info.svg" /> Requires:</h5>
                                             <ul className="require-list pb-4">
                                             <li><i className="fa-solid fa-circle text-primary"></i>A teaching qualification.</li>
                                             {/* <li><i className="fa-solid fa-circle text-primary"></i>2 years of teaching experience</li>
                                             <li><i className="fa-solid fa-circle text-primary"></i>UK citizenship</li> */}
                                             </ul> 

                                             
                                   </div> 

                                   <div className="w-100 text-center user-selection">
                                             <Link to="/teacher-signup" className="btn btn-outline-primary">Register as a Teacher/Staff</Link>
                                        </div>  
                                   
                              </div>                       
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                       <div className="custom-card h-100">
                              <div className="mainbox-signup pb-4">                              
                                   <h4>I represent a <span>School/Organisation</span></h4>
                                   <hr />
                                   <div className="box-content">
                                            <h5 className="mb-3"><img src="assets/images/require-info.svg" /> Requires:</h5>
                                             <ul className="require-list pb-4">
                                             <li><i className="fa-solid fa-circle text-primary"></i>A valid school/organisation email address is required.</li>
                                            
                                             </ul> 

                                             
                                   </div> 

                                   <div className="w-100 text-center user-selection">
                                             <Link to="/school-signup" className="btn btn-outline-primary">Register an organisation</Link>
                                        </div>  
                                   
                              </div>                       
                           </div>
                       </div>
                  </div>

                  <div className="row">
                     <div className="col-12 text-center mt-4">
                         <div className="logintext">
                              Already have an account? <a href="#" className="">Log in here.</a>
                         </div>
                     </div>
                  </div>
             </div>
         </section>


         
         </>
    );
    }   
export default  SignupSelection;   