import React from "react";

function DashboardSidebar (){

    return ( 

         <>
           <nav id="sidebar">
                <ul className="list-unstyled">
                    <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
                            Account settings</a>

                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Personal details</a></li>
                            <li><a href="#">Notifications</a></li>
                            <li><a href="#">Deactivate account</a></li>
                            <li><a href="#">Close account</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Messages <span className="notification">2</span></a>
                    </li>
                    <li>
                        <a href="#teacherSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">  
                          Teacher profile</a>

                        <ul className="collapse list-unstyled" id="teacherSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Network groups <span className="notification">8</span></a>
                    </li>
                    <li>
                        <a href="#jobSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">  
                        Jobs</a>

                        <ul className="collapse list-unstyled" id="jobSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Help/Contact us</a>
                    </li>
                    <li>
                        <a href="#">Log out</a>
                    </li>
                </ul>
            </nav>
         </>
    );
    }
export default DashboardSidebar;         