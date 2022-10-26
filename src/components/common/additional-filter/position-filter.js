import React from "react";

function PositionFilter (){

    return ( 

         <>

<div className="side-card mb-3">  
             
			   <div className="card-header">
			    <a className="mb-0 d-block h5" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                  Position
                </a>
			   </div>
			  
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample2">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="PositioncustomCheck7" />
                    <label className="custom-control-label" htmlFor="PositioncustomCheck7">Leadership/Management <span>(266)</span>
                    </label>
					
					<ul className="nested-checkbox-list">
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox1" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox1">Headteacher <span>(196)</span>
							</label>
						  </div> 
					  </li>
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox2" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox2">Deputy <span>(11)</span>
							</label>
						  </div> 
					  </li>
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox3" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox3">Assistant <span>(59)</span>
							</label>
						  </div> 
					  </li>
					</ul>
					
                  </div>
				  
				  
				   <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="PositioncustomCheck8" />
                    <label className="custom-control-label" htmlFor="PositioncustomCheck8">Teaching/Lecturing <span>(475)</span>
                    </label>
					
					<ul className="nested-checkbox-list">
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox4" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox4">Teacher <span>(401)</span>
							</label>
						  </div> 
					  </li>
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox5" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox5">Tutor <span>(28)</span>
							</label>
						  </div> 
					  </li>
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox6" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox6">Head of Department <span>(59)</span>
							</label>
						  </div> 
					  </li>
					</ul>
					
                  </div>
				  
				  
                
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="PositioncustomCheck9" />
                    <label className="custom-control-label" htmlFor="PositioncustomCheck9">Non-teaching/Support 
                    </label>
					
					<ul className="nested-checkbox-list">
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox7" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox7">Lorem <span>(16)</span>
							</label>
						  </div> 
					  </li>
					  <li>
					    <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="PositioncustomCheckbox8" />
							<label className="custom-control-label" htmlFor="PositioncustomCheckbox8">Ipsum amet <span>(28)</span>
							</label>
						  </div> 
					  </li>
					  
					</ul>
					
					
                  </div>
                 
                </div>
                </div>
              </div>
			  
			   </div> 

               </>
    );
}   

export default PositionFilter;