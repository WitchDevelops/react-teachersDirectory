import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopJobSearchInfo from "../common/TopJobSerachInfo";
import '../styles/job-details.css';
import JobDetailSidebar from "../common/jobdetail-sidebar";
import BrandsSection from "../common/brands";


function JobDetails (){
    const navigate = useNavigate();

    return (
        <>
           <TopJobSearchInfo/>        

           <section className="pagination-section">
                <div className="container-fluid custom-container">
                <div className="row mb-4"><div className="col-12 text-left"><button onClick={() => navigate(-1)} className="btn btn-back"><i className="fa-solid fa-arrow-left mr-2"></i>Back to results</button></div></div>
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
                        <div className="card teacher-card job-search-page teacher-profile mb-4">

                         <div className="row">
                               <div className="col-md-2 col-sm-12 col-12">
                                    <img alt=" " className="img-fluid w-100" src={process.env.PUBLIC_URL + '/assets/images/job-details.png'}/>
                               </div>
                               <div className="col-md-10 col-sm-12 col-12">
                               <div className="row">
                           
                                    <div className="col-md-12 col-ms-12 col-12">
                                        <div className="row">
                                            <div className="col-md-7"><h4 className="text-left mt-3">Mathematics and Science supply <span>SOAS University of London</span></h4></div>
                                            <div className="col-md-5 text-lg-right"> <div className="teacher-list-info mt-3">
                                            <ul>
                                                <li className="ml-0"><a href="/" className="">Thornhaugh St, London</a></li>
                                                    <li><a href="/" className=""><i className="fa-regular fa-heart "></i></a></li>
                                            </ul>
                                        </div> </div>
                                        </div>
                                       
                                        
                                        
                                        
                                    </div>
                                    
                                    </div>
                               </div>
                               <div className="col-md-12 col-sm-12 col-12">
                                    
                               
                                      
                                        <div className="card-body">
                                                <div className="about-tecaher-content text-left">
                                                    <h4 className="mb-3">Description</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fringilla lectus nec elementum. Suspendisse lobortis ultrices turpis at fermentum. Aliquam finibus consectetur sem, vitae efficitur sapien hendrerit a. Mauris nec lectus blandit, dictum metus ac, egestas nibh. Nam eu dolor eu felis pharetra semper sit amet ac arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis dolor ut nisl suscipit ullamcorper. Aenean hendrerit ex neque, pretium tincidunt risus porttitor ac. Ut tellus quam, ornare at lobortis nec, laoreet at tellus. Aliquam nec quam diam. Aenean tincidunt neque magna, non congue tellus viverra id. Pellentesque tristique sollicitudin semper. Aenean auctor facilisis quam, sit amet rhoncus nisi pharetra et. Donec elementum erat justo, sed cursus velit ullamcorper sed. Curabitur ullamcorper mi augue, non tincidunt purus ultricies in. Proin malesuada ultricies pretium.</p>
                                                    <ul className="circle-list">
                                                        <li><i className="fa-solid fa-circle"></i>Nullam lorem magna, pretium eget semper sed, fermentum ac odio. Nam et aliquam lorem. Vivamus commodo urna purus, a gravida nibh ultricies in.</li>
                                                        <li><i className="fa-solid fa-circle"></i>Sed ultrices elit mi, id fermentum neque volutpat a. Aliquam commodo faucibus aliquam.</li>
                                                        <li><i className="fa-solid fa-circle"></i>Nulla ut pretium turpis. Nunc suscipit urna et nibh commodo convallis. Nulla volutpat gravida molestie. In condimentum mollis hendrerit.</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fringilla lectus nec elementum. Suspendisse lobortis ultrices turpis at fermentum. Aliquam finibus consectetur sem, vitae efficitur sapien hendrerit a. Mauris nec lectus blandit, dictum metus ac, egestas nibh. Nam eu dolor eu felis pharetra semper sit amet ac arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis dolor ut nisl suscipit ullamcorper. Aenean hendrerit ex neque, pretium tincidunt risus porttitor ac. Ut tellus quam, ornare at lobortis nec, laoreet at tellus. Aliquam nec quam diam. Aenean tincidunt neque magna, non congue tellus viverra id. Pellentesque tristique sollicitudin semper. Aenean auctor facilisis quam, sit amet rhoncus nisi pharetra et. Donec elementum erat justo, sed cursus velit ullamcorper sed. Curabitur ullamcorper mi augue, non tincidunt purus ultricies in. Proin malesuada ultricies pretium.</p>
                                                </div>
                                        </div>
                                    </div>  

                               </div>
                         </div> 


                         <div className="card teacher-card teacher-profile mb-4">
                             <div className="card-header">
                                <h4 className="text-left">Further documents</h4>
                             </div>
                             <div className="card-body">
                                    <div className="about-tecaher-content text-left">
                                        <ul className="doc-list">
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/pdf-icon.svg'} />Cover letter example<span>PDF, 126.9 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/doc-icon.svg'} />Academic paper on a specific...<span>DOC, 48.1 KB</span></Link></li>
                                            <li><Link to="#"><img src={process.env.PUBLIC_URL + '/assets/images/ppt-icon.svg'} />School introduction<span>PPT, 1.5 MB</span></Link></li>


                                        </ul>
                                    </div>
                             </div>
                            </div> 


                            {/* <div className="card teacher-card teacher-profile mb-4">
                               
                                <h2 className="vacancy-title text-left"> Other job vacancies from <span>London Business School</span></h2>
                                                           
                            </div>  */}

                           
                       {/* <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="custom-card mb-4">
                                      <h4>Head of Department</h4>
                                      <div className="custom-content">
                                        <table className="table custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Salary</th>
                                                    <td>£28,290 - £34,850 per annum</td>
                                                </tr>
                                                <tr>
                                                    <th>Hours</th>
                                                    <td>Full-time</td>
                                                </tr>
                                                <tr>
                                                    <th>Contract type</th>
                                                    <td>Permanent</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                      </div>

                                      <div className="start-closed-box">
                                           <div className="closing">Closing <span>15/07/2022</span></div>
                                           <div className="starting">Starts  <span>01/08/2022</span></div>
                                      </div>

                                      <div className="custom-content pt-3 pb-3">
                                          <a href="/" className="btn btn-outline-primary w-100">View job details</a>
                                      </div>
                                      
                                </div>
                            </div>
                           

<div className="col-md-6 col-sm-12 col-12">
                                <div className="custom-card mb-4">
                                      <h4>Science teacher</h4>
                                      <div className="custom-content">
                                        <table className="table custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Salary</th>
                                                    <td>TBC</td>
                                                </tr>
                                                <tr>
                                                    <th>Hours</th>
                                                    <td>Supply</td>
                                                </tr>
                                                <tr>
                                                    <th>Contract type</th>
                                                    <td>Maternity cover</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                      </div>

                                      <div className="start-closed-box">
                                           <div className="closing">Closing <span>23/08/2022</span></div>
                                           <div className="starting">Starts  <span>07/12/2022</span></div>
                                      </div>
                                       
                                      <div className="custom-content pt-3 pb-3">
                                          <a href="/" className="btn btn-outline-primary w-100">View job details</a>
                                      </div>
                                      
                                </div>
                            </div>
                       </div> */}


                       {/* <div className="row">
                           
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="mapbox">
                                    <div className="content">
                                        <div className=""><i className="fa-solid fa-location-dot"></i></div>
                                        <h4>Find more jobs in <span>London</span></h4>
                                    </div>
                                </div>

                            </div>
                       </div> */}
                         



                       
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <JobDetailSidebar/>                   
                    
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
    
 export default  JobDetails;