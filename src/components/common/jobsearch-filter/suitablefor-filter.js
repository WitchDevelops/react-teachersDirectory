import React from "react";

function SuitableForFilter (){

    return ( 

         <>
      
		  <div className="side-card mb-3">
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample-suitable" role="button" aria-expanded="false" aria-controls="collapseExample">
            Suitable for
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample-suitable">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SuitablecustomCheck1" />
                    <label className="custom-control-label" htmlFor="SuitablecustomCheck1">Early career teachers (NQTs) <span>(74)</span>
                    </label>
                  </div>
                 
                  
                </div>
                </div>
              </div>
			 </div> 
			
         </>

        );
    }
    
    export default SuitableForFilter;