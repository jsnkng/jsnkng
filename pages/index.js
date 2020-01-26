import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/elements/banner'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
    const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])
  useEffect(() => {
    forceCheck()
  })
  
  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>JSNKNG</title>
        </Head>
        
        <Header 
          heroBackground={`/gallery/Mythologies/Ambustam_Lign_Glacialis_Aquae/image_i.jpg`} 
          heroHeight={`77vh`}
          heroTitle={`Welcome`}
          heroSubtitle={``}
          parentLink={{
            href: `/`, 
            as: `/` 
          }}
        />
        <Footer__Wrapper>
          <Footer themeName={themeName} setThemeName={setThemeName} />
        </Footer__Wrapper>
      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page

const Content = styled.main`
  margin-top: 95vh;

`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  position: relative;
  margin: 0;
  padding: 0;
`

const ResponsiveImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 5;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;

`
const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
