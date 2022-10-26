import React from "react";
import { Link } from "react-router-dom";

function JobDetailSidebar (){

    return ( 

         <>
                                <div className="custom-card mb-4">
                                      <h4>About the job</h4>
                                      <div className="job-details">
                                      <ul className="job-timing">
                                           <li className="posted">Posted <span>01/07/2022</span></li>
                                           <li className="closed">Closing  <span>15/07/2022</span></li>
                                           <li className="start">Starts  <span>01/08/2022</span></li>
                                      </ul>
                                      </div>

                                      <div className="custom-content">
                                          <div className="job-info">
                                              <ul>
                                                <li><span>Salary</span>£28,290 - £34,850 per annum</li>
                                                <li><span>Hours</span>Full-time</li>
                                                <li><span>Contract type</span>Permanent</li>
                                              </ul>
                                          </div>
                                      </div>

                                      

                                      <div className="custom-content pt-3 pb-3">
                                          <a href="/" className="btn btn-outline-danger w-100"><i className="fa-regular fa-heart mr-2"></i>Save to my jobs</a>
                                          <div className="orbox">or</div>
                                          <div className="linktext"> <a href="https://www.london.edu/jobs-at-lbs">https://www.london.edu/jobs-at-lbs</a></div>
                                          <hr/>
                                          <a href="/" className="btn btn-outline-primary w-100"><i className="fa-regular fa-bell mr-2"></i>Alert me when similar jobs are posted</a>
                                      </div>

                                      <div className="custom-content pt-3 pb-3">
                                          <div className="sharebox">
                                              <ul>
                                                <li>Share</li>
                                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                              </ul>
                                          </div>
                                      </div>
                                      
                                </div> 

                                <div className="card teacher-card teacher-profile mb-4">
                                    <div className="card-header">
                                        <h4 className="text-left">How to apply</h4>
                                    </div>
                                    <div className="card-body">
                                            <div className="about-tecaher-content text-left">
                                               <a href="/" className="btn btn-primary w-100 mb-4">Quick apply</a>
                                               <a href="/" className="btn btn-outline-primary w-100">Recruiter's website</a>
                                               <hr/>
                                               <a href="/" className="btn btn-outline-primary w-100">Recruiter's application form</a>
                                            </div>
                                    </div>
                                </div> 

                                <div className="card teacher-card teacher-profile mb-4">
                                    <div className="card-header">
                                        <h4 className="text-left">About the school</h4>
                                    </div>
                                    <div className="card-body">
                                            <div className="about-tecaher-content text-left">
                                              <div className="school-detail">
                                                <h5>London Business School</h5>
                                                  <ul>
                                                    <li>SOAS University of London</li>
                                                    <li><a href="/">https://www.london.edu/</a></li>
                                                    <li><a href="tel:+44(0)2070007000 ">+44 (0)20 7000 7000 </a></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                    </div>
                                </div> 
			      
         </>

        );
    }
    
    export default JobDetailSidebar;