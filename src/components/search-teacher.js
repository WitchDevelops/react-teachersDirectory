import React from "react";
import {  Link } from "react-router-dom";
import TopSearchInfo from "./common/topsearchinfo";
import AdditionalFilter from "./common/additionalfilter";

function SearchTeacher (){

    return ( 
        <>
        <TopSearchInfo/>    
              
         
<section className="section-padding bg-gray">
   <div className="container-fluid custom-container">
      <div className="row">
	    <div className="col-lg-3 col-md-12 col-sm-12 col-12 additional-filter">
		    
             <AdditionalFilter/>
		  
		</div>
		
		<div className="col-lg-9 col-md-12 col-sm-12 col-12">
		     <div className="search-result"><span id="total-count">378</span> Teachers teaching <span className="sub">Maths</span> near you:</div>
			 
			 <div className="row mb-3">
			    <div className="col-lg-9 col-md-12 col-sm-12 col-12 pr-lg-0">
				   <ul className="search-btn-list">
				      <li><a href="/">London <i className="fa-solid fa-circle-xmark"></i></a></li>
					  <li><a href="/">Manchester <i className="fa-solid fa-circle-xmark"></i></a></li>
					  <li><a href="/">Maths <i className="fa-solid fa-circle-xmark"></i></a></li>
					  <li><a href="/">Science <i className="fa-solid fa-circle-xmark"></i></a></li>
					  <li><a href="/">Full-time <i className="fa-solid fa-circle-xmark"></i></a></li>
					  <li><a href="/">2-5 yrs experience <i className="fa-solid fa-circle-xmark"></i></a></li>
				   </ul>
				</div>
	
				<div className="col-lg-3 col-md-12 col-sm-12 col-12">
				<ul className="tab-list text-right"> 
                                            <li> View </li> 
                                            <li className=""> <a href="#" className="show " data-toggle="tab" title="List style"><i className="fa fa-list"></i></a></li>
                                            <li> <a href="#" data-toggle="tab" className="" title="Grid"><i className="fa fa-th"></i></a> </li> 
                                        </ul>
				   {/* <ul className="tab-list text-right"> 
				   <li> View </li> 
				   <li className="mr-3"> <a href=" /" className="show " data-toggle="tab" title="List style"><img src="/assets/images/grid.svg" alt=""/></a></li>
				   <li> <a href=" " data-toggle="tab" className="" title="Grid"><img src="/assets/images/menu.svg" alt=""/></a> </li> 
				   </ul> */}
				</div>
			 </div>
			 
			<div className="row">
			   <div className="col-12">
			       <div className="tab-content">
					<div className="tab-pane active" id="tab-11">
						<div className="card teacher-card overflow-hidden mb-4">
                           <div className="teacher-info">
						   <div className="row">
						        <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-lg-0 mb-4">
								     <img alt=" " className="img-fluid w-100" src={process.env.PUBLIC_URL + '/assets/images/search-teacher-01.png'} />  
								</div>
								<div className="col-lg-9 col-md-9 col-sm-12 col-12">
								     <div className="row">
									    <div className="col-md-6 col-sm-12 col-12">
										   <h4><Link to="/teacher-profile">John D.</Link> <span>Maths Teacher</span></h4>
										   
										   
										</div>
										<div className="col-md-6 col-sm-12 col-12 text-lg-right">
										   <div className="teacher-list-info">
										       <ul>
											     <li><a href="/" className="">Soho, London</a></li>
												 <li><a href="/" className="font-weight-bold"> Available</a></li>
												 <li><a href="/" className=""><i className="fa-regular fa-heart "></i></a></li>
											   </ul>
										   </div>
										</div>
									 </div>
									  <hr className="mt-3 mb-3 pr-4"/> 
									<div className="techer-decription">
									<div className="row">
									     <div className="col-lg-12 col-sm-12 col-12">
										    Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius.Cras vitae sapien et nequ Cras vitae sapien et neque...
										 </div>
										 <div className="col-lg-12 col-sm-12 col-12 text-lg-right mt-lg-3">
                                         <Link className="btn btn-outline-primary mt-2" to="/teacher-profile">View Profile</Link>
										     
										 </div>
									</div>
								
                                    </div>									
								</div>
						   </div>
						</div>	
						   <hr className="mb-0"/>
						   <div className="teacher-basic-info">
						      <ul>
							    <li><a href="/" className="text-special">Primary teacher</a></li>
								<li><a href="/" className="">15 years' experience</a></li>
								<li><a href="/">HoD</a></li>
								<li><a href="/">DBS</a></li>
								
							  </ul>
							 <div className="ml-3 other-subjects"> Other subjects:</div>
							  <ol className="float-left">
							  
								   <li><a href="/">Science</a></li>
								   <li><a href="/">Computing</a></li>
								   
								</ol>
						   </div>
							
						</div>
						
						
						
						
						<div className="card teacher-card overflow-hidden mb-4">
							<div className="teacher-info">
						   <div className="row">
						        <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-lg-0 mb-4">
								     <img alt=" " className="img-fluid w-100" src={process.env.PUBLIC_URL + '/assets/images/search-teacher-02.png'} />  
								</div>
								<div className="col-lg-9 col-md-9 col-sm-12 col-12">
								     <div className="row">
									    <div className="col-md-6 col-sm-12 col-12">
										   <h4><Link to="/teacher-profile">John D.</Link> <span>Maths Teacher</span></h4>
										   
										   
										</div>
										<div className="col-md-6 col-sm-12 col-12 text-lg-right">
										  
										   <div className="teacher-list-info">
										       <ul>
											     <li><a href="/" className="">Soho, London</a></li>
												 <li><a href="/" className="font-weight-bold">Available</a></li>
												 <li><a href="/" className=""><i className="fa-regular fa-heart "></i></a></li>
											   </ul>
										   </div>
										</div>
									 </div>
									  <hr className="mt-3 mb-3 pr-4"/> 
									<div className="techer-decription">
									<div className="row">
									     <div className="col-lg-12 col-sm-12 col-12">
										    Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem.  In ultricies ante non enim rhoncus, gravida tempor dolor varius.Cras vitae sapien et nequ Cras vitae sapien et neque...
										 </div>
										 <div className="col-lg-12 col-sm-12 col-12 text-lg-right mt-lg-3">
										    <Link className="btn btn-outline-primary mt-2" to="/teacher-profile">View Profile</Link>
										 </div>
									</div>
								
                                    </div>									
								</div>
						   </div>
							</div>
						   <hr className="mb-0"/>
						   <div className="teacher-basic-info">
						      <ul>
							    <li><a href="/" className="text-special">Primary teacher</a></li>
								<li><a href="/" className="">15 years' experience</a></li>
								<li><a href="/">HoD</a></li>
								<li><a href="/">DBS</a></li>
								
							  </ul>
							 <div className="ml-3 other-subjects"> Other subjects:</div>
							  <ol className="float-left">
							  
								   <li><a href="/">Science</a></li>
								   <li><a href="/">Computing</a></li>
								   
								</ol>
						   </div>
							
						</div>
						
						
						
					
					</div>
					<div className="tab-pane" id="tab-12">
						dsfsd
					</div>
				</div>

			   </div>
			</div>		
			 
		</div>
	  </div>
   </div>
</section>




        </>
        );
    }
    
export default SearchTeacher;