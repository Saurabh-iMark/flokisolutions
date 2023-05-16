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

import "./customStyleB.css";

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

import shutterstock_8 from './assets/shutterstock_8.jpg';
import shutterstock_10 from './assets/shutterstock_10.jpg';
import shutterstock_12 from './assets/shutterstock_12.jpg';
import userDummy1 from './assets/userDummy1.jpg';
import userDummy2 from './assets/userDummy2.jpg';
import userDummy3 from './assets/userDummy3.jpg';
import userDummy4 from './assets/userDummy4.jpg';
import appStoreBadge from './assets/appStoreBadge.png';
import playStoreBadge from './assets/playStoreBadge.png';



const ServiceBPage = props => {
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
            <h1>Floki Marketplace App</h1>
            <p>Empower your business with a scalable e-commerce solution!</p>
          </div>
        </div>
      </div>
      <div class="discrptn">
         <div class="mycontainer"> 
            <h4>Product Description</h4>
            <p>The Floki Marketplace E-commerce Platform is a scalable and customizable solution that allows entrepreneurs, businesses, and individuals to create their own online marketplace and sell products from multiple vendors.</p>
         </div>
      </div>
      <div class="product1">  
        <div class="mycontainer"> 
          <div class="sect"> 
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_12} alt="product_img" />
                  {/* <img src="images/shutterstock_12.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Key Features :</h4>
                  <ul class="liststyle">
                    <li>Easy setup and management</li>
                    <li>Multi-vendor support</li>
                    <li>Secure payment processing</li>
                    <li>Product search and filtering</li>
                    <li>Customizable branding and design</li>
                    <li>Analytics and reporting</li>
                    <li>Customer management and support</li>
                    <li>Integration with third-party tools and services</li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <h4>Benefits :</h4>
                  <ul class="liststyle">
                    <li>Increased revenue potential</li>
                    <li>Reduced time and costs for website development and management</li>
                    <li>Flexibility and scalability</li>
                    <li>Increased brand exposure</li>
                    <li>Improved customer satisfaction</li>
                  </ul>
                </div>
                <div class="colm6">
                  <img src={shutterstock_8} alt="product_img" />
                  {/* <img src="images/shutterstock_8.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_10} alt="product_img" />
                  {/* <img src="images/shutterstock_10.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Use Cases :</h4>
                  <ul class="liststyle">
                    <li>Entrepreneurs and startups looking to create their own online marketplace</li>
                    <li>Businesses and organizations looking to expand their reach and sell products from multiple vendors</li>
                    <li>Individuals looking to create an online store for their products or services</li>
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
      <title>Multi Vendor eCommerce Marketplace | Marketplace App | Floki Solutions</title>
      <meta name="google-site-verification" content="jvulVjeMbr8Qb07aPAbFxWgBuwOl_Q2A9EvJoemO1co" />
        <meta name="description" content="Build a multi-vendor eCommerce marketplace with our powerful marketplace app. Connect vendors with customers and start your eCommerce platform today." />
        <meta name="keywords" content="e commerce platform, marketplace app, picker app, multi vendor ecommerce marketplace, online marketplace app, App like Talabat" />
        
        <meta property="og:title" content="Multi Vendor eCommerce Marketplace | Marketplace App | Floki Solutions" />
        <meta property="og:description" content="Build a multi-vendor eCommerce marketplace with our powerful marketplace app. Connect vendors with customers and start your eCommerce platform today." />
        
        <meta property="og:url" content="https://flokisolutionsmain.gatsbyjs.io/floki-marketplace-app/" />
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
  query ServiceBPageContent {
    allBlockContent(
      filter: { page: { in: ["site/floki-marketplace-app", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default ServiceBPage
