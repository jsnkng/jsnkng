import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import useWindowDimensions from '../hooks/useWindowDimensions'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/elements/hero'
import Banner from '../components/elements/banner'

const Page = ({ themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const windowDimension = useWindowDimensions()

  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
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
      <Content> 
        <Header 
          heroBackground={`/gallery/Mythologies/Convallaria_Majalis/image_i.jpg`} 
          heroHeight='77vh'
          heroTitle='Fine Art'
          // heroSubtitle={images[heroIdx].title}
          parentTitle='Home'
          parentLink={{
            href: `/`, 
            as: `/` 
          }}
        />
        <Grid fluid={true}>
          <Row__Decorated>
            <Col__Decorated xs={12} sm={12} md={4} lg={4}>
              <Banner
                headline={``}
                title={`Mythologies`}
                subtitle={`Digital Photography, Pixellation`}
                name={`Mythologies`}
                backgroundURL={`/gallery/Mythologies/Natalis_Sancti_Igne/image_i.jpg`} 
                backgroundHoverURL={`/gallery/Mythologies/Natalis_Sancti_Igne/image_i.jpg`} 
                link={{ 
                      href: `/collection/[collectionName]`, 
                      as:`/collection/Mythologies`
                    }}
                windowDimension={windowDimension}
              />
            </Col__Decorated>
            
            <Col__Decorated xs={12} sm={12} md={4} lg={4}>
              <Banner
                headline={``}
                title={`Nature Morté`}
                subtitle={`Digital Photography, Still Life`}
                name={`Nature_Morte`}
                backgroundURL={`/gallery/Nature_Morte/2_-_The_Receptive_-_0/image_i.jpg`} 
                backgroundHoverURL={`/gallery/Nature_Morte/2_-_The_Receptive_-_0/image_i.jpg`} 
                link={{ 
                      href: `/collection/[collectionName]`, 
                      as:`/collection/Nature_Morte`
                    }}
                windowDimension={windowDimension}
              />
            </Col__Decorated>
            
            <Col__Decorated xs={12} sm={12} md={4} lg={4}>
              <Banner
                headline={``}
                title={`Starlight Meadows`}
                subtitle={`Digital Photography, Directorial`}
                name={`Starlight_Meadows`}
                backgroundURL={`/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image_i.jpg`} 
                backgroundHoverURL={`/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image_i.jpg`} 
                link={{ 
                      href: `/collection/[collectionName]`, 
                      as:`/collection/Starlight_Meadows`
                    }}
                windowDimension={windowDimension}
              />
            </Col__Decorated>
          </Row__Decorated>
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
  width: 100%;
  margin: 0;
  padding: 0;

  ${'' /* .hero__background {
    height: 85vh;
  }
  .hero__title {
    position: absolute;
    top: 0;
    width: 100%;
    margin: 40vh auto;
    padding: 1rem;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 200;
    text-align: center;
    ${SuperQuery().minWidth.sm.css`
      font-size: 3.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 4.5rem;
    `}
  } */}

`

const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  width: 100%;
  margin: 0;
  padding: 0;
`

const BackgroundOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 90vh;
  width: 100%;
  z-index: 20;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`

const BackgroundImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

