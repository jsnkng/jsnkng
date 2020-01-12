import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'

const Portfolio = ({ router, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
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
        navigation__title={imageName} 
        navigation__subtitle={collectionName}
        hero__background={`/gallery/${collectionName}/${imageName}/image_i.jpg`}
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />
      <Content>
        <Grid fluid={true}>
          <Row className='image'>
            <Col className='image__primary' xs={12}><LazyLoad offset={100}><img src={`/gallery/${collectionName}/${imageName}/image.jpg`} /></LazyLoad></Col>
          </Row>
          <Row className='image__enlargements'>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><LazyLoad offset={300}><BackgroundImage backgroundURL={`/gallery/${collectionName}/${imageName}/image_i.jpg`} /></LazyLoad></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><LazyLoad offset={300}><BackgroundImage backgroundURL={`/gallery/${collectionName}/${imageName}/image_ii.jpg`} /></LazyLoad></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><LazyLoad offset={300}><BackgroundImage backgroundURL={`/gallery/${collectionName}/${imageName}/image_iii.jpg`} /></LazyLoad></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><LazyLoad offset={300}><BackgroundImage backgroundURL={`/gallery/${collectionName}/${imageName}/image_iv.jpg`} /></LazyLoad></Col>
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
    )
  }
}

export default Portfolio

Portfolio.pageTransitionDelayEnter = true




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
