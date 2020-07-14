import React, { useState } from 'react'
import Head from 'next/head'
import Button from 'components/Button'
import Card from 'components/Card'
import Container from 'components/Container'
import FieldText from 'components/FieldText'
import Icon from 'components/Icon'
import Toast from 'components/Toast'
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

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
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

            <Button label="This is a button" icon="Icon-Search-2px" />
            <Button label="This is a button" disabled icon="Icon-Search-2px" />
            <Button label="This is a button" variant="secondary" icon="Icon-Search-2px" />
            <Button label="This is a button" variant="secondary" disabled icon="Icon-Search-2px" />
            <Button label="This is a button" variant="tertiary" icon="Icon-Search-2px" />
            <Button label="This is a button" variant="tertiary" disabled icon="Icon-Search-2px" />
            <Button label="This is a button" variant="quartiary" icon="Icon-Search-2px" />
            <Button label="This is a button" variant="quartiary" disabled icon="Icon-Search-2px" />
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

            <Button label="This is a button" display="success" icon="Icon-Search-2px" />
            <Button label="This is a button" disabled display="success" icon="Icon-Search-2px" />
            <Button
              label="This is a button"
              variant="secondary"
              display="success"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="secondary"
              disabled
              display="success"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="tertiary"
              display="success"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="tertiary"
              disabled
              display="success"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="quartiary"
              display="success"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="quartiary"
              disabled
              display="success"
              icon="Icon-Search-2px"
            />
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

            <Button label="This is a button" display="danger" icon="Icon-Search-2px" />
            <Button label="This is a button" disabled display="danger" icon="Icon-Search-2px" />
            <Button
              label="This is a button"
              variant="secondary"
              display="danger"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="secondary"
              disabled
              display="danger"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="tertiary"
              display="danger"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="tertiary"
              disabled
              display="danger"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="quartiary"
              display="danger"
              icon="Icon-Search-2px"
            />
            <Button
              label="This is a button"
              variant="quartiary"
              disabled
              display="danger"
              icon="Icon-Search-2px"
            />
          </div>
        </div>
        <div className={style.icons}>
          <div>
            <Icon size="xxxl" icon="Exclusion-2" />
            <Icon size="xxl" icon="Exclusion-2" />
            <Icon size="xl" icon="Exclusion-2" />
            <Icon size="l" icon="Exclusion-2" />
            <Icon size="m" icon="Exclusion-2" />
            <Icon size="s" icon="Exclusion-2" />
            <Icon size="xs" icon="Exclusion-2" />
            <Icon size="xxs" icon="Exclusion-2" />
            <Icon size="xxxs" icon="Exclusion-2" />
          </div>

          <div>
            <Icon size="xxxl" icon="Icon-Support-2px" />
            <Icon size="xxl" icon="Icon-Support-2px" />
            <Icon size="xl" icon="Icon-Support-2px" />
            <Icon size="l" icon="Icon-Support-2px" />
            <Icon size="m" icon="Icon-Support-2px" />
            <Icon size="s" icon="Icon-Support-2px" />
            <Icon size="xs" icon="Icon-Support-2px" />
            <Icon size="xxs" icon="Icon-Support-2px" />
            <Icon size="xxxs" icon="Icon-Support-2px" />
          </div>

          <div>
            <Icon size="xxxl" icon="Icon-Happy-2px" />
            <Icon size="xxl" icon="Icon-Happy-2px" />
            <Icon size="xl" icon="Icon-Happy-2px" />
            <Icon size="l" icon="Icon-Happy-2px" />
            <Icon size="m" icon="Icon-Happy-2px" />
            <Icon size="s" icon="Icon-Happy-2px" />
            <Icon size="xs" icon="Icon-Happy-2px" />
            <Icon size="xxs" icon="Icon-Happy-2px" />
            <Icon size="xxxs" icon="Icon-Happy-2px" />
          </div>

          <div>
            <Icon size="xxxl" icon="Icon-Pie-Chart-2px" />
            <Icon size="xxl" icon="Icon-Pie-Chart-2px" />
            <Icon size="xl" icon="Icon-Pie-Chart-2px" />
            <Icon size="l" icon="Icon-Pie-Chart-2px" />
            <Icon size="m" icon="Icon-Pie-Chart-2px" />
            <Icon size="s" icon="Icon-Pie-Chart-2px" />
            <Icon size="xs" icon="Icon-Pie-Chart-2px" />
            <Icon size="xxs" icon="Icon-Pie-Chart-2px" />
            <Icon size="xxxs" icon="Icon-Pie-Chart-2px" />
          </div>

          <div>
            <Icon size="xxxl" icon="Icon-Paper-Stack-2px" />
            <Icon size="xxl" icon="Icon-Paper-Stack-2px" />
            <Icon size="xl" icon="Icon-Paper-Stack-2px" />
            <Icon size="l" icon="Icon-Paper-Stack-2px" />
            <Icon size="m" icon="Icon-Paper-Stack-2px" />
            <Icon size="s" icon="Icon-Paper-Stack-2px" />
            <Icon size="xs" icon="Icon-Paper-Stack-2px" />
            <Icon size="xxs" icon="Icon-Paper-Stack-2px" />
            <Icon size="xxxs" icon="Icon-Paper-Stack-2px" />
          </div>

          <div>
            <Icon size="xxxl" icon="Icon-Journal-2px" />
            <Icon size="xxl" icon="Icon-Journal-2px" />
            <Icon size="xl" icon="Icon-Journal-2px" />
            <Icon size="l" icon="Icon-Journal-2px" />
            <Icon size="m" icon="Icon-Journal-2px" />
            <Icon size="s" icon="Icon-Journal-2px" />
            <Icon size="xs" icon="Icon-Journal-2px" />
            <Icon size="xxs" icon="Icon-Journal-2px" />
            <Icon size="xxxs" icon="Icon-Journal-2px" />
          </div>
        </div>
        <div className={style.fields}>
          <div>
            <FieldText
              name="name-1"
              label="Input here"
              placeholder="Optional..."
              // hint="Digite seu nome completo"
              value={value}
              onChange={handleChange}
            />
            <FieldText
              name="name-2"
              label="Input here"
              placeholder="Optional..."
              // hint="Digite seu nome completo"
              value={value}
              onChange={handleChange}
              required
            />
            <FieldText
              name="name-3"
              label="Input here"
              placeholder="Optional..."
              error="Error message comes here"
              value={value}
              onChange={handleChange}
            />
            <FieldText
              name="name-4"
              label="Input here"
              placeholder="Optional..."
              error="Error message comes here"
              value={value}
              onChange={handleChange}
              required
            />
            <FieldText
              name="name-5"
              label="Input here"
              placeholder="Optional..."
              // hint="Digite seu nome completo"
              value={value}
              onChange={handleChange}
              prefixIcon="Icon-Search-2px"
            />
            <FieldText
              name="name-6"
              label="Input here"
              placeholder="Optional..."
              // hint="Digite seu nome completo"
              value={value}
              onChange={handleChange}
              prefixIcon="Icon-Search-2px"
              required
            />
            <FieldText
              name="name-7"
              label="Input here"
              placeholder="Optional..."
              error="Error message comes here"
              value={value}
              onChange={handleChange}
              prefixIcon="Icon-Search-2px"
            />
            <FieldText
              name="name-8"
              label="Input here"
              placeholder="Optional..."
              error="Error message comes here"
              value={value}
              onChange={handleChange}
              prefixIcon="Icon-Search-2px"
              required
            />
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
        <div className={style.toasts}>
          <Toast className={style.toast} title="lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
          </Toast>
          <Toast className={style.toast} title="lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
          </Toast>
          <Toast className={style.toast} title="lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
          </Toast>
          <Toast className={style.toast} title="lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
          </Toast>
          <Toast className={style.toast} title="lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at
            posuere nulla. Ut sit amet dui non mi scelerisque commodo. Proin ullamcorper eros lacus,
          </Toast>
        </div>
      </Container>
    </div>
  )
}

export default DocsPage
