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

import ServiceAPage from '../floki-d2c-app';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
               <h2>Content for Tab 1</h2>
               <p>Quisque eget odio vel purus blandit dignissim eget vitae ligula.</p>
               {/* <ServiceAPage></ServiceAPage> */}
             </TabPanel>


             <TabPanel>
               <h2>Content for Tab 2</h2>
               <p>Quisque eget odio vel purus blandit dignissim eget vitae ligula.</p>
             </TabPanel>
             <TabPanel>
               <h2>Content for Tab 3</h2>
               <p>Aliquam sit amet metus posuere, laoreet magna a, luctus odio.</p>
             </TabPanel>
             <TabPanel>
               <h2>Content for Tab 4</h2>
               <p>Aliquam sit amet metus posuere, laoreet magna a, luctus odio.</p>
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
