import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@blocks-helpers/useSiteMetadata'

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  thumbnail,
  siteUrl
}) => {
  const site = useSiteMetadata()

  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}

  description = excerpt || description || site.description

  thumbnail = thumbnail && thumbnail.hero && thumbnail.hero.src
  const thumbnailUrl =
    thumbnail &&
    (thumbnail.startsWith('//')
      ? thumbnail
      : siteUrl && `${siteUrl}${thumbnail}`)

  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },

    { property: 'og:title', content: title || site.title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:image', content: thumbnailUrl },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter.url }
  ]

  if (keywords && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords.join(', ') })
  }

  if (meta) {
    metaTags.push(meta)
  }

  metaTags.push({ name: 'initial-scale', content: '1.0' })
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
    
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `../../../../../site/content/assets/favicon.png`
        }
    ]}
    
    >

  <meta name="icon" href="../../../../../site/content/assets/favicon.png" />


      <title>eCommerce Mobile App Development Company | White Label Apps | Floki Solutions</title>
      <meta name="google-site-verification" content="jvulVjeMbr8Qb07aPAbFxWgBuwOl_Q2A9EvJoemO1co" />
        <meta name="description" content="Our app development company specializes in white label apps for ecommerce. With our customizable solutions, we make ecommerce app development easy for businesses." />
        <meta name="keywords" content="app creator, application development, app development company, mobile app development company, ecommerce app development company, White label apps, White label mobile apps, Shopify mobile app, Start e-commerce business" />
        
        <meta property="og:title" content="eCommerce Mobile App Development Company | White Label Apps | Floki Solutions" />
        <meta property="og:description" content="Our app development company specializes in white label apps for ecommerce. With our customizable solutions, we make ecommerce app development easy for businesses." />
        
        <meta property="og:url" content="https://flokisolutionsmain.gatsbyjs.io/" />
        <meta property="og:type" content="website" />

  </Helmet>
  )
}

export default Seo
