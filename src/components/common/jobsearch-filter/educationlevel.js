import React from "react";

function EducationLevelFilter (){

    return ( 

         <>
            <div className="side-card mb-3">
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample-education" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Education level
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample-education">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="EducustomCheck1" />
                    <label className="custom-control-label" htmlFor="EducustomCheck1">Nursery <span>(0)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="EducustomCheck2" />
                    <label className="custom-control-label" htmlFor="EducustomCheck2">Primary <span>(80)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="EducustomCheck3" />
                    <label className="custom-control-label" htmlFor="EducustomCheck3">Secondary <span>(110)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="EducustomCheck4" />
                    <label className="custom-control-label" htmlFor="EducustomCheck4">Further education <span>(85)</span>
                    </label>
                  </div>
                  
                </div>
                </div>
              </div>
			 </div> 
         </>

);
}

export default EducationLevelFilter;  