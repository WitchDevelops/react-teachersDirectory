import React from "react";

function ExamBoardFilter(){
   return(
     <>
         <div className="side-card mb-3">  
			   <div className="card-header">
			      <a className="mb-0 d-block h5" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                  Exam Board 
                </a>
			   </div>
            
              <div className="side-card-body">
               
                <div className="collapse show" id="collapseExample3">
                <div className="py-3 px-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="examcustomCheck12" />
                    <label className="custom-control-label" htmlFor="examcustomCheck12">AQA
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="examcustomCheck13" />
                    <label className="custom-control-label" htmlFor="examcustomCheck13">OCR
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="examcustomCheck14" />
                    <label className="custom-control-label" htmlFor="examcustomCheck14">Edexcel
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="examcustomCheck15" />
                    <label className="custom-control-label" htmlFor="examcustomCheck15">CCEA
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="examcustomCheck16" />
                    <label className="custom-control-label" htmlFor="examcustomCheck16">WJEC/Eduqas
                    </label>
                  </div>
                </div>
                </div>
              </div>
              
            </div>
     </>

   );

   }
export default ExamBoardFilter;

