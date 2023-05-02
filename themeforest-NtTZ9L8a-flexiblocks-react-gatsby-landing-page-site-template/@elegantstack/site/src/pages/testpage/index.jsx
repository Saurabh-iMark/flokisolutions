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

const TestPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const html = `
  <style>
  h2{ font-size:80px;}
  </style>
  <h2 >My First Blog Post</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Nullam ut dolor ante. Nam semper, quam sit amet consequat maximus.</p>
  <p>Praesent nec turpis libero.</p>`;

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header-light']} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
       
      {/* <Box>
                  <Button
              variant="outline"
              sx={{
                color: "text",
                bg: "background",
                border: "1px solid",
                borderColor: "text",
                borderRadius: 0,
                cursor: "pointer",
                fontSize: 1,
                p: 2,
                ":hover": { bg: "muted" }
              }}
            >
              Services
              <MenuButton sx={{ color: "inherit", ml: 2 }} />
            </Button>
            <MenuList sx={{ top: "auto", right: 0, left: "auto", minWidth: "max-content" }}>
              <MenuItem as={GLink} to="/services/service1">Service 1</MenuItem>
              <MenuItem as={GLink} to="/services/service2">Service 2</MenuItem>
              <MenuItem as={GLink} to="/services/service3">Service 3</MenuItem>
            </MenuList>
      </Box> */}


      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
        <Divider space='4' />
        <Container variant='cards.paper-lg' sx={styles.servicesContainer}>
        <Services content={content['services']} />
          <Divider space='3' />
          <Services content={content['services-sec2']} reverse />
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
  query TestPageContent {
    allBlockContent(
      filter: { page: { in: ["site/testpage", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`


export default TestPage
