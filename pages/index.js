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
        <Grid>
          <Row>
            <Col xs={12}><Image backgroundURL="/gallery/sanguine-miles.jpg" className="lazyload__image--height" /></Col>
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
  )
}

export default Portfolio_I

const Content = styled.main`
  margin: 23em 0 0 0;
  padding: 1rem .25rem;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 30rem;
    min-width: 15rem;
    ${SuperQuery().minWidth.md.css`
      height: 51rem;
      min-width: 14rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 66rem;
      min-width: 15rem;
    `}
  }
  h4 {
    margin: .5rem 0 0 0;
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1rem 0 0 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`
