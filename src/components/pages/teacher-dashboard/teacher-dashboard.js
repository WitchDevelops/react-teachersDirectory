import React from "react";
import '../../styles/dashboard.css';
import TopSearchInfo from "../../common/topsearchinfo";
import BrandsSection from "../../common/brands";
import DashboardSidebar from "../../common/dashboard-sidebar";


function TeacherDashboard (){

    return ( 

         <>
         <TopSearchInfo/>  
         <section className="section-padding bg-gray">
              <div className="container-fluid custom-container">
                   <div className="row">
                       <div className="col-md-3 col-sm-12 col-12">
                           <DashboardSidebar/>
                       </div>
                       <div className="col-md-9 col-sm-12 col-12"> 
                           <div className="welcome-box mb-4">
                              <h2>Welcome back, <span>Jane</span></h2>
                              <h4>I am a Maths Teacher</h4>
                           </div>

                           <div className="custom-card">
                              <div className="py-4 px-4">                              
                                <div className="row">
                                   <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                         <div className="box-details box-position">
                                               <h2 className="blue-text">12</h2>
                                               <h4>Pending job applications</h4>
                                               <a href="" className="btn btn-outline-primary">View my applications</a>
                                         </div>    
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="box-details box-position">
                                               <h2 className="green-text">8</h2>
                                               <h4>Network groups</h4>
                                               <a href="" className="btn btn-outline-primary">View my applications</a>
                                         </div> 
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                              <div className="box-details box-position">
                                                  <h2 className="yellow-text">2</h2>
                                                  <h4>Unread messages</h4>
                                                  <a href="" className="btn btn-outline-primary">Open inbox</a>
                                             </div> 
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                         <div className="box-details">
                                               <h2 className="pink-text">34</h2>
                                               <h4>Favourite schools</h4>
                                               <a href="" className="btn btn-outline-primary">View favourites</a>
                                         </div> 
                                   </div>
                                   
                                   </div>
                                </div>
                               </div>

                         <div className="row mt-4">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                   <div className="custom-card">
                                       <div className="py-4 px-4"> 
                                             <div className="d-flex justify-between items-center">
                                                  <h2 className="text-20 lh-1 fw-500">Job applications</h2>
                                                  <a href="#" className="text-14 text-purple-1 underline">All applications</a>
                                             </div>
                                             <hr/>
                                             <div className="application-box">
                                                 <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/application.png" className="mr-2"/> <h5>University of London <span>Maths teacher</span></h5>
                                                    </div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                                 </div>
                                                 <p>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                                             </div>
                                             <hr/>
                                             <div className="application-box">
                                                 <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/application.png" className="mr-2"/> <h5>University of London <span>Maths teacher</span></h5>
                                                    </div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                                 </div>
                                                 <p>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                                             </div>
                                             <hr/>
                                             <div className="application-box">
                                                 <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/application.png" className="mr-2"/> <h5>University of London <span>Maths teacher</span></h5>
                                                    </div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                                 </div>
                                                 <p>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                                             </div>
                                             <hr/>

                                             <div className="text-center">
                                                  <a href="#" className="btn btn-outline-primary">View my applications</a>
                                             </div>


                                        </div>
                                   </div>  
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                   <div className="custom-card">
                                      <div className="py-4 px-4"> 
                                            <div className="message-info">
                                             <div className="d-flex justify-between items-center">
                                                  <h2 className="text-20 lh-1 fw-500">Inbox</h2>
                                                  <a href="#" className="text-14 text-purple-1 underline">All messages</a>
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>
                                             <div className="message-info">
                                             <div className="d-flex justify-between items-center mb-2"> 
                                                    <div className="d-flex  items-center">
                                                       <img src="assets/images/teacher-dash.png" className="mr-2"/> <h6 className="mb-0">John Deo</h6>
                                                    </div>
                                                    <div className="message-content">Lorem ipsum dolor sit amet</div> 
                                                    <div className="date">23/06/22</div>
                                                     
                                             </div>
                                             </div>
                                             <hr/>

                                             <div className="text-center">
                                                  <a href="#" className="btn btn-outline-primary">Open inbox</a>
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
export default TeacherDashboard;    