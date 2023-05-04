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
import styles from './_styles'


const ServiceAPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const html = `
  <style>
  
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
	box-sizing: border-box;
}

.mycontainer{
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding-left: 2rem;
    padding-right: 2rem;
}


.product1 {
    width: 100%;
    float: left;
}
.product1 .sec1 h4 {
    margin: 0;
    min-width: 0;
    font-family: 'Poppins',sans-serif;
    font-weight: bold;
    line-height: 1.55;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: var(--theme-ui-colors-alpha,#066af2);
}
.product1 .sec1 h1 {
    margin: 0;
    min-width: 0;
    font-family: 'Poppins',sans-serif;
    font-weight: bold;
    line-height: 1.55;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 1rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: var(--theme-ui-colors-omegaDarker,#2d3748);
    font-size: 3rem;
}
.product1 .sec1 p {
	box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--theme-ui-colors-omegaDark,#718096);
    text-align: center;
    font-family: 'Poppins',sans-serif;
}
.row {
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-between;
}
.colm6 {
    width: 50%;
    margin: 0 1em 1.5em 1em;
}
.colm4 {
	width: 33%;
}
.colm3 {
	width:25%;
}
img{
	max-width: 100%;
}

.product1 .sect {
	margin-top: 1em;
	margin-bottom: 1em;
}

.product1 .sect h4, .discrptn h4, .sec2 h4  {
    font-family: 'Poppins',sans-serif;
    font-weight: bold;
    line-height: 1.55;
    display: block;
    color: var(--theme-ui-colors-alpha,#1F299B);
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  
}
.product1 .sect ul.liststyle li {
    color: var(--theme-ui-colors-omegaDark,#718096);
    line-height: 2;
    list-style-type: square;
    font-family: 'Poppins',sans-serif;
}
.discrptn {
    width: 100%;
    float: left;
    background-color: #f7f7f7;
    box-shadow: 0px 17px 33px #e5e5e5;
    padding: 1.5em;
    margin: 2em 0;
    text-align: center;
}
.discrptn p{
	color: var(--theme-ui-colors-omegaDark,#718096);
	line-height: 2;
    font-family: 'Poppins',sans-serif;
}
.sec2 {
    width: 100%;
    float: left;
    background-color: #f1f4fa;
    margin-top: 3em;
}.sec2 p {
	color: var(--theme-ui-colors-omegaDark,#718096);
	font-size: 15px;
	line-height: 2;
    font-family: 'Poppins',sans-serif;
}
.sec2 .colm4 {
    padding: 1em 2em;
    background-color: #fff;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: -3em;
    border-radius: 1em;
    box-shadow: 0 0 35px rgba(140,152,164,.125);
    transition: 0.4s ease-in-out;
}
.sec2 .colm4:hover {
    transform: translateY(-25px);
  	box-shadow: 0px 30px 30px 2px #ccc;
}


@media only screen and (max-width: 1024px) {
	.sec2 p {
		line-height: 20px;
		font-size: 14px;
	}
}
@media only screen and (max-width: 768px) {	
	.row {
		flex-wrap: wrap;
	}
	.colm6 {
	    width: 100%;
	}
	.colm4 {
	    width: 100%;
	    margin-bottom: 1em;
	}
	.sec2 .colm4 {
	    margin-top: 1em;
	}
	.sec2 .colm4:hover {
	    transform: translateY(0px);
	}
	.product1 .sec1 h1 {
	    font-size: 2rem;
	}
	.product1 .sec1 p {
	    font-size: 1rem;
	}

}
@media only screen and (max-width: 425px) {
	.product1 .sec1 h1 {
	    font-size: 1.3rem;
	}
	.product1 .sec1 h4 {
		font-size: 1.2rem;
	}
	.product1 .sec1 p {
	    font-size: 0.8rem;
	}
	.product1 .sect h4, .discrptn h4, .sec2 h4 {
	    font-size: 1.1rem;
	}
	.discrptn p, .product1 .sect ul.liststyle li {
	    font-size: 14px;
	}
	.sec2 p {
	    line-height: 2;
	    font-size: 13px;
	}

}


  </style>
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
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
                  <img src="./images/shutterstock_6.jpg" alt="product_img">
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
                  <img src="./images/shutterstock_11.jpg" alt="product_img">
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
                  <img src="./images/shutterstock_9.jpg" alt="product_img">
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
  
    </body>
  </html>`;



  const MyHTMLComponent = () => {
    return (
      <div>
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
                  {/* <img src="./images/shutterstock_11.jpg" alt="product_img"> */}
                </div>
            </div>
          </div>
          <div class="sect">
            <div class="row">
                <div class="colm6">
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
  



  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header-light']} />
      <MyHTMLComponent></MyHTMLComponent>
      
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}


export const query = graphql`
  query ServiceAPageContent {
    allBlockContent(
      filter: { page: { in: ["site/serviceA", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default ServiceAPage
