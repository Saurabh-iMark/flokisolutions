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

import shutterstock_6 from './assets/shutterstock_6.jpg';
import shutterstock_9 from './assets/shutterstock_9.jpg';
import shutterstock_11 from './assets/shutterstock_11.jpg';



const ServiceAPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  
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
      <div class="sec2">
        <div class="mycontainer">
          <div class="row">
            <div class="colm4">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm4">
              <h4>Testimonials</h4>
              <p>“Since we started using this Floki D2C platform, we've been able to take control of our sales and distribution channels, and build a direct relationship with our customers. The platform is easy to use, customizable, and secure, and our sales have increased significantly as a result." - Maisoon, E-commerce Director of Addoha Poultry..</p>
            </div>
            <div class="colm4">
              <h4>Call-to-Action</h4>
              <p>Take control of your sales and build a direct relationship with your customers with our Floki D2C App. Contact us to schedule a demo or sign up for a free trial.</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  };
  


  // const TestomonialsComponent = () => {
  //   return (
  //     <div class="product1">
  //       <div class="mycontainer">
  //         <div class="sec1">
  //           <h4>Our Services</h4>
  //           <h1>Floki D2C App</h1>
  //           <p>Take Control of Your Sales and Build a Direct Relationship with Your Customers!</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };



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
      {/* <TestomonialsComponent></TestomonialsComponent> */}
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
