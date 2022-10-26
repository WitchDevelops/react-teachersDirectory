import React from "react";

function SubjectFilter (){

    return ( 

         <>
             <div className="side-card mb-3">
              <div className="card-header">
			      <a className="d-block h5 mb-0" data-toggle="collapse" href="#collapseExample-sub" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Subject
                </a>
			  </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample-sub">
                  <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck1" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck1">Maths <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck2" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck2">Science <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck3" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck3">Computing <span>(564)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck6" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck6">English <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck4" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck4">Literature <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck5" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck5">History <span>(564)</span>
                    </label>
                  </div> 

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck6" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck6">Geography <span>(564)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck7" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck7">Art <span>(564)</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck8" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck8">Music <span>(564)</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="SubjectcustomCheck9" />
                    <label className="custom-control-label" htmlFor="SubjectcustomCheck9">Biology <span>(564)</span>
                    </label>
                  </div>

                  
                </div>
                </div>
              </div>
			 </div> 
         </>
          );
        }
        
        export default SubjectFilter;    