import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'

const Home = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  return (
    <>
     <Head>
      <title>JSNKNG</title>
    </Head>
       <Header 
        navigation__title='Welcome'
        navigation__subtitle='Nothing'
        hero__background={`/gallery/Mythologies/Sanguine_Miles/image_i.jpg`}
        manageHistory={manageHistory}
        manageFuture={manageFuture}
        back={false}
      />
      <Content>
        <Grid fluid={true}>
          <Row className=''>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
          </Row>
          <Row className=''>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
            <Col className='' xs={12} sm={6} md={3}></Col>
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
  )
}

export default Home



const Content = styled.main`
  
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
