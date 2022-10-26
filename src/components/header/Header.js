import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


function Header (){

    return (
      <header className="main-header">
      <div className="container-fluid">
           <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <div className="logo-box pl-3 pr-4">
                   <Link to="/"><img src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} className="img-fluid" alt=""/></Link>
                  </div>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6 col-6 text-right">
                <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav99">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="main_nav99">
                        
                        <Navigation />                
                       
                    </div> 
                  </nav>
              </div>
  
             
  
           </div>
      </div>
  </header>



    );
}

export default Header;