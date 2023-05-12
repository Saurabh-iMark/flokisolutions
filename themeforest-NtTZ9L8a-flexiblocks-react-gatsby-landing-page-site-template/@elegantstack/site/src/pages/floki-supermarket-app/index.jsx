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

import "./customStyleC.css";

import shutterstock_1 from './assets/shutterstock_1.jpg';
import shutterstock_2 from './assets/shutterstock_2.jpg';
import shutterstock_3 from './assets/shutterstock_3.jpg';


const ServiceCPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)




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
