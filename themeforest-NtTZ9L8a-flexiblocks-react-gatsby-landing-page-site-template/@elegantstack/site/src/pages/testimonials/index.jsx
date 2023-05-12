import React from 'react'
import { graphql } from 'gatsby'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex, css, MenuButton, MenuList, MenuItem } from 'theme-ui'

import "./customStyle.css";

import userDummy1 from './assets/userDummy1.jpg';
import userDummy2 from './assets/userDummy2.jpg';
import userDummy3 from './assets/userDummy3.jpg';
import userDummy4 from './assets/userDummy4.jpg';
import appStoreBadge from './assets/appStoreBadge.png';
import playStoreBadge from './assets/playStoreBadge.png';


const TestimonialsComponent = () => {
 
  const settings = {
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    speed: 2000
  };

  
  const MySliderComponent = () => {
    return (
      <div className="container">
      <div class="col_wrap">
        <div class="col-_gap">
        <div class="testimonial_slider">
        <Slider {...settings}>
                    <div class="item">
                        <div class="ctnt">
                            <figure>
                            <img src={userDummy1} alt="product_img" />
                            </figure>
                            <div class="right_ctnt">
                                <h4>Jihad Hassan</h4>
                                <h6>Managing Director of Lifco</h6>
                                <p>I was looking for a solution that would allow me to create an online marketplace for our multiple stores and lines of business, and the Floki Marketplace Platform was the perfect fit. The setup was easy, and the platform is customizable and scalable to meet my needs.</p>
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaRegStar /></li>
                                </ul>
                                <span><FaQuoteRight /></span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ctnt">
                            <figure>
                            <img src={userDummy2} alt="product_img" />
                            </figure>
                            <div class="right_ctnt">
                                <h4>Maisoon</h4>
                                <h6>Director of Addoha Poultry</h6>
                                <p>Since we started using this Floki D2C platform, we've been able to take control of our sales and distribution channels, and build a direct relationship with our customers. The platform is easy to use, customizable, and secure, and our sales have increased significantly as a result.</p>
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaRegStar /></li>
                                </ul>                                
                                <span><FaQuoteRight /></span>
                            </div>
                        </div>
                    </div> 
                    <div class="item">
                        <div class="ctnt">
                            <figure>
                            <img src={userDummy3} alt="product_img" />
                            </figure>
                            <div class="right_ctnt">
                                <h4>Joby Varghese</h4>
                                <h6>Business Unit Manager</h6>
                                <p>The white label e-commerce solution has helped us to expand our reach and increase our revenue. Our customers love the convenience of online shopping, and we've been able to streamline our operations and reduce our costs.</p>
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaRegStar /></li>
                                </ul>
                                <span><FaQuoteRight /></span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ctnt">
                            <figure>
                            <img src={userDummy4} alt="product_img" />
                            </figure>
                            <div class="right_ctnt">
                                <h4>Mohamad Fleifel</h4>
                                <h6>CEO of MAB Trading</h6>
                                <p>Our ordering process has become much more efficient since we started using this white label e-commerce solution. Our customers appreciate the convenience and we've been able to grow our business as a result.</p>
                                <ul>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaRegStar /></li>
                                </ul>
                                <span><FaQuoteRight /></span>
                            </div>
                        </div>
                    </div>  
        </Slider>
        </div>
        </div>
 

        <div class="col-_gap">
            <div class="start_ctnt">
                <h2><span>Start Learning</span> and Join Our happy Users</h2>
                <p>With +30,000 SKUs available in our database,your time to go live should be minimal.We save you the effort of creating your database from scratch.</p>
                <div class="payroll-btn">
                <img src={playStoreBadge} alt="product_img" />&nbsp;
                <img src={appStoreBadge} alt="product_img" />
                    {/* <a href="#"><FaGooglePlay /></a>
                    <a href="#"><FaAppStore /></a> */}
                </div>
            </div>
        </div>

      </div>
      </div>

    );
  };




  return (
    <MySliderComponent></MySliderComponent>
  )
}



export default TestimonialsComponent
