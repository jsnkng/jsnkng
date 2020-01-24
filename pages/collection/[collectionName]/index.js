import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Hero from '../../../components/elements/hero'
import Banner from '../../../components/elements/banner'

const Page = ({ collectionName, images, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
 
  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(images.length)))

  /* Create a copy of data  and remove the hero item from it */
  const pictures = [ ...images ]
  // pictures.splice(heroIdx,1)

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
        <BackgroundOverlay>
          <Hero
            backgroundURL={
              images[heroIdx] !== undefined && images[heroIdx].length !== 0 
              ? `${images[heroIdx].as}/image_i.jpg`
              : '/noimage.jpg' 
            }
            title={collectionName.replace(/_/g, ' ')}
            subtitle=''
            dimensions={{xl: true, height: '85vh', width: '100%', 'minHeight': '24rem', 'minWidth': '100%'}}
            handleClick={() => manageFuture(`/collection/[collectionName]/image/[imageName]`, 
                                            `/collection/${collectionName}/image/${images[heroIdx].name}`)}
          />
        </BackgroundOverlay>

        <Header 
          navigation__title={collectionName} 
          navigation__subtitle={collectionName}
          manageHistory={manageHistory}
          manageFuture={manageFuture}
        />
          <Grid fluid={true}>
            <Row__Decorated>
            {
            pictures.slice(0).map((item, index) => {
              return (
                <Col__Decorated className='image__thumb' xs={12} sm={6} md={4} lg={3} key={index+item.as}>
                  <Banner
                      backgroundURL={
                        item !== undefined && item.length !== 0 
                        ? `${item.as}/image_thumb.jpg`
                        : '/noimage.jpg' 
                      }
                      backgroundHoverURL={
                        item !== undefined && item.length !== 0 
                        ? `${item.as}/image_i.jpg`
                        : '/noimage.jpg' 
                      }
                      title={item.title}
                      subtitle=''
                      dimensions={{xl: false, height: '25vw', width: '100%', 'minHeight': '25vw', 'minWidth': '25vw'}}
                      handleClick={() => manageFuture(`/collection/[collectionName]/image/[imageName]`, 
                                                       `/collection/${collectionName}/image/${item.name}`)}
                    />
                </Col__Decorated>
              )
            })
            }
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

Page.getInitialProps = async ({ req, query }) => {
  const { collectionName } = query
  const { origin }  = absoluteUrl(req)
  const collectionResult = await fetch(`${origin}/api/collection/${collectionName}`)
  const result = await collectionResult.json()
  result.collectionName = collectionName
  return result
}


const Content = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;

  .hero__background {
    height: 85vh;
  }
  .hero__title {
    position: absolute;
    top: 0;
    ${'' /* width: 100%; */}
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
  }

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
  height: 100%;
  width: 100%;
  z-index: 1;
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

