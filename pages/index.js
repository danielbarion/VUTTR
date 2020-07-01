import React from 'react'
import { getTools } from 'utils/api'
import HomePage from 'pages/Home'

const Home = (props) => <HomePage {...props} />

Home.getInitialProps = async () => {
  const response = await getTools()
  const { data } = response

  return {
    toolsList: data,
  }
}

export default Home
