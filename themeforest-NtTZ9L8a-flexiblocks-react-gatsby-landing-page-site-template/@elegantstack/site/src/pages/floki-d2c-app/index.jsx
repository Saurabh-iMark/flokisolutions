import React, { useEffect, Component } from 'react'
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
import "./customStyleA.css";

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

import shutterstock_6 from './assets/shutterstock_6.jpg';
import shutterstock_9 from './assets/shutterstock_9.jpg';
import shutterstock_11 from './assets/shutterstock_11.jpg';
import userDummy1 from './assets/userDummy1.jpg';
import userDummy2 from './assets/userDummy2.jpg';
import userDummy3 from './assets/userDummy3.jpg';
import userDummy4 from './assets/userDummy4.jpg';
import appStoreBadge from './assets/appStoreBadge.png';
import playStoreBadge from './assets/playStoreBadge.png';



const ServiceAPage = props => {
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
            <h1>Floki D2C App</h1>
            <p>Take Control of Your Sales and Build a Direct Relationship with Your Customers!</p>
          </div>
        </div>
      </div>
      <div class="discrptn">
         <div class="mycontainer"> 
            <h4>Product Description</h4>
            <p>Our Floki D2C App is a white label e-commerce solution designed specifically for product manufacturers and producers who want to sell directly to consumers. With our customizable and secure direct to consumer e-commerce platform, you can easily launch your online store and start selling your products to a wider audience, while building a direct relationship with your customers. Our solution is fast, reliable, and customizable to meet your business needs.</p>
         </div>
      </div>
      <div class="product1">  
        <div class="mycontainer"> 
          <div class="sect"> 
            <div class="row">
                <div class="colm6">
                <img src={shutterstock_6} alt="product_img" />
                  {/* <img src="./images/shutterstock_6.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Key Features :</h4>
                  <ul class="liststyle">
                    <li>User-friendly direct to consumer e-commerce interface that can be re-branded to match your brand identity</li>
                    <li>Built-in reporting tools to help you understand customer behavior and preferences, so you can optimize your offerings and increase customer satisfaction and loyalty</li>
                    <li>Flexible product catalog and inventory management tools to allow you to easily adjust your offerings and respond to changes in demand or new product releases</li>
                    <li>Advanced marketing tools and integrations to enable personalized messaging and promotional campaigns to drive sales and engagement on direct to consumer e-commerce platform.</li>
                    <li>Multi-language and currency support for a global reach</li>
                    <li>Real-time order tracking and delivery notifications for you and your customers</li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <h4>Benefits :</h4>
                  <ul class="liststyle">
                    <li><strong>Take control of your sales and distribution</strong> by selling directly to consumers.</li>
                    <li>Build a <strong>direct relationship with your customers</strong>, gain insights into their behavior, and tailor your offerings to their preferences with our direct to consumer e-commerce platform.</li>
                    <li><strong>Increase your revenue</strong> by reducing the cost of third-party sales channels and distributors.</li>
                    <li>Enhance your <strong>brand value</strong> and increase <strong>customer loyalty</strong> by offering a seamless and personalized online shopping experience.</li>
                  </ul>
                </div>
                <div class="colm6">
                <img src={shutterstock_11} alt="product_img" />
                  {/* <img src="./images/shutterstock_11.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                <img src={shutterstock_9} alt="product_img" />
                  {/* <img src="./images/shutterstock_9.jpg" alt="product_img"> */}
                </div>
                <div class="colm6">
                  <h4>Use Cases :</h4>
                  <ul class="liststyle">
                    <li>A product manufacturer who wants to take control of their sales and distribution channels.</li>
                    <li>A producer who wants to build a direct relationship with their customers and increase their revenue.</li>
                    <li>A business owner who wants to enhance their brand value and increase customer loyalty by offering a seamless and personalized online shopping experience.</li>
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
      <title>Direct to consumer eCommerce | eCommerce Solution | Floki Solutions</title>
      <meta name="google-site-verification" content="jvulVjeMbr8Qb07aPAbFxWgBuwOl_Q2A9EvJoemO1co" />
        <meta name="description" content="Unlock the potential of direct-to-consumer eCommerce (D2C) with our eCommerce app development services. We provide customizable solutions to expand your brand's reach." />
        <meta name="keywords" content="e-commerce solution, app for grocery delivery, ecommerce app development, d2c app, Direct to consumer e-commerce" />
        
        <meta property="og:title" content="Direct to consumer eCommerce | eCommerce Solution | Floki Solutions" />
        <meta property="og:description" content="Unlock the potential of direct-to-consumer eCommerce (D2C) with our eCommerce app development services. We provide customizable solutions to expand your brand's reach." />
        
        <meta property="og:url" content="https://flokisolutionsmain.gatsbyjs.io/floki-d2c-app/" />
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
  query ServiceAPageContent {
    allBlockContent(
      filter: { page: { in: ["site/floki-d2c-app", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default ServiceAPage
