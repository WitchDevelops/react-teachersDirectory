import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import TopSearchInfo from "../common/topsearchinfo";
import TeacherProfileSidebar from "../common/profilesidebar";
import BrandsSection from "../common/brands";


function TeacherProfile (){
    const navigate = useNavigate();
    return ( 
        <>
          
          <TopSearchInfo/>  
          <section className="pagination-section">
                <div className="container-fluid custom-container">
                <div className="row mb-4"><div className="col-12 text-left"><button onClick={() => navigate(-1)} className="btn btn-back"><i className="fa-solid fa-arrow-left mr-2"></i> Back to results</button></div></div>
                    <div className="row">
                        <div className="col-6">
                            <div className="pagination"><Link to="/"><i className="fa-solid fa-arrow-left mr-2"></i> Previous teacher</Link></div>
                        </div>
                        <div className="col-6 text-right d-flex justify-content-end">
                               <div className="pagination"><Link to="/">Next teacher  <i className="fa-solid fa-arrow-right ml-2"></i></Link></div>
                        </div>
                    </div>

                    
                </div>
          </section>



                 
            <section className="section-padding bg-gray pt-4">
            <div className="container-fluid custom-container">
                <div className="row">
                    
                    
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                       <div className="card teacher-card teacher-profile mb-4">
                       <div className="row">
                           <div className="col-md-4 col-ms-12 col-12 mb-md-0 mb-4">
                               
                               <img src={process.env.PUBLIC_URL + '/assets/images/photo.png'} alt="" className="img-fluid w-100" />
                           </div>
                           <div className="col-md-8 col-ms-12 col-12">
                             <div className="d-flex justify-content-between">
                                <h4 className="text-left">John D. <span>Maths Teacher</span></h4>  
                                <div className="favorite-box"><a href="/" className=""><i className="fa-regular fa-heart "></i></a></div>    
                             </div>
                              
                              <div className="teacher-list-info text-left mt-3">
                              <div className="d-flex justify-content-between">
                                   <a href="/" className="text-dark">Soho, London</a>
                                   <a href="/" className="font-weight-bold text-dark"> Available</a>
                              </div>
                               
                                
                              </div>  
                               
                               <hr/>
                                <ul className="teacher-quality-list pr-5">
                                    <li><a href="/" className=" ">15 years' experience</a></li>
                                    <li><a href="/" className=" ">Primary teacher, HoD</a></li>
                                    <li><a href="/" className="btn-success dbs-checked"><i className="fa-regular fa-circle-check mr-2"></i>DBS checked</a></li>
                                    <li><a href="/" className=" ">Replies in 3 hours</a></li>
                                    <li><a href="/" className="orange">Full-time</a></li>
                                    <li><a href="/" className=" ">Head of Department</a></li>
                                    
                                </ul>

                           </div>

                       </div>
                       </div>  
                       
                        <div className="card teacher-card teacher-profile mb-4">
                             <div className="card-header">
                                <h4 className="text-left">About us</h4>
                             </div>
                             <div className="card-body">
                                    <div className="about-tecaher-content text-left">
                                        Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec vestibulum. Sed fringilla accumsan est, ac auctor tortor interdum sit amet.In nibh odio, pellentesque ut eros velPraesent at justo nulla. Aenean sagittis posuere nibh eget fermentum. Mauris vulputate ultrices diam ac fringilla. Curabitur ac nunc vitae neque ultricies ornare.Donec turpis arcu, imperdiet sed diam quis, malesuada tincidunt metus. Maecenas lacinia laoreet ipsum, in ornare est congue sed. Aenean quis ligula nec quam molestie venenatis ut at felis....<br/><a href="#" className="mt-1">Show more <i className="fa-solid fa-caret-down ml-1"></i></a>
                                    </div>
                             </div>
                        </div>   



                        <div className="card teacher-card teacher-profile mb-4">
                             <div className="card-header mb-4">
                                <h4 className="text-left">Subjects</h4>
                             </div>
                              
                                    <div className="about-tecaher-content text-left">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr><th>Subject</th> <th>Level taught</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Maths</td> <td>Primary, Secondary, GCSE</td></tr>
                                                <tr><td>Science</td> <td>Secondary, Further education</td></tr>
                                                <tr><td>Computing</td> <td>Further education</td></tr>                                               
                                            </tbody>
                                        </table>
                                    </div>
                             
                             </div> 

                             <div className="card teacher-card teacher-profile mb-4">
                             <div className="card-header">
                                <h4 className="text-left">Other Services I offer</h4>
                             </div>
                             <div className="card-body pb-0">
                                    <div className="about-tecaher-content text-left">
                                    <table className="table tbl-service-offer table-bordered">
                                            <thead>
                                                <tr><th>Services I offer</th> <th>Description</th></tr>
                                            </thead>
                                            <tbody><tr><td>Proof reading</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>
                                                <tr><td className="voice-text">Voice animation</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>
                                                <tr><td>Content writing</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>
                                                <tr><td>Teaching English</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>
                                                <tr><td>Voice animation</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>
                                                <tr><td>Translation</td> <td>I can proof reading your work, and suggest I idea what need to
be done and other stuff</td></tr>                                               
                                            </tbody>
                                        </table>

                                        {/* <h4 className="files-title">Example of my work</h4>
                                        <ul className="certificate-list">
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'}  alt="" className="mr-1"/> Academic paper on a specific subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} alt="" className="mr-1"/> College research on subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/ppt-icon.svg'} alt="" className="mr-1"/> Presentation on subject</li>
                                        </ul> */}
                                    </div>
                             </div>
                            </div>


                             <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header mb-4">
                                    <h4 className="text-left">Educational achievements</h4>
                                </div>
                              
                                    <div className="about-tecaher-content text-left">
                                        <table className="table table-bordered Qualifications-table">
                                            <thead>
                                                <tr><th>Title</th><th>Description</th> <th>Year</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Global Teacher Prize</td> <td>Varkey Foundation</td> <td>2016</td></tr>
                                                <tr><td>International School Award</td> <td>British Council</td> <td>2013</td></tr>
                                                <tr><td>AoC Beacon Awards</td> <td>Association of Colleges</td> <td>2001</td></tr>                                               
                                            </tbody>
                                        </table>

                                        {/* <h4 className="files-title">Files</h4>
                                        <ul className="certificate-list">
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'}  alt="" className="mr-1"/> Academic paper on a specific subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} alt="" className="mr-1"/> College research on subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/ppt-icon.svg'} alt="" className="mr-1"/> Presentation on subject</li>
                                        </ul> */}
                                    </div>
                             
                             </div> 
                            
                             {/* <div className="card teacher-card teacher-profile mb-4">
                             <div className="card-header">
                                <h4 className="text-left">Services I offer</h4>
                             </div>
                             <div className="card-body">
                                    <div className="about-tecaher-content text-left">
                                        <h5   className="subtitle">Example of work</h5>
                                        <ul className="doc-list">
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/pdf.png'} />Cover letter example<span>PDF, 126.9 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/doc.png'} />Academic paper on a specific...<span>DOC, 48.1 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/ppt.png'} />School introduction<span>PPT, 1.5 MB</span></Link></li>


                                        </ul>
                                    </div>
                             </div>
                            </div>  */}

                             <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header mb-4">
                                    <h4 className="text-left">Qualifications</h4>
                                </div>
                              
                                    <div className="about-tecaher-content text-left">
                                        <table className="table table-bordered Qualifications-table mb-3 ">
                                            <thead>
                                                <tr><th>University</th> <th>Subject</th> <th>Level</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Brunel University London</td> <td>BSc (Hons) Mathematics and Statistics with Management</td> <td>Degree</td></tr>
                                                <tr><td>London University</td> <td>British Council</td> <td>B</td></tr>
                                                
                                            </tbody>
                                        </table>

                                        <table className="table table-bordered school-qualification">
                                            <thead>
                                                <tr><th>School</th> <th>Subject</th><th>Level</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Alleyn's School</td><td>Physics and Maths A-Levels</td><td>A</td></tr>
                                                
                                            </tbody>
                                        </table>

                                        {/* <h4 className="files-title">Files</h4>
                                        <ul className="certificate-list">
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} alt=""  className="mr-1"/> College research on subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'}  alt="" className="mr-1"/> Academic paper on a specific subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/ppt-icon.svg'} alt=""  className="mr-1"/> Presentation on subject</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} alt="" className="mr-1"/> College research on subject</li>
                                            
                                        </ul> */}
                                    </div>
                             
                             </div> 


                             <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header mb-4">
                                    <h4 className="text-left">Documents</h4>
                                </div>
                              
                                    <div className="about-tecaher-content text-left">
                                    <ul className="files-list">
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'} />2022 Curriculum vitae<span>PDF, 126.9 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} />Cover letter for maths teacher application<span>DOC, 48.1 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/ppt-icon.svg'} />Cover letter for maths teacher application<span>PPT, 1.5 MB</span></Link></li>
                                     </ul>
                                        {/* <ul className="certificate-list">
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'} alt="" className="mr-1"/> 2022 Curriculum vitae</li>
                                            <li><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} alt="" className="mr-1"/> Cover letter for maths teacher application</li>
                                        </ul> */}
                                    </div>
                             
                             </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        
                        <TeacherProfileSidebar />        
                    
                    </div>

                </div>
            </div>
            </section>


            
            <section className="section-padding">
            <div className="container">
                <div className="row">
                        <div className="col-12 mb-4">
                        <div className="section_title text-left"><h2>Supported by</h2></div>
                        </div>
                    </div>	
                <div className="row">
                <div className="col-12">
                        
                    <BrandsSection/>

                </div>
                </div>
            </div>	
            </section>



        </>
    );
}

export default TeacherProfile;
