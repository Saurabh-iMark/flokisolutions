import React, { useState } from 'react'
import { Link as GLink } from 'gatsby'
import Sticky from 'react-sticky-el'
import { Container, Box, Flex, css, Styled, Select, Link } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Drawer from '@solid-ui-components/Drawer'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'



const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 10,
    '.nav-container': {
      bg: `headerBg`,
      position: `fixed`,
      transition: `all 250ms ease-in`,
      // overflow: `hidden`,
      py: 3
    },
    '.nav-sticky .nav-container': {
      bg: `headerActiveBg`,
      boxShadow: `0 0 25px rgba(140,152,164,.25)`,
      py: [3, null, 2],
      '.button-group-link.level-1, button-group-link.level-1:visited': {
        color: `headerActiveColor`
      }
    },
    //Make buttons in header smaller
    '.button-group-button': {
      minWidth: 120,
      fontSize: 1,
      px: 3,
      py: 1
    }
  },
  header: {
    justifyContent: `space-between`,
    alignItems: `center`
    // height: [`6rem`, `7rem`], //prevent layout shift
  },
  logoContainer: {
    flexShrink: 0,
    maxWidth: 200,
    mr: [null, null, 3, 5]
  },
  desktopMenu: {
    display: [`none`, null, `block`],
    minWidth: `auto`,
    flexGrow: 1
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  }
}

const HeaderBlock01 = ({ content: { images, collection }, menuJustify }) => {

  const [showOptions, setShowOptions] = React.useState(false);

  const handleHover = () => {
    setShowOptions(true);
  };

  const handleLeave = () => {
    setShowOptions(false);
  };

  console.log(collection);


  


  return (
    <>
      <Sticky
        enabled='true'
        stickyClassName='nav-sticky'
        css={css(styles.wrapper)}
      >
        <Container variant='full' className='nav-container'>
          <Container px='4'>
            <Flex sx={styles.header}>
              <Box sx={styles.logoContainer}>
                <GLink to='/'>
                  <ContentImages
                    content={{ images }}
                    sx={styles.image}
                    imageEffect='fadeIn'/>
                </GLink>
              </Box>


              <Flex onMouseEnter={handleHover} onMouseLeave={handleLeave} sx={{ position: 'relative' }}>
                <Link sx={{ variant: 'styles.navlink' }}>Services</Link>
                {showOptions && (

                  <Flex
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      backgroundColor: '#f2f2f2',
                      boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
                      zIndex: 1, borderColor: 'red', bordeWidth: 2,
                      flexDirection: 'column', padding: 20
                    }}>

                    <GLink  to="/servicea">
                    <Box sx={{ borderBottom: '1px solid #ccc', cursor: "pointer", fontSize: 20 }}>
                      Service 1
                    </Box>
                    </GLink>

                    <GLink  to="/serviceb">
                    <Box sx={{ borderBottom: '1px solid #ccc', cursor: "pointer", fontSize: 20 }}>
                      Service 2
                    </Box>
                    </GLink>

                    <GLink  to="/servicec">
                    <Box sx={{ borderBottom: '1px solid #ccc', cursor: "pointer", fontSize: 20 }}>
                      Service 3
                    </Box>
                    </GLink>

                    <GLink  to="/serviced">
                    <Box sx={{ borderBottom: '1px solid #ccc', cursor: "pointer", fontSize: 20 }}>
                      Service 4
                    </Box>
                    </GLink>

                  </Flex>
                )}
              </Flex>


              {collection && (
                <>
                  <Box sx={styles.desktopMenu}>
                    <Reveal effect='fadeInDown'>
                      <Flex sx={{alignItems: `center`, justifyContent: menuJustify}}>
                          {collection.map( ({ buttons }, index) => buttons && (
                                <Box
                                  key={`item-${index}`}
                                  sx={{
                                    '& + &': {
                                      ml: 4
                                    }
                                  }}>
  
                                  <ContentButtons content={buttons} />
                                </Box>
                              )
                          )}
                      </Flex>
                    </Reveal>
                  </Box>



                  <Box sx={styles.mobileMenu}>
                    <Drawer buttonStyle={{ svg: { size: 32 } }}>
                      {collection.map(
                        ({ buttons }, index) =>
                          buttons && (
                            <Box
                              key={`item-${index}`}
                              sx={{
                                fontSize: 3,
                                '.button-group-link.level-1, button-group-link.level-1:visited': {
                                  color: `headerActiveColor`
                                }
                              }}>
                              <ContentButtons content={buttons} variant='vertical'/>
                            </Box>
                          )
                      )}
                    </Drawer>
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Container>
      </Sticky>
    </>
  )
}

HeaderBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(HeaderBlock01)
