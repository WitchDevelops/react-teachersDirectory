import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { $ } from "react-jquery-plugin";


// function TopSearchInfo (){

class TeacherSearchInfo extends Component {

	componentDidMount() {
		$(".selectBox").on("click", function(e) {
			//debugger
			$(this).toggleClass("show");
			var dropdownItem = e.target;
			var container = $(this).find(".selectBox__value");
			container.text(dropdownItem.text);
			$(dropdownItem)
			  .addClass("active")
			  .siblings()
			  .removeClass("active");
		  });
		//  e.preventDefault();
	}


	render() {
    return ( 
		<>
		<section className="inner-banner-section section-padding">
			<div className="serach-main">
				<div className="container-fluid custom-container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 col-sm-12 co-12">
						<div className="inner-page-search">
							<div className="row">
								<div className="col-md-4 pr-lg-0">
									<div className="form-group">
										<label>Search teachers</label>
										<input type="text" placeholder="Search subject or teacher" className="form-control" /> 
										</div>
								</div>
								<div className="col-md-2  pr-lg-0">
									<div className="form-group">
										<label>Education level</label>
										<div className="selectBox">
												<div className="selectBox__value">Level e.g. primary</div>
												<div className="dropdown-menu custom-dropdown">
												<a href="/" className="dropdown-item active">Nursery</a>
												<a href="#" className="dropdown-item">Primary</a>
												<a href="#" className="dropdown-item">Secondary</a>
												<a href="#" className="dropdown-item">Further Education</a>
												
												</div>
											</div>
											
										</div>
									</div>
									
									
									<div className="col-md-4  pr-lg-0">
									<div className="form-group">
										<label>Location | Search radius</label>
										<input type="text" placeholder="Location or postcode" className="form-control custom-width-box" />  
										<div className="selectBox custom-width-drop">
												<div className="selectBox__value">+1 miles</div>
												<div className="dropdown-menu custom-dropdown">
												<a href="#" className="dropdown-item active">+1 mile</a>
												<a href="#" className="dropdown-item">+10 mile</a>
												<a href="#" className="dropdown-item">+20 mile</a>
												<a href="#" className="dropdown-item">+1 mile</a>
												<a href="#" className="dropdown-item">+10 mile</a>
												<a href="#" className="dropdown-item">+20 mile</a>

												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-2 pt-1">							   
										<a href="/" className="btn btn-primary w-100 mt-4 serch-btn">Search</a>  
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
		
}

export default TeacherSearchInfo;