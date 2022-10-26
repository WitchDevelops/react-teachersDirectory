import React from "react";
import { Link } from "react-router-dom";
import TopJobSearchInfo from "../common/TopJobSerachInfo";
import JobSearchFilter from "../common/jobsearchfilter";
import '../styles/jobsearch.css';
import BrandsSection from "../common/brands";

function JobSearch (){

    return ( 
        <>
           <TopJobSearchInfo/>                  
         
              <section className="section-padding bg-gray">
                 <div className="container-fluid custom-container">
                    <div className="row">
                      <div className="col-lg-3 col-md-12 col-sm-12 col-12 additional-filter">                          
                           <JobSearchFilter/>                        
                      </div>
                      
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                           <div className="search-result"><span id="total-count">205 jobs</span> <b>Maths teacher</b></div>
                           
                           <div className="row mb-3">
                              <div className="col-lg-9 col-md-9 col-sm-12 col-12 pr-lg-0">
                                 <ul className="search-btn-list">
                                    <li><a href="#">Maths <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    <li><a href="#">Teacher <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    <li><a href="#">Primary <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    <li><a href="#">Secondary <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    <li><a href="#">London <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    <li><a href="#">Full-time <i className="fa-solid fa-circle-xmark"></i></a></li>
                                    
                                 </ul>
                              </div>
                  
                              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                       <ul className="tab-list text-right"> 
                                            <li> View </li> 
                                            <li className=""> <a href="#" className="show " data-toggle="tab" title="List style"><i className="fa fa-list"></i></a></li>
                                            <li> <a href="#" data-toggle="tab" className="" title="Grid"><i className="fa fa-th"></i></a> </li> 
                                        </ul>
                                
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-6 text-left mb-4">
                                <a href="/" className="btn btn-outline-primary">Alert me when similar jobs are posted</a>
                              </div>
                              <div className="col-6 text-right">
                              <div className="sort-box">
                                                <div className="sort-by">Sort by:</div>
                                                <div className="select-box">
                                                    <select className="sort-info">
                                                        <option selected>Most Recent</option>
                                                        <option>item 1</option>
                                                        <option>item 2</option>
                                                        <option>item 3</option>
                                                    </select>
                                                </div>
                                            </div>
                              </div>
                           </div>
                           
                          <div className="row">
                             <div className="col-12">
                                  
                                      <div className="card teacher-card job-search-page overflow-hidden mb-4">
                                         <div className="teacher-info">
                                         <div className="row">
                                              
                                              <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                                   <div className="row">
                                                      <div className="col-md-7 col-sm-12 col-12 text-left">
                                                         <h4><Link to="/">Mathematics and Science supply</Link> <span>London Business School</span></h4>
                                                         
                                                         
                                                      </div>
                                                      <div className="col-md-5 col-sm-12 col-12 text-lg-right">
                                                        <div className="teacher-list-info">
                                                             <ul>
                                                               <li className="ml-0"><a href="/" className="">Regent's Park, London</a></li>
                                                               <li><a href="/" className=""><i className="fa-regular fa-heart "></i></a></li>
                                                             </ul>
                                                         </div>
                                                         
                                                        
                                                      </div>
                                                   </div>

                                                   
                                                    <hr className="mt-4 mb-3"/> 
                                                  								
                                              </div>
                                              <div className="col-lg-2 col-md-2 col-sm-12 col-12 mb-lg-0 mb-4">
                                                   <img alt=" " className="img-fluid img-job-src" src={process.env.PUBLIC_URL + '/assets/images/job-search-01.png'} />  

                                                  
                                              </div>
                                          </div>

                                          <div className="techer-decription">
                                                  <div className="row">
                                                       <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                       <table className="table jobsearch-table">
                                                            <tbody>
                                                                <tr>
                                                                <th scope="row">Subjects</th>
                                                                <td>        <ul className="search-btn-list">
                                                                        <li><a href="#">Maths</a></li>
                                                                        <li><a href="#">Teacher</a></li>                                                                        
                                                                    </ul></td>
                                                                
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Salary</th>
                                                                <td>£24,290 - £29,850 per annum, pro rata</td>
                                                                
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Hours</th>
                                                                <td>Full-time</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                <th scope="row">Contract type</th>
                                                                <td>Fixed term</td>
                                                                </tr>

                                                                <tr>
                                                                <th scope="row">Description</th>
                                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur blandit condimentum. Aenean aliquam, odio id laoreet ornare, nunc dui pretium orci, nec faucibus mi mauris ac augue. Integer sit amet nibh non velit lacinia finibus nec non massa. Donec aliquam ipsum urna, et lobortis magna rutrum quis. Sed egestas...</td>
                                                                </tr>
                                                            </tbody>
                                                         </table>
                                                       </div>                       
                                                      
                                                  </div>
                                                  <div className="row justify-content-end">
                                                         <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-md-right">
                                                            
                                                            <div className="job-serach-link">
                                                               <Link to="/job-details" className="btn btn-outline-primary">View job details</Link>
                                                            </div>        
                                                         </div>
                                                  </div>
                                              
                                          </div>	


                                      </div>	
                                         <hr className="mb-0 mt-2"/>
                                       <div className="job-search-footer">                                          
                                       
                                          <div className="row">
                                             <div className="col-8">
                                                <div className="job-search">
                                                   <ul> 
                                                      <li><a href="/" className="text-special">Posted: <span>7 day ago</span></a></li>
                                                      <li><a href="/" className="text-special">Closing: <span>15 June 2022</span></a></li>
                                                      <li><a href="/" className="text-special">Job start: <span>7 December 2022</span></a></li>
                                                   
                                                   </ul>
                                                   
                                                </div>
                                             </div>
                                             <div className="col-4">
                                                <a href="" className="btn btn-outline-danger w-100 mt-1"><i className="fa-regular fa-heart mr-2"></i>Save to my jobs</a>
                                             </div>
                                          </div>

                                       </div>  
                                        
                                          
                                      </div>
                                      
                                      
                                      
                                      <div className="card teacher-card job-search-page overflow-hidden mb-4">
                                         <div className="teacher-info">
                                         <div className="row">
                                              
                                              <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                                   <div className="row">
                                                      <div className="col-md-7 col-sm-12 col-12 text-left">
                                                         <h4><Link to="/">Mathematics and Science supply</Link> <span>London Business School</span></h4>
                                                         
                                                         
                                                      </div>
                                                      <div className="col-md-5 col-sm-12 col-12 text-lg-right">
                                                        <div className="teacher-list-info">
                                                             <ul>
                                                               <li className="ml-0"><a href="/" className="">Regent's Park, London</a></li>
                                                               <li><a href="/" className=""><i className="fa-regular fa-heart "></i></a></li>
                                                             </ul>
                                                         </div>
                                                         
                                                        
                                                      </div>
                                                   </div>

                                                   
                                                    <hr className="mt-4 mb-3"/> 
                                                  								
                                              </div>
                                              <div className="col-lg-2 col-md-2 col-sm-12 col-12 mb-lg-0 mb-4">
                                                   <img alt=" " className="img-fluid img-job-src" src={process.env.PUBLIC_URL + '/assets/images/job-search-01.png'} />  

                                                  
                                              </div>
                                          </div>

                                          <div className="techer-decription">
                                                  <div className="row">
                                                       <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                       <table className="table jobsearch-table">
                                                            <tbody>
                                                                <tr>
                                                                <th scope="row">Subjects</th>
                                                                <td>        <ul className="search-btn-list">
                                                                        <li><a href="#">Maths</a></li>
                                                                        <li><a href="#">Teacher</a></li>                                                                        
                                                                    </ul></td>
                                                                
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Salary</th>
                                                                <td>£24,290 - £29,850 per annum, pro rata</td>
                                                                
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Hours</th>
                                                                <td>Full-time</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                <th scope="row">Contract type</th>
                                                                <td>Fixed term</td>
                                                                </tr>

                                                                <tr>
                                                                <th scope="row">Description</th>
                                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur blandit condimentum. Aenean aliquam, odio id laoreet ornare, nunc dui pretium orci, nec faucibus mi mauris ac augue. Integer sit amet nibh non velit lacinia finibus nec non massa. Donec aliquam ipsum urna, et lobortis magna rutrum quis. Sed egestas...</td>
                                                                </tr>
                                                            </tbody>
                                                         </table>
                                                       </div>                       
                                                      
                                                  </div>
                                                  <div className="row justify-content-end">
                                                         <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-md-right">
                                                            
                                                            <div className="job-serach-link">
                                                               <Link to="/job-details" className="btn btn-outline-primary">View job details</Link>
                                                            </div>        
                                                         </div>
                                                  </div>
                                              
                                          </div>	


                                      </div>	
                                         <hr className="mb-0 mt-2"/>
                                       <div className="job-search-footer">                                          
                                       
                                          <div className="row">
                                             <div className="col-8">
                                                <div className="job-search">
                                                   <ul> 
                                                      <li><a href="/" className="text-special">Posted: <span>7 day ago</span></a></li>
                                                      <li><a href="/" className="text-special">Closing: <span>15 June 2022</span></a></li>
                                                      <li><a href="/" className="text-special">Job start: <span>7 December 2022</span></a></li>
                                                   
                                                   </ul>
                                                   
                                                </div>
                                             </div>
                                             <div className="col-4">
                                                <a href="" className="btn btn-outline-danger w-100 mt-1"><i className="fa-regular fa-heart mr-2"></i>Save to my jobs</a>
                                             </div>
                                          </div>

                                       </div>  
                                        
                                          
                                      </div>
                                      
                                    
                                      
                                      
                                      
                                  
                                  
              
                             </div>
                          </div>		
                           
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

export default JobSearch;