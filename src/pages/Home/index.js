import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from 'components/Header'
import Container from 'components/Container'
import CardsList from 'components/CardsList'
import style from './style.module.css'

const HomePage = ({ toolsList }) => {
  const title = 'Very Usefull Tools to Remember - VUTTR'
  const metaDescription =
    "Very Usefull Tools to Remember, don't waste your time thinking, just write down the tool! Come See!"
  const metaOgImage = '/static/img/home-seo.png'
  const metaKeywords =
    'notebook, tools, usefull, remember, save, notes, bossabox, challenge, frontend'

  const scheme = {
    '@context': 'http://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description:
      "Very Usefull Tools to Remember, don't waste your time thinking, just write down the tool! Come See!",
    applicationCategory: 'Multimedia',
    sourceOrganization: 'localhost.com',
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@danielbarion" />
        <meta name="twitter:creator" content="@danielbarion" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href="https://localhost/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaOgImage} />
        <meta property="og:url" content="https://localhost/" />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(scheme) }}
        />
      </Head>

      <Container className={style.mainContent} element="main">
        <Header className={style.header} />
        <CardsList toolsList={toolsList} />
      </Container>
    </div>
  )
}

HomePage.propTypes = {
  toolsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
}

HomePage.defaultProps = {
  toolsList: [],
}

export default HomePage
