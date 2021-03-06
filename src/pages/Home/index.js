import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import CardsList from 'components/CardsList'
import Container from 'components/Container'
import FormAddTool from 'components/FormAddTool'
import Header from 'components/Header'
import HeaderActions from 'components/HeaderActions'
import RemoveToolDialogue from 'components/RemoveToolDialogue'
import highlight from 'utils/highlight'
import { removeTool } from 'utils/api'
import style from './style.module.css'

const HomePage = ({ context, toolsData }) => {
  const {
    setToolsList,
    setIsLoadingTools,
    getToolsByQuerie,
    modalOpen,
    modalClose,
    state,
    addToast,
  } = context
  const { toolsList, isLoadingTools, searchInTagsOnly, searchQuerie } = state

  useEffect(() => {
    if (toolsData.length) {
      setToolsList([...toolsData])
      setIsLoadingTools(false)
    } else {
      getToolsByQuerie()
    }
  }, [])

  useEffect(() => {
    if (searchInTagsOnly && !isLoadingTools) {
      highlight(searchQuerie)
    }
  }, [isLoadingTools])

  const handleFormSubmitSuccess = (tool) => {
    modalClose()
    setToolsList([...toolsList, tool])

    setTimeout(() => {
      addToast({
        title: 'Success',
        type: 'success',
        showing: false,
        content: 'Tool added into the list!',
      })
    }, 200) // wait the modal animation before add toast
  }
  const handleFormSubmitError = () => {
    addToast({
      title: 'Error',
      type: 'error',
      showing: false,
      content: 'Error when try add a new tool, can you try again in few moments please?',
    })
  }

  const handleClickAdd = () => {
    modalOpen(
      <FormAddTool onFormSuccess={handleFormSubmitSuccess} onFormError={handleFormSubmitError} />,
      'Add new tool',
    )
  }

  const handleRemoveTool = async (id) => {
    const { request } = await removeTool(id)

    if (request.status === 200) {
      modalClose()

      getToolsByQuerie()

      setTimeout(() => {
        addToast({
          title: 'Success',
          type: 'success',
          showing: false,
          content: 'Tool removed!',
        })
      }, 200) // wait the modal animation before add toast
    } else {
      addToast({
        title: 'Error',
        type: 'error',
        showing: false,
        content: 'Error when try remove the tool, can you try again in few moments please?',
      })
    }
  }

  const handleClickRemove = (tool) => {
    const { name, id } = tool

    modalOpen(
      <RemoveToolDialogue toolName={name} onClick={() => handleRemoveTool(id)} />,
      'Remove Tool',
    )
  }

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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '65536',
    },
    offers: {
      '@type': 'Offer',
      availability: 'http://schema.org/InStock',
      price: '99.99',
      priceCurrency: 'USD',
    },
    operatingSystem: 'iOS',
  }

  return (
    <div className={style.root}>
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
        <HeaderActions onClickAdd={handleClickAdd} />
        <CardsList
          toolsList={toolsList}
          isLoading={isLoadingTools}
          onClickRemove={handleClickRemove}
        />
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
      searchInTagsOnly: PropTypes.bool.isRequired,
      searchQuerie: PropTypes.string.isRequired,
    }),
    setToolsList: PropTypes.func.isRequired,
    setIsLoadingTools: PropTypes.func.isRequired,
    getToolsByQuerie: PropTypes.func.isRequired,
    modalOpen: PropTypes.func.isRequired,
    modalClose: PropTypes.func.isRequired,
    addToast: PropTypes.func.isRequired,
  }).isRequired,
}

HomePage.defaultProps = {
  toolsData: [],
}

export default WrapComponentWithAppStateConsumer(HomePage)
