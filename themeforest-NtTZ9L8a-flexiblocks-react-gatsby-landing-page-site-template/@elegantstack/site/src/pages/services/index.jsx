import React from 'react'
import { graphql } from 'gatsby'
import { Link as GLink } from 'gatsby'
import { Container, Heading, Text, Grid, Box } from 'theme-ui'
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
  }

  const MyHTMLComponent1 = () => {
    return (
      <div className="service_spacer">
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
      <div className="service_spacer">
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
  
  const MyHTMLComponent3 = () => {
    return (
      <div className="service_spacer">
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
  
  const MyHTMLComponent4 = () => {
    return (
      <div className="service_spacer">
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
        
        <Services content={content['services']} />
          <Divider space='3' />
          <Services content={content['services-sec2']} reverse />
          <Divider space='3' />
          <Services content={content['otherService']} reverse />

          <Tabs>
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
          </Tabs>


          <ServiceProductComponent></ServiceProductComponent>

          <Container maxWidth={800}>
           <Heading as="h2" sx={{ textAlign: "center", mb: 4 }}>
             Bullet Section
           </Heading>
           <Grid columns={[1, 2, 2, 4]} gap={4}>
           <GLink  to="/floki-d2c-app">
             <Box as="ul" sx={{ listStyleType: "disc" }}>
               <Text as="li">Linking option 1</Text>
             </Box>
             </GLink>
             <Box as="ul" sx={{ listStyleType: "disc" }}>
               <Text as="li">Linking option 2</Text>
             </Box>
             <Box as="ul" sx={{ listStyleType: "disc" }}>
               <Text as="li">Linking option 3</Text>
             </Box>
             <Box as="ul" sx={{ listStyleType: "disc" }}>
               <Text as="li">Linking option 4</Text>
             </Box>
           </Grid>
          </Container>
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
