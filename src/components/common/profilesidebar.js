import React from "react";

function TeacherProfileSidebar (){

    return ( 

            <>
               <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header">
                                    <h4 className="text-left">Message John</h4>
                                </div>

                                <div className="card-body pb-0">
                                    <div className="msg-box">
                                            <div className="form-group">
                                                <label>Write a message</label>
                                                <textarea type="text" className="form-control" placeholder="Hi John!"></textarea>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="">
                                                <label><span>(Usually replies in 3 hours)</span></label>
                                                </div>
                                                <div className="form-group text-right">
                                                <input type="submit" className="btn btn-outline-primary" value="Send message"/>
                                                </div>
                                            </div>
                                           

                                    </div>
                                </div>
                       </div>   

               <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header mb-4">
                                    <h4 className="text-left">When I am free</h4>
                                </div>

                                <div className="card-body">
                                     <table className="table schedule-table mb-0"><thead><tr><th></th>
                                                    <th>Mon</th>
                                                    <th>Tue</th>
                                                    <th>Wed</th>
                                                    <th>Thur</th>
                                                    <th>Fri</th>
                                                    <th>Sat</th>
                                                    <th>Sun</th>
                                                </tr>
                                            </thead>
                                            <tbody><tr><td>Morning Pre 12 am</td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1"  disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2"  disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck2">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck3" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck3">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck4" disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck4">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck5" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck5">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck6" disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck6">
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck7" disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck7">
                                                            </label>
                                                        </div>
                                                    </td>

                                                </tr><tr><td>Afternoon 1 pm +</td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck8" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck8">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck9" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck9">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck10" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck10">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck11" disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck11">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck12" disabled/>
                                                            <label className="custom-control-label" htmlFor="customCheck12">
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck13" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck13">
                                                            </label>
                                                        </div>
                                                    </td>

                                                    <td><div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck14" disabled />
                                                            <label className="custom-control-label" htmlFor="customCheck14">
                                                            </label>
                                                        </div>
                                                    </td>

                                                </tr></tbody>
                                     </table>
                                </div>
                       </div>    


                        {/* <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header">
                                    <h4 className="text-left">Services I offer</h4>
                                </div>
                                <div className="card-body">
                                   <ul className="service-offer-list">
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Proof reading</a></li>
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Voice animation</a></li>
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Content writing</a></li>
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Teaching English</a></li>
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Voice animation</a></li>
                                       <li><a href="#"><i className="fa-solid fa-circle text-success mr-2"></i>Translation</a></li>
                                       
                                    </ul> 
                                </div>    
                        </div> */}


                        <div className="card teacher-card teacher-profile mb-4">
                                <div className="card-header">
                                    <h4 className="text-left">John's social links</h4>
                                </div>

                                <div className="card-body">
                                    <div className="social-link-box">
                                        <ul>
                                            <li><a href="teacherjohndoe.co.uk" target="_blank"><img src={process.env.PUBLIC_URL + '/assets/images/web.png'} alt="" />teacherjohndoe.co.uk</a></li>
                                            <li><a href="www.linkedin.com/in/johndoe/" target="_blank"><img src={process.env.PUBLIC_URL + '/assets/images/linkdin.png'} alt=""/> www.linkedin.com/in/johndoe/</a></li>
                                            <li><a href="https://twitter.com/teacherjohndoe" target="_blank"><img src={process.env.PUBLIC_URL + '/assets/images/twitter.png'} alt=""/>twitter.com/teacherjohndoe</a></li>
                                            <li><a href="www.facebook.com/john.doe/" target="_blank"><img src={process.env.PUBLIC_URL + '/assets/images/fb.png'} alt=""/>www.facebook.com/john.doe/</a></li>
                                        </ul>

                                    </div>
                                </div>
                       </div> 
            </>
        );
    }
    
export default TeacherProfileSidebar;