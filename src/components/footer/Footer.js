
function Footer (){

    return ( 
          
        
<>
<footer className="footer-section">
     <div className="container">
         <div className="row">
		    <div className="col-lg-6 col-md-6 col-sm-12 co-12 text-lg-left text-center">
			   <img src={process.env.PUBLIC_URL + '/assets/images/footer-logo.png'} alt=""/>
			   
			   <div className="w-100 mt-4">
			       <p className="mb-0">© 2022 Teachers' Directory. All rights reserved.</p>
			   </div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 co-12">
			   <div className="w-100 text-lg-right text-center">
			       <ul className="social-media">
				   <li>Follow us</li>
				   <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
				   <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
				   <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
				   <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
				   <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
				  </ul>
			   </div>
			   
			   <div className="w-100 text-lg-right text-center mt-3">
			       <ul className="footer-menu">
				   <li><a href="#">How it works</a></li>
				   <li><a href="#">Search teachers</a></li>
				   <li><a href="#">About us</a></li>
				   <li><a href="#">Contact us</a></li>
				  
				  </ul>
			   </div>
			   
			    <div className="w-100 text-lg-right text-center mt-3">
			       <ul className="footer-menu">
				   <li><a href="#">Terms & Conditions</a></li>
				   <li><a href="#">Privacy Policy</a></li>
				   				  
				  </ul>
			   </div>
			</div>
		 </div>
	</div>
</footer>	
<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>
        );
    }
    
export default Footer;      