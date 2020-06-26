import React from 'react'
import Head from 'next/head'
import Container from 'components/Container'
import Button from 'components/Button'
import Card from 'components/Card'
import style from './style.module.css'

const DocsPage = () => {
  const title = 'Docs - VUTTR'
  const metaDescription =
    "Docs, don't waste your time thinking, just write down the tool! Come See!"
  const metaOgImage = '/static/img/home-seo.png'
  const metaKeywords =
    'notebook, tools, usefull, remember, save, notes, bossabox, challenge, frontend'

  const scheme = {
    '@context': 'http://schema.org',
    '@type': 'ImageObject',
    name: title,
    description: "Docs, don't waste your time thinking, just write down the tool! Come See!",
    contentUrl: '/static/img/home-seo.png',
    thumbnail: '/static/img/home-seo.png',
    fileFormat: 'image/jpeg',
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

      <Container className={style.mainContent} element="main" fill>
        <div className={style.buttons}>
          <div className={style.buttonsColumns}>
            <Button label="This is a button" />
            <Button label="This is a button" disabled />
            <Button label="This is a button" variant="secondary" />
            <Button label="This is a button" variant="secondary" disabled />
            <Button label="This is a button" variant="tertiary" />
            <Button label="This is a button" variant="tertiary" disabled />
            <Button label="This is a button" variant="quartiary" />
            <Button label="This is a button" variant="quartiary" disabled />
          </div>
          <div className={style.buttonsColumns}>
            <Button label="This is a button" display="success" />
            <Button label="This is a button" disabled display="success" />
            <Button label="This is a button" variant="secondary" display="success" />
            <Button label="This is a button" variant="secondary" disabled display="success" />
            <Button label="This is a button" variant="tertiary" display="success" />
            <Button label="This is a button" variant="tertiary" disabled display="success" />
            <Button label="This is a button" variant="quartiary" display="success" />
            <Button label="This is a button" variant="quartiary" disabled display="success" />
          </div>
          <div className={style.buttonsColumns}>
            <Button label="This is a button" display="danger" />
            <Button label="This is a button" disabled display="danger" />
            <Button label="This is a button" variant="secondary" display="danger" />
            <Button label="This is a button" variant="secondary" disabled display="danger" />
            <Button label="This is a button" variant="tertiary" display="danger" />
            <Button label="This is a button" variant="tertiary" disabled display="danger" />
            <Button label="This is a button" variant="quartiary" display="danger" />
            <Button label="This is a button" variant="quartiary" disabled display="danger" />
          </div>
        </div>
        <div className={style.cards}>
          <Card type="flat" className={style.card}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
            nec tempor leo convallis ullamcorper. Nam nec egestas risus. Nam efficitur ligula magna,
            non accumsan sapien auctor a. Suspendisse non tempus purus. Duis tellus tellus, rutrum
            sit amet pretium a, blandit ac magna.
          </Card>
          <Card type="1" className={style.card}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
            nec tempor leo convallis ullamcorper. Nam nec egestas risus. Nam efficitur ligula magna,
            non accumsan sapien auctor a. Suspendisse non tempus purus. Duis tellus tellus, rutrum
            sit amet pretium a, blandit ac magna.
          </Card>
          <Card type="2" className={style.card}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
            nec tempor leo convallis ullamcorper. Nam nec egestas risus. Nam efficitur ligula magna,
            non accumsan sapien auctor a. Suspendisse non tempus purus. Duis tellus tellus, rutrum
            sit amet pretium a, blandit ac magna.
          </Card>
          <Card type="3" className={style.card}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
            nec tempor leo convallis ullamcorper. Nam nec egestas risus. Nam efficitur ligula magna,
            non accumsan sapien auctor a. Suspendisse non tempus purus. Duis tellus tellus, rutrum
            sit amet pretium a, blandit ac magna.
          </Card>
          <Card type="4" className={style.card}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
            nec tempor leo convallis ullamcorper. Nam nec egestas risus. Nam efficitur ligula magna,
            non accumsan sapien auctor a. Suspendisse non tempus purus. Duis tellus tellus, rutrum
            sit amet pretium a, blandit ac magna.
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default DocsPage
