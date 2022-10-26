import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import BrandsSection from "../common/brands";

function Home() {
    return (
      <>
          
        <section className="banner-section">
          {/* <img src="assets/images/background.jpg" className="img-fluid w-100"/>  */}
            <div className="serach-main">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-11 col-md-12 col-sm-12 co-12">
                          <div className="search-info">
                      <h3> The UK's First Teachers' Directory</h3>
                    <p className="pl-lg-5 pr-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dolor condimentum sapien placerat fringilla et luctus massa.</p>
                    
                    <div className="serach-box">
                        <div className="row">
                        <div className="col-md-6 pr-lg-0">
                          <div className="form-group">
                          <label>Search words</label>
                          <input type="text" placeholder="Enter subject or keyword" className="form-control" /> 
                        </div>
                        </div>
                        
                        <div className="col-md-4 pr-lg-0">
                          <div className="form-group">
                          <label>Location</label>
                          <input type="text" placeholder="Location or postcode" className="form-control" /> 
                        </div>
                        </div>
                        
                        <div className="col-md-2">
                          <div className="form-group pt-lg-4 mt-1">								   
                          <input type="submit" value="Search" className="btn btn-primary w-100 serch-btn" /> 
                        </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>     			
                </div>
              </div>
            </div>
          </div>
            
          
          <div className="banner-bottom-box">
              <div className="container">
              <div className="row">
                  <div className="col-12">
                  <ul className="">
                    <li><a href="#">Connect with schools</a></li>
                  <li><a href="#">Build your network</a></li>
                  <li><a href="#">Search vacancies</a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>

        
        </section>



        <section className="section-padding bottom-curve">
          <div className="container">
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="why-choose-box">
                  <h2>Who we are</h2>
                <p>In diam erat, malesuada sit amet sagittis vel, varius eu ante. Sed rutrum pretium magna sit amet dapibus. Pellentesque vitae diam sit amet nulla ultricies blandit vitae quis dui. Donec arcu massa, varius id ipsum a, lobortis lobortis nulla. Vestibulum hendrerit ex non cursus lacinia</p>
                <a href="#" className="btn btn-primary custom-width">Learn More</a>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="featured-teacher">
                  <h3 className="mb-4">Our latest teachers to join</h3>
                  <ul className="teacher-list">
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-01.jpg'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-02.png'} alt="" /> <h4>Martin R.</h4> <span><i className="fa-solid fa-circle text-primary"></i>Exeter</span> <span><i className="fa-solid fa-circle  text-success"></i>Biology, Chemistry</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-03.png'} alt="" /> <h4>Jonathan Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Art, Painting</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-04.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>Brighton & Hove</span> <span><i className="fa-solid fa-circle text-success "></i>Music, Singing</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-05.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-06.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-07.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                  <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-08.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-09.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                <li> <img src={process.env.PUBLIC_URL + '/assets/images/teacher-10.png'} alt="" /> <h4>James Doe</h4> <span><i className="fa-solid fa-circle text-primary"></i>London</span> <span><i className="fa-solid fa-circle text-success "></i>Engineering</span> </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>



        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4">
              <div className="section_title text-left"><h2>How it works</h2></div>
            </div>
            </div>	 
          <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="main-box first-box">
              <div className="circle-box">
                  <h4>Nam ornare leo eu turpis</h4>
                <p>Nulla suscipit fermentum diam nec interdum. Nullam erat sapien, pulvinar vel felis eu, ultrices mattis eros. Suspendisse consequat, elit convallis vulputate pellentesque.</p>
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="main-box second-box">
              <div className="circle-box">
                  <h4>Praesent diam exs</h4>
                <p>Nulla suscipit fermentum diam nec interdum. Nullam erat sapien, pulvinar vel felis eu, ultrices mattis eros. Suspendisse consequat, elit convallis vulputate pellentesque.</p>
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="main-box third-box">
              <div className="circle-box">
                  <h4>Maecenas tempor vulputate tellus id</h4>
                <p>Nulla suscipit fermentum diam nec interdum. Nullam erat sapien, pulvinar vel felis eu, ultrices mattis eros. Suspendisse consequat, elit convallis vulputate pellentesque.</p>
              </div>
              </div>
            </div>
            </div>
          
          <div className="row">
              <div className="col-12 text-center mt-4 pt-4">
              <a href="" className="btn btn-primary">Find a Teacher</a>
            </div>
          </div>
          </div>
        </section>


       

       
<section className="tesimonial-section">
   <img src={process.env.PUBLIC_URL + '/assets/images/testimonial-top.png'} className="img-fluid w-100" />
   <div className="tesimonial-overlay">
   <div className="container">
		 <div className="row">
			<div className="col-12 mb-4">
			  <div className="section_title text-left"><h2>Client testimonials</h2></div>
			</div>
		 </div>	

        <div className="row">
		    <div className="col-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="testimonial-box">
            <div className="d-block d-md-flex align-items-center mb-4">
              <span className="thumb-img"><img src={process.env.PUBLIC_URL + '/assets/images/pic.png'} alt=" " className="rounded-circle"/></span>
              <div className="ml-3 text-left">
              <h6 className="mb-0 customer">John Doe, Headmistress</h6>
              <p className="mb-0 date">12/08/2021</p>
              <div className="font-10">
                <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
                <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
                <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
                <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
                <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
              </div>
              </div>
            </div>
            
            <div className="font-weight-light content mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</div>
            
            </div> 

          </SwiperSlide>
          <SwiperSlide><div className="testimonial-box">
					<div className="d-block d-md-flex align-items-center mb-4">
					  <span className="thumb-img"><img src={process.env.PUBLIC_URL + '/assets/images/pic.png'} alt=" " className="rounded-circle"/></span>
					  <div className="ml-3 text-left">
						<h6 className="mb-0 customer">John Doe, Headmistress</h6>
						<p className="mb-0 date">12/08/2021</p>
						<div className="font-10">
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						</div>
					  </div>
					</div>
					
					<div className="font-weight-light content mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</div>
					
					</div> </SwiperSlide>
          <SwiperSlide><div className="testimonial-box">
					<div className="d-block d-md-flex align-items-center mb-4">
					  <span className="thumb-img"><img src={process.env.PUBLIC_URL + '/assets/images/pic.png'} alt=" " className="rounded-circle"/></span>
					  <div className="ml-3 text-left">
						<h6 className="mb-0 customer">John Doe, Headmistress</h6>
						<p className="mb-0 date">12/08/2021</p>
						<div className="font-10">
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						</div>
					  </div>
					</div>
					
					<div className="font-weight-light content mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</div>
					
					</div> </SwiperSlide>

          <SwiperSlide><div className="testimonial-box">
					<div className="d-block d-md-flex align-items-center mb-4">
					  <span className="thumb-img"><img src={process.env.PUBLIC_URL + '/assets/images/pic.png'} alt=" " className="rounded-circle"/></span>
					  <div className="ml-3 text-left">
						<h6 className="mb-0 customer">John Doe, Headmistress</h6>
						<p className="mb-0 date">12/08/2021</p>
						<div className="font-10">
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						  <a href="" className="text-primary"><i className="fa-solid fa-star"></i></a>
						</div>
					  </div>
					</div>
					
					<div className="font-weight-light content mb-3">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</div>
					
					</div> </SwiperSlide>
           
        </Swiper>
			</div>
        </div>		
	 
	</div>
	</div>
	<img src={process.env.PUBLIC_URL + '/assets/images/testimonial-bottom.png'} className="img-fluid w-100 bottom-curve" alt=""/>
</section>	 





<section className="section-padding">
   <div className="container">
    <div className="row">
			<div className="col-12 mb-4">
			  <div className="section_title text-left"><h2>Supported by</h2></div>
			</div>
		 </div>	
    <div className="row">
	   <div className="col-12">
	        
         <BrandsSection/>

	   </div>
	</div>
  </div>	
</section>


          
      
      </> 
    );
  }
  
  export default Home;
  