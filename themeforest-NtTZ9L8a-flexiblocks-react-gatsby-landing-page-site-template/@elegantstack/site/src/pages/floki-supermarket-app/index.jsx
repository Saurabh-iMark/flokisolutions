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

import "./customStyleC.css";

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

import shutterstock_1 from './assets/shutterstock_1.jpg';
import shutterstock_2 from './assets/shutterstock_2.jpg';
import shutterstock_3 from './assets/shutterstock_3.jpg';
import userDummy1 from './assets/userDummy1.jpg';
import userDummy2 from './assets/userDummy2.jpg';
import userDummy3 from './assets/userDummy3.jpg';
import userDummy4 from './assets/userDummy4.jpg';
import appStoreBadge from './assets/appStoreBadge.png';
import playStoreBadge from './assets/playStoreBadge.png';



const ServiceCPage = props => {
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
            <h1>Floki Supermarket App (B2C)</h1>
            <p>Expand Your Reach and Boost Your Sales Online!</p>
          </div>
        </div>
      </div>
      <div class="discrptn">
         <div class="mycontainer"> 
            <h4>Product Description</h4>
            <p>Our white label e-commerce solution is designed specifically for supermarkets and grocery stores, providing you with an online shopping platform to reach more customers and boost your sales. With our easy-to-use mobile app, your customers can shop for groceries online, create shopping lists, and get their orders delivered to their doorstep. Our solution is fast, reliable, and customizable to meet your business needs.</p>
         </div>
      </div>
      <div class="product1">  
        <div class="mycontainer"> 
          <div class="sect"> 
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_1} alt="product_img" />
                  {/* <img src="images/shutterstock_1.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Key Features :</h4>
                  <ul class="liststyle">
                    <li>User-friendly interface that's easy to navigate</li>
                    <li>Smart search algorithm to help customers find products quickly</li>
                    <li>Advanced marketing tools to keep your users engaged and reduce your churn rate</li>
                    <li>Order tracking and delivery notifications to keep customers updated on their orders</li>
                    <li>Integration with major payment gateways and delivery partners</li>
                    <li>Multi-language and currency support for a global reach</li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <h4>Benefits :</h4>
                  <ul class="liststyle">
                    <li>Increase your store reach and revenue by providing an online shopping platform.</li>
                    <li>Provide customers with a convenient and hassle-free shopping experience.</li>
                    <li>Offer a competitive advantage over other supermarkets or grocery stores that don't have an online presence.</li>
                    <li>Reduce the costs of running a physical store by streamlining your operations with our mobile app.</li>
                    <li>Customize your online store to match your brand identity and meet your business needs.</li>
                  </ul>
                </div>
                <div class="colm6">
                  <img src={shutterstock_2} alt="product_img" />
                  {/* <img src="images/shutterstock_2.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <img src={shutterstock_3} alt="product_img" />
                  {/* <img src="images/shutterstock_3.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Use Cases :</h4>
                  <ul class="liststyle">
                    <li>A supermarket owner who wants to expand their reach and attract more customers.</li>
                    <li>A grocery store manager who wants to streamline their operations and reduce their costs.</li>
                    <li>A business owner who wants to offer a competitive advantage over other supermarkets or grocery stores that don't have an online presence.</li>
                    <li>An e-commerce manager who developed an online solution that is not meeting his expectations and is looking for a better technology that actually works.</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec2">
        <div class="mycontainer">
          <div class="row">
            <div class="colm6">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>Pickers App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm6">
              <h4>Testimonials</h4>
              <p>"The white label e-commerce solution has helped us to expand our reach and increase our revenue. Our customers love the convenience of online shopping, and we've been able to streamline our operations and reduce our costs." - Joby Varghese, Business Unit Manager.</p>
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
      <title>App for Grocery Delivery | White Label Supermarket App | Floki Solutions</title>
      <meta name="google-site-verification" content="jvulVjeMbr8Qb07aPAbFxWgBuwOl_Q2A9EvJoemO1co" />
        <meta name="description" content="Need a white label supermarket app for your grocery delivery business? We specialize in online grocery development and can customize an app for your needs." />
        <meta name="keywords" content="app for grocery delivery, supermarket delivery app, online grocery app development, grocery mobile app development, White label supermarket app" />
        
        <meta property="og:title" content="App for Grocery Delivery | White Label Supermarket App | Floki Solutions" />
        <meta property="og:description" content="Need a white label supermarket app for your grocery delivery business? We specialize in online grocery development and can customize an app for your needs." />
        
        <meta property="og:url" content="https://flokisolutionsmain.gatsbyjs.io/floki-supermarket-app/" />
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
  query ServiceCPageContent {
    allBlockContent(
      filter: { page: { in: ["site/floki-supermarket-app", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default ServiceCPage
