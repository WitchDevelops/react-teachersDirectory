import React from "react";

function GenderFilter (){

    return ( 

         <>
      
		  <div className="side-card mb-3">
        
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample-gendar" role="button" aria-expanded="false" aria-controls="collapseExample">
            Gender
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample-gendar">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="GendercustomCheck1" />
                    <label className="custom-control-label" htmlFor="GendercustomCheck1">Male
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="GendercustomCheck2" />
                    <label className="custom-control-label" htmlFor="GendercustomCheck2">Female
                    </label>
                  </div>
                  
                  
                </div>
                </div>
              </div>
			 </div> 
			
         </>

        );
    }
    
    export default GenderFilter;