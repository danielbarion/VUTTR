import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Header from 'components/Header'
import Container from 'components/Container'
import CardsList from 'components/CardsList'
import HeaderActions from 'components/HeaderActions'
import style from './style.module.css'

const HomePage = ({ context, toolsData }) => {
  const { setToolsList, setIsLoadingTools, state } = context
  const { toolsList, isLoadingTools } = state

  useEffect(() => {
    if (toolsData.length) {
      setToolsList([...toolsData])
      setIsLoadingTools(false)
    }
  }, [])

  /**
   * Page Meta Data
   */
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
        <HeaderActions />
        <CardsList toolsList={toolsList} isLoading={isLoadingTools} />
      </Container>
    </div>
  )
}

HomePage.propTypes = {
  toolsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  context: PropTypes.shape({
    state: PropTypes.shape({
      toolsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          link: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
        }),
      ),
      isLoadingTools: PropTypes.bool.isRequired,
    }),
    setToolsList: PropTypes.func.isRequired,
    setIsLoadingTools: PropTypes.func.isRequired,
  }).isRequired,
}

HomePage.defaultProps = {
  toolsData: [],
}

export default WrapComponentWithAppStateConsumer(HomePage)
