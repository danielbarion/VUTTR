/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-danger */
import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const scheme = {
      '@context': 'http://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Very Usefull Tools to Remember - VUTTR',
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
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <link rel="icon" type="image/png" href="/static/img/favicon.png" />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(scheme) }}
          />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <noscript>
            Você precisa permitir a execução do JavaScript para ver esse site corretamente 😅
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
