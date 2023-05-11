import React, { useEffect, Component } from 'react'
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

import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styles from './_styles';

import "./customStyle.css";

import shutterstock_6 from './assets/shutterstock_6.jpg';
import shutterstock_9 from './assets/shutterstock_9.jpg';
import shutterstock_11 from './assets/shutterstock_11.jpg';



const ServiceAPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const settings2 = {
    // SlickCarousel settings
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    speed: 2500
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };


  // useEffect(() => {
  //   $('.testimonial_slider').slick({
  //     slidesToShow: 1,
  //     infinite: false,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     dots: true,
  //     arrows: false,
  //     autoplaySpeed: 2500
  //   });
  // }, []);



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
            <p>Our Floki D2C App is a white label e-commerce solution designed specifically for product manufacturers and producers who want to sell directly to consumers. With our customizable and secure platform, you can easily launch your online store and start selling your products to a wider audience, while building a direct relationship with your customers. Our solution is fast, reliable, and customizable to meet your business needs.</p>
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
                    <li>User-friendly interface that can be re-branded to match your brand identity</li>
                    <li>Built-in reporting tools to help you understand customer behavior and preferences, so you can optimize your offerings and increase customer satisfaction and loyalty</li>
                    <li>Flexible product catalog and inventory management tools to allow you to easily adjust your offerings and respond to changes in demand or new product releases</li>
                    <li>Advanced marketing tools and integrations to enable personalized messaging and promotional campaigns to drive sales and engagement.</li>
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
                    <li>Build a <strong>direct relationship with your customers</strong>, gain insights into their behavior, and tailor your offerings to their preferences.</li>
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
  

  const MySliderComponent = () => {
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      // <div className="container">
      //   <div class="col_wrap">
      //       <div class="col-_gap">
      //           <Slider {...settings}>
      //           <div className="testimonial_slider">
      //               <div class="item">
      //                   <div class="ctnt">
      //                       <figure>
      //                       <img src={shutterstock_11} alt="product_img" />
      //                       </figure>
      //                       <div class="right_ctnt">
      //                           <h4>Digital Marketing</h4>
      //                           <h6>Last Mile Delivery Service</h6>
      //                           <p>We support in all different types of Digital Marketing Services, helping businesses in launching their e-commerce channel, reaching the right audience, with the right content</p>
      //                           <ul>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-regular fa-star"></i></li>
      //                           </ul>
      //                           <span><i class="fa-solid fa-quote-right"></i></span>
      //                       </div>
      //                   </div>
      //               </div>
      //               <div class="item">
      //                   <div class="ctnt">
      //                       <figure>
      //                       <img src={shutterstock_9} alt="product_img" />
      //                       </figure>
      //                       <div class="right_ctnt">
      //                           <h4>Digital Marketing</h4>
      //                           <h6>Last Mile Delivery Service</h6>
      //                           <p>We support in all different types of Digital Marketing Services, helping businesses in launching their e-commerce channel, reaching the right audience, with the right content</p>
      //                           <ul>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-regular fa-star"></i></li>
      //                           </ul>
      //                           <span><i class="fa-solid fa-quote-right"></i></span>
      //                       </div>
      //                   </div>
      //               </div> 
      //               <div class="item">
      //                   <div class="ctnt">
      //                       <figure>
      //                       <img src={shutterstock_6} alt="product_img" />
      //                       </figure>
      //                       <div class="right_ctnt">
      //                           <h4>Digital Marketing</h4>
      //                           <h6>Last Mile Delivery Service</h6>
      //                           <p>We support in all different types of Digital Marketing Services, helping businesses in launching their e-commerce channel, reaching the right audience, with the right content</p>
      //                           <ul>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-solid fa-star"></i></li>
      //                               <li><i class="fa-regular fa-star"></i></li>
      //                           </ul>
      //                           <span><i class="fa-solid fa-quote-right"></i></span>
      //                       </div>
      //                   </div>
      //               </div>  
      //           </div>
      //           </Slider>
      //       </div>
      //       <div class="col-_gap">
      //           <div class="start_ctnt">
      //               <h2><span>Start Learning</span> and Join Our happy Users</h2>
      //               <p>With +30,000 SKUs available in our database,your time to go live should be minimal.We save you the effort of creating your database from scratch.</p>
      //               <div class="payroll-btn">
      //                   <a href="#"><i class="fa-brands fa-google-play"></i></a>
      //                   <a href="#"><i class="fa-brands fa-google-play"></i></a>
      //               </div>
      //           </div>
      //       </div>
      //   </div>
      // </div>
    );
  };


  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}

      <Header content={content['header']} />
      <MyHTMLComponent></MyHTMLComponent>
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
