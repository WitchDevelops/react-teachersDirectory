import React from "react";
import { Link } from 'react-router-dom';


function Navigation (){
    return (
        <>

<ul className="navbar-nav">                  
                      
                      <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/search-teacher">Search teachers</Link>
                      </li>
                     <li className="nav-item"><Link to="/job-search" className="nav-link"> Job search </Link></li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link"> How it works </Link>
                    </li>
                    {/* <li className="nav-item"><Link to="/" className="nav-link"> Contact </Link>
                    </li> */}
                    </ul>
                   <div className="dropdown d-inline-block">                        
                      <ul className="icon-list">
                        <li><Link to="/" className="btn btn-outline-primary"> Login </Link></li>
                        <li><Link to="/sign-up" className="btn btn-primary"> Register </Link></li>                         
                      </ul>
                      
                    </div>  

                    {/* <ul className="navbar-nav">                  
                      
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/teachernew/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teachernew/search-teacher">Search Teachers</Link>
                        </li>
                       <li className="nav-item"><Link to="/teachernew/job-search" className="nav-link"> Job search </Link></li>
                      <li className="nav-item">
                      <Link to="/teachernew/" className="nav-link"> How it works </Link>
                      </li>
                      <li className="nav-item"><Link to="/teachernew/" className="nav-link"> Contact </Link>
                      </li>
                      </ul>
                     <div className="dropdown d-inline-block">                        
                        <ul className="icon-list">
                          <li><a href="/teachernew/" className="btn btn-outline-primary"> Login </a></li>
                          <li><a href="/teachernew/" className="btn btn-primary"> Register </a></li>                         
                        </ul>
                        
                      </div>   */}
                      </>      

);
}
export default Navigation;