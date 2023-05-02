import React from 'react'
import { graphql } from 'gatsby'
import { Container, Styled, Box } from 'theme-ui'
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

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header-light']} />

    <Box
      sx={{
        backgroundColor: "primary",
        color: "white",
        padding: 3,
      }}>
      <Styled.h1>Hi, Saurabh Chauhan</Styled.h1>
      <Styled.h1>Welcome to my website</Styled.h1>
      <Styled.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ultrices lacus, eget efficitur ex facilisis a.
      </Styled.p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 100, height: 100, backgroundColor: "secondary" }} />
        <Box
          sx={{
            marginLeft: 3,
            fontSize: 2,
            fontWeight: "bold",
            lineHeight: "heading",
          }}
        >
          My Awesome Product
          <br />
          $99.99
        </Box>
      </Box>
    </Box>


      {/* <Divider space='5' />
      <ServicesDetails content={content['services-details']} /> */}
      <Divider space='5' />
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
