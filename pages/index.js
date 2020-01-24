import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/elements/banner'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
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

        <BackgroundOverlay>
        <LazyLoad height={'100%'}>
          <ResponsiveImage
            backgroundURL={`/gallery/Mythologies/Sanguine_Miles/image_i.jpg`}
          />
          </LazyLoad>
        </BackgroundOverlay>

        <Header 
          navigation__title='Welcome'
          navigation__subtitle='Nothing'
          manageHistory={manageHistory}
          manageFuture={manageFuture}
        />
        <Content>
          <Grid fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={12}>
                <LazyLoad offset={100}>
                  <ResponsiveImage backgroundURL={`/gallery/Nature_Morte/1_-_The_Creative_-_63/image_i.jpg`} />
                </LazyLoad>
              </Col__Decorated>
            </Row__Decorated>
            {/* <Row__Decorated>
              <Col__Decorated xs={6} sm={6} md={3}><Banner backgroundURL={`/gallery/${collectionName}/${imageName}/image_i.jpg`} /></Col__Decorated>
              <Col__Decorated xs={6} sm={6} md={3}><Banner backgroundURL={`/gallery/${collectionName}/${imageName}/image_ii.jpg`} /></Col__Decorated>
              <Col__Decorated xs={6} sm={6} md={3}><Banner backgroundURL={`/gallery/${collectionName}/${imageName}/image_iii.jpg`} /></Col__Decorated>
              <Col__Decorated xs={6} sm={6} md={3}><Banner backgroundURL={`/gallery/${collectionName}/${imageName}/image_iv.jpg`} /></Col__Decorated>
            </Row__Decorated> */}

          </Grid>
        </Content>
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
const BackgroundOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 85vh;
  width: 100vw;
  z-index: 1;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
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
