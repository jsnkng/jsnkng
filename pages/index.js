import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'

const Portfolio_I = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  return (
    <>
     <Head>
        <title>JSNKNG</title>
      </Head>
      <Content>
        <Grid fluid={true}>
        
          <Row>
            <Col xs={12}>
                <Image backgroundURL="/gallery/sanguine-miles-i.jpg" className="image__intro" />  
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Header 
                title='' 
                title__sub=''
                manageHistory={manageHistory}
                manageFuture={manageFuture}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}><Image backgroundURL="/gallery/sanguine-miles.jpg" className="image__primary" /></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={3}><Image backgroundURL="/gallery/sanguine-miles-i.jpg" className="lazyload__image--height" /></Col>
            <Col xs={12} sm={6} md={3}><Image backgroundURL="/gallery/sanguine-miles-ii.jpg" className="lazyload__image--height" /></Col>
            <Col xs={12} sm={6} md={3}><Image backgroundURL="/gallery/sanguine-miles-iii.jpg" className="lazyload__image--height" /></Col>
            <Col xs={12} sm={6} md={3}><Image backgroundURL="/gallery/sanguine-miles-iv.jpg" className="lazyload__image--height" /></Col>
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
  )
}

export default Portfolio_I

const Content = styled.main`
  .image__intro {
    height: 100vh;
    width: 100%;
  }
  .image__primary{
    height: 30rem;
    width: 100%;
    ${SuperQuery().minWidth.md.css`
      height: 50rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 65rem;
    `}
  }
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 16rem;
    width: 100%;
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`
