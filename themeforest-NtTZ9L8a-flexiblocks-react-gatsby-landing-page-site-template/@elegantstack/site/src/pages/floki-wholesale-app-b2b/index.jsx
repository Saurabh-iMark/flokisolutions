import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex, css, MenuButton, MenuList, MenuItem } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Services from '@solid-ui-blocks/FeaturesWithPhoto/Block02'
import ServicesDetails from '@solid-ui-blocks/Faq/Block02'
import Contact from '@solid-ui-blocks/CallToAction/Block02'
import CompaniesPhoto from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import JoinCompanies from '@solid-ui-blocks/Content/Block01'
import Companies from '@solid-ui-blocks/Companies/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles';

import "./customStyleD.css";

import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { FaQuoteRight } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import shutterstock_4 from './assets/shutterstock_4.jpg';
import shutterstock_5 from './assets/shutterstock_5.jpg';
import shutterstock_7 from './assets/shutterstock_7.jpg';
import userDummy1 from './assets/userDummy1.jpg';
import userDummy2 from './assets/userDummy2.jpg';
import userDummy3 from './assets/userDummy3.jpg';
import userDummy4 from './assets/userDummy4.jpg';
import appStoreBadge from './assets/appStoreBadge.png';
import playStoreBadge from './assets/playStoreBadge.png';



const ServiceDPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  
  const settings = {
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    speed: 2000
  };




  const MyHTMLComponent = () => {
    return (
      <div className="service_spacer">
      <div class="product1">
        <div class="mycontainer">
          <div class="sec1">
            <h4>Our Services</h4>
            <h1>Floki Wholesale App (B2B)</h1>
            <p>Streamline Your Ordering Process and Grow Your Business!</p>
          </div>
        </div>
      </div>
      <div class="discrptn">
         <div class="mycontainer"> 
            <h4>Product Description</h4>
            <p>Our Floki Wholesale App is a white-label e-commerce app designed specifically for wholesalers, providing you with an easy-to-use wholesale ecommerce app to receive orders from your customers. With our customizable and secure platform, your customers can easily place orders and track their delivery status, while you can streamline your ordering process and grow your business. Our solution is fast, reliable, and customizable to meet your business needs.</p>
         </div>
      </div>
      <div class="product1">  
        <div class="mycontainer"> 
          <div class="sect"> 
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_4} alt="product_img" />
                  {/* <img src="images/shutterstock_4.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Key Features :</h4>
                  <ul class="liststyle">
                    <li>User-friendly interface wholesale ecommerce app that's easy to navigate</li>
                    <li>Intuitive ordering system with customizable fields and options</li>
                    <li>Multiples pricings for different customer groups</li>
                    <li>Creating Promotions & Offers for specific customer groups</li>
                    <li>Real-time order tracking and delivery notifications for you and your customers</li>
                    <li>Integration with major payment gateways, accounting softwares and CRMs</li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <h4>Benefits :</h4>
                  <ul class="liststyle">
                    <li>Streamline your ordering process and <strong>reduce errors</strong> by using our Floki wholesale ecommerce app.</li>
                    <li><strong>Increase your revenue</strong> and customer base by offering an easy and convenient ordering experience.</li>
                    <li>Customize your online store to match <strong>your brand identity</strong> and meet your business needs.</li>
                    <li><strong>Improve your customer service</strong> by providing real-time order tracking and delivery notifications.</li>
                    <li>Track your customers orders history and <strong>forecast their sales</strong>.</li>
                  </ul>
                </div>
                <div class="colm6">
                  <img src={shutterstock_5} alt="product_img" />
                  {/* <img src="images/shutterstock_5.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_7} alt="product_img" />
                  {/* <img src="images/shutterstock_7.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Use Cases :</h4>
                  <ul class="liststyle">
                    <li>A wholesaler who wants to streamline their ordering process and reduce errors.</li>
                    <li>A distributor who wants to expand their customer base and increase their revenue.</li>
                    <li>A business owner who wants to offer an easy and convenient ordering experience to their customers.</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  


  const MyTabComponent = () => {
    return (
       <div class="custom-tab2">
       <Tabs>
       <TabList>
             <Tab>Deliverables</Tab>
             <Tab>User App</Tab>
             <Tab>SuperAdmin Backend</Tab>
       </TabList>
       <TabPanel>
         <p class="p-center">Content for tab 1 goes here.</p>
       </TabPanel>
       <TabPanel>
         <p class="p-center">Content for tab 2 goes here.</p>
       </TabPanel>
       <TabPanel>
         <p class="p-center">Content for tab 3 goes here.</p>
       </TabPanel>
       </Tabs>
       </div>
    )
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
                <img src={playStoreBadge} alt="product_img" class="mr-img" />
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
    <Layout {...props}>
      <Seo title='Home' />
      <Helmet>
      <title>Wholesale eCommerce App | B2B eCommerce Platform | Floki Solutions</title>
      <meta name="google-site-verification" content="jvulVjeMbr8Qb07aPAbFxWgBuwOl_Q2A9EvJoemO1co" />
        <meta name="description" content="Need a wholesale ecommerce app or b2b ecommerce platform? Our ecommerce solutions for wholesale distribution make it easy to manage your operations and grow your business." />
        <meta name="keywords" content="wholesale ecommerce app, wholesale ecommerce app, b2b ecommerce platform, wholesale ecommerce platform, b2b ecommerce application, ecommerce for wholesale distribution" />
        
        <meta property="og:title" content="Wholesale eCommerce App | B2B eCommerce Platform | Floki Solutions" />
        <meta property="og:description" content="Need a wholesale ecommerce app or b2b ecommerce platform? Our ecommerce solutions for wholesale distribution make it easy to manage your operations and grow your business." />
        
        <meta property="og:url" content="https://flokisolutionsmain.gatsbyjs.io/floki-wholesale-app-b2b/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}

      <Header content={content['header']} />

      <MyHTMLComponent></MyHTMLComponent>
      <MyTabComponent></MyTabComponent>
      <MySliderComponent></MySliderComponent>
 
      {/* <Divider space='5' /> */}
      <Footer content={content['footer']} />
    </Layout>
  )
}


export const query = graphql`
  query ServiceDPageContent {
    allBlockContent(
      filter: { page: { in: ["site/floki-wholesale-app-b2b", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default ServiceDPage
