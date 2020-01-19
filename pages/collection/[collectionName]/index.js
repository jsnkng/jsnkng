import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Banner from '../../../components/elements/Banner'

const Page = ({ collectionName, images, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
 
  /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(images.length)))

  /* Create a copy of data  and remove the hero item from it */
  const pictures = [ ...images ]
  pictures.splice(heroIdx,1)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  
  if (!loaded) {
    return null
  } else {
    return (
    <>
      <Head>
        <title>JSNKNG</title>
      </Head>
      <Header 
        navigation__title={collectionName} 
        navigation__subtitle={collectionName}
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />

      <BackgroundOverlay>
        <Banner
          backgroundURL={
            images[heroIdx] !== undefined && images[heroIdx].length !== 0 
            ? `${images[heroIdx].path}/image.jpg`
            : '/noimage.jpg' 
          }
          title={images[heroIdx].name.replace(/_/g, ' ')}
          subtitle={images[heroIdx].name.replace(/_/g, ' ')}
          hero={true}
          manageFuture={() => manageFuture(`/collection/[collectionName]/image/[imageName]`, 
                                           `/collection/${collectionName}/image/${images[heroIdx].name}`)}
        />
      </BackgroundOverlay>

        <Content> 
          <Grid fluid={true}>
            <Row__Decorated>
            {
            pictures.slice(0).map((item, index) => {
              return (
                <Col__Decorated className='image__thumb' xs={12} sm={6} md={4} lg={3} key={index+item.path}>
                  <Banner
                      backgroundURL={
                        item !== undefined && item.length !== 0 
                        ? `${item.path}/image_thumb.jpg`
                        : '/noimage.jpg' 
                      }
                      title={item.name.replace(/_/g, ' ')}
                      subtitle={item.name.replace(/_/g, ' ')}
                      hero={false}
                      manageFuture={() => manageFuture(`/collection/[collectionName]/image/[imageName]`, 
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
  
`

const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
