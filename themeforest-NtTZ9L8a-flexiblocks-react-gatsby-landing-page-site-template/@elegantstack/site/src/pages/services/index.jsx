import React from 'react'
import { graphql } from 'gatsby'
import { Link as GLink } from 'gatsby'
import { Container, Heading, Text, Grid, Box, Button, css } from 'theme-ui'
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
import styles from './_styles'


export const navLinkStyles = css`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

export const activeNavLinkStyles = css`
  color: #fff;
  background-color: #333;
`;

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import "./customStyle.css";




import shutterstock_1 from './assets/shutterstock_1.jpg';
import shutterstock_2 from './assets/shutterstock_2.jpg';
import shutterstock_3 from './assets/shutterstock_3.jpg';

import shutterstock_4 from './assets/shutterstock_4.jpg';
import shutterstock_5 from './assets/shutterstock_5.jpg';
import shutterstock_7 from './assets/shutterstock_7.jpg';

import shutterstock_6 from './assets/shutterstock_6.jpg';
import shutterstock_9 from './assets/shutterstock_9.jpg';
import shutterstock_11 from './assets/shutterstock_11.jpg';

import shutterstock_8 from './assets/shutterstock_8.jpg';
import shutterstock_10 from './assets/shutterstock_10.jpg';
import shutterstock_12 from './assets/shutterstock_12.jpg';





const Services02 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)


  const ServiceProductComponent = () => {
    return (
          <Box>
              <GLink  to="/floki-d2c-app">
                <Box  as="li" sx={{ display: "flex", alignItems: "center", marginBottom: 3,
                                    "&:hover": {
                                      cursor: "pointer",
                                      color: "primary",
                                      svg: {
                                        fill: "primary",
                                      },
                                    }, }}>Floki D2C App</Box>
              </GLink>
              <GLink  to="/floki-marketplace-app">
                <Box  as="li" sx={{ display: "flex", alignItems: "center", marginBottom: 3,
                                    "&:hover": {
                                      cursor: "pointer",
                                      color: "primary",
                                      svg: {
                                        fill: "primary",
                                      },
                                    }, }}>Floki Marketplace App</Box>
              </GLink>
              <GLink  to="/floki-supermarket-app">
                <Box  as="li" sx={{ display: "flex", alignItems: "center", marginBottom: 3,
                                    "&:hover": {
                                      cursor: "pointer",
                                      color: "primary",
                                      svg: {
                                        fill: "primary",
                                      },
                                    }, }}>Floki Supermarket App(B2C)</Box>
              </GLink>
              <GLink  to="/floki-wholesale-app-b2b">
                <Box  as="li" sx={{ display: "flex", alignItems: "center", marginBottom: 3,
                                    "&:hover": {
                                      cursor: "pointer",
                                      color: "primary",
                                      svg: {
                                        fill: "primary",
                                      },
                                    }, }}>Floki Wholesale App(B2B)</Box>
              </GLink>
          </Box>
    )
  };


  const MyHTMLComponent1 = () => {
    return (
      <div className="service_spacer1">
      <div className="product1">
        <div className="mycontainer">
          <div className="sec1">
            <h4>Our Services</h4>
            <h1>Floki D2C App</h1>
            <p>Take Control of Your Sales and Build a Direct Relationship with Your Customers!</p>
          </div>
        </div>
      </div>
      <div className="discrptn">
         <div className="mycontainer"> 
            <h4>Product Description</h4>
            <p>Our Floki D2C App is a white label e-commerce solution designed specifically for product manufacturers and producers who want to sell directly to consumers. With our customizable and secure platform, you can easily launch your online store and start selling your products to a wider audience, while building a direct relationship with your customers. Our solution is fast, reliable, and customizable to meet your business needs.</p>
         </div>
      </div>
      <div className="product1">  
        <div className="mycontainer"> 
          <div className="sect"> 
            <div className="row">
                <div className="colm6">
                <img src={shutterstock_6} alt="product_img" />
                  {/* <img src="./images/shutterstock_6.jpg" alt="product_img"> */}
                </div>
                <div className="colm6">
                  <h4>Key Features :</h4>
                  <ul className="liststyle">
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
          <div className="sect">
            <div className="row">
                <div className="colm6">
                  <h4>Benefits :</h4>
                  <ul className="liststyle">
                    <li><strong>Take control of your sales and distribution</strong> by selling directly to consumers.</li>
                    <li>Build a <strong>direct relationship with your customers</strong>, gain insights into their behavior, and tailor your offerings to their preferences.</li>
                    <li><strong>Increase your revenue</strong> by reducing the cost of third-party sales channels and distributors.</li>
                    <li>Enhance your <strong>brand value</strong> and increase <strong>customer loyalty</strong> by offering a seamless and personalized online shopping experience.</li>
                  </ul>
                </div>
                <div className="colm6">
                <img src={shutterstock_11} alt="product_img" />
                  {/* <img src="./images/shutterstock_11.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div className="sect">
            <div className="row">
                <div className="colm6">
                <img src={shutterstock_9} alt="product_img" />
                  {/* <img src="./images/shutterstock_9.jpg" alt="product_img"> */}
                </div>
                <div className="colm6">
                  <h4>Use Cases :</h4>
                  <ul className="liststyle">
                    <li>A product manufacturer who wants to take control of their sales and distribution channels.</li>
                    <li>A producer who wants to build a direct relationship with their customers and increase their revenue.</li>
                    <li>A business owner who wants to enhance their brand value and increase customer loyalty by offering a seamless and personalized online shopping experience.</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec2">
        <div className="mycontainer">
          <div className="row">
            <div className="colm4">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div className="colm4">
              <h4>Testimonials</h4>
              <p>“Since we started using this Floki D2C platform, we've been able to take control of our sales and distribution channels, and build a direct relationship with our customers. The platform is easy to use, customizable, and secure, and our sales have increased significantly as a result." - Maisoon, E-commerce Director of Addoha Poultry..</p>
            </div>
            <div className="colm4">
              <h4>Call-to-Action</h4>
              <p>Take control of your sales and build a direct relationship with your customers with our Floki D2C App. Contact us to schedule a demo or sign up for a free trial.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  

  const MyHTMLComponent2 = () => {
    return (
      <div className="service_spacer1">
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
  

  const MyHTMLComponent3 = () => {
    return (
      <div className="service_spacer1">
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
            <div class="colm4">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>Pickers App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm4">
              <h4>Testimonials</h4>
              <p>"The white label e-commerce solution has helped us to expand our reach and increase our revenue. Our customers love the convenience of online shopping, and we've been able to streamline our operations and reduce our costs." - Joby Varghese, Business Unit Manager.</p>
            </div>
            <div class="colm4">
              <h4>Call-to-Action</h4>
              <p>Take your supermarket to the next level with our white label e-commerce solution. Contact us to schedule a demo or sign up for a free trial</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  

  const MyHTMLComponent4 = () => {
    return (
      <div className="service_spacer1">
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
            <div class="colm4 colm3">
              <h4>Deliverables</h4>
              <p>User App</p>
              <p>Pickers App</p>
              <p>SuperAdmin Backend</p>
            </div>
            <div class="colm4 colm3">
              <h4>Pricing</h4>
              <p>Our Floki Wholesale App pricing starts at $X per month, with customizable plans available based on your specific business needs.</p>
            </div>
            <div class="colm4 colm3">
              <h4>Testimonials</h4>
              <p>“Our ordering process has become much more efficient since we started using this white label e-commerce solution. Our customers appreciate the convenience and we've been able to grow our business as a result." - Mohamad Fleifel, CEO of MAB Trading..</p>
            </div>
            <div class="colm4 colm3">
              <h4>Call-to-Action</h4>
              <p>Streamline your ordering process and grow your business with our Floki Wholesale App. Contact us to schedule a demo or sign up for a free trial.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  


  const TopHtmlComponent = () => {
    return (
     <ul class="tabs_tabList" role="tablist">
      <li class="tabs_tab tabs_selectedTab" role="tab" id="react-tabs-14" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-15" tabindex="0">Users App</li>
      <li class="tabs_tab" role="tab" id="react-tabs-16" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-17">Pickers App</li>
      <li class="tabs_tab" role="tab" id="react-tabs-18" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-19">Super Admin Backend</li>
    </ul>
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
      <Header content={content['header-light']} />

      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
        <Divider space='4' />
        


        <Container variant='cards.paper-lg' sx={styles.servicesContainer}>
        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                as={GLink}
                to={'/floki-d2c-app'}
                key={'Floki D2C App'}
                sx={{
                    backgroundColor: 'white',
                    color: 'primary',
                    borderRadius: 'default',
                    padding: 3,
                    fontSize: [3, 4, 5], // Responsive font size
                    '&:hover': {
                      backgroundColor: 'primary',
                      color: 'white'
                  },
                }}>Floki D2C App</Button>
              <Button
                as={GLink}
                to={'/floki-marketplace-app'}
                key={'Floki Marketplace App'}
                sx={{
                    backgroundColor: 'white',
                    color: 'primary',
                    borderRadius: 'default',
                    padding: 3,
                    fontSize: [3, 4, 5], // Responsive font size
                    '&:hover': {
                      backgroundColor: 'primary',
                      color: 'white'
                  },
                }}>Floki Marketplace App</Button>
              <Button
                as={GLink}
                to={'/floki-supermarket-app'}
                key={'Floki Supermarket App(B2C)'}
                sx={{
                    backgroundColor: 'white',
                    color: 'primary',
                    borderRadius: 'default',
                    padding: 3,
                    fontSize: [3, 4, 5], // Responsive font size
                    '&:hover': {
                      backgroundColor: 'primary',
                      color: 'white'
                  },
                }}>Floki Supermarket App(B2C)</Button>
              <Button
                as={GLink}
                to={'/floki-wholesale-app-b2b'}
                key={'Floki Wholesale App(B2B)'}
                sx={{
                    backgroundColor: 'white',
                    color: 'primary',
                    borderRadius: 'default',
                    padding: 3,
                    fontSize: [3, 4, 5], // Responsive font size
                    '&:hover': {
                      backgroundColor: 'primary',
                      color: 'white'
                  },
                }}>Floki Wholesale App(B2B)</Button>
        </Box> */}

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Tabs>
        <TabList>
              <Tab><GLink className="nav-link"
      sx={{ ...navLinkStyles, '&.active': activeNavLinkStyles }} to="/floki-d2c-app">Floki D2C App</GLink></Tab>
              <Tab><GLink sx={{ textDecoration: 'none', color: 'black'}} to="/floki-marketplace-app">Floki Marketplace App</GLink></Tab>
              <Tab><GLink sx={{ textDecoration: 'none', color: 'black'}} to="/floki-supermarket-app">Floki Supermarket App(B2C)</GLink></Tab>
              <Tab><GLink sx={{ textDecoration: 'none', color: 'black'}} to="/floki-wholesale-app-b2b">Floki Wholesale App(B2B)</GLink></Tab>
        </TabList>
        </Tabs>
        </Box>


        <Services content={content['services']} />
          <Divider space='3' />
          <Services content={content['services-sec2']} reverse />
          <Divider space='3' />
          <Services content={content['otherService']} reverse />
          
          {/* <ServiceProductComponent></ServiceProductComponent> */}
          {/* <Tabs>
            <TabList>
              <Tab>Floki D2C App</Tab>
              <Tab>Floki Marketplace App</Tab>
              <Tab>Floki Supermarket App(B2C)</Tab>
              <Tab>Floki Wholesale App(B2B)</Tab>
            </TabList>

            <TabPanel>
               <MyHTMLComponent1></MyHTMLComponent1>
            </TabPanel>
            <TabPanel>
               <MyHTMLComponent2></MyHTMLComponent2>
            </TabPanel>
            <TabPanel>
               <MyHTMLComponent3></MyHTMLComponent3>
            </TabPanel>
            <TabPanel>
               <MyHTMLComponent4></MyHTMLComponent4>
            </TabPanel>
          </Tabs> */}

        </Container>

      </Container>
      {/* <Divider space='5' />
      <ServicesDetails content={content['services-details']} /> */}
      <Divider space='5' />
    {/*   <CompaniesPhoto content={content['companies-photo']} />
      <Divider space='4' />
      <JoinCompanies content={content['companies-join']} />
      <Divider space='4' />
      <Companies content={content['companies']} />
      <Divider space='4' />
      <Contact content={content['cta']} />
      <Divider space='5' /> */}
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query ServicesBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/services", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services02
