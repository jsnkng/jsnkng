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
       <Header 
        title='' 
        title__sub=''
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />
      <Content>
        <Grid fluid={true}>
          <Row className='image'>
            <Col className='image__primary' xs={12}><img src='/gallery/sanguine-miles.jpg' /></Col>
          </Row>
          <Row className='image__enlargements'>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><BackgroundImage backgroundURL='/gallery/sanguine-miles-i.jpg' /></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><BackgroundImage backgroundURL='/gallery/sanguine-miles-ii.jpg' /></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><BackgroundImage backgroundURL='/gallery/sanguine-miles-iii.jpg' /></Col>
            <Col className='image__enlarged' xs={12} sm={6} md={3}><BackgroundImage backgroundURL='/gallery/sanguine-miles-iv.jpg' /></Col>
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
  )
}

export default Portfolio_I



const Content = styled.main`
  .image {
    margin: 0;
  }
  .image__primary {
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
      margin: .5rem;
      height: 16rem;
    }
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
