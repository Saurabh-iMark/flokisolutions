import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import Counter from '@solid-ui-components/Counter'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'
const StatsBlock01 = ({
  content: { text, container, collection, buttons,images }
}) => (
  <Container sx={{ textAlign: `left` }}>
  
    <ContentImages
          content={{ images }}
          loading='eager'
            
         // reverse={reverse}
          imagePosition='center'
        />
      <ContentText content={text} />
      
     
    
  </Container>
)

export default WithDefaultContent(StatsBlock01)
