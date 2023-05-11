import React from 'react'
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

import "./customStyle.css";

import shutterstock_8 from './assets/shutterstock_8.jpg';
import shutterstock_10 from './assets/shutterstock_10.jpg';
import shutterstock_12 from './assets/shutterstock_12.jpg';


const ServiceBPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const slides = document.querySelectorAll('.slide');
  const bullets = document.querySelectorAll('.bullet');
  const slideWidth = slides[0].getBoundingClientRect().width;
  


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
      <div class="sec2">
        <div class="mycontainer">
          <div class="row">
            <div class="colm4">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>Pickers App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm4">
              <h4>Testimonials</h4>
              <p>"I was looking for a solution that would allow me to create an online marketplace for our multiple stores and lines of business, and the Floki Marketplace Platform was the perfect fit. The setup was easy, and the platform is customizable and scalable to meet my needs. I've been able to increase my revenue potential and reach new customers through the multi-vendor support. I highly recommend this platform to anyone looking to create their own online marketplace." - Jihad Hassan, Managing Director of Lifco.</p>
            </div>
            <div class="colm4">
              <h4>Call-to-Action</h4>
              <p>Empower your business with the Floki Marketplace today. Sign up for a free demo and experience the flexibility and scalability of our technology. Start creating your own online marketplace and reach new customers today!</p>
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
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}

      <Header content={content['header']} />
      <MyHTMLComponent></MyHTMLComponent>
 
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
