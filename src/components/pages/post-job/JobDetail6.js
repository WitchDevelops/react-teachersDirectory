import React, {useRef} from "react";
import '../../styles/signup.css' ;

const JobDetail6 = props => {
const editorRef = useRef(null);
     const log = () => {
       if (editorRef.current) {
         console.log(editorRef.current.getContent());
       }
     }; 

  if (props.currentStep !== 6) {
    return null;
  }

  return (
    <>
      
                              <div className="row">
                                   <div className="col-md-5 col-sm-12 col-12">
                                        <div className="account-info">
                                             <h3>Payment details <span className="text-primary">Invoice</span></h3> 
                                             <p className="pr-4">Aenean finibus risus a sodales tincidunt. Mauris fringilla varius ex sed imperdiet. Donec blandit, nibh quis sagittis vulputate, quam sapien vulputate odio.</p>       
                                             
                                        </div>
                                   </div>
                                   <div className="col-md-7 col-sm-12 col-12">
                                        <div className="account-form-box">
                                            <div className="row">                                      
                                               <div className="col-md-12 col-sm-12 col-12">
                                                  <div className="teacher-profile p-0">                                                 
                                                    <table className="table table-bordered">
                                                            <thead>
                                                                 <tr>
                                                                 <th>Item</th> 
                                                                 <th colSpan="4">Price</th>
                                                                 </tr>
                                                            </thead>
                                                            <tbody>
                                                                 <tr>
                                                                      <td rowSpan="4">1 job advert (30 day duration)</td>
                                                                      <td colSpan="4" className="text-right"> <span>£99.00</span>
                                                                        
                                                                      </td>
                                                                 </tr>
                                                                
                                                                  <tr>
                                                                      <td>
                                                                          Subtotal
                                                                      </td>
                                                                      <td className="text-right">
                                                                          £99.00
                                                                      </td> 
                                                                  </tr>
                                                                  <tr>
                                                                      <td>
                                                                           Vat/Tax
                                                                      </td>
                                                                      <td className="text-right">
                                                                          £99.00
                                                                      </td> 
                                                                  </tr>
                                                                  <tr className="total-box">
                                                                      <td>
                                                                          Total
                                                                      </td>
                                                                      <td className="text-right">
                                                                          £108.90
                                                                      </td> 
                                                                  </tr>
                                                            </tbody>
                                                    </table>

                                                    </div>
                                                </div> 
                                                    
                                                  <div className="col-md-9 col-sm-8 col-7 pr-md-0">
                                                     <div className="form-group">
                                                           <label>Add discount code</label> 
                                                           <input type="text" className="form-control" name="Discount Code" placeholder="Discount code" />          
                                                     </div>
                                                  </div>  
                                                  <div className="col-md-3 col-sm-4 col-5">
                                                       <div className="form-group pt-1">
                                                          <a href="#" className="btn btn-outline-primary mt-4 w-100">Apply</a>
                                                       </div>
                                                  </div> 
                                               
                                            </div>
                                        </div>
                                   </div>

                              </div>    
                         
    </>
  );
};

export default JobDetail6;
