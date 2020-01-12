import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'
import LazyLoad, { forceCheck } from 'react-lazyload'

import Header from '../../../components/header'
import Footer from '../../../components/footer'

const Collection = ({ collectionName, images, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    setLoaded(true)
    pageTransitionReadyToEnter()

  }, [])
  
  if (!loaded) {
    return null
  } else {
    console.log(`/${images[0].path}/image_i.jpg`)
    return (
    <>
     <Head>
      <title>JSNKNG</title>
    </Head>
       <Header 
        navigation__title={collectionName} 
        navigation__subtitle={collectionName}
        hero__background={`${images[0].path}/image_i.jpg`}
        manageHistory={manageHistory}
        manageFuture={manageFuture}
      />
      <Content> 
        <Grid fluid={true}>
          <Row className='image__thumbs'>
          {
          images.slice(0).map((item) => {
            return (
              <Col className='image__thumb' xs={12} sm={6} md={4} lg={3} key={item.path}>
                <LazyLoad offset={300}>
                  <BackgroundImage backgroundURL={`${item.path}/image_thumb.jpg`} 
                    onClick={() => manageFuture('/collection/[collectionName]/image/[imageName]', `/collection/${collectionName}/image/${item.name}`)} />
                </LazyLoad>
              </Col>
            )
          })
          }
          </Row>
        </Grid>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
    </>
    )
  }
}

Collection.pageTransitionDelayEnter = true

export default Collection

Collection.getInitialProps = async ({ req, query }) => {
  const { collectionName } = query
  const { origin }  = absoluteUrl(req)
  const collectionResult = await fetch(`${origin}/api/collection/${collectionName}`)
  const result = await collectionResult.json()
  result.collectionName = collectionName
  return result
}


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
  .image__thumbs {
    margin: 0;
  }
  .image__thumb {
    div {
      margin: .5rem;
      width: width: 100%;
      height: 97vw;
      ${SuperQuery().minWidth.sm.css`
        height: 49vw;
      `}
      ${SuperQuery().minWidth.md.css`
        height: 33vw;
      `}
      ${SuperQuery().minWidth.lg.css`
        height: 24vw;
      `}
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
