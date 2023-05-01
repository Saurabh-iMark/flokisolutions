import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Content from '@solid-ui-blocks/Content/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Teams/Block02'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Testimonials from '@solid-ui-blocks/Testimonials/Block03'
import Companies from '@solid-ui-blocks/Companies/Block01'
import Stats from '@solid-ui-blocks/Stats/Block01'

import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Blog03 = props => {
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
      <Header content={content['header']} />
      <Container variant='full' sx={styles.heroContainer}>
        <Stats content={content['blog']}  />
        
      </Container>
     
      {/* <Container variant='wide' sx={styles.contentTwoContainer}>
        <Content content={content['content-two']} />
      </Container>
      <Divider space='5' /> */}
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query Blog03BlockContent {
    allBlockContent(
      filter: { page: { in: ["site/Blog03", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Blog03
