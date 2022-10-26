import React from "react";

function HoursFilter (){

    return ( 

         <>
      
		  <div className="side-card mb-3">
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
               Availability
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="HourscustomCheck1" />
                    <label className="custom-control-label" htmlFor="HourscustomCheck1">Full Time <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="HourscustomCheck2" />
                    <label className="custom-control-label" htmlFor="HourscustomCheck2">Part Time <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="HourscustomCheck3" />
                    <label className="custom-control-label" htmlFor="HourscustomCheck3">Supply work <span>(564)</span>
                    </label>
                  </div>
                  
                </div>
                </div>
              </div>
			 </div> 
			
         </>

        );
    }
    
    export default HoursFilter;