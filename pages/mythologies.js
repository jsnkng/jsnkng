import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  
  if (!loaded) {
    return null
  } else {
    return (
      <Content>
        <Head>
          <title>JSNKNG</title>
        </Head>
        
        </Content>
      )
    }
  }

  Page.pageTransitionDelayEnter = true

  export default Page

  const Content = styled.main`
  `
 