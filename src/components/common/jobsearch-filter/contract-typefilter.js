import React from "react";

function ContractTypeFilter (){

    return ( 

         <>
      
		  <div className="side-card mb-3">
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample-contract" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Contract Type
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample-contract">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ContractcustomCheck1" />
                    <label className="custom-control-label" htmlFor="ContractcustomCheck1">Fixed term <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ContractcustomCheck2" />
                    <label className="custom-control-label" htmlFor="ContractcustomCheck2">Maternity cover <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ContractcustomCheck3" />
                    <label className="custom-control-label" htmlFor="ContractcustomCheck3">Permanent <span>(564)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ContractcustomCheck3" />
                    <label className="custom-control-label" htmlFor="ContractcustomCheck3">Supply <span>(564)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ContractcustomCheck3" />
                    <label className="custom-control-label" htmlFor="ContractcustomCheck3">Temporary <span>(564)</span>
                    </label>
                  </div>
                  
                </div>
                </div>
              </div>
			 </div> 
			
         </>

        );
    }
    
    export default ContractTypeFilter;