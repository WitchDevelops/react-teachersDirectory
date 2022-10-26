import React from "react";
function OtherFilter(){
    return (
       <>
         
			<div className="side-card mb-3">  
			<div className="card-header">
			    <a className="mb-0 d-block h5" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                  Other
                </a>
			</div>
             
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample4">
                <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="OthercustomCheck17" />
                    <label className="custom-control-label" htmlFor="OthercustomCheck17">Male
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="OthercustomCheck18" />
                    <label className="custom-control-label" htmlFor="OthercustomCheck18">Female
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="OthercustomCheck19" />
                    <label className="custom-control-label" htmlFor="OthercustomCheck19">DBS checked
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="OthercustomCheck20" />
                    <label className="custom-control-label" htmlFor="OthercustomCheck20">ECTs / NQTs
                    </label>
                  </div>
                  
                </div>
                </div>
              </div>
              
            </div>
       </>
    );

}

export default OtherFilter;