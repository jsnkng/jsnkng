import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'
import Banner from '../../../../../components/elements/Banner'

const Page = ({ router, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  const [collectionName, setCollectionName] = useState(router.query.collectionName)
  const [imageName, setImageName] = useState(router.query.imageName)
  
  useEffect(() => {
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])
  
  if (!loaded) {
    return null
  } else {
    return (
    <>
     <Head>
      <title>JSNKNG : {collectionName} : {imageName}</title>
    </Head>
      <Header 
        navigation__title={collectionName} 
        navigation__subtitle={collectionName}
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />

      <BackgroundOverlay>
        <Banner
          backgroundURL={`/gallery/${collectionName}/${imageName}/image_i.jpg`}
          title={imageName.replace(/_/g, ' ')}
          subtitle=''
          hero={true}
          manageFuture={false}
        />
      </BackgroundOverlay>

      <Content>
        <Grid fluid={true}>
          <Row__Decorated>
            <Col__Decorated xs={12}>
              <LazyLoad offset={100}>
                <img src={`/gallery/${collectionName}/${imageName}/image.jpg`} />
              </LazyLoad>
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

export default Page

Page.pageTransitionDelayEnter = true

const Content = styled.main`
  .image {
    margin: 0;
  }
  .image__primary {
      min-height: 40vh;
    img {
      width: 100%;
    }
  }
  .image__enlargements {
    margin: 0;
    padding: 0 .5rem;
  }
  .image__enlarged {
    div {
      margin: .25rem;
      width: width: 100%;
      height: 97vw;
      ${SuperQuery().minWidth.sm.css`
        height: 49vw;
      `}
      ${SuperQuery().minWidth.md.css`
        height: 25vw;
      `}
    }
  }
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
