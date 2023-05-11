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

import shutterstock_4 from './assets/shutterstock_4.jpg';
import shutterstock_5 from './assets/shutterstock_5.jpg';
import shutterstock_7 from './assets/shutterstock_7.jpg';


const ServiceDPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)




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
            <p>Our Floki Wholesale App is a white-label e-commerce app designed specifically for wholesalers, providing you with an easy-to-use mobile app to receive orders from your customers. With our customizable and secure platform, your customers can easily place orders and track their delivery status, while you can streamline your ordering process and grow your business. Our solution is fast, reliable, and customizable to meet your business needs.</p>
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
                    <li>User-friendly interface that's easy to navigate</li>
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
                    <li>Streamline your ordering process and <strong>reduce errors</strong> by using our Floki Wholesale App.</li>
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
      <div class="sec2">
        <div class="mycontainer">
          <div class="row">
            <div class="colm6 colm6">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>Pickers App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm6 colm6">
              <h4>Testimonials</h4>
              <p>“Our ordering process has become much more efficient since we started using this white label e-commerce solution. Our customers appreciate the convenience and we've been able to grow our business as a result." - Mohamad Fleifel, CEO of MAB Trading..</p>
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
